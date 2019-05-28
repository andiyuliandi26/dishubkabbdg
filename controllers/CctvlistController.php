<?php

namespace app\controllers;

use Yii;
use app\models\CCTV;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CCTVController implements the CRUD actions for CCTV model.
 */
class CctvlistController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * Lists all CCTV models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => CCTV::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CCTV model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new CCTV model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new CCTV();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing CCTV model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }
    
    public function actionUpdateStatus()
    {
        $model = new CCTV();

        if (isset($_POST['hasEditable'])) {
            
            \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            
            $value = $model->status;
            $id = Yii::$app->request->post('editableKey');
            $model = $this->findModel($id);
                
            $posted = current($_POST['CCTV']);
            $post = ['CCTV' => $posted];
                
            if($model->load($post)){
                $model->modified = date("Y-m-d H:i:s");
                if($model->save()){
                    $output = $model->status == 1 ? "Aktif" : "Non Aktif";
                    return ['output'=>$output, 'message'=>''];
                }
                else {
                return ['output'=>var_dump($model->getErrors()), 'message'=>var_dump($model->getErrors())];
                }
            }
            else {
                return ['output'=>'Error', 'message'=>'Error'];
            }
        }
    }

    /**
     * Deletes an existing CCTV model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the CCTV model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return CCTV the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CCTV::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
