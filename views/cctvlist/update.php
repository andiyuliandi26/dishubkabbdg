<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model frontend\models\CCTV */

$this->title = 'Update CCTV: ' . ' ' . $model->lokasi;
?>
<div class="panel panel-primary">
	<div class="panel-heading">
    	<?= Html::encode($this->title) ?>  
    </div>
    <div class="panel-body">
    	<div class="cctv-update">

			<?= $this->render('_form', [
                'model' => $model,
            ]) ?>
        
        </div>
    </div>
</div>
