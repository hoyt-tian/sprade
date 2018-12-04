#!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const symbols = require('log-symbols')
const package = require('./package.json')

program.version(package.version, '-v, --version')
.command('init <name>').action(name => {
  const spinner = ora('Downloading...')
  spinner.start()
  download('hoyt-tian/struct', name, (err) => {
    if (err) {
      spinner.fail()
      console.log(symbols.error, chalk.red(err))
      return
    }
    spinner.succeed()
    console.log(symbols.success, chalk.green('done'));
  })
})


program.parse(process.argv)