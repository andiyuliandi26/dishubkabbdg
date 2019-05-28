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
use app\models\Slideshow;

class StreamingController extends Controller
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
		$cctv = CCTV::find()->asArray()->all();
            
        return $this->render('streampage',['cctv'=>$cctv]);		
    }

    public function actionGetcctv(){
        $model = CCTV::find()->where(['status'=>'1'])->asArray()->all();
        
        if($model){
            $result = "true";
            Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            return[
                'result' => 'true',
                'model' => $model,
            ];	
        }else{
            Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            return[
                'result' => 'false',
                'model' => '',
            ];
        }
	}
}
