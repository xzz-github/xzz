SET NAMES UTF8;
DROP DATABASE IF EXISTS nio;
CREATE DATABASE nio CHARSET=UTF8;
USE nio;
CREATE TABLE news(
 nid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 npic    VARCHAR(64),
 nname  VARCHAR(64),
 ntime  VARCHAR(64) 
);
INSERT INTO news VALUES(1,'img/news1.jpg','蔚来已交付3,368台ES8，九月交付1,766台','2018 10月 15日');
INSERT INTO news VALUES(2,'img/news2.jpg','蔚来发布“NIO X Chalayan”联名限量系列，并开启高订服务','2018 10月 12日');
INSERT INTO news VALUES(3,'img/news3.jpg','网络安全领域巨头Acronis成为FE蔚来车队官方合作伙伴','2018 10月 09日');
INSERT INTO news VALUES(4,'img/news4.jpg','蔚来车队公布FE 2018-19赛季新车、新车手、新合作伙伴','2018 10月 09日');
INSERT INTO news VALUES(5,'img/news5.jpg','海拔5715.28米 蔚来ES8成功创造吉尼斯世界纪录™称号','2018 9月 29日');
INSERT INTO news VALUES(6,'img/news6.jpg','蔚来宣布首次公开发行定价','2018 9月 16日');
INSERT INTO news VALUES(7,'img/news7.jpg','蔚来将携手传奇设计鬼才Hussein Chalayan推出联名限量系列','2018 8月 31日');
INSERT INTO news VALUES(8,'img/news8.jpg','三位车手齐上阵  蔚来车队纽约完赛FE第四季','2018 7月 16日');
INSERT INTO news VALUES(9,'img/news9.jpg','蔚来EP9创造古德伍德爬坡赛量产电动汽车最快圈速纪录','2018 7月 16日');