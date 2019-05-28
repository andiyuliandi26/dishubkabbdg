<?php

use yii\helpers\Html;
use yii\helpers\ArrayHelper;
use kartik\form\ActiveForm;
use kartik\widgets\FileInput;
use kartik\widgets\Select2;
use kartik\money\MaskMoney;
use kartik\widgets\SwitchInput;
use kartik\widgets\RangeInput;
use kartik\slider\Slider;
use app\models\Slideshow;

/* @var $this yii\web\View */
/* @var $model app\models\Slideshow */
/* @var $form yii\widgets\ActiveForm */
?>
<?php

?>
<div class="slideshow-form">
	<?php $form = ActiveForm::begin([
					'options'=>['enctype'=>'multipart/form-data']
			]); ?>
    <div class="panel panel-success">
        <div class="panel-body">
            <div class="col-md-3">
                <?= $form->field($model, 'image_name')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="col-md-1" style="display:none;">
                <?= $form->field($model, 'image_seq')->textInput(['readonly'=>true, 'value' => $model->isNewRecord ? Slideshow::find()->max('image_seq') + 1 : $model->image_seq]) ?>
            </div>
            <div class="col-md-1">
                <?= $form->field($model, 'status')->dropDownList(['Aktif' => 'Aktif', 'Non Aktif' => 'Non Aktif']) ?>
            </div>                     
            <div class="col-md-7">
				<?= $form->field($model, 'filename')->widget(FileInput::classname(), [
						'pluginOptions' => [
							'initialPreviewConfig'=> [
								[
									'caption'=> 'desert.jpg', 
									'width'=> '120px', 
									'url'=> 'http://localhost/avatar/delete', // server delete action 
									'key'=> 100, 
									'extra'=> ['id'=> '100'],
								]
							],
							'initialPreview'=>[
								$model->picture_web != null ? Yii::$app->homeUrl."images/slideshow/".$model->picture_web : null,
							],
							'initialPreviewAsData'=>true,
							'initialPreviewConfig' => [
								['caption' => $model->image_name],
							],
							'initialPreviewShowDelete'=> false,
							'resizeImages'=>true,
							'overwriteInitial'=>false,
							'showCaption' => false,
							'showRemove' => false,
							'showUpload' => false,
							'browseClass' => 'btn btn-primary btn-block',
							'browseIcon' => '<i class="glyphicon glyphicon-camera"></i> ',
							'browseLabel' =>  'Pilih Gambar',
							'allowedFileExtensions'=>['jpg', 'gif','png'],
						],
						'options' => ['accept' => 'image/*'],
					]); ?>
            </div>
        </div>
    </div>
	
    <div class="col-md-12 form-group panel-footer" style="text-align:right;">
        <?= Html::submitButton($model->isNewRecord ? '<span class="fa fa-check"></span> Tambah' : ' <span class="fa fa-check"></span> Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
        <?= Html::a('<span class="fa fa-reply"></span>  Batal', ['index'], ['class' => 'btn btn-danger']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
