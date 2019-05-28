<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Logs Akses CCTV Persimpangan Kabupaten Bandung';
?>
<div class="cctv-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
		'layout'=>'{pager} {items}',
        'columns'=>[
			['header'=>'No','class' => 'yii\grid\SerialColumn'],
			//'id',
			'ipaddress',
			'timestamp',
			'browser',
			'cctv.nama',
		]
    ]) ?>
  

</div>
