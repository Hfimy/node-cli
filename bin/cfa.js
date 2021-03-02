#!/usr/bin/env node
const { program } = require('commander');
const create = require('../src/create');

program.version(require('../package.json').version);

program
  .command('create <name>')
  .description('create project')
  .action((name) => {
    create(name);
  });

program.parse(process.argv);
