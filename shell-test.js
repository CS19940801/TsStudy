const shell = require('shelljs');

if (!shell.which('npm')) {
    shell.echo('无法使用npm')
} else {
    shell.echo('npm安装正常，开始更新代码');
    shell.exec('npm install');
}

if(!shell.which('git')) {
    shell.echo('无法使用git');
}else{
    shell.echo('git安装正常，准备提交代码');
    shell.exec('git add .')
    shell.exec('git commit -am "Auto-commit"')
    console.log(shell.exec('git commit -am "Auto-commit"').code);
}


