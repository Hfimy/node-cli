const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const chalk = require('chalk');
const clone = require('./clone');
const clear = require('clear');

const PresetApps = {
  'react-spa': 'github:Hfimy/front-webpack-config',
};

const log = (content) => console.log(chalk.green(content));

const spawnP = async (...args) => {
  const { spawn } = require('child_process');
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', () => {
      resolve();
    });
  });
};

module.exports = async (name) => {
  // clear();

  const WELCOME = await figlet('cfa welcome');
  log(WELCOME);

  log(`🚀🚀🚀 创建项目：${name}`);

  // clone
  await clone(PresetApps['react-spa'], name);

  console.log('yarn');

  // 安装依赖
  // await spawnP('npm', ['install'], { cwd: `./${name}` });
  await spawnP('yarn', { cwd: `./${name}` });

  log(`
👌👌👌 创建完成

To get start:
==========================
    cd ${name}
    yarn dev
==========================
  `);
};
