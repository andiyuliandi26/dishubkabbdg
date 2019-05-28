<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model frontend\models\CCTV */

$this->title = 'Tambah Kamera CCTV'
?>

<div class="panel panel-primary">
	<div class="panel-heading">
    	<?= Html::encode($this->title) ?>  
    </div>
    <div class="panel-body">
    	<div class="cctv-create">

			<?= $this->render('_form', [
                'model' => $model,
            ]) ?>
        
        </div>
    </div>
</div>

