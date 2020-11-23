// GET my_index/_doc/1


// template作成
PUT _template/my_template
{
    "index_patterns": "accesslog-*",
    "settings": {
        "number_of_shards": 1
    },
    "mappings": {
        "properties": {
            "host": {
                "type": "keyword"
            },
            "uri": {
                "type": "keyword"
            },
            "method": {
                "type": "keyword"
            },
            "accesstime": {
                "type": "date"
            }
        }
    }
}

// ドキュメント登録の例
POST accesslog-2020.11.20/_doc
{
    "host": "web01",
    "uri": "/user/25012",
    "method": "PUT",
    "accesstime": "2020-11-20T12:22:22"
}

// indexの確認
GET accesslog-2020.11.20/_mapping

// templateの確認

GET _template/my_template


// ダイナミックテンプレートの作成
PUT my_index/_mapping
{
    "properties": {
        "item": {
            "type": "text"
        }
    },
    "dynamic_templates": [
        {
            "price_as_float": {
                "match": "price_*",
                "unmatch": "*_created",
                "mapping": {
                    "type": "float"
                }
            }
        }
    ]
}

// ダイナミックテンプレート作成後にドキュメントを登録
POST my_index/_doc
{
    "item": "book",
    "price_book": 500,
    "price_book_created": "2020-10-11"
}

// マッピング確認
GET my_index/_mapping

// 自動推定したフィールド型名に基づく指定
PUT my_index/_mapping
{
    "dynamic_templates": [
        {
            "long_to_integer": {
                "match_mapping_type": "long",
                "mapping": {
                    "type": "integer"
                }
            }
        }
    ]
}

POST my_index/_doc
{
    "price": 500
}

GET my_index/_search

GET my_index/_mappin

// 検索Query
GET my_index/_search
{
    "query": {
        "match": {
            "message": ""
        }
    }
}

// 全てを表示する
// dateの確認とかでやる
GET my_index/_search
{
    "query": {
        "match_all": {}
    }
}

// match
// 省略なしの記法
GET my_index/_search
{
    "query": {
        "match": {
            "hoge": {
                "query": "aaa"
            }
        }
    }
}



POST my_index/_doc
{
    "name": "yunsunjin",
    "message": "I Learn Elasticsearch world"
}

GET my_index/_search
{
    "query": {
        "match": {
            "message": {
                "query": "elasticsearch world",
                "operator": "and"
            }
        }
    }
}


GET my_index/_search
{
    "query": {
        "match_all": {
           
        }
    },
    "sort": [
        {"price": {"order": "desc"}}    ]
}


// kuromoji mappingの設定
PUT my_index/_mapping
{
  "properties": {
      "user_name_2": {
          "type": "text",
          "analyzer": "kuromoji"
      }
  }
}

PUT p2_community.comm_cocolo_note_page

// ココロノートにmapping情報を追加する
PUT p2_community.comm_cocolo_note_page/_mapping
{
    "properties": {
        "mid": {
            "type": "long"
        },
        "title": {
            "type": "text",
            "analyzer": "kuromoji"
        },
        "desc": {
            "type": "text",
            "analyzer": "kuromoji"
        },
        "cats": { // ArrayObjectでない場合は、このように指定して問題ない
            "type": "integer"
        }
    }
}

GET p2_community.comm_cocolo_note_page/_mapping

// POST my_index/_doc
// {
//     "user_name_2": "今日は本当にいい天気ですね、とてもいい日差しです"
// }

GET my_index/_search
{
    "query": {
        "match": {
            "user_name_2": {
                "query": "差し"
            }
        }
    }
}


GET p2_community.comm_cocolo_note_page/_search/
{
    "query": {
        "match_all": {}
    }
}

GET  p2_community.comm_cocolo_note_page/_search/
{
    "query": {
        "term": {
            "oprg": 1  
        }
    }
}

DELETE p2_community.comm_cocolo_note_page/_doc/5fb75f7797d0c4d61531a169

// 5fb75f7797d0c4d61531a169


DELETE *