#Build Your Own Starter

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
..* If passed a **string**: the string is resolved to a module which is loaded upon startup
..* If passed an **array**: All modules are loaded upon startup. The last one is exported
3. module.loaders: this section specifies how each file should be processed before it is combined into your bundle. The only loader that we currently have is Babel.
4. resolveLoader: where webpack will look for loaders - such as Babel
5. resolve: where webpack should look for files referenced be an `import` or `require()` statement. This allows you to import npm packages in your code.
