$!/bin/sh

# ElasticSearch install
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.9.3-linux-x86_64.tar.gz
tar -xzf elasticsearch-7.9.3-linux-x86_64.tar.gz

cd elasticsearch-7.9.3/

# 日本語プラグインinstall
bin/elasticsearch-plugin install analysis-kuromoji

# ElasticSearch 起動
# bin/elasticsearch

# 起動確認
# curl http://localhost:9200/

cd ..

# kibana install
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.9.3-linux-x86_64.tar.gz
tar -xzf kibana-7.9.3-linux-x86_64.tar.gz

# 起動
cd kibana-7.9.3-linux-x86_64/
# bin/kibana

# curl http://localhost:5601/app/home#/

cd ..

# monstache
wget https://github.com/rwynn/monstache/releases/download/v6.7.0/monstache-dfba1c2.zip
unzip monstache-dfba1c2.zip -d ./monstache
