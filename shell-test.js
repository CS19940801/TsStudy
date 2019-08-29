const shell = require('shelljs');

if (!shell.which('node') || !shell.which('npm')) {
    shell.echo('无法使用node&npm','请查看node&npm安装')
} else {
    shell.echo('npm安装正常，开始更新代码');
    shell.exec('npm install');
    shell.exec('npm run build');
}

// if(!shell.which('git')) {
//     shell.echo('无法使用git','请查看git安装');
// } else {
//     shell.echo('git安装正常，准备提交代码');
//     shell.exec('git add .')
//     shell.exec('git commit -am "Auto-commit1"')
//     shell.exec('git push')
//     console.log('看看code', shell.exec('git commit -am "Auto-commit"').code);
// }


