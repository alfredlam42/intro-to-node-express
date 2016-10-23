# intro-to-react

##Installing Node

[Download Node](https://nodejs.org/en/)

Open the installer and follow the instructions.

##Getting Started

Similar to Sinatra/Ruby there needs to be an file that has a list of gems you need. When working with node, the file is called **package.json**.

You don't manually create the file. You can start it by typing:

```
npm init
```

which ask you a few questions about your application.

###Adding Packages To package.json

As you install your packages, you can type

```
npm install <package name> --save
```

If you forget the --save, you can just run the command again with the --save.

###Installing Express

```
npm install express --save
```

###.gitignore

You definitely should have this created.
The node packages can be added to your commits which is annoying and takes time.

[List of .gitignore files for every language](https://github.com/github/gitignore)

##Intro to Node

Node uses modules. A module is their own Javascript file and have their own scopes that hold their own variables.
Modules are broken down into three key components:

**require()** is used to load modules into your code

**exports** allows you to expose pieces of code that other modules can use

**module** is the file itself which contains all the codes

###Example 1

hello.js
```javascript
var message = 'Hello World!';

exports.sayHello = function(){
  console.log(message);
}
```

app.js
```javascript
var hello = require('hello')
hello.sayHello()
```

###Example 2 - same result as example 1, but different approach

hello.js
```javascript
module.exports = function(){
  var message = 'Hello World!';
  console.log(message);
}
```

app.js
```javascript
var hello = require('hello');
hello();
```

###Building A Node Server

server.js
```javascript
var http = require('http');
var port = 1234;

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end("Hello World!");
}).listen(port);

console.log('Our server is running at http://localhost:'+ port);
```