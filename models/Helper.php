<?php
namespace frontend\models;

class Helper{
	public static function application($type){
		$application=simplexml_load_file('protected/config/application.xml') or die("Error: Cannot create object");
		switch($type){
			case 'appName':
				return $application->namaJT;
				break;
			case 'address':
				return $application->alamatJT;
				break;
			case 'tlp':
				return $application->noTlpJT;
				break;
		}
	}
	private $application;
	
	public static $appName='test';

	public $jenisdanmodel=array('SEPEDA MOTOR'=>'SEPEDA MOTOR','MOBIL'=>'MOBIL','TRUK'=>'TRUK',
							'BIS'=>'BIS');
	
	public $jenisKelamin=array('Laki-laki'=>'Laki-Laki','Perempuan'=>'Perempuan');
	
	public $statusOrtu=array('Kandung'=>'Kandung','Angkat'=>'Angkat','Wali'=>'Wali');
	
	public $statusMhs=array('Aktif'=>'Aktif','Tidak Aktif'=>'Tidak Aktif','Cuti'=>'Cuti','Keluar'=>'Keluar','DO'=>'DO','Lulus'=>'Lulus');
	
	public $agama=array('Islam'=>'Islam','Kristen'=>'Kristen','Protestan'=>'Protestan',
						'Budha'=>'Budha','Hindu'=>'Hindu','Konghucu'=>'Konghucu','Lain-Lain'=>'Lain-lain');
	
	public $kewarganegaraan=array('WNI'=>'WNI','WNA'=>'WNA','WNI Keturunan'=>'WNI Keturunan');
	
	public $prodi=array('Elektro'=>'Elektro','Industri'=>'Industri','Informatika'=>'Informatika');
	
	public $statusDsn=array('Tetap'=>'Tetap','Tidak Tetap'=>'Tidak Tetap');
	
	public $hari=array(''=>'','Senin'=>'Senin','Selasa'=>'Selasa','Rabu'=>'Rabu','Kamis'=>'Kamis','Jumat'=>'Jumat','Sabtu'=>'Sabtu','Minggu'=>'Minggu');
	
	public $jenjang=array('D3'=>'D3','S1'=>'S1','S2'=>'S2','S3'=>'S3');
	
	public $semester=array('1','2','3','4','5','6','7','8','9','10');
	
	public $namahari=array('','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu');
	
	public $namabulan=array('','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember');
	
	public static function dateFormat($date,$format=''){
		$namahari=array('','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu');
		$namabulan=array('','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September',
						'Oktober','November','Desember');
		$create=date_create($date);
		switch($format){
			case 'full' :
				return date_format($create,"d").' '.$namabulan[date_format($create,"n")].' '.date_format($create,"Y");
				break;
			case 'fullDate' :
				return $namahari[date_format($create,"N")].', '.date_format($create,"d").' '.$namabulan[date_format($create,"n")].' '.date_format($create,"Y");
				break;
			case 'monthOnly' :
				return $namabulan[date_format($create,"n")];
				break;
			case 'dayOnly':
				return $namahari[date_format($create,"N")];
				break;
			case 'monthYear':
				return $namabulan[date_format($create,"n")].' '.date_format($create,"Y");
				break;
			case 'yearOnly':
				return date_format($create,"Y");
				break;
			case 'Y-m':
				return date_format($create,"Y-m");
				break;
			case 'd':
				return date_format($create,"d");
				break;
			case 'Y-m-d':
				return date_format($create,"Y-m-d");
				break;
			case 'hour':
				return date_format($create,"H:i");
				break;
			case 'hourOnly':
				return date_format($create,"H");
				break;
			case 'dayHour':
				$explode=explode("&",$date);
				$create=date_create($explode[0]);
				return $namahari[date_format($create,"N")].', '.date_format($create,"d").' '.$namabulan[date_format($create,"n")].' '.date_format($create,"Y")." ".$explode[1]." WIB";
				
		}
		return date_format($create,"d F Y");
	}
	
	public function encodeLink($link){
		return base64_encode($link);
		
	}
}
	
	

?>