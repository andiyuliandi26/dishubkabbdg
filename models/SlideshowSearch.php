<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Slideshow;

/**
 * SlideshowSearch represents the model behind the search form about `app\models\Slideshow`.
 */
class SlideshowSearch extends Slideshow
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_image', 'image_seq', 'status'], 'integer'],
            [['image_name', 'filename', 'upload_date', 'lastmodified'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Slideshow::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id_image' => $this->id_image,
            'image_seq' => $this->image_seq,
            'status' => $this->status,
            'upload_date' => $this->upload_date,
            'lastmodified' => $this->lastmodified,
        ]);

        $query->andFilterWhere(['like', 'image_name', $this->image_name])
            ->andFilterWhere(['like', 'filename', $this->filename]);

        return $dataProvider;
    }
}
