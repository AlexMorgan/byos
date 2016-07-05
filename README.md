[#Build Your Own Starter](https://github.com/ahfarmer/minimal-react-starter)

##NPM
`npm init [-f|--force|-y|--yes]` - creates a package.json file | If invoked with flags it will only used defaults and not prompt you for any options

`npm install` - command can be used to install all dependencies


##Babel
- Babel transforms the ES6 JavaScript that we will be writing into ES5 JavaScript that current browsers can understand.
- Babel is particularly important for React developers because of JSX.
    - [JSX](https://facebook.github.io/jsx/) is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.

    Install Babel

    ```
    npm install --save babel-core
    npm install --save babel-preset-es2015
    npm install --save babel-preset-react
    ```
        - Adds two additional packages for making ES6 JS, ES5 compatible.

    - The .babelrc file configures Babel to use the presets that we just installed.

##Webpack
[Webpack](http://webpack.github.io/docs/what-is-webpack.html) is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. It bundles all your JavaScript together into a single file. This includes each JavaScript file that you write as well as your npm packages. Webpack also works with Babel to convert your JS from ES6 to ES5 while you work. It also has the capability of of minifying your .js for production

###Webpack Config - [Setting configuration options](https://webpack.github.io/docs/configuration.html)
1. context: the path to your client-side JS folder. MUST be an absolute path. The base directory for resolving the 'entry' option
2. entry: this is the entry point to your application.
⋅⋅* If passed a **string**: the string is resolved to a module which is loaded upon startup
⋅⋅* If passed an **array**: All modules are loaded upon startup. The last one is exported
3. module.loaders: this section specifies how each file should be processed before it is combined into your bundle. The only loader that we currently have is Babel.
4. resolveLoader: where webpack will look for loaders - such as Babel
5. resolve: where webpack should look for files referenced be an `import` or `require()` statement. This allows you to import npm packages in your code.

Note: `babel-loader` is a Webpack "loader". It supports running Babel from Webpack. Typically any npm package ending in '-loader' if for Webpack

##Compile
Adding an [npm script](https://docs.npmjs.com/misc/scripts) called `compile` will handle the scripts property of the package.josn

```
npm run compile
```

Running the line of code above creates a file called www/bundle.js. Here you will see your main.js 'Hello World' code as well as a lot of Webpack boilerplate. It's not typical to run `npm run compile` very often, this is just used as an example to be familiar with what Webpack does. After you're done with this step, remove the wwww/bundle.js file - We don't need it in the future.


##Express
A React  development environment needs to be able to show your app in a browser. We'll be using Express as our server to achieve this. We'll add a server.js file, that will run an Express server, which runs Webpack. Anytime you make a change to a .js file Webpack will rerun. The index.html file that we create in this step ill act as our first webpage. Express is configured to serve all files in the /www folder.

###server.js
server.js is server-side Javascript. WE can run it with the following command:

`node server.js`

We'll also be adding a 'start' script (in our package.json file) to run the server in this step:

`npm start`

Note: npm will default the 'start' command to node server.js if there is a server.js file in the root of your package.

##React
Installing React package:
`npm install --save react react-dom`


####Source:
- http://andrewhfarmer.com/build-your-own-starter/#8-done
