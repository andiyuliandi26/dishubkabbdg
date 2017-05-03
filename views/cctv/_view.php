<?php
use yii\helpers\Html;

switch($model->cam_type){
				case 'Dahua':
					$link='rtsp://'.$model->username.':'.$model->password.'@'.$model->ip_address.':'.$model->port.'/cam/realmonitor?channel='.$model->channel.'&subtype='.($model->stream_type == 'main' ? 1 : 1);
				break;
				case 'Launch' :
				$link='rtsp://'.$model->ip_address.':'.$model->port.'/'.$model->channel.'/'.$model->username.':'.$model->password.'/'.$model->stream_type;
				break;
				default :
				$link='rtsp://'.$model->ip_address.':'.$model->port.'/'.$model->channel.'/'.$model->username.':'.$model->password.'/'.$model->stream_type;
			}           

				
?>
<div class="view">

	
	<div class="col-sm-4">
    <?= Html::a(Html::encode($model->nama), ['view', 'id' => $model->id_cctv]);?>
    <embed type="application/x-vlc-plugin" 
			pluginpage="http://www.videolan.org"
			version="VideoLAN.VLCPlugin.2"
			width="320" 
			height="240" 
			loop="true"
			controls="false" 
			mute="true"
			allowfullscreen"=false" 
			target="<?= $link; ?>"></embed>
    </div>



</div>