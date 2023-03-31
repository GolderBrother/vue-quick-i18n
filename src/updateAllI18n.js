const { registerCommand } = require("./utils/vs");
const { openFileByPath } = require("./utils");
const { operation } = require("./utils/constant");
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const updateJson = require("./lib/updateJson");
const readFiles = function (dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function (file) {
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          readFiles(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};
module.exports = (context) => {
  context.subscriptions.push(
    registerCommand(operation.updateAllI18n.cmd, (dirName) => {
      console.log("registerCommand dirName", dirName);
      const resolvedDirPath = path.resolve(dirName);
      vscode.window.showInformationMessage(
        `您执行了extension.sayHello命令！resolvedDirPath:${resolvedDirPath}`
      );
      // readFiles(resolvedDirPath, function (err, results) {
      //   vscode.window.showInformationMessage(
      //     `您执行了extension.sayHello命令！err:${err}`
      //   );
      //   if (err) {
      //     vscode.window.showInformationMessage(
      //       `您执行了extension.sayHello命令！err:${err}`
      //     );
      //     throw err;
      //   }
      //   vscode.window.showInformationMessage(
      //     `您执行了extension.sayHello命令！results:${results}`
      //   );
      //   console.log(results);
      //   if (Array.isArray(results)) {
      //     results.forEach((result) => {
      //       openFileByPath(result).then((editor) => {
      //         updateJson({ editor, context });
      //       });
      //     });
      //   }
      // });
      // args:file:///Users/zhangyaohuang/Desktop/james/work/%E5%85%AC%E5%85%B1%E6%95%B0%E6%8D%AE%E5%B9%B3%E5%8F%B0%E9%83%A8/code/bdp_front/web/src/module/explore/components
      //   vscode.window.showInformationMessage(
      //     `您执行了extension.sayHello命令！args:${dirName}`
      //   );
      // if (uri && uri.path) {
      //     openFileByPath(uri.path).then(editor => {
      //         updateJson({ editor, context });
      //     });
      // } else {
      //     updateJson({ context });
      // }
    })
  );
};
