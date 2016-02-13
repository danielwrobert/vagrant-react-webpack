# Vagrant React-Webpack

A basic Vagrant setup with Node.js, NVM, React.js, Webpack, Ruby, and Sass.

Uses the ubunty/trusty64 Vagrant box for the official Ubuntu Server 14.04 LTS (Trusty Tahr) builds.

## Getting started

To get up and running with this environment, you first need to have Virtualbox and Vagrant installed on your system.

If you don't already have those, visit the downloads pages below and follow the instructions for your operating system:

* [Virtualbox Downloads](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant Downloads](https://www.vagrantup.com/downloads.html)

Once you're set up with those, you can download the `Vagrantfile` from this repo, place it in the root directory of your project, and run `vagrant up` from your Terminal application.

After everything installs, you can run `vagrant ssh`. This will shell you in to your local Vagrant instance. Have a look around, if you'd like, but the main folder you want to be aware of is the shared directory. This directory is shared between your virtual machine and your local project directory. In this setup (and the default Vagrant setup) that is the `/vagrant` folder.

### Setting Up A Webpack Config File

Now you'll want to set up a basic Webpack config file. Below is just a basic example. If you want additional tools added to your project, you can certainly alter this to fit your needs.

In your project's root directory, create a file called `webpack.config.js` and paste in the below contents:

```
var webpack = require('webpack');

module.exports = {
  entry: {
    'vagrant-react-webpack': [
      'webpack-dev-server/client?http://localhost:8881/',
      'webpack/hot/only-dev-server',
      './app/main.js'
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    publicPath: 'http://localhost:8881/',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: "eval-source-map"
};
```
Note: If you are shelled into your Vagrant instance, you can also do this from the aforementioned shared directory. You also likely want to change the `'./app/main.js'` and the `vagrant-react-webpack` lines above to match with your projects name and configuration.


### Running the Webpack Dev Server

To run the Webpack Dev Server, you will want to add a line to your `package.json` file. You can do this from your project folder on your local machine with your preferred text editor. Alternatively, you can edit this file while logged in to your Vagrant instance via `vagrant ssh`, as mentioned previously. If you take the altter approach, you will want to move into the shared folder, `cd /vagrant` and open the file with a native system editor, such as Vim.

Regardless of how you choose to edit, once you have the `package.json` open, you want to add the following line to the `"scripts"` block:

```
"start": "webpack-dev-server --config ./webpack.config.js --hot --port 8881"
```
This line in the `package.json` file allows you to utilize the `npm start` command. So while in your Vagrant server (`vagrant ssh`), make sure you're in the shared directory (`cd /vagrant`) and run `npm start`.

Once you have the Webpack Dev Server up and running, you can jomp over to your browser and visit `localhost:8881` and see that your server is running!

Note that, since we're using localhost, you may need to run `npm start --host 0.0.0.0` for the server to be available from outside of your Vagrant instance (i.e., your local web browser). You can keep this running in a separate Terminal tab (or screen, whatever your preference) and then work on your project files from your project directory on your system with your preferred editor.

That's all there is to it. Now you have Node.js, NVM, React.js, Webpack, Ruby, and Sass installed in a virtual machine and your local system environment is left untouched!
