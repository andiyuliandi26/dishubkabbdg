<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'CCTV Persimpangan Kabupaten Bandung';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="cctv-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <div class="pull-right">
        <?= Html::a('Tambah CCTV', ['create'], ['class' => 'btn btn-flat btn-success']) ?>
    </div><br><br>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
		'layout'=>'{items}',
        'columns'=>[
			['header'=>'No','class' => 'yii\grid\SerialColumn'],
			'nama',
			'cam_alias',
			'lokasi',
			'ip_address',
			'port',
			'latitude',
			'longitude',
			['class' => 'yii\grid\ActionColumn'],
			
		]
    ]) ?>
  

</div>
