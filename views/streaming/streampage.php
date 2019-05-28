<?php
use app\models\CCTV;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\Pjax;

$this->title="CCTV Dishub Kabupaten Bandung";		
			
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
<meta http-equiv="refresh" content="600">
	
<div class="col-md-12 col-xs-12" style="padding:0px;">
	<div class="col-md-12" style="margin-bottom:10px;">
		<button value="Open All" onclick="openVideo()" class="btn btn-success">Open All</button>
		<button value="Close All" onclick="closeVideo()" class="btn btn-danger">Close All</button>
	</div>
	<div class="col-md-12" style="margin-bottom: 5px; padding: 0px;" id="videoContainer">
    	<!--<center><h4 style="font-weight:bold; font-size:20px; margin-top:0px;"></h4></center>-->
    	<!-- Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) -->
		<div class="col-md-12 col-xs-12" style="padding:0px; margin-bottom:10px;">
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
		</div>	

		<div class="col-md-12 col-xs-12" style="padding:0px; margin-bottom:10px;">
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png" height="260"/>
			</div>
			<div style="width:20%; margin-left:0px; position:relative; float:left;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  height="260"/>
			</div>
		</div>

		<div class="col-md-12 col-xs-12" style="padding:0px; margin-bottom:10px;">
			<div class="col-md-3" style="width:440px; margin-left:10px;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  width="440" height="260"/>
			</div>
			<div class="col-md-3" style="width:440px; margin-left:10px;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  width="440" height="260"/>
			</div>
			<div class="col-md-3" style="width:440px; margin-left:10px;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  width="440" height="260"/>
			</div>
			<div class="col-md-3" style="width:440px; margin-left:10px;">
				<img class="imagestreamers" src="/images/cctvundermaintenance378.png"  width="440" height="260"/>
			</div>
	</div>	
        <!-- <select name="selectCamera" id="selectCamera" onChange="getCamera()"> -->
    	<?php
    	    // echo '<option value=""> Silahkan Pilih Kamera </option>';
			// foreach ($cctv as $cctvOption){
			// 	echo '<option value="' . $cctvOption['id_cctv'] .'">' . $cctvOption['nama'] .' </option>';
			// }
		?>
    	<!-- </select> -->
        <!-- <img id="imagestreamer"/> -->
		  <script>
			$(window).on("load", function(){
				openVideo();
			});
        </script>
        <script>
		function openVideo(){
			$.ajax({
    				url : '<?php echo Yii::$app->request->baseUrl.'/streaming/getcctv' ?>',
    				type : 'get',
    				success: function (data){
						console.log(data);
						if(data.result == 'true'){
							for(var i=0; i < data.model.length; i++){
								ipaddress = data.model[i].ip_address;
								port = data.model[i].port;
								aliasname = data.model[i].cam_alias;
								cctvid = data.model[i].id_cctv;
								username = data.model[i].username;
								password = data.model[i].password;
								console.log(data.model[i].ip_address);
								$('.imagestreamers:eq('+ i +')').attr('src', "http://" + ipaddress + ":" + port + "/zm/cgi-bin/nph-zms?mode=jpeg&monitor=" + cctvid + "&scale=100&maxfps=30&buffer=1000&user=dishubfullstream&pass=" + password);
							}
						}else{
							// writeLog(getValue,"Maintenance");
							// $('#imagestreamer').removeAttr('src');
							// $('#imagestreamer').attr('width', videoWidth);
							// $('#imagestreamer').attr('height', videoWidth * 0.6);
							// $('#imagestreamer').attr('src', "/images/cctvundermaintenance378.png");
						}    						
    				},
    				error: function(){
    					console.log("Error ajax");
    				}
    			});
		}
		function closeVideo(){
			for(var i=0; i < $('.imagestreamers').length; i++){
				$('.imagestreamers:eq('+ i +')').attr('src', "/images/cctvundermaintenance378.png");
			}
		}
        // Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) 		
	</script>
    </div>	    
</div>
 