// TODO
// 1、这里应该支持字母+汉字（done）,汉字+英文符号
// 2、支持批量转换文件
// 3、支持单个词条右键翻译，并更新到语言包中
// 4、支持tsx文件（done）
// 5、判断是否引入模块，没有则自动引入
// 6、引入自动翻译，翻译简单词条（atool-i10n）
//约定:所有汉字匹配均以汉字开头,所有正则针对 单行匹配

// 约定:所有汉字匹配均以汉字开头,所有正则针对 单行匹配
const spaceRegexp = /\s/g;
const firstSpaceRegexp = /\s+/;
const quotationRegexp = /[\"|\']/g;
const angleBracketsRegexp = /[\<|\>]/g;
const templateBeginRegexp = /\<template/g;
const templateEndRegexp = /\<\/template/g;
const scriptBeginRegexp = /\<script/g;
const scriptEndRegexp = /\<\/script/g;

// 只匹配单行注释，多行注释不考虑
const commentRegexp = /(\/\/)|(<!--)|(\/\*)/g;

// 匹配js中的汉字,配合template range 判断 是否是template中的js汉字  √ (?<!=)["'][\u4e00-\u9fa5]\S*["|']
const scriptRegexp = /(?<!=)["'][\u4e00-\u9fa5]\S*["']/g;

// 匹配属性中的汉字 √
const propertyRegexp = /\s\S+=["'][\u4e00-\u9fa5]\S*["']/g;

// 单行  匹配 template ><下，空行的汉字（retrieve） ,
const angleBracketSpaceRegexp = /((?<=\s)[\u4e00-\u9fa5][^\s\<\>]*|(?<=[>\s])[\u4e00-\u9fa5][^\s\<\>|\n]*(?=[\s<]))/g;

// 匹配到特殊字符串说明前面正则匹配有问题，给出提示，去掉匹配
const warnRegexp = /[{}<>:]/g;

// 匹配 $t替换的字符串
const dollarTRegexp = /(?<=(\$t|i18n\.t)\(["'])[^'"]+/gm;

module.exports = {
	templateBeginRegexp,
	templateEndRegexp,
	scriptBeginRegexp,
	scriptEndRegexp,
	scriptRegexp,
	propertyRegexp,
	angleBracketSpaceRegexp,
	warnRegexp,
	angleBracketsRegexp,
	quotationRegexp,
	spaceRegexp,
	firstSpaceRegexp,
	commentRegexp,
	dollarTRegexp
};