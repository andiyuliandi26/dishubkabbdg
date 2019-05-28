<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\SlideshowSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Slideshows';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="slideshow-index">
    <p class="pull-right">
        <?= Html::a('Create Slideshow', ['create'], ['class' => 'btn btn-primary']) ?>
    </p>
<?php Pjax::begin(); ?>    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
			
            'image_name',
            'image_seq',
            'filename',
            'status',
            'upload_date',
            'lastmodified',

            ['class' => 'yii\grid\ActionColumn', 'template'=>'{update} {delete}'],
        ],
    ]); ?>
<?php Pjax::end(); ?></div>
