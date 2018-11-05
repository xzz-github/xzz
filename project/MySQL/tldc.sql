#设置客户端语言
SET NAMES UTF8;
#放弃数据库(如果存在)tldc
DROP DATABASE IF EXISTS tldc;
#创建数据库tldc
CREATE DATABASE tldc CHARSET=UTF8;
#进入数据库
USE tldc;
#
CREATE TABLE tldc_user(
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  rname VARCHAR(8),
  idcard VARCHAR(32)
);
INSERT INTO tldc_user VALUES('Tom','123456','12345678910','许仙','331082199608478521');
INSERT INTO tldc_user VALUES('Jerry','654321','98765432100','古树','733108219964852156');