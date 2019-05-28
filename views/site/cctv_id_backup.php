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
	'height'=>'250',
	'styles'=>'border: solid thin',
]);
$no=1;
foreach($cctv as $cctvData){
	
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
}
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
<div class="col-md-3 col-xs-12" style="padding:0px;">
	<div class="col-md-12 col-xs-12" style="padding:0px; margin: 5px 0px 10px 30px;">
        	<img src="/images/logo_dishub.png" height="90px" width="80px" style="margin-right:10px;"/>
            <img src="/images/logo_kab_bandung.png" height="90px" width="90px" style="margin-right:10px;"/>
            <img src="/images/logo_sabilulungan.png" height="90px" width="90px"/>
    </div>
    <div class="col-md-12 col-xs-6" style="margin: 5px 0px 10px 0px;">
	<?php
		$b=1;
		foreach ($cctv as $cctvLink){
			echo Html::button($cctvLink['nama'],
                    ['class'=>'col-xs-6 btn btn-primary btn-lg btn-block ',
                     'onclick'=>'getCamera("' . $cctvLink['ip_address'] . '" , "' . $cctvLink['cam_alias'] . '")',
					 //"window.location.href = '" . \Yii::$app->urlManager->createUrl(['','id'=>$cctvLink['id_cctv']]) . "';",
                     'style'=>'border-radius:0px;margin:2px 0px;',
					 'data-toggle'=>'tooltip',
					 ///'data-method' => 'POST',
                     'title'=>Yii::t('app', $cctvLink['nama']),
                    ]
                );
		}
	?>
    <script>
		function getCamera(ipAddress , camAlias){
			//alert("test");
			var width = $('#videoContainer').width();
			
			if ("MediaSource" in window && "WebSocket" in window){
               console.log("Accesses");
               RunPlayer("DishubPlayer", width - 5 , width * 0.6, ipAddress, 5119, false, camAlias, "", true, false, 10, "", false);
            }else
            {
                console.log("not Accesses");
               document.getElementById("DishubPlayer").innerHTML = "Media Source Extensions or Websockets are not supported in your browser.";
            }
		}
	</script>
    </div>
</div>
<div class="col-md-9 col-xs-12" id="loadCamera">
	<div class="col-md-7" style="margin-bottom: 5px; padding: 0px;" id="videoContainer">
    	<center><h4 style="font-weight:bold; font-size:20px;"><?= $getCamera['nama']; ?></h4></center>
    	<UnrealHTML5VideoPlayer id="DishubPlayer"></UnrealHTML5VideoPlayer>
		  <script language="javascript">
		  	var videoWidth = document.getElementById("videoContainer").offsetWidth;
			
            if ("MediaSource" in window && "WebSocket" in window){
                console.log("Accesses");
               RunPlayer("DishubPlayer", videoWidth - 5, videoWidth * 0.6, "<?= $getCamera['ip_address']; ?>", 5119, false, "<?= $getCamera['cam_alias']; ?>", "", false, true, 10, "", false);
            }else
            {
                console.log("not Accesses");
               document.getElementById("DishubPlayer").innerHTML = "Media Source Extensions or Websockets are not supported in your browser.";
            }
        </script>
        <?php
			$b=1;
			foreach ($cctv as $cctvLink){
				echo Html::button($cctvLink['nama'],
						['class'=>'col-md-4 btn btn-primary btn-md',
						 'onclick'=>'getCamera("' . $cctvLink['ip_address'] . '" , "' . $cctvLink['cam_alias'] . '")',
						 'style'=>'border-radius:0px;margin:2px 0px 2px 0px;',
						 'data-toggle'=>'tooltip',
						 'title'=>Yii::t('app', $cctvLink['nama']),
						]
					);
			}
		?>
    </div>
    <div class="col-md-5" style="margin-top:40px; padding-left:20px;">
			<?= \edofre\sliderpro\SliderPro::widget([
                        'id'            => 'my-slider',
				'slides'        => $slides,
				'sliderOptions' => [
					'width'  => 960,
					'height' => 500,
					'arrows' => true,
					'init'   => new \yii\web\JsExpression("
						function() {
							console.log('slider is initialized');
						}
					"),
				],
			]);
			?>
		<?php echo $map->display(); 
		?>
    </div>
</div>
   <!--
   The below function call creates Unreal HTML5 player:
   RunPlayer(strVideoPlayerID, intVideoWidth, intVideoHeight, strServerIP, intServerPort, boolSecureWebsocket, strOrArrayLiveAlias, strSecureToken, boolAutoPlay, boolShowControls, intLocalSeekMinutes, strPosterURL, boolBigButtons); -->
   
  



