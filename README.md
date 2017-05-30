# Glad CLI

## Required for Glad CLI and Glad.js

* [Node.js >= 6.5](http://nodejs.org/) (with NPM)
* [Redis](http://redis.io/)

Requires Redis 3.0.2 or greater, since caching uses the [XX option of ZADD](https://redis.io/commands/zadd#zadd-options-redis-302-or-greater).

<br>

## Important This version of Glad JS no longer supports node < 6.5.

If you prefer Node < 6.5, you can use Glad < 1.0.0, or consider using express.

<br>

## Installation

`npm install -g glad-cli`

## Commands / Usage

#### Creating a new project using mongodb and mongoose.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init odm=mongoose`


#### Creating a new project using mongodb and waterline.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init odm=waterline --adapter=sails-mongo`


#### Creating a new project using postgresql and waterline.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init odm=waterline --adapter=sails-postgresql`

#### Creating a new project using mysql and waterline.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init odm=waterline --adapter=sails-mysql`


**You can use any waterline adapter by specifying its `npm` name with the `--adapter` argument**


#### Creating a new project without specifying a database.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init`


#### Create a rest API

- Resources should be singular when you create them.
- `glad api user`


#### Remove a rest API

- `glad destroy user`

#### Starting the app in server mode

`glad s`


#### Starting the app in interactive server mode

`glad s -i`

#### Starting the app in console mode

`glad c`

#### Executing a module in the App context

`glad run path/to/file`
