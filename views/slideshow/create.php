<?php

use yii\helpers\Html;

$this->title = 'Tambah Slideshow';
?>
<div class="slideshow-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
