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

class LogsController extends Controller
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

    public function actionIndex()
    {
		$dataProvider = new ActiveDataProvider([
            'query' => Accesslogs::find()->orderBy(["timestamp" => SORT_DESC]),
        ]);
        
        $dataProvider->pagination->pageSize = 100;
        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);		
    }
	
	public function actionGetdata(){
		if(Yii::$app->request->isAjax){
			$data = Yii::$app->request->post();
			$date = explode(":", $data['tanggal']);
			$jenis = explode(":", $data['jenis']);
			$page = explode(":", $data['page']);
			switch($jenis[0]){
				case 'hari': 
					$dataProvider = new ActiveDataProvider([
						'query' => Accesslogs::find()
							->select(['date_format(timestamp,"%d-%m-%Y") as tanggal, date_format(timestamp,"%H:%i:%s") as jam, 
										ipaddress as ip_address, cctv_akses_id, browser as namaBrowser, status, id'])
							->where(['date_format(timestamp,"%Y-%m-%d")' => $date[0]])
							->orderBy(["jam" => SORT_DESC]),
					]);	
					$dataProvider->pagination->page = $page[0];
					break;
				case 'bulan': 	
					$dataProvider = new ActiveDataProvider([
						'query' => Accesslogs::find()
							->select(['date_format(timestamp,"%d-%m-%Y") as tanggal, date_format(timestamp,"%H:%i") as jam, 
										ipaddress as ip_address, cctv_akses_id, browser as namaBrowser, status, id, timestamp'])
							->where(['date_format(timestamp,"%Y-%m")' => $date[0]])
							->orderBy(['tanggal' => SORT_DESC, 'jam' => SORT_DESC]),
					]);
					$dataProvider->pagination->page = $page[0];
					break;
				case 'bulan-kamera':
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, cctv_akses_id, date_format(timestamp,"%d") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m")' => $date[0]])
						->groupBy(['cctv_akses_id'])
						->orderBy(['cctv_akses_id' => SORT_ASC, 'timestamp' => SORT_ASC])
						//->asArray()
						->all();
					
					break;
				case 'hari-kamera':
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, cctv_akses_id, date_format(timestamp,"%H:00") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m-%d")' => $date[0]])
						->groupBy(['cctv_akses_id'])
						->orderBy(['cctv_akses_id' => SORT_ASC, 'timestamp' => SORT_ASC])
						//->asArray()
						->all();
					
					break;
				case 'perhari-perkamera':
					$cctvID = explode(":", $data['cctvID']);
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%H:00") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m-%d")' => $date[0], 'cctv_akses_id' => $cctvID])
						->groupBy(['date_format(timestamp,"%Y-%m-%d %H")'])
						->all();
					
					break;
				case 'perbulan-perkamera':
					$cctvID = explode(":", $data['cctvID']);
					$model = Accesslogs::find()
						->select(['COUNT(cctv_akses_id) as total, date_format(timestamp,"%d") as timestamp'])
						->where(['date_format(timestamp,"%Y-%m")' => $date[0], 'cctv_akses_id' => $cctvID])
						->groupBy(['date_format(timestamp,"%Y-%m-%d")'])
						//->asArray()
						->all();
					
					break;
				default : $model = []; $chartColor = 'rgba(54, 162, 235, 1)';
			}
			
			$dataProvider->pagination->pageSize = 100;
			return $this->renderPartial('dataGlobal', [
				'dataProvider' => $dataProvider,
				'jenis' => $jenis[0],
				'totalCount' => $dataProvider->totalCount,
				'page' => $page[0]
			]);				
		}else{
			$dataProvider = new ActiveDataProvider([
						'query' => Accesslogs::find()
							->select(['date_format(timestamp,"%d-%m-%Y") as tanggal, date_format(timestamp,"%H:%i") as jam, 
										ipaddress, cctv_akses_id, browser, id, timestamp'])
							//->where(['date_format(timestamp,"%Y-%m")' => $date[0]])
							->orderBy(['tanggal' => SORT_DESC]),
			]);
			$dataProvider->pagination->pageSize = 100;
			return $this->render('dataGlobal', [
				'dataProvider' => $dataProvider,
				'jenis' => 'bulan'
			]);
		}
	}
	
	public function actionWritelog(){
		$accesslogs = new Accesslogs();
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
				
		$useragent = $_SERVER['HTTP_USER_AGENT'];
				
		if(Yii::$app->request->isAjax){
			$data = Yii::$app->request->post();
			$idCam = explode(":", $data['idCamera']);
			$statusLog = explode(":", $data['statusLog']);
			
			$accesslogs->ipaddress = $ipaddress;
			$accesslogs->timestamp = date("Y-m-d H:i:s");
			$accesslogs->browser = $useragent;
			$accesslogs->cctv_akses_id = $idCam[0];
			$accesslogs->status = $statusLog[0];
			
			if($accesslogs->save()){
			    if($statusLog[0] == "Error"){
			       \Yii::$app->mailer->compose()
                    ->setFrom('admin@dishubkabbdg.web.id')
                    ->setTo('errors@dishubkabbdg.web.id')
                    ->setSubject('CCTV Reports Error Zoneminder')
                    ->setTextBody('CCTV Reports Error | Timestamp : </b> '.date("Y-m-d H:i:s").'| IPAddress : '.$ipaddress.'| Kamera : '.$accesslogs->cctv->nama.' |  Status : ERORR')
                    ->setHtmlBody('<b>CCTV Reports Error</b><br> <b> Timestamp : </b> '.date("Y-m-d H:i:s").'<br> <b> IPAddress : </b> '.$ipaddress.'<br><b> Kamera </b> : '.$accesslogs->cctv->nama.'<br> <b> Status : ERORR</b>')
                    ->send();
			    }
			    
				$result = "true";
			}else{
				$result = "false";
			}
			
			Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
			return [
				'result' => $result,
				'code' => 100,
				'data' => $accesslogs,
			];
		}	
	}
}
