<?php

namespace app\models;

use Yii;

class Accesslogs extends \yii\db\ActiveRecord
{
    public $total, $tanggal, $jam, $namaBrowser, $ip_address;
	
	/**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'db_accesslogs';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ipaddress', 'timestamp', 'browser', 'cctv_akses_id'], 'required'],
            [['ipaddress', 'timestamp', 'browser', 'cctv_akses_id', 'status', 'total'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ipaddress' => 'IP Address',
            'timestamp' => 'Tanggal Akses',
            'browser' => 'Browser',
            'cctv_akses_id' => 'CCTV Akses',
			'total' => 'Totals',
			'Status' => 'Status'
        ];
    }
    
    public function getCctv()
    {
        return $this->hasOne(CCTV::className(), ['id_cctv' => 'cctv_akses_id']);
    }
}
