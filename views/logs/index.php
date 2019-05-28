<?php

use yii\helpers\Html;
use yii\grid\GridView;
use kartik\widgets\DatePicker;
use kartik\widgets\Select2;
use app\models\CCTV;
use yii\helpers\ArrayHelper;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Logs Akses CCTV Persimpangan Kabupaten Bandung';
/*echo GridView::widget([
				'dataProvider' => $dataProvider,
				'layout'=>'{pager} {items}',
				'columns'=>[
					['header'=>'No','class' => 'yii\grid\SerialColumn'],
					//'id',
					'ipaddress',
					'timestamp',
					//'jam',
					'browser',
					'cctv.nama',
				]
			]);*/
?>
<script>
	$(window).on("load", function() {	
		generateData("<?= date("Y-m-d"); ?>", "#changeContent-harian",  "hari", 0);
		generateData("<?= date("Y-m"); ?>", "#changeContent-bulanan", "bulan", 0);
		//generateData("<?= date("Y-m"); ?>", "#changeContent-kamera-perbulan","bulan-kamera");
		//generateData("<?= date("Y-m-d"); ?>", "#changeContent-kamera-perhari","hari-kamera");
        /*$('#accesslogs-timestamp').change(function() {
			$('#submitTanggal').click();
		});*/
		
		$("#datePerbulan").change(function(){
			generateData($(this).val(), "#changeContent-bulanan", "bulan", 0);		
		});		
		
		$("#datePerhari").change(function(){
			generateData($(this).val(), "#changeContent-harian", "hari", 0);		
		});	
		
		$("#datePerbulan-kamera").change(function(){
			generateData($(this).val(), "#changeContent-kamera-perbulan", "bulan-kamera");		
		});	
		
		$("#datePerhari-kamera").change(function(){
			generateData($(this).val(), "#changeContent-kamera-perhari", "hari-kamera");		
		});
		console.log($('#testInput').val());
    });
	
	function nextPage(obj, jenis){
		if(jenis == 'hari'){
			generateData($('#datePerhari').val(), "#changeContent-harian", "hari", $(obj).val());	
		}else{
			generateData($("#datePerbulan").val(), "#changeContent-bulanan", "bulan", $(obj).val());
		}
		
	}
	
	function generateData(date, elementID, jenis, page ){
		$.ajax({
			url : '<?php echo Yii::$app->request->baseUrl.'/logs/getdata' ?>',
			type : 'post',
			data : {
				tanggal: date,
				jenis : jenis,	
				page : page		
			},
			success: function (result){
				//console.log(result);
				$(elementID).html(result);	
			},
			error: function(){
				console.log("Error ajax");
			}
		});	
	}
</script>
<input type="hidden" id="testInput">
<div class="cctv-indexx">
    <h4><?= Html::encode($this->title) ?></h4>
</div>
<div class='tabs-x tabs-above tab-bordered tabs-krajee'>
    <ul id="myTab-5" class="nav nav-tabs" role="tablist" >
        <li class="active"><a href="#home-5" role="tab" data-toggle="tab">Data Perhari</a></li>
        <li><a href="#profile-5" role="tab-kv" data-toggle="tab">Data Perbulan</a></li>
        <li><a href="/grafik">Grafik</a></li>
    </ul>
    <div id="myTabContent-5" class="tab-content" style="background-color:#F5F5F5;">
        
        <div class="tab-pane fade in active" id="home-5" style="background-color:#F5F5F5;">
        	<div class="col-md-2 col-xs-3" style="padding:23px 20px 10px 20px;">
            	Total Data : <span id="totalDataHari" style="font-weight:bold;"></span>
            </div>
            <div class="col-md-2 col-md-offset-6 col-xs-3 col-xs-offset-2" style="padding:23px 20px 10px 10px; text-align:right;" >
            	Halaman <select name="selectPage" id="selectPageHari" onChange="nextPage(this, 'hari')" style="padding:5px; border-radius:5px;"></select> / <span id="totalPageHari"></span>
            </div>
			<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-xs-4">
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
            <div id="changeContent-harian"></div>        
        </div>
        <div class="tab-pane fade" id="profile-5"  style="background-color:#F5F5F5;">
        	<div class="col-md-2 col-xs-3"  style="padding:23px 20px 10px 20px;">
            	Total Data : <span id="totalDataBulan" style="font-weight:bold;"></span>
            </div>
        	<div class="col-md-2 col-md-offset-6 col-xs-3 col-xs-offset-2" style="padding:23px 20px 10px 10px; text-align:right" >
            	Halaman <select name="selectPage" id="selectPageBulan" onChange="nextPage(this, 'bulan')" style="padding:5px; border-radius:5px;"></select> / <span id="totalPageBulan"></span>
            </div>
        	<div style="padding:20px 20px 10px 10px;" class="col-md-2 col-xs-4">
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
            <div id="changeContent-bulanan"></div>             
       	</div>       
    </div>
</div>
