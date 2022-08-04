// import chalk from 'chalk';
// import concatenate from './concatenate';
// import { program } from 'commander';
const concatenate = require('./concatenate');
const chalk = require('chalk');
const program = require('commander');

module.exports = program
	.command('merge')
	.description(
		`
	  Usage
	  $ ${chalk.green('merge-cli')} merge ${chalk.cyan(
			'<input>'
		)} --output ${chalk.yellow('<output>')}

	  Examples
	  $ ${chalk.green('merge-cli')} merge ${chalk.cyan('file1.mp3')} ${chalk.cyan(
			'file2.mp3'
		)}  -o ${chalk.yellow('file3.mp3')}
	  `
	)
	.argument('<filename1>', 'First mp3 file')
	.argument('<filename2>', 'Second mp3 file')
	.option('-o, --output <filename>', 'output file', 'output.mp3')
	.action(concatenate);

program.parse();

// export default program;
