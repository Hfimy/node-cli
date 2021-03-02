const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const ora = require('ora');

module.exports = async (repo, dest) => {
  const process = ora(`download from ${repo}`);
  process.start();
  await download(repo, dest);
  process.succeed();
};
