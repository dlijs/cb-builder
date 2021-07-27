const { program } = require('commander');
const color = require('colors-cli');

const commanderAction = (command, type) => {
  console.log(
    '\n\n this is first command',
    color.blue(command),
    color.green(type),
    color.red('version: 0.0.2'),
  );
};

/* 必选参数  alita框架名称 type组件/还是页面 */
program
  .version('0.0.2', '-v --version -V')
  .arguments('<command> <type>')
  .action(commanderAction)
  .parse(process.argv);
