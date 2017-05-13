// post npm install action
const fs = require('fs');
const exec = require('child_process').exec;

module.exports = class Installer {

  constructor () {
    this.packagePath = process.cwd() + '/package.json';
    this.package = require(this.packagePath);
    this.addons = (this.package.addons && this.package.addons.filter && this.package.addons) || [];
  }

  install () {
    this.addons.forEach(addon => this.addToDependencies(addon));
    fs.writeFileSync(this.packagePath, JSON.stringify(this.package, null, 2), 'utf8');
    this.npmInstall();
  }

  npmInstall () {
    console.log('installing dependencies...');
    exec('npm install', { cwd : process.cwd() }, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
  }

  addToDependencies (addon) {
    let addonName = Object.keys(addon)[0];
    this.package.dependencies[addonName] = addon[addonName];
  }

}
