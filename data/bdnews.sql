/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50710
 Source Host           : localhost
 Source Database       : bdnews

 Target Server Type    : MySQL
 Target Server Version : 50710
 File Encoding         : utf-8

 Date: 05/17/2016 13:04:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `cover_url` varchar(500) DEFAULT NULL,
  `link_url` varchar(500) DEFAULT NULL,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `recommend_status` int(2) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `news`
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES ('1', 'test', 'ttttt', 'http://t11.baidu.com/it/u=http://upload.morningpost.com.cn/2016/0505/1462437312378.jpg&fm=36', 'http://baidu.com', '1', '1', '2016-05-17 11:54:09', '2016-05-17 13:00:32'), ('2', 'tttt', 'tetst', 'http://t11.baidu.com/it/u=http://upload.morningpost.com.cn/2016/0505/1462437312378.jpg&fm=36', 'http://baidu.com', '5', '1', '2016-05-17 11:55:46', '2016-05-17 12:59:04'), ('3', 'tttt', 'tetst', 'http://t11.baidu.com/it/u=http://upload.morningpost.com.cn/2016/0505/1462437312378.jpg&fm=36', 'http://baidu.com', '5', '0', '2016-05-17 11:55:53', '2016-05-17 12:55:27'), ('4', 'tttt', 'tetst', 'http://t11.baidu.com/it/u=http://upload.morningpost.com.cn/2016/0505/1462437312378.jpg&fm=36', 'http://baidu.com', '5', '0', '2016-05-17 11:55:55', '2016-05-17 12:55:28'), ('5', 'hahah', 'hahahhaha', '', '', '4', '0', '2016-05-17 13:02:44', '2016-05-17 13:02:44'), ('6', 'r32rr23', '423r23f2f', '', '', '3', '0', '2016-05-17 13:02:56', '2016-05-17 13:02:56');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('3', 'test', '123', '2016-05-17 13:03:45', '2016-05-17 13:03:45');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
