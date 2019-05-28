<?php

namespace app\models;

use Yii;

class Slideshow extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'db_slideshow';
    }
    public function rules()
    {
        return [
            [['image_seq'], 'integer'],
            [['upload_date', 'lastmodified'], 'safe'],
            [['image_name', 'status'], 'string', 'max' => 45],
            [['filename'], 'string', 'max' => 100],
			[['filename'], 'file', 'extensions' => 'png, jpg', 'skipOnEmpty' => true],
            [['picture_web'], 'string', 'max' => 150],
            [['image_seq'], 'unique'],
        ];
    }
    public function attributeLabels()
    {
        return [
            'id_image' => 'Id Image',
            'image_name' => 'Image Name',
            'image_seq' => 'Image Seq',
            'filename' => 'Filename',
            'picture_web' => 'Picture Web',
            'status' => 'Status',
            'upload_date' => 'Upload Date',
            'lastmodified' => 'Lastmodified',
        ];
    }
}
