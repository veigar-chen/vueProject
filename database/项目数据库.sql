/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.25-log : Database - vueproject
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`vueproject` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `vueproject`;

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `gid` tinyint(3) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `gName` char(50) DEFAULT NULL COMMENT '商品名称',
  `gInfo` varchar(500) DEFAULT NULL COMMENT '商品详情',
  `gPhotoArr` varchar(200) DEFAULT NULL COMMENT '商品照片组',
  `gSize` char(15) DEFAULT NULL COMMENT '商品尺码',
  `gType` char(1) DEFAULT NULL COMMENT '商品类型',
  `gSort` char(10) DEFAULT NULL COMMENT '商品分类',
  `gDescription` varchar(30) NOT NULL COMMENT '商品描述',
  `gPhoto` varchar(500) DEFAULT NULL COMMENT '商品照片',
  `gPrice` char(10) NOT NULL COMMENT '商品价格',
  `sid` tinyint(3) DEFAULT NULL COMMENT '所属商铺',
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `goods` */

insert  into `goods`(`gid`,`gName`,`gInfo`,`gPhotoArr`,`gSize`,`gType`,`gSort`,`gDescription`,`gPhoto`,`gPrice`,`sid`) values (9,'西服','撒旦法稍等发达发送到发送到发撒旦法','http://localhost:8888/goodsPhoto/Akali.png,http://localhost:8888/goodsPhoto/Aatrox.png','S,L,XL,XXL','0','交领襦裙','我真的','http://localhost:8888/goodsPhoto/Akali.png','3234234',1),(10,'天上人间','大家','http://localhost:8888/goodsPhoto/Ashe.png,http://localhost:8888/goodsPhoto/AurelionSol.png,http://localhost:8888/goodsPhoto/Azir.png','S,L,XL,其它,XXL,M','4','连衣裙','都很nice','http://localhost:8888/goodsPhoto/Ashe.png','1000',1);

/*Table structure for table `shop` */

DROP TABLE IF EXISTS `shop`;

CREATE TABLE `shop` (
  `sid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `shopName` char(16) NOT NULL COMMENT '店铺名称',
  `goodsNum` int(6) NOT NULL DEFAULT '0' COMMENT '商铺的店铺数量',
  `concernNum` int(6) NOT NULL DEFAULT '0' COMMENT '关注数',
  `recomPhoto` varchar(1200) NOT NULL DEFAULT '0' COMMENT '推荐的商品图片',
  `sPrice` varchar(6) NOT NULL DEFAULT '0' COMMENT '推荐的商品价格',
  `sDescription` varchar(1200) NOT NULL DEFAULT '0' COMMENT '商品描述',
  `sSort` char(100) NOT NULL DEFAULT '0' COMMENT '商品分类',
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='商铺表';

/*Data for the table `shop` */

insert  into `shop`(`sid`,`shopName`,`goodsNum`,`concernNum`,`recomPhoto`,`sPrice`,`sDescription`,`sSort`) values (1,'天上人间',1,1,'1','1','阿斯蒂芬斯蒂芬','0');

/*Table structure for table `shoppingcar` */

DROP TABLE IF EXISTS `shoppingcar`;

CREATE TABLE `shoppingcar` (
  `shid` int(5) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(6) NOT NULL COMMENT '判断是哪个用户',
  `gid` int(5) NOT NULL COMMENT '商品id',
  `gSize` char(3) NOT NULL COMMENT '商品尺寸',
  `gPrice` char(50) NOT NULL COMMENT '商品价格',
  `gStyle` varchar(100) NOT NULL COMMENT '商品样式',
  `state` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1是已购买，0是未支付',
  PRIMARY KEY (`shid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='购物车';

/*Data for the table `shoppingcar` */

insert  into `shoppingcar`(`shid`,`uid`,`gid`,`gSize`,`gPrice`,`gStyle`,`state`) values (1,1,1,'x','999','不断开创四大年开始',1);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` int(6) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tel` char(11) NOT NULL COMMENT '手机号',
  `passWord` char(50) NOT NULL COMMENT '密码',
  `vatavol` varchar(500) NOT NULL COMMENT '头像//存储的是地址',
  `userName` char(20) NOT NULL COMMENT '用户自定义名称',
  `address` varchar(500) NOT NULL COMMENT '用户收货地址',
  `gender` tinyint(1) NOT NULL DEFAULT '0' COMMENT '用户性别  0男1女',
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

/*Data for the table `user` */

insert  into `user`(`uid`,`tel`,`passWord`,`vatavol`,`userName`,`address`,`gender`) values (1,'1','1','1','是','1',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
