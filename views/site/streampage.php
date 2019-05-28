<?php
use app\models\CCTV;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\Pjax;
use dosamigos\google\maps\LatLng;
use dosamigos\google\maps\services\DirectionsWayPoint;
use dosamigos\google\maps\services\TravelMode;
use dosamigos\google\maps\overlays\PolylineOptions;
use dosamigos\google\maps\services\DirectionsRenderer;
use dosamigos\google\maps\services\DirectionsService;
use dosamigos\google\maps\overlays\InfoWindow;
use dosamigos\google\maps\overlays\Marker;
use dosamigos\google\maps\Map;
use dosamigos\google\maps\services\DirectionsRequest;
use dosamigos\google\maps\overlays\Polygon;
use dosamigos\google\maps\layers\BicyclingLayer;
use edofre\sliderpro\models\Slide;
use edofre\sliderpro\models\slides\Caption;
use edofre\sliderpro\models\slides\Image;
use edofre\sliderpro\models\slides\Layer;

$this->title="CCTV Dishub Kabupaten Bandung";
$centerMap= new LatLng(['lat'=>$getCamera['latitude'],'lng'=> $getCamera['longitude']]);
//centerMap= new LatLng(['lat'=>-6.974557,'lng'=> 107.731506]);
$map = new Map([

    'center' => $centerMap,
    'zoom' => 18,
	'width'=>'100%',
	'height'=>'250',
	'styles'=>'border: solid thin',
]);
$no=1;	
$slides = [];
foreach($slideshow as $imageSlide){
	array_push($slides, new Slide([
							'items' => [ 
								new Image(['src' => '/images/slideshow/' . $imageSlide->picture_web])
							]
						]));
}		
			
