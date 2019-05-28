<?php
use yii\web\JsExpression;
use app\models\Helper;
use kartik\widgets\DatePicker;

$categories = [];
$values = [];
$i = 0;
//var_dump($model);
if($model != NULL ){
	foreach($model as $data){
		$categories[$i] = $data->cctv->nama;
		$values['total'][$i] = (float)$data->total;
			
		$i++;
	}
}else{
	$categories = [];
	$values['total'] = [];
}
//var_dump($categories);
//var_dump($values['total']);
?>
<script>
	$(window).ready(function(e) {
		var ctx = document.getElementById("<?= $canvasID ?>").getContext('2d');
		var canvas = document.getElementById("<?= $canvasID ?>");
		var labels = <?php echo json_encode($categories); ?>;
		var datas = <?php echo json_encode($values['total']); ?>;
		var myChart = new Chart(ctx, {
			type: 'doughnut',
		  	data: {
				datasets: [
						{
							label: 'CCTV 1 ' + '<?= $date; ?>',
							data: datas,
							backgroundColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 205, 86, 1)',
								'rgba(0, 250, 200, 1)',
								'rgba(50, 50, 50, 1)',
								'rgba(200, 165, 250, 1)',
								'rgba(63, 191, 191,1)',
								'rgb(191, 191, 63)',
								'rgb(191, 127, 63)',
								'rgb(85, 63, 191)',
								'rgba(191, 63, 129, 0.9)'],
						}
					],
				labels: labels,
		  	},
		  	options: {
			  	layout: {
					padding: {
						top:0,
						left:20,
						right:20,
						bottom: 10,
					}
			  	},
				legend:{
					display : true
				}
			}
		});
		
		var ctx2 = document.getElementById("<?= $canvasID ?>2").getContext('2d');
		var canvas2 = document.getElementById("<?= $canvasID ?>2");
		var myChart2 = new Chart(ctx2, {
			type: 'bar',
		  	data: {
				datasets: [
						{
							label: 'CCTV ' + '<?= $date; ?>',
							data: datas,
							backgroundColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 205, 86, 1)',
								'rgba(0, 250, 200, 1)',
								'rgba(50, 50, 50, 1)',
								'rgba(200, 165, 250, 1)',
								'rgba(63, 191, 191,1)',
								'rgb(191, 191, 63)',
								'rgb(191, 127, 63)',
								'rgb(85, 63, 191)',
								'rgba(191, 63, 129, 0.9)'],
						}
					],
				labels: labels,
		  	},
		  	options: {
			  	layout: {
					padding: {
						top:30,
						left:20,
						right:20,
						bottom: 10,
					}
			  	},
				animation:{
				   	onComplete:function(animation){
						var ctx = this.chart.ctx;
						var chart = this;
						var datasets = this.config.data.datasets;
						ctx.textAlign = "center";
						ctx.textBaseline = "bottom";
						ctx.fillStyle = "black";
						datasets.forEach(function(dataset, i){
							chart.getDatasetMeta(i).data.forEach(function(p, j){
								ctx.fillText(datasets[i].data[j], p._model.x, p._model.y - 10);
							});
						});
					}
				},
				legend:{
					display : false
				}
			}
		});
    });
	  
</script>
<div>
	<canvas id="<?= $canvasID ?>" width="400" height="125"></canvas> <br> 
</div>
<div>
	<canvas id="<?= $canvasID ?>2" width="400" height="125"></canvas> 
</div>


