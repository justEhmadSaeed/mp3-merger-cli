const chalk = require('chalk');
const fs = require('fs');

const fileCheck = (file) => {
	if (!fs.existsSync(file)) {
		console.log(chalk.red('ERROR'));
		console.log(chalk.yellow(`File ${file} does not exists.`));
		throw chalk.yellow(`File ${file} does not exists.`);
	}
};

module.exports = async (file1, file2, { output }) => {
	fileCheck(file1);
	fileCheck(file2);
	const stream1 = fs.createReadStream(file1);
	const stream2 = fs.createReadStream(file2);
	const file = fs.createWriteStream(output);

	stream1.on('data', function (chunk1) {
		file.write(chunk1);
	});
	stream1.on('end', function () {
		stream2.on('data', function (chunk2) {
			file.write(chunk2);
		});
	});
	stream2.on('end', function () {
		console.log(chalk.green('mp3 files merged successfully.'));
		file.end();
	});
};