?>
<style>
.sp-buttons{
	display: none;
}
#selectCamera{
	width:100%; 
	font-weight:bold; 
	height:50px; 
	text-align:center;
	font-size:18px;
	margin-bottom: 5px;
}
</style>
<div class="col-md-6 col-xs-12" style="padding:0px;">
	<div class="col-md-12" style="margin-bottom: 5px; padding: 0px;" id="videoContainer">
    	<!--<center><h4 style="font-weight:bold; font-size:20px; margin-top:0px;"><?= $getCamera['nama']; ?></h4></center>-->
    	<!-- Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) -->
        <select name="selectCamera" id="selectCamera" onChange="getCamera()">
    	<?php
    	    echo '<option value=""> Silahkan Pilih Kamera </option>';
			foreach ($cctv as $cctvOption){
				echo '<option value="' . $cctvOption['id_cctv'] .'">' . $cctvOption['nama'] .' </option>';
			}
		?>
    	</select>
        <img id="imagestreamer"/>
		  <script>
			$(window).on("load", function(){
			    var videoWidth = document.getElementById("videoContainer").offsetWidth;	
			    $('#imagestreamer').attr('width', videoWidth);
            	$('#imagestreamer').attr('height', videoWidth * 0.6);
				getCamera();	
			});
        </script>
        <script>
        // Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) 
		function getCamera(){	
			var getValue = $('#selectCamera').val();
			var getWidth = $('#loadCamera').width();
			var videoWidth = document.getElementById("videoContainer").offsetWidth;	
			var ipaddress, port, aliasname, cctvid;
			$('#imagestreamer').attr('width', videoWidth);
			$('#imagestreamer').attr('height', videoWidth * 0.6);
			
			if(getValue != ""){
    			$.ajax({
    				url : '<?php echo Yii::$app->request->baseUrl.'/site/getcctv' ?>',
    				type : 'post',
    				data : {
    					idCamera: getValue,
    				},
    				success: function (data){
						if(data.result == 'true'){
							ipaddress = data.model.ip_address;
							port = data.model.port;
							aliasname = data.model.cam_alias;
							cctvid = data.model.id_cctv;
							username = data.model.username;
							password = data.model.password;
							var status = "Success";
							$('#imagestreamer').removeAttr('src');
							$('#imagestreamer').attr('width', videoWidth);
							$('#imagestreamer').attr('height', videoWidth * 0.6);
							$('#imagestreamer').attr('src', "http://" + ipaddress + ":" + port + "/zm/cgi-bin/nph-zms?mode=jpeg&monitor=" + cctvid + "&scale=100&maxfps=30&buffer=1000&user="+ username + "&pass=" + password);
							
							$('#imagestreamer').on('error',function (status){ 
							   // status = "Error"; 
								//console.log(getValue);
								writeLog(getValue,"Error");
							   // status = "Error";
								//return status;
							});

							writeLog(getValue,status);
							
							google.maps.event.addDomListener(window, 'load', initMaps(data.model.latitude, data.model.longitude, data.model.nama));	
						}else{
							writeLog(getValue,"Maintenance");
							$('#imagestreamer').removeAttr('src');
							$('#imagestreamer').attr('width', videoWidth);
							$('#imagestreamer').attr('height', videoWidth * 0.6);
							$('#imagestreamer').attr('src', "/images/cctvundermaintenance.png");
						}    						
    				},
    				error: function(){
    					console.log("Error ajax");
    				}
    			});
			}else{
			    $('#imagestreamer').removeAttr('src');
				$('#imagestreamer').attr('width', videoWidth);
				$('#imagestreamer').attr('height', videoWidth * 0.6);
				$('#imagestreamer').attr('src', "/images/cctvbackground.png");
			}
		}
		
		function writeLog(idCamera, status){
		    $.ajax({
    				url : '<?php echo Yii::$app->request->baseUrl.'/logs/writelog' ?>',
    				type : 'post',
    				data : {
    					idCamera: idCamera,
    					statusLog: status,
    				},
    				success: function (data){
    				}
    			});
		}
		
		function initMaps(lat, lng, cctvName){
			var cctvLocation = {lat: parseFloat(lat), lng: parseFloat(lng)};
			//console.log(cctvLocation);
			var map = new google.maps.Map(document.getElementById('gmap0-map-canvas'), {
				zoom:18,
				width:'100%',
				height:250,
				center: new google.maps.LatLng(lat, lng),
				styles: 'border: solid thin'
			});
			var marker = new google.maps.Marker({
			  position: cctvLocation,
			 // map: map,
			  title: cctvName,
			  icon: {
					url: '/images/cctv1.png',
				}
			});
			var infowindow = new google.maps.InfoWindow({
			  content: '<center><b>' + cctvName +'</b></center>'
			});
			map.setCenter(new google.maps.LatLng(lat, lng));
			marker.setMap(map);
			marker.addListener('click', function() {
			  infowindow.open(map, marker);
			});

		}
	</script>
    </div>	    
</div>
<div class="col-md-6" id="loadCamera">
	<!--<div class="col-md-12" style="padding:0px; margin: 5px 0px 10px 30px;">
        <img src="/images/logo_dishub.png" height="90px" width="80px" style="margin-right:10px;"/>
        <img src="/images/logo_kab_bandung.png" height="90px" width="90px" style="margin-right:10px;"/>
        <img src="/images/logo_sabilulungan.png" height="90px" width="90px"/>
    </div>-->
    <div class="col-md-12" style="margin: 5px 0px 10px 0px;">
    <marquee><h4 style="margin-bottom:17px; font-weight:bold; color:red;"> <?= Yii::$app->name ?> </h4></marquee>
		<?= \edofre\sliderpro\SliderPro::widget([
                        'id'            => 'my-slider',
						'slides'        => $slides,
						'sliderOptions' => [
							'width'  => 900,
							'height' => 400,
							'arrows' => true,
							'fade' > true,
							'responsive' => true,
							'imageScaleMode' => 'contain',
							'init'   => new \yii\web\JsExpression("
								function() {
									//console.log('slider is initialized');
								}
							"),
						],
					]);
		?> 
    </div>
    <div class="col-md-12" >		
		<?php 
			echo $map->display(); 
		?>
    </div>
</div>
 