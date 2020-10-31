#!/bin/sh

# vi /etc/hosts
# 127.0.0.1 mongo-rep-1 mongo-rep-2 mongo-rep-3
# ↑これを追加する

mkdir mongo1 mongo2 mongo3

mongod --bind_ip_all --replSet "rs0" -port 27017 --dbpath=./mongo1 &

mongod --bind_ip_all --replSet "rs0" -port 27018 --dbpath=./mongo2 &

mongod --bind_ip_all --replSet "rs0" -port 27019 --dbpath=./mongo3 &


sleep 5s

# mongo --eval "printjson(db.serverStatus())"
mongo --eval 'rs.initiate( {
   _id : "rs0",
   members: [
      { _id: 0, host: "mongo-rep-1:27017" },
      { _id: 1, host: "mongo-rep-2:27018" },
      { _id: 2, host: "mongo-rep-3:27019" }
   ]
})'

# monstacheを起動