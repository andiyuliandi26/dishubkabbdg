<?php
namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\CCTV;
use app\models\Accesslogs;

class GrafikController extends Controller
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

    public function actionIndex($params = "")
    {	
        if($params == ""){
			$tanggal = date('Y-m-d');
			$tahun = date('Y');
			$thisMonth = date('Y-m');
			$datePicker = date('yyyy/mm/dd');
			$lokasi = 1;
		}else{
			$decode = explode(',',base64_decode($params));
			$tanggal = $decode[0];
			$lokasi = $decode[1];
			$tahun = date('Y');
		}
		$model =  new Accesslogs();
		if($model->load(Yii::$app->request->post())){
			$getDataPerbulan = Accesslogs::find()
				->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%d") as timestamp'])
				->where(['date_format(timestamp,"%Y-%m")' => $model->timestamp, 'status' => 'Success'])
				->groupBy(['date_format(timestamp,"%Y-%m-%d")'])
				->all();
			$getDataPerhari = Accesslogs::find()
				->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%H") as timestamp'])
				->where(['date_format(timestamp,"%Y-%m-%d")' => $tanggal, 'status' => 'Success'])
				->groupBy(['date_format(timestamp,"%Y-%m-%d %H")'])
				->all();
		}else{
			$getDataPerbulan = Accesslogs::find()
				->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%d") as timestamp'])
				->where(['date_format(timestamp,"%Y-%m")' => $thisMonth, 'status' => 'Success'])
				->groupBy(['date_format(timestamp,"%Y-%m-%d")'])
				->all();
			$getDataPerhari = Accesslogs::find()
				->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%H") as timestamp'])
				->where(['date_format(timestamp,"%Y-%m-%d")' => $tanggal, 'status' => 'Success'])
				->groupBy(['date_format(timestamp,"%Y-%m-%d %H")'])
				->all();
		}	
		
		return $this->render('index', [
            //'dataProvider' => $dataProvider,
			'model' => $model,
			//'getHeader' => $getHeader,
			'datePicker' => $datePicker,
			'getDataPerbulan' => $getDataPerbulan,
			'getDataPerhari' => $getDataPerhari,
			'tahun' => $tahun
        ]);	
    }	
	
	public function actionGetperbulan(){
		if(Yii::$app->request->isAjax){
			$data = Yii::$app->request->post();
			$idCam = explode(":", $data['tanggal']);
			$model = Accesslogs::find()
				->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%d") as timestamp'])
				->where(['date_format(timestamp,"%Y-%m")' => $idCam[0], 'status' => 'Success'])
				->groupBy(['date_format(timestamp,"%Y-%m-%d")'])
				->asArray()
				->all();
				
			$result = "true";
			Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
			return[
				'result' => $result,
				'model' => $model,
			];
		}else{
			return[
				'result' => "error",
			];
		}
	}
	
	public function actionGetchartdata(){
		if(Yii::$app->request->isAjax){
			$data = Yii::$app->request->post();
			$date = explode(":", $data['tanggal']);
			$jenis = explode(":", $data['jenis']);
			$canvasID = explode(":", $data['canvasID']);

			switch($jenis[0]){
				case 'bulan': 
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%d") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m")' => $date[0], 'status' => 'Success'])
						->groupBy(['date_format(timestamp,"%Y-%m-%d")'])
						//->asArray()
						->all();
					$chartColor = 'rgba(54, 162, 235, 1)';
					return $this->renderPartial('grafikGlobal', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'hari': 
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%H:00") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m-%d")' => $date[0], 'status' => 'Success'])
						->groupBy(['date_format(timestamp,"%Y-%m-%d %H")'])
						->all();
					$chartColor = 'rgba(255, 50, 50, 1)';
					return $this->renderPartial('grafikGlobal', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'bulan-kamera':
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, cctv_akses_id, date_format(timestamp,"%d") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m")' => $date[0], 'status' => 'Success'])
						->groupBy(['cctv_akses_id'])
						->orderBy(['cctv_akses_id' => SORT_ASC, 'timestamp' => SORT_ASC])
						//->asArray()
						->all();
					$chartColor = 'rgba(54, 162, 235, 1)';
					return $this->renderPartial('grafikPerkamera', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'hari-kamera':
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, cctv_akses_id, date_format(timestamp,"%H:00") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m-%d")' => $date[0], 'status' => 'Success'])
						->groupBy(['cctv_akses_id'])
						->orderBy(['cctv_akses_id' => SORT_ASC, 'timestamp' => SORT_ASC])
						//->asArray()
						->all();
					$chartColor = 'rgba(255, 50, 50, 1)';
					return $this->renderPartial('grafikPerkamera', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'perhari-perkamera':
					$cctvID = explode(":", $data['cctvID']);
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%H:00") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m-%d")' => $date[0], 'cctv_akses_id' => $cctvID, 'status' => 'Success'])
						->groupBy(['date_format(timestamp,"%Y-%m-%d %H")'])
						->all();
					$chartColor = 'rgba(255, 50, 50, 1)';
					return $this->renderPartial('grafikGlobal', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'perbulan-perkamera':
					$cctvID = explode(":", $data['cctvID']);
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%d") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m")' => $date[0], 'cctv_akses_id' => $cctvID])
						->groupBy(['date_format(timestamp,"%Y-%m-%d")'])
						//->asArray()
						->all();
					$chartColor = 'rgba(54, 162, 235, 1)';
					return $this->renderPartial('grafikGlobal', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'bulan-user':
					$sql = 'SELECT COUNT(timestamp) as total, date_format(timestamp,"%d") as timestamp
								FROM (
									SELECT COUNT(ipaddress) as Total, date_format(timestamp,"%Y-%m-%d") as timestamp, ipaddress
									FROM db_accesslogs
									WHERE date_format(timestamp, "%Y-%m") = "'.$date[0].'" 
									GROUP BY ipaddress
									ORDER BY timestamp) t1 
								GROUP BY timestamp';
					$model = Accesslogs::findBySql($sql)
						//->asArray()
						->all();
					$chartColor = 'rgba(100, 240, 150, 1)';
					return $this->renderPartial('grafikGlobal', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				case 'hari-user':
					$sql = 'SELECT COUNT(timestamp) as total, date_format(timestamp,"%H:00") as timestamp
								FROM (
									SELECT COUNT(ipaddress) as Total, date_format(timestamp,"%Y-%m-%d %H") as timestamp, ipaddress
									FROM db_accesslogs
									WHERE date_format(timestamp, "%Y-%m-%d") = "'.$date[0].'" 
									GROUP BY ipaddress
									ORDER BY timestamp) t1 
								GROUP BY timestamp';
					$model = Accesslogs::findBySql($sql)
						//->asArray()
						->all();
					$chartColor = 'rgba(200, 165, 250, 1)';
					return $this->renderPartial('grafikGlobal', [
						'date' => $date[0],
						'model' => $model,
						'jenis' => $jenis,
						'canvasID' => $canvasID[0],
						'chartColor' => $chartColor,
					]);	
					break;
				default : $model = []; $chartColor = 'rgba(54, 162, 235, 1)';
			}			
		}else{
			return[
				'result' => "error",
			];
		}
	}
}
