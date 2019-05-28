<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
$isMobile = preg_match('/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$_SERVER['HTTP_USER_AGENT']);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <!-- Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) -->
	<link rel="shortcut icon" href="<?= Yii::$app->request->baseUrl; ?>/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl; ?>/css/unreal_html5_player_styles_v1.css" /> 
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl; ?>/css/jquery-ui.min.css" />
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl; ?>/css/bootstrap-datepicker.css" />
    <script src="<?= Yii::$app->request->baseUrl; ?>/js/jquery-2.1.3.min.js" type="text/javascript"></script>
    <script src="<?= Yii::$app->request->baseUrl; ?>/js/unreal_html5_player_script_edited.js" type="text/javascript"></script>
    <script src="<?= Yii::$app->request->baseUrl; ?>/js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="<?= Yii::$app->request->baseUrl; ?>/js/Chart.bundle.js" type="text/javascript"></script>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    
</head>
<!-- Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) -->
<style>
	.navbar-inverse{
		background-color: #0044E7;
		border-color: #0044E7;
	}
	.navbar-inverse .navbar-brand{
		color: #FFF;
	}
	.navbar-inverse .navbar-brand:hover {
		color: #c5c5c5;
	}
	.navbar-inverse .navbar-nav > .active > a{
		background-color: #0030A2;
		color: #FFF;
	}
	.btn-primary{
		background-color: #0044E7;
	}
	
	.navbar-toggle{
	    display: none;
	}
	.container{
	    margin-left: 0px;
	}
</style>
<body>
<?php $this->beginBody() ?>
<!-- Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) -->
<div class="wrap">
    <?php
	if($isMobile){
		NavBar::begin([
        'brandLabel' => '<marquee><img src="/images/logo_sabilulungan.png" height="35px" width="30px" style="float:left; margin: -5px 5px 0px 0px;"/>&nbsp; Dishub Kabupaten Bandung </marquee>',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]);
	}else{
		NavBar::begin([
        'brandLabel' => '<img src="/images/logo_sabilulungan.png" height="35px" width="30px" style="float:left; margin: -5px 5px 0px 0px;"/>&nbsp;'.Yii::$app->name,
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]);
	}
    
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => [
            //['label' => 'Home', 'url' => ['/site/index']],
            Yii::$app->user->isGuest ? '' : ['label' => 'Daftar CCTV', 'url' => ['/cctv']],
            Yii::$app->user->isGuest ? '' :
                [
                    'label' => 'Logout (' . Yii::$app->user->identity->username . ')',
                    'url' => ['/site/logout'],
                    'linkOptions' => ['data-method' => 'post']
                ],
        ],
    ]);
    NavBar::end();
    ?>

    <div class="container" style="width:100%">   
        <?= $content ?>
    </div>
</div>

<footer class="footer" style="padding: 20px;">
    <!-- Created By : Andi Yuliandi (Programmer - AMSolutionTech - 0822 1915 4532 - andiyuliandi26@gmail.com) -->
    <?php
		if($isMobile){ 
			?>
            <center><img src="/images/logo_dishub.png" height="50px" width="40px" style="margin-right:20px;"/>
            <img src="/images/logo_kab_bandung.png" height="50px" width="50px" style="margin-right:20px;"/>
            <img src="/images/logo_sabilulungan.png" height="50px" width="50px"/></center>
            <center>&copy; Dishub Kabupaten Bandung <?= date('Y'); ?> </br> &copy; AYS-AMSolutionTech</center>
		
		<?php
		}else{
			?>
			<p class="pull-left">
            	<img src="/images/logo_dishub.png" height="50px" width="40px" style="margin-right:20px;"/>
            	<img src="/images/logo_kab_bandung.png" height="50px" width="50px" style="margin-right:20px;"/>
            	<img src="/images/logo_sabilulungan.png" height="50px" width="50px"/>
            </p>
		
        	<div class="pull-right" style="height:50px; vertical-align:bottom; padding-top:0px;">&copy; Dinas Pehubungan Kabupaten Bandung <?= date('Y'); ?> </br> &copy; AYS-AMSolutionTech</div>
	<?php
        }
	?>
        
  
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
