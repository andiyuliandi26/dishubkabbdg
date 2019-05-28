<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Slideshow */

$this->title = 'Update Slideshow: ' . $model->image_name;
?>
<div class="slideshow-update">
    <h1><?= Html::encode($this->title) ?></h1>
    <h4><?= $error ?></h4>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
