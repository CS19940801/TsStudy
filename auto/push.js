let shell = require('shelljs');

shell.exec('git add .')
shell.exec("git commit -am 'autocommit'")
shell.exec('git push')