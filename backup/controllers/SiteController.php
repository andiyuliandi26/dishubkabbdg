<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\CCTV;
use app\models\Accesslogs;

class SiteController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionIndex($page = NULL, $id = 1)
    {
        //$cctv = CCTV::find()->where(['status'=>'1'])->asArray()->all();
		//$id = 1;
		//return $this->render('index',['cctv'=>$cctv]);
		//if(Yii::$app->request->isPost){
			//$id = $_POST['id'];
		//}
		$accesslogs = new Accesslogs();
		$getCamera = CCTV::findOne(['id_cctv'=>$id]);
	
		$cctv = CCTV::find()->where(['status'=>'1'])->asArray()->all();
		
		$ipaddress = '';
            if (getenv('HTTP_CLIENT_IP'))
                $ipaddress = getenv('HTTP_CLIENT_IP');
            else if(getenv('HTTP_X_FORWARDED_FOR'))
                $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
            else if(getenv('HTTP_X_FORWARDED'))
                $ipaddress = getenv('HTTP_X_FORWARDED');
            else if(getenv('HTTP_FORWARDED_FOR'))
                $ipaddress = getenv('HTTP_FORWARDED_FOR');
            else if(getenv('HTTP_FORWARDED'))
                $ipaddress = getenv('HTTP_FORWARDED');
            else if(getenv('REMOTE_ADDR'))
                $ipaddress = getenv('REMOTE_ADDR');
            else
                $ipaddress = 'IP Tidak Dikenali';

        $accesslogs->ipaddress = $ipaddress;
        $accesslogs->timestamp = date("Y-m-d H:i:s");
        $accesslogs->browser = $_SERVER['HTTP_USER_AGENT'];
        $accesslogs->cctv_akses_id = $id;
        if($accesslogs->save()){
           return $this->render('cctv_id',['cctv'=>$cctv,'getCamera'=>$getCamera]);
        }else{
             
        }
		
    }
	
	public function actionCctv($id)
    {
       	$getCamera = CCTV::findOne(['id_cctv'=>$id]);
		
	    $cctv = CCTV::find()->where(['status'=>'1'])->asArray()->all();
		
		return $this->renderPartial('cctv_id2',['cctv'=>$cctv,'getCamera'=>$getCamera]);
    }

    public function actionLogin($parameters = NULL)
    {
        if($parameters != NULL){
			if (!\Yii::$app->user->isGuest) {
           	 return $this->goHome();
			}
	
			$model = new LoginForm();
			if ($model->load(Yii::$app->request->post()) && $model->login()) {
				return $this->goBack();
			}
			
			return $this->render('login', [
				'model' => $model,
			]);
		}
	
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

}
