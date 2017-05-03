<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
	<link rel="shortcut icon" href="<?= Yii::$app->request->baseUrl; ?>/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="<?= Yii::$app->request->baseUrl; ?>/css/unreal_html5_player_styles_v1.css" />
    <script src="<?= Yii::$app->request->baseUrl; ?>/js/unreal_html5_player_script_v2.js" type="text/javascript"></script>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
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
</style>
<body>
<?php $this->beginBody() ?>

<div class="wrap">
    <?php
    NavBar::begin([
        'brandLabel' => '<img src="/images/logo_sabilulungan.png" height="35px" width="30px" style="float:left; margin: -5px 5px 0px 0px;"/>&nbsp;'.Yii::$app->name,
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]);
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

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; <?= Yii::$app->name; ?> <?= date('Y') ?></p>

        <p class="pull-right"></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
