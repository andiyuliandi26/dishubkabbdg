<?php
use yii\web\JsExpression;
use app\models\Helper;
use kartik\widgets\DatePicker;

$categories = [];
$values = [];
$i = 0;
if( $model != NULL ){
	foreach($model as $data){
		$categories[$i] = $data->timestamp;
		$values['total'][$i] = (float)$data->total;
		
		$i++;
	}
}else{
	$values['total'] = [];
}

?>
<script>
	$(window).ready(function(e) {
		var ctx = document.getElementById("<?= $canvasID ?>").getContext('2d');
		var canvas = document.getElementById("<?= $canvasID ?>");
		var labels = <?php echo json_encode($categories); ?>;
		var datas = <?php echo json_encode($values['total']); ?>;
		var myChart = new Chart(ctx, {
			type: 'line',
		  	data: {
				datasets: [{				  
						  label: 'Data ' + '<?= $date; ?>',
						  data: datas,
						  borderColor: '<?= $chartColor; ?>',
						  lineTension: 0.2
					}],
				labels: labels,
		  	},
		  	options: {
			  	scales: {
				  	yAxes: [{
					  	ticks: {
						  	beginAtZero:true
					  	}
				  	}]
			  	},
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

<canvas id="<?= $canvasID ?>" width="400" height="125"></canvas> 
