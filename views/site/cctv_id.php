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

$this->title=$getCamera['lokasi'];
$centerMap= new LatLng(['lat'=>$getCamera['latitude'],'lng'=> $getCamera['longitude']]);
//centerMap= new LatLng(['lat'=>-6.974557,'lng'=> 107.731506]);
$map = new Map([

    'center' => $centerMap,
    'zoom' => 18,
	'width'=>'100%',
	'height'=>'300',
	'styles'=>'border: solid thin',
]);
$no=1;
/*foreach($cctv as $cctvData){
	
	// Lets add a marker now
	$marker = new Marker([
		'position' => new LatLng(['lat' => $cctvData['latitude'], 'lng' => $cctvData['longitude']]),
		'title' => $cctvData['nama'],
		'icon'=>'/images/cctv1.png',
	]);
	
	// Provide a shared InfoWindow to the marker
	$marker->attachInfoWindow(
    	new InfoWindow([
        'content' => '
			<center><b>'.$no++.'. '.$cctvData['lokasi'].'</b></center>		
		'
    	])
	);
 	$map->addOverlay($marker);
}*/

/*<UnrealHTML5VideoPlayer id="DishubPlayer"></UnrealHTML5VideoPlayer>
			<span id="test"></span>
			<embed type="application/x-google-vlc-plugin" 
			pluginpage="http://www.videolan.org"
			version="VideoLAN.VLCPlugin.2"
			width="120" 
			height="140" 
			loop="true"
			controls="true" 
			mute="true"
			autoplay="yes"
			allowfullscreen"=false" 
			target="rtsp://'.$cctvData['ip_address'].':'.$cctvData['port'].'//'.$cctvData['username'].':'.$cctvData['password'].'/'.$cctvData['stream_type'].'"></embed>
			<object classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921"
			codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab" style="display:none;">*/
	
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
        <select name="selectCamera" id="selectCamera" onChange="getCamera()">
    	<?php
			foreach ($cctv as $cctvOption){
				echo '<option value="' . $cctvOption['id_cctv'] .'">' . $cctvOption['nama'] .' </option>';
			}
		?>
    	</select>
    	<UnrealHTML5VideoPlayer id="DishubPlayer"></UnrealHTML5VideoPlayer>
		  <script>
			$(window).on("load", function(){
				getCamera();	
			});
        </script>
        <?php
			/*foreach ($cctv as $cctvLink){
				echo Html::button($cctvLink['nama'],
						['class'=>'col-md-4 btn btn-primary btn-md',
						 'onclick'=>'getCamera("' . $cctvLink['ip_address'] . '" , "' . $cctvLink['cam_alias'] . '")',
						 'style'=>'border-radius:0px;margin:2px 0px 2px 0px;',
						 'data-toggle'=>'tooltip',
						 'title'=>Yii::t('app', $cctvLink['nama']),
						]
					);
			}*/
		?>
        <script>
		function getCamera(){	
			var getValue = $('#selectCamera').val();
			var getWidth = $('#loadCamera').width();
			var videoWidth = document.getElementById("videoContainer").offsetWidth;	
			var ipaddress, port, aliasname;
			
			$.ajax({
				url : '<?php echo Yii::$app->request->baseUrl.'/site/getcctv' ?>',
				type : 'post',
				data : {
					idCamera: getValue,
				},
				success: function (data){
					ipaddress = data.model.ip_address;
					port = data.model.port;
					aliasname = data.model.cam_alias;
					if ("MediaSource" in window && "WebSocket" in window){
						RunPlayer("DishubPlayer", videoWidth, videoWidth * 0.6, ipaddress, port, false, aliasname, "", true, false, 10, "", false);
						$.ajax({
							url : '<?php echo Yii::$app->request->baseUrl.'/logs/writelog' ?>',
							type : 'post',
							data : {
								idCamera: getValue,
							},
							success: function (data){
							}
						});
					}else {
					   document.getElementById("DishubPlayer").innerHTML = "Browser Anda tidak support untuk streaming CCTV ini.";
					}
						
					google.maps.event.addDomListener(window, 'load', initMaps(data.model.latitude, data.model.longitude, data.model.nama));		
				},
				error: function(){
					console.log("Error ajax");
				}
			});
		}
		
		function initMaps(lat, lng, cctvName){
			var cctvLocation = {lat: parseFloat(lat), lng: parseFloat(lng)};
			console.log(cctvLocation);
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
							'width'  => 860,
							'height' => 350,
							'arrows' => true,
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
 