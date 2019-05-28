<?php

use yii\helpers\Html;
use yii\helpers\Url;
use kartik\grid\GridView;
use yii\bootstrap\Modal;
use yii\jui\Dialog;
use kartik\widgets\DatePicker;
use kartik\widgets\Select2;
use app\models\CCTV;
use yii\helpers\ArrayHelper;

$this->title = "Grafik Akses CCTV";
setlocale(LC_ALL, 'Indonesian');
//var_dump($getDataPerbulan);
?>
<script>
	$(window).on("load", function() {	
		generateChart("<?= date("Y-m"); ?>", "#changeContent", "canvasBulan", "bulan");
		generateChart("<?= date("Y-m-d"); ?>", "#changeContent2",  "canvasHari", "hari");
		generateChart("<?= date("Y-m"); ?>", "#changeContent-kamera-perbulan", "canvasBulan-kamera", "bulan-kamera");
		generateChart("<?= date("Y-m-d"); ?>", "#changeContent-kamera-perhari",  "canvasHari-kamera", "hari-kamera");	
		generateChartByCCTV("#datePerhari-perkamera", "#changeContent-perkamera-perhari",  "canvas-perkamera-perhari", 
							"perhari-perkamera", "#listPerhari-perkamera" );
		generateChartByCCTV("#datePerbulan-perkamera", "#changeContent-perkamera-perbulan", "canvas-perkamera-perbulan", 
							"perbulan-perkamera", "#listPerbulan-perkamera" );
		generateChart("<?= date("Y-m"); ?>", "#changeContent-user-perbulan", "canvasBulan-user", "bulan-user");
		generateChart("<?= date("Y-m-d"); ?>", "#changeContent-user-perhari", "canvasHari-user", "hari-user");
        /*$('#accesslogs-timestamp').change(function() {
			$('#submitTanggal').click();
		});*/
		
		$("#datePerbulan").change(function(){
			generateChart($(this).val(), "#changeContent", "canvasBulan", "bulan");		
		});		
		
		$("#datePerhari").change(function(){
			generateChart($(this).val(), "#changeContent2", "canvasHari", "hari");		
		});	
		
		$("#datePerbulan-kamera").change(function(){
			generateChart($(this).val(), "#changeContent-kamera-perbulan", "canvasBulan-kamera", "bulan-kamera");		
		});	
		
		$("#datePerhari-kamera").change(function(){
			generateChart($(this).val(), "#changeContent-kamera-perhari",  "canvasHari-kamera", "hari-kamera");		
		});
		
		$("#datePerbulan-user").change(function(){
			generateChart($(this).val(), "#changeContent-user-perbulan", "canvasBulan-user", "bulan-user");		
		});
		
		$("#datePerhari-user").change(function(){
			generateChart($(this).val(), "#changeContent-user-perhari", "canvasHari-user", "hari-user");		
		});
    });
	
	function generateChart(date, elementID, canvasID, jenis ){
		$.ajax({
			url : '<?php echo Yii::$app->request->baseUrl.'/grafik/getchartdata' ?>',
			type : 'post',
			data : {
				tanggal: date,
				jenis : jenis,
				canvasID : canvasID,			
			},
			success: function (result){
				//console.log(result);
				$(elementID).html(result);	
			},
			error: function(xhr, ajaxOptions, thrownError){
				console.log("Error ajax Chart Global" + elementID);
				console.log(xhr);
			}
		});	
	}
	
	function generateChartByCCTV(dateElementID, elementID, canvasID, jenis, cctvElementID ){
		var date = $(dateElementID).val();
		var cctvID = $(cctvElementID).val();
		$.ajax({
			url : '<?php echo Yii::$app->request->baseUrl.'/grafik/getchartdata' ?>',
			type : 'post',
			data : {
				tanggal: date,
				jenis : jenis,
				canvasID : canvasID,
				cctvID : cctvID,			
			},
			success: function (result){
				//console.log(result);
				$(elementID).html(result);	
			},
			error: function(){
				console.log("Error ajax Chart By CCTV");
			}
		});	
	}
</script>
<div class="col-md-12" style="margin-bottom: 10px;">
    <div class="col-md-3">           
    </div>    
</div>
<!-- 
<video style="width: 100%; height: 100%; display: none;" id="mediaPlayer" preload="none" width="640" height="360">
						
						Pseudo HTML5
						<source type="application/x-mpegURL" src="http://202.149.87.56:80/camera/Samsat.m3u8">

					</video>
					 -->
