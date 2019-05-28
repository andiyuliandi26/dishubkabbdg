<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\SlideshowSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="slideshow-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_image') ?>

    <?= $form->field($model, 'image_name') ?>

    <?= $form->field($model, 'image_seq') ?>

    <?= $form->field($model, 'filename') ?>

    <?= $form->field($model, 'status') ?>

    <?php // echo $form->field($model, 'upload_date') ?>

    <?php // echo $form->field($model, 'lastmodified') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
