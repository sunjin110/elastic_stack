#!/bin/sh

# ElasticSearch
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.9.3-darwin-x86_64.tar.gz
tar -xzf elasticsearch-7.9.3-darwin-x86_64.tar.gz

cd elasticsearch-7.9.3/

bin/elasticsearch-plugin install analysis-kuromoji
bin/elasticsearch-plugin install jettro/elasticsearch-gui 

# Kibana
cd ..

wget https://artifacts.elastic.co/downloads/kibana/kibana-7.9.3-darwin-x86_64.tar.gz
tar -xzf kibana-7.9.3-darwin-x86_64.tar.gz



# monstache
wget https://github.com/rwynn/monstache/releases/download/v6.7.1/monstache-07f855c.zip
unzip monstache-*.zip -d ./monstache