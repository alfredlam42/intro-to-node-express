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