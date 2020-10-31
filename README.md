# 資料
https://qiita.com/kiyotaman/items/2527defb84a94bde3d7c

## kuromoji mapping設定
```json
// kuromoji indexを登録
PUT test_kuromoji_index
{
  "settings": {
    "analysis": {
      "analyzer": {
        "test_kuromoji_analyzer": {
          "type": "custom",
          "tokenizer": "kuromoji_tokenizer"
        }
      }
    }
  }
}


// fieldに追加
PUT test_kuromoji_index/_mapping
{
  "properties": {
    "name": {
      "type": "text",
      "analyzer": "test_kuromoji_analyzer"
    }
  }
}

PUT test_kuromoji_index/_mapping
{
  "properties": {
    "description": {
      "type": "text",
      "analyzer": "test_kuromoji_analyzer"
    }
  }
}

// データ追加
PUT test_kuromoji_index/_bulk
{ "index" : {} }
{ "name": "カベルネ・ソーヴィニヨン", "description": "カベルネ・ソーヴィニヨン (Cabernet Sauvignon) は、世界的に最も有名な赤ワイン用の代表ワイン用品種の1つである。単に「カベルネ」(Cabernet) とも呼ばれることが多い。フランスではメドック地区に代表されるようにボルドーの最も重要な品種の一つであり、世界各地でも栽培されているが、比較的温暖な気候を好む。ソーヴィニヨン・ブランとカベルネ・フランの自然交配によって誕生したといわれている。 果皮のタンニン分が多く、強い渋味のある濃厚なワインとなる。雑味が多く、比較的長期の熟成を必要とする。強過ぎる渋味を緩和すべく、メルロー等の他の品種との混醸や混和も少なくない。歴史的には「ヴィドゥーレ」「ヴェデーレ」（「硬い」の意）とも呼ばれた。ソーヴィニヨン・ブラン同様メトキシピラジン(Methoxypyrazine)に由来するアロマがある。"}
{ "index" : {} }
{ "name": "メルロー", "description": "メルロー (Merlot) は、赤ワイン用の品種の中では最大の作地面積をもつ。とくにフランスのボルドーや、それを真似た「ボルドー・ブレンド」において非常に重要であり、カベルネ・ソーヴィニヨンとブレンドされることもある。カベルネ・ソーヴィニヨンに比し爽やかで、軽口である。また、ボルドーのサンテミリオン(Saint-Emilion)やポムロール(Pomerol)といった地区では、カベルネ・ソーヴィニヨンよりも多く配合され、とくにポムロール地区の「シャトー・ペトリュス」は、しばしばこの品種単独で造られる。日本でも長野県の塩尻市桔梗ヶ原地区などで栽培されている。土壌の塩分に弱い。"}
{ "index" : {} }
{ "name": "ピノ・ノワール", "description": "ピノ・ノワール (Pinot Noir) は、フランスのブルゴーニュ地方を原産とする世界的な品種で、紫色を帯びた青色の果皮を持つ。冷涼な気候を好み、特に温暖な気候では色やフレーバーが安定しないので栽培は難しい。イタリアでは「ピノ・ネロ」(Pinot Nero)、ドイツでは「シュペートブルグンダー」(Spätburgunder)の名がある。遺伝子的に不安定で変異種が少なくない。この中には、緑みを帯びた黄色の果皮を持つピノ・ブラン(Pinot Blanc)や褐色のピノ・グリ(Pinot Gris)などがあり、時には同じ樹に異なった色の果実がなるともいわれている。フランス以外では最近ニュージーランドでの栽培が盛んで、寒冷地を中心に栽培される。ワインはライトボディで、弱めの渋味、繊細なアロマとフレーバーが特徴である。シャンパンにも欠かせない品種である。"}
{ "index" : {} }
{ "name": "シラー", "description": "シラー(Syrah)は「シラーズ」(Shiraz)とも呼ばれる赤ワイン用の代表的な品種の1つである。シラーズはイランの都市名であるが、フランス・ローヌ地方が起源とされる。ローヌ地方の代表的な品種である他、オーストラリアでは最も重要な品種である。南アフリカ、チリなどでも栽培されている。ワインはフルボディで香味が強く、カベルネ・ソーヴィニヨンに比べタンニンが「新鮮」なのが特徴である。他の品種との混醸や混和も見られる。栽培される気候や風土によって味が異なる。ローヌ渓谷北部のコート・ロティやエルミタージュ、オーストラリア産が有名。果実は熟するとしなびやすい。"}
{ "index" : {} }
{ "name": "サンジョヴェーゼ", "description": "サンジョヴェーゼ (Sangiovese) は、イタリアで最も栽培面積の多い赤ワイン用の品種である。果皮の色の違いを含め数多くの亜種を持つ。中央イタリアのトスカーナ州が主産地で、イタリアで最も有名な一つである「キャンティ(Chianti)をはじめ、「ブルネッロ・ディ・モンタルチーノ」(Brunello di Montalcino) や「ヴィーノ・ノービレ・ディ・モンテプルチアーノ」(Vino Nobile di Montepulciano) 、「モレッリーノ・ディ・スカンサーノ」(Morellino di Scansano)などが生産される。コルシカ島では、「ニエルッキオ」(Nielluccio)として知られる。"}

// search
GET test_kuromoji_index/_search

GET test_kuromoji_index/_search
{
  "query": {
    "match": {
      "description": "世界"
    }
  },
  "highlight": {
    "fields": {
      "description": {}
    }
  }
}


```


```json
// これでも、追加可能らしい
PUT my_index
{
  "mappings": {
    "properties": {
      "blog_message": {
        "type": "text",
        "analyzer": "kuromoji"
      }
    }
  }
}

```