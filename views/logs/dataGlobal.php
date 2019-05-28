<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\web\JsExpression;
use app\models\Helper;
use kartik\widgets\DatePicker;
use yii\widgets\Dropdownlist;
?>

<div class="cctv-index" style="padding:10px 20px;">
	
    <?php
			$totalPage = round($totalCount / 100) == 0 ? 1 : round($totalCount / 100);
			$text = 1;
			$option = "";
			for($i = 0; $i < $totalPage; $i++){
				$selected = $i == $page ? " selected " : " ";
				$option .= "<option value='".$i."'". $selected ." >". $text ." </option>";
				$text++;
			}
    	if($jenis == 'hari'){
			?>
            <script>
				$(document).ready(function(e) {
					$('select#selectPageHari option').remove();
					$('#selectPageHari').append(<?= json_encode($option); ?>);
					$('#totalDataHari').text(<?= $totalCount; ?>);
					$('#totalPageHari').text(<?= $totalPage; ?>);
                });
			</script>
            <?php
			echo GridView::widget([
				'dataProvider' => $dataProvider,
				'layout'=>'{items}',
				'columns'=>[
					['header'=>'No','class' => 'yii\grid\SerialColumn'],
					//'id',
					'ip_address',
					//'tanggal',
					'jam',
					'namaBrowser',
					'cctv.nama',
					'status'
				]
			]);
		}else if($jenis == 'bulan'){ 
			
		?>
        	<script>
				$(document).ready(function(e) {
					$('select#selectPageBulan option').remove();
					$('#selectPageBulan').append(<?= json_encode($option); ?>);
					$('#totalDataBulan').text(<?= $totalCount; ?>);
					$('#totalPageBulan').text(<?= $totalPage; ?>);
                });
			</script>
            <?php
			echo GridView::widget([
				'dataProvider' => $dataProvider,
				'layout'=>'{items}',
				'columns'=>[
					['header'=>'No','class' => 'yii\grid\SerialColumn'],
					//'id',
					'ip_address',
					'tanggal',
					'jam',
					'namaBrowser',
					'cctv.nama',
					'status'
				]
			]);
		}
	
	 ?>

</div>