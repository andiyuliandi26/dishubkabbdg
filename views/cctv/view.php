<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model frontend\models\CCTV */

$this->title = $model->id_cctv;
$this->params['breadcrumbs'][] = ['label' => 'Cctvs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="cctv-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id_cctv], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id_cctv], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id_cctv',
            'nama',
            'lokasi',
            'ip_address',
            'username',
            'password',
            'channel',
			'cam_type',
            'stream_type',
            'port',
            'status',
            'created',
            'modified',
        ],
    ]) ?>

</div>
