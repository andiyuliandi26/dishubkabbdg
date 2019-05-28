<?php

namespace app\models;

use Yii;

class Accesslogs extends \yii\db\ActiveRecord
{
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
            [['ipaddress', 'timestamp', 'browser', 'cctv_akses_id'], 'safe'],
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
        ];
    }
    
    public function getCctv()
    {
        return $this->hasOne(CCTV::className(), ['id_cctv' => 'cctv_akses_id']);
    }
}
