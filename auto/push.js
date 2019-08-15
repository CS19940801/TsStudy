let shell = require('shelljs');

console.log(shell);

shell.exec('git add .')
shell.exec("git commit -am 'autocommit'")
shell.exec('git push')