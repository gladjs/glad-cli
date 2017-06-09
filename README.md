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

With the command line tool you can easily create new Glad.JS projects, generate APIs, delete APIs, gain console access to your glad apps, run
scripts in the context of your app.

##### Glad CLI supports 4 types of Glad projects.

- Mongodb + Mongoose ODM
- Any Database + Waterline by Sails.JS
- Blank Canvas (Any Database + No ORM/ODM)

You can use multiple databases such as postgresql, mongodb and couchdb for the same project.
If you want an ORM/ODM for this choose `--odm=waterline` and pick an adapter that will become the default.
Otherwise go with the blank canvas option, and install whatever you want.


#### Creating a new project using mongodb and mongoose.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init


#### Creating a new project using mongodb and waterline (Default).

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init --odm=waterline --adapter=sails-mongo`


#### Creating a new project using postgresql and waterline.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init --odm=waterline --adapter=sails-postgresql`

#### Creating a new project using mysql and waterline.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init --odm=waterline --adapter=sails-mysql`


**You can use any waterline adapter by specifying its `npm` name with the `--adapter` argument**


#### Creating a new project without specifying a database.

- Create a new folder for your project
- `cd /path/to/new-folder`
- `glad init --odm=none`


#### Create a rest API

- Resources should be singular when you create them.
- `glad api user`

This will generate the model, controller, and route files.
If you initialized your project with an ORM/ODM, then your endpoints will be semi-functioning REST APIs.
The next step would be to open the model and create the schema. Then head over to the controller and add the additional logic needed by your app.

As mentioned above, when you generate an API using Glad CLI, resources should be singular when you create them. However, your routes will become pluralized. The URLs will become pluralized, but your model and controller will be singular. See the example below.

```
glad api user
  > /users
  > /users/:id
  etc...

glad api dummy
  > /dummies
  > dummies/:id
  etc...
```

In some cases you may want to generate an API that is not associated with a model. In this case you should generate the api with the `--no-model` argument. This will set up the routes and a controller for you.


#### Remove a rest API

- `glad destroy resourceName`


#### Starting the app in server mode

`glad s`

You will likely use nodemon or forever to start your Glad app. This command is available as well. This will not automatically restart your server in case of failure or when you change a file.


#### Starting the app in interactive server mode

`glad s -i`

This command allows you to start your server, and gain REPL (console) access to the server process.


#### Starting the app in console mode

`glad c`

This command boots up your app in console mode. The process does not bind to any ip address or port. This is particularly useful if you ever need console access via ssh. You can have as many console processes as you'd like, however, you can only have 1 server instance running at a time unless each server instance listens on a different port or host.

#### Executing a module in the App context

`glad run path/to/file`

This run command allows you to boot up your app and execute a file in the app context.
The module "file" should export a single function that will be executed in the app context.
See the example below...

```js
  module.exports = function () {
    // .. do stuff
  }
```
