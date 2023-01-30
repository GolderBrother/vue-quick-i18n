# 介绍
现在前端IDE里，vscode占据大半江山（比sublime开源，比atom更快，比webstorm更轻）
[Vue-Quick-I18n](https://marketplace.visualstudio.com/items?itemName=GolderBrother.vue-quick-i18n&ssr=false#overview)是基于vscode的一个Vue项目快速国际化插件


## 它是如何工作的？
基于vscode,在vue文件打开时，插件通过Node文件系统读写vue及国际化文件，以快捷键形式提供不同的命令来加快国际化的工作

## Features

* [快速更新JSON](../guide/1-update-i18n.md)
* [智能替换](../guide/2-quick-i18n.md)
* [全面展示](../guide/3-show-i18n.md)
* [扁平/反扁平JSON](../guide/4-other.md)
* [代码提示](../guide/4-other.md)

## 什么时候最需要...?

日常开发中，vue-quick-i18n或许和其他类型vue国际化表现差别不太明显。但是当一个现有中文项目做国际化时候，它会展现非凡的才能，快到**让人窒息** :wink:。

## 是否可以更快...?
理论上当然可以。

现在的实现是打开一个vue文件，然后使用命令快速对其进行国际化的操作。更快，只需一个项目所有文件全部执行一遍上面的流程就可以实现。**但是如果那样的话**，就无法保证每个文件国际化的正确与否，那样的快其实是没有意义的。