<div class='tabs-x tabs-above tab-bordered tabs-krajee'>
    <ul id="myTab-5" class="nav nav-tabs" role="tablist" >
        <li class="active"><a href="#home-5" role="tab" data-toggle="tab">Grafik Perhari</a></li>
        <li><a href="#profile-5" role="tab-kv" data-toggle="tab">Grafik Perbulan</a></li>
        <li class="dropdown">
            <a href="#" id="myTabDrop-5" class="dropdown-toggle" data-toggle="dropdown">Grafik Berdasarkan Kamera<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop-1">
                <li><a href="#dropdown-5-1" tabindex="-1" role="tab" data-toggle="tab">Grafik Perbulan</a></li>
                <li><a href="#dropdown-5-2" tabindex="-1" role="tab" data-toggle="tab">Grafik Perhari</a></li>
                <li><a href="#dropdown-5-3" tabindex="-1" role="tab" data-toggle="tab">Grafik Berdasarkan Kamera Perhari</a></li>
                <li><a href="#dropdown-5-4" tabindex="-1" role="tab" data-toggle="tab">Grafik Berdasarkan Kamera Perbulan</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#" id="myTabDrop-6" class="dropdown-toggle" data-toggle="dropdown">Grafik Berdasarkan User<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop-1">
                <li><a href="#dropdown-6-1" tabindex="-1" role="tab" data-toggle="tab">Grafik Perbulan</a></li>
                <li><a href="#dropdown-6-2" tabindex="-1" role="tab" data-toggle="tab">Grafik Perhari</a></li>    
            </ul>
        </li>
		<li><a href="/logs">Logs</a></li>
    </ul>
    <div id="myTabContent-5" class="tab-content" style="background-color:#F5F5F5;">
        
        <div class="tab-pane fade in active" id="home-5" style="background-color:#F5F5F5;">
			<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8">
			 	<?= DatePicker::widget([
                    'name' => 'datePerhari',
                    'id' => 'datePerhari',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'value' => date("Y-m-d"),
                    'pluginOptions' => [
                        'autoclose'=>true,
                        'format' => 'yyyy-mm-dd',
                        'language' =>'id',
                        'minViewMode'=>0,
                        'endDate'=>'+0y',
                    ]
                ]); ?>
			</div>   
            <div id="changeContent2"></div>        
        </div>
        <div class="tab-pane fade" id="profile-5"  style="background-color:#F5F5F5;text-align:right; ">
        	<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8">
			 	<?= DatePicker::widget([
                    'name' => 'datePerbulan',
                    'id' => 'datePerbulan',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'value' => date("Y-m"),
                    'pluginOptions' => [
                        'autoclose'=>true,
                        'format' => 'yyyy-mm',
                        'language' =>'id',
                        'minViewMode'=>1,
                        'endDate'=>'+0y',
                    ]
                ]); ?>
			</div>   
            <div id="changeContent"></div>             
       	</div>
        <div class="tab-pane fade" id="dropdown-5-1">
        	<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8">
			 	<?= DatePicker::widget([
                    'name' => 'datePerbulan-kamera',
                    'id' => 'datePerbulan-kamera',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'value' => date("Y-m"),
                    'pluginOptions' => [
                        'autoclose'=>true,
                        'format' => 'yyyy-mm',
                        'language' =>'id',
                        'minViewMode'=>1,
                        'endDate'=>'+0y',
                    ]
                ]); ?>
			</div>   
            <div id="changeContent-kamera-perbulan"></div>
        </div>
        <div class="tab-pane fade" id="dropdown-5-2">
        	<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8">
			 	<?= DatePicker::widget([
                    'name' => 'datePerhari-kamera',
                    'id' => 'datePerhari-kamera',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'value' => date("Y-m-d"),
                    'pluginOptions' => [
                        'autoclose'=>true,
                        'format' => 'yyyy-mm-dd',
                        'language' =>'id',
                        'minViewMode'=>0,
                        'endDate'=>'+0y',
                    ]
                ]); ?>
			</div>   
            <div id="changeContent-kamera-perhari"></div>
        </div>
        <div class="tab-pane fade" id="dropdown-5-3">
        	<div class="col-md-12">
                <div class="col-md-3 col-md-offset-7 col-xs-3 col-xs-offset-5" style="padding:20px 20px 10px 10px;" >
                    <?= Select2::widget([
                            'name' => 'listPerhari-perkamera',
                            'id' => 'listPerhari-perkamera',
                            'data'=> ArrayHelper::map(CCTV::find()->all(),'id_cctv','nama'),
							'options'=>[
								  'onChange'=>'generateChartByCCTV("#datePerhari-perkamera", 
											  "#changeContent-perkamera-perhari", 
											  "canvas-perkamera-perhari", 
											  "perhari-perkamera",
											  "#listPerhari-perkamera" );'
							]
                        ]);
                    ?>
                </div>
                <div style="padding:20px 20px 10px 10px;" class="col-md-2 col-xs-4">
                    <?= DatePicker::widget([
                        'name' => 'datePerhari-perkamera',
                        'id' => 'datePerhari-perkamera',
                        'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                        'value' => date("Y-m-d"),
                        'pluginOptions' => [
                            'autoclose'=>true,
                            'format' => 'yyyy-mm-dd',
                            'language' =>'id',
                            'minViewMode'=>0,
                            'endDate'=>'+0y',
                        ],
						'options'=>[
							  'onChange'=>'generateChartByCCTV("#datePerhari-perkamera", 
										  "#changeContent-perkamera-perhari", 
										  "canvas-perkamera-perhari", 
										  "perhari-perkamera",
										  "#listPerhari-perkamera" );'
						]
                    ]); ?>
                </div> 
            </div>  
            <div id="changeContent-perkamera-perhari"></div>
        </div>
        <div class="tab-pane fade" id="dropdown-5-4">
        	<div class="col-md-12">
                <div class="col-md-3 col-md-offset-7 col-xs-3 col-xs-offset-5" style="padding:20px 20px 10px 10px;" >
                    <?= Select2::widget([
                            'name' => 'listPerbulan-perkamera',
                            'id' => 'listPerbulan-perkamera',
                            'data'=> ArrayHelper::map(CCTV::find()->all(),'id_cctv','nama'),
							'options'=>[
								'onChange'=>'generateChartByCCTV("#datePerbulan-perkamera", 
											"#changeContent-perkamera-perbulan", 
											"canvas-perkamera-perbulan", 
											"perbulan-perkamera",
											"#listPerbulan-perkamera" );'
							]
                        ]);
                    ?>
                </div>
                <div style="padding:20px 20px 10px 10px;" class="col-md-2 col-xs-4">
                    <?= DatePicker::widget([
                        'name' => 'datePerbulan-perkamera',
                        'id' => 'datePerbulan-perkamera',
                        'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                        'value' => date("Y-m"),
                        'pluginOptions' => [
                            'autoclose'=>true,
                            'format' => 'yyyy-mm',
                            'language' =>'id',
                            'minViewMode'=>1,
                            'endDate'=>'+0y',
                        ],
						'options'=>[
							'onChange'=>'generateChartByCCTV("#datePerbulan-perkamera", 
										"#changeContent-perkamera-perbulan", 
										"canvas-perkamera-perbulan", 
										"perbulan-perkamera",
										"#listPerbulan-perkamera" );'
						]
                    ]); ?>
                </div> 
            </div>  
            <div id="changeContent-perkamera-perbulan"></div>
        </div>
        <div class="tab-pane fade" id="dropdown-6-1">
        	<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8">
			 	<?= DatePicker::widget([
                    'name' => 'datePerbulan-user',
                    'id' => 'datePerbulan-user',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'value' => date("Y-m"),
                    'pluginOptions' => [
                        'autoclose'=>true,
                        'format' => 'yyyy-mm',
                        'language' =>'id',
                        'minViewMode'=>1,
                        'endDate'=>'+0y',
                    ]
                ]); ?>
			</div>   
            <div id="changeContent-user-perbulan"></div>
        </div>
        <div class="tab-pane fade" id="dropdown-6-2">
        	<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-md-offset-10 col-xs-4 col-xs-offset-8">
			 	<?= DatePicker::widget([
                    'name' => 'datePerhari-user',
                    'id' => 'datePerhari-user',
                    'type' => DatePicker::TYPE_COMPONENT_PREPEND,
                    'value' => date("Y-m-d"),
                    'pluginOptions' => [
                        'autoclose'=>true,
                        'format' => 'yyyy-mm-dd',
                        'language' =>'id',
                        'minViewMode'=>0,
                        'endDate'=>'+0y',
                    ]
                ]); ?>
			</div>   
            <div id="changeContent-user-perhari"></div>
        </div>
        <div class="tab-pane fade" id="disabled-5">Disabled Content</div>
    </div>
</div>
