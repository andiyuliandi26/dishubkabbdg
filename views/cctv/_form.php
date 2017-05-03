<?php

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

?>
<div class="cctv-form">

    <?php $form = ActiveForm::begin([
						'layout'=>'default',
						'fieldConfig' => [
						'template' => "{label}\n{beginWrapper}\n{input}\n{hint}\n{error}\n{endWrapper}",
						'horizontalCssClasses' => [
							'label' => 'col-sm-2',
							//'offset' => 'col-sm-offset-4',
							'wrapper' => 'col-sm-8',
							'error' => '',
							'hint' => '',
						],
					],
				]); ?>
    <div class="col-md-4">
    	<?= $form->field($model, 'nama')->textInput(['maxlength' => true,'width'=>'50%']) ?>
    </div>
    <div class="col-md-4">
    	<?= $form->field($model, 'cam_alias')->textInput(['maxlength' => true,'width'=>'50%']) ?>
    </div>
    <div class="col-md-4">
    	<?= $form->field($model, 'lokasi')->textInput(['maxlength' => true]) ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'latitude')->textInput() ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'longitude')->textInput() ?>
    </div>
    
    <div class="col-md-4">
    	<?= $form->field($model, 'ip_address')->textInput(['maxlength' => true]) ?>
        <?php /*$form->field($model, 'ip_address')->widget(\yii\widgets\MaskedInput::className(), [
   			 'mask' => '999.999.999.999',
			 'clientOptions' => [
                        'alias' =>  'ip',
                        'clearMaskOnLostFocus'=>true,
                        //'removeMaskOnSubmit'=>true
               ],

		])*/ ?>
    </div>
    
    <div class="col-md-4">
    	<?= $form->field($model, 'username')->textInput(['maxlength' => true]) ?>
    </div>
    
    <div class="col-md-4">
    	<?= $form->field($model, 'password')->passwordInput(['maxlength' => true]) ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'channel')->dropDownList(['0'=>'0','1'=>'1']) ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'cam_type')->dropDownList(['Launch'=>'Launch','Dahua'=>'Dahua',]) ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'stream_type')->dropDownList(['main'=>'main','sub'=>'sub']) ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'port')->textInput(['value'=>$model->isNewRecord ? '554' : $model->port]) ?>
    </div>
    
    <div class="col-md-2">
    	<?= $form->field($model, 'status')->dropDownList(['1'=>'Aktif','0'=>'Non Aktif'],['prompt'=>'Status']) ?>
    </div>
    
    
	<div class="col-md-12">
    	<div class="form-group pull-right">
        <?= Html::submitButton($model->isNewRecord ? 'Tambah' : 'Simpan', ['class' => 'btn btn-primary']) ?>
        
        <?= Html::resetButton('Batal', ['class' => 'btn btn-danger']) ?>
    	</div>
    </div>

    <?php ActiveForm::end(); ?>

</div>

