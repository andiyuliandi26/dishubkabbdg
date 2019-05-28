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
use yii\web\UploadedFile;

class DataposnagregController extends Controller
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

    public function actionIndex($page = NULL)
    {
		$getImage = Slideshow::findOne(['id_image'=>6]);
            
        return $this->render('index',['getImage'=>$getImage]);		
    }

    public function actionUpdate()
    {
        $model = Slideshow::findOne(6);

        if ($model->load(Yii::$app->request->post())) {
            $image = UploadedFile::getInstance($model, 'filename');
			if(!is_null($image)){
				$ext = end((explode(".",$image->name)));
				$model->filename = $image->name;
				$model->picture_web = Yii::$app->security->generateRandomString().".{$ext}";
				
				Yii::$app->params['uploadPath'] = Yii::$app->basePath.'/web/images/slideshow/';
				$path = Yii::$app->params['uploadPath']. $model->picture_web;
                echo $model->picture_web;
				if($image->saveAS($path)){
                    $model->lastmodified = date("Y-m-d H:i:s");
			
                    if($model->save()){
                        return $this->redirect(['index']);
                    }else{		
                        return $this->render('update', [
                            'model' => $model,
                            'error' => ""
                        ]);
                    }
                }else{
                    return $this->render('update', [
                        'model' => $model,
                        'error' => print_r($image->error)
                    ]);
                }			
			}else{
				$model->filename = $model->filename;
			}
        } else {
            return $this->render('update', [
                'model' => $model,
                'error' => ""
            ]);
        }
    }
}
