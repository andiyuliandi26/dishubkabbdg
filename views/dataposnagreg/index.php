<?php

use app\models\CCTV;
use yii\helpers\Html;
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

$this->title='Dishub Kab Bandung';

?>
<div class="col-md-12 text-center">
<h2>Rekap Data Kendaraan Arus Mudik Tahun <?= date("Y"); ?> Pos Nagreg </h2>
	<img src="/images/slideshow/<?php echo $getImage->picture_web; ?>" style="max-width:90%; max-height:786px;">
</div>