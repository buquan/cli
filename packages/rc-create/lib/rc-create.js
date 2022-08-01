#!/usr/bin/env node
// 命令行解析工具
const program = require('commander');

program.version(require('../package').version).usage('<command> [options]');

program
  .command('add <project-name>')
  .description('创建一个新的项目')
  .action((projectName) => {
    require('./create')(projectName);
  });

program.parse(process.argv);
// todo：command , webpack对单页多页应用的处理方式～
// 在看看远程拉取模版方式，自己一定要实践下发布！！！
