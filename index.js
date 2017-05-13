#!/usr/bin/env node
let chalk = require('chalk');
let Args = require('./args');
let Command = require('./commands');
let args = new Args();

args.processArgs();
args.validateActions();
new Command(args.actions, args.args);
