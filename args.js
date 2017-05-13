const { Promise } = require('bluebird');
let { includes } = require('lodash');
let path = require('path');

class Args {

  constructor () {
    this.args = require('minimist')(process.argv.slice(2));
    this.cmd = this.args['_'];
    this.configPath  = path.join(process.cwd(), 'config');
    this.actions = [];
  }

  processArgs () {
    (this.cmdHas('init') || this.cmdHas('initialize')) && this.action('initialize');
    (this.cmdHas('a') || this.cmdHas('api')) && this.action('api');
    (this.cmdHas('destroy') || this.cmdHas('d')) && this.action('destroy');
    this.cmdHas('run') && this.action('run');
    (this.cmdHas('s') || this.cmdHas('serve')) && this.action('serve');
    !!this.args['i'] && this.action('interactive');
    (this.cmdHas('c') || this.cmdHas('console')) && this.action('console');
    (!!this.args['v'] || !!this.cmdHas('version')) && this.action('version');
    (!!this.args['h'] || !!this.cmdHas('help')) && this.action('help');
    (!this.cmd.length && !this.args) && this.action('help');
    !process.argv.slice(2).length && this.action('empty');

  }

  validateActions () {
    // running serve
    if (this.actionHas('serve')) {
      if (this.actionHas('console')) {
        this.nope('You can not run serve and console in the same command. If you need repl access (console) while serving, use the interactive flag. `glad s -i`');
      } else if (this.actions.length > 2 && this.actions[1] !== 'interactive') {
        this.nope('Only the interactive command is allowed in conjunction with the serve command');
      }
    }

    // running console
    if (this.actionHas('console') && this.actions.length > 1) {
      this.nope('The console command can not be combined with other commands or flags. Usage: `glad c` or `glad console`');
    }

    // running init
    if (this.actionHas('initialize') && this.actions.length > 1) {
      this.nope('The initialize command can not be combined with other commands or flags except the odm declaration. Usage: `glad init` or `glad init --odm=[mongoose|waterline]`');
    }

    // running api
    if (this.actionHas('api') && this.actions.length > 1) {
      this.nope('The api command can not be combined with other commands Usage: `glad api users` or `glad a users`');
    }

    // running version
    if (this.actionHas('version') && this.actions.length > 1) {
      this.nope('The version command can not be combined with other commands Usage: `glad -v` or `glad version`');
    }

    // running destroy
    if (this.actionHas('destroy') && this.actions.length > 1) {
      this.nope('The destroy command can not be combined with other commands Usage: `glad destroy users` or `glad d users`');
    }

  }

  cmdHas (str) {
    return includes(this.cmd, str);
  }

  action (str) {
    this.actions.push(str);
  }

  actionHas (str) {
    return includes(this.actions, str);
  }

  nope (err) {
    console.error(err);
    process.exit();
  }

}


module.exports = Args;
