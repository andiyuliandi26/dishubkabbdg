<?php

use app\models\CCTV;
use yii\helpers\Html;
use yii\helpers\Url;
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

$this->title=$getCamera['lokasi'];
$centerMap= new LatLng(['lat'=>$getCamera['latitude'],'lng'=> $getCamera['longitude']]);
//centerMap= new LatLng(['lat'=>-6.974557,'lng'=> 107.731506]);
$map = new Map([
    'center' => $centerMap,
    'zoom' => 18,
	'width'=>'100%',
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
			<center><b>'.$no++.'. CCTV '.$cctvData['lokasi'].'</b></center>
		<embed type="application/x-vlc-plugin" 
			pluginpage="http://www.videolan.org"
			version="VideoLAN.VLCPlugin.2"
			width="320" 
			height="240" 
			loop="true"
			controls="true" 
			mute="true"
			autoplay="yes"
			allowfullscreen"=false" 
			target="rtsp://'.$cctvData['ip_address'].':'.$cctvData['port'].'/'.$cctvData['channel'].'/'.$cctvData['username'].':'.$cctvData['password'].'/'.$cctvData['stream_type'].'"></embed>
			<object classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921"
			codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab" style="display:none;">'
    	])
	);
 
	// Add marker to the map
	$map->addOverlay($marker);
}
 
?>
	<center><h4 style="font-weight:bold; font-size:20px;"><?= $getCamera['nama']; ?></h4></center>
	<?php //echo $map->display(); ?>


