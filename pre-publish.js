const fse = require('fs-extra')

async function preBuild(){
	try {
		await fse.remove('lib')
		await fse.mkdirs('lib')
		await fse.copy('LICENSE', 'lib/LICENSE')
		await fse.copy('README.md', 'lib/README.md')
		await fse.copy('package.json', 'lib/package.json')
	} catch (err){
	   	console.error('OPS!', err)
	}
}

preBuild()
