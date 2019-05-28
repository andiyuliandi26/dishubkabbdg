<?php

use yii\helpers\Html;
use kartik\grid\GridView;

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
			[
                'class' => 'kartik\grid\EditableColumn',
                'attribute' => 'status',
                'value' => function ($model, $key, $index, $widget) { 
                    return $model->status == 1 ? "Aktif" : "Non Aktif";
                },
                'editableOptions' => function ($model, $key, $index) {
                    return [
                        'header' => 'Status',
                        'inputType' => \kartik\editable\Editable::INPUT_DROPDOWN_LIST ,
                        'data' => ['1' => 'Aktif', '0' => 'Non Aktif'],
                        'options' => [
                            'pluginOptions' => ['min' => 0, 'max' => 5000]
                        ],
                        'formOptions' => [
                            'id' => $model->id_cctv,
                            'action' => \yii\helpers\Url::to(['cctvlist/update-status'])
                        ],
                        'pluginEvents' => [
                            'editableError' => 'status.onEditableError',
                            'editableSuccess' => 'status.onEditableGridSuccess',
                        ],
                    ];
                }
            ],
			['class' => 'yii\grid\ActionColumn'],
			
		]
    ]) ?>
  

</div>
