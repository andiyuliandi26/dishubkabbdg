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
		$useragent = $_SERVER['HTTP_USER_AGENT']; 
		$accesslogs = new Accesslogs();
		$getCamera = CCTV::findOne(['id_cctv'=>$id]);
	
		//$cctv = CCTV::find()->where(['status'=>'1'])->asArray()->all();
		$cctv = CCTV::find()->asArray()->all();
		$slideshow = Slideshow::find()->where(['status' => 'Aktif'])->all();
		
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
        $accesslogs->browser = $useragent;
        $accesslogs->cctv_akses_id = $id;
        //if($accesslogs->save(){	
		if(preg_match('/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){ 
   //jika menggunakan browser versi mobile maka alihkan ke file web versi mobile anda 
			return $this->render('streampage_mobile',['cctv'=>$cctv,'getCamera'=>$getCamera, 'slideshow' => $slideshow]);
		}else{ 
			//jika tidak versi mobile maka pakai versi standar 
			//include'index.php'; 
			return $this->render('streampage',['cctv'=>$cctv,'getCamera'=>$getCamera, 'slideshow' => $slideshow]);
		}
           
        //}else{
             
        //}
		
    }
	
	public function actionCctv($id)
    {
       	$getCamera = CCTV::findOne(['id_cctv'=>$id]);
		
	    //$cctv = CCTV::find()->where(['status'=>'1'])->asArray()->all();
		$cctv = CCTV::find()->asArray()->all();
		
		return $this->renderPartial('cctv_id2',['cctv'=>$cctv,'getCamera'=>$getCamera]);
    }
	
	public function actionGetcctv(){
		if(Yii::$app->request->isAjax){
			$data = Yii::$app->request->post();
			$idCam = explode(":", $data['idCamera']);
			$model = Cctv::findOne(['id_cctv' => $idCam[0], 'status' => 1]);
			
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
		}else{
			return[
				'result' => "error",
			];
		}
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
