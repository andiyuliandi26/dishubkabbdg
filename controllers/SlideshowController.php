<?php

namespace app\controllers;

use Yii;
use app\models\Slideshow;
use app\models\SlideshowSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

class SlideshowController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }
	
    public function actionIndex()
    {
        $searchModel = new SlideshowSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    public function actionCreate()
    {
        $model = new Slideshow();

        if ($model->load(Yii::$app->request->post())) {
            $image = UploadedFile::getInstance($model, 'filename');
			if(!is_null($image)){
				$ext = end((explode(".",$image->name)));
				$model->filename = $image->name;
				$model->picture_web = Yii::$app->security->generateRandomString().".{$ext}";
				
				Yii::$app->params['uploadPath'] = Yii::$app->basePath.'/web/images/slideshow/';
				$path = Yii::$app->params['uploadPath']. $model->picture_web;
				
				if($image->saveAS($path)){
					$model->upload_date = date("Y-m-d H:i:s");
					if($model->save()){
						return $this->redirect(['index']);
					}else{
						return $this->render('create', [
							'model' => $model,
						]);
					}
				}	
				
			}else{				
				return $this->render('create', [
							'model' => $model,
						]);
			}						
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post())) {
            $image = UploadedFile::getInstance($model, 'filename');
			if(!is_null($image)){
				$ext = end((explode(".",$image->name)));
				$model->filename = $image->name;
				$model->picture_web = Yii::$app->security->generateRandomString().".{$ext}";
				
				Yii::$app->params['uploadPath'] = Yii::$app->basePath.'/web/images/slideshow/';
				$path = Yii::$app->params['uploadPath']. $model->picture_web;
				
				$image->saveAS($path);				
			}else{
				$model->filename = $model->filename;
			}
			
			$model->lastmodified = date("Y-m-d H:i:s");
			
			if($model->save()){
				return $this->redirect(['index']);
			}else{		
				return $this->render('update', [
					'model' => $model,
				]);
			}
			
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    public function actionDelete($id)
    {
        $model = $this->findModel($id);
		Yii::$app->params['uploadPath'] = Yii::$app->basePath.'/web/images/slideshow/';
		$path = Yii::$app->params['uploadPath']. $model->picture_web;
		
		if(unlink($path)){
			$this->findModel($id)->delete();
		}
        return $this->redirect(['index']);
    }

    protected function findModel($id)
    {
        if (($model = Slideshow::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
