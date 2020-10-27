#!/bin/sh

# ElasticSearch
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.9.3-darwin-x86_64.tar.gz
tar -xzf elasticsearch-7.9.3-darwin-x86_64.tar.gz

cd elasticsearch-7.9.3/

bin/elasticsearch-plugin install analysis-kuromoji

cd ..

wget https://artifacts.elastic.co/downloads/kibana/kibana-7.9.3-darwin-x86_64.tar.gz
tar -xzf kibana-7.9.3-darwin-x86_64.tar.gz

