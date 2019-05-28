<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "db_cctv".
 *
 * @property integer $id_cctv
 * @property string $nama
 * @property string $lokasi
 * @property string $ip-address
 * @property string $username
 * @property string $password
 * @property integer $channel
 * @property string $stream-type
 * @property integer $port
 * @property integer $status
 * @property string $created
 * @property string $modified
  * @property string $latiude
 * @property string $longitude
 */
class CCTV extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'db_cctv';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ip_address', 'username', 'password', 'channel', 'stream_type', 'port','cam_type','cam_alias'], 'required'],
            [['channel', 'port', 'status'], 'integer'],
            [['created', 'modified'], 'safe'],
            [['nama',], 'string', 'max' => 30],
            [['lokasi'], 'string', 'max' => 50],
            [['ip_address', 'username', 'password'], 'string', 'max' => 50],
            [['stream_type'], 'string', 'max' => 10],
			[['latitude', 'longitude'], 'string', 'max' => 20]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_cctv' => 'Id Cctv',
            'nama' => 'Nama',
            'lokasi' => 'Lokasi',
            'ip_address' => 'IP Address',
            'username' => 'Username',
            'password' => 'Password',
            'channel' => 'Channel',
            'stream_type' => 'Stream Type',
            'port' => 'Port',
			'cam_type'=>'Tipe Kamera',
            'status' => 'Status',
            'created' => 'Created',
            'modified' => 'Modified',
			'latitude'=>'Latitude',
			'longitude'=>'Longitude',
			'cam_alias' => 'Alias',
        ];
    }
    
    public function getLogs()
    {
        return $this->hasMany(Accesslogs::className(), ['id_cctv' => 'cctv_akses_id']);
    }
}
