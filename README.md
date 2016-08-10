# Vagrant React-Webpack

A basic Vagrant setup with Node.js, NVM, React.js, Webpack, and PostCSS.

Uses the ubunty/trusty64 Vagrant box for the official Ubuntu Server 14.04 LTS (Trusty Tahr) builds.

_Note: While this box includes PostCSS, it sticks with just a couple basic plugins - Autoprefixer and PreCSS. See [this Gist](https://gist.github.com/danielwrobert/cac4a4a44f1430339861) for an example with additional optimization plugins._


## Getting started

To get up and running with this environment, you first need to have Virtualbox and Vagrant installed on your system.

If you don't already have those, visit the downloads pages below and follow the instructions for your operating system:

* [Virtualbox Downloads](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant Downloads](https://www.vagrantup.com/downloads.html)

Once you're set up with those, you can download/clone this repo to the root directory of your project, and run `vagrant up` from your Terminal application.

After everything installs, you can run `vagrant ssh`. This will shell you in to your local Vagrant instance. Have a look around, if you'd like, but the main folder you want to be aware of is the shared `/vagrant` directory. This directory is shared between your virtual machine and your local project directory.


### Project Structure

I have set up the application structure where the React development files are in the `app` directory and the final, complied files are output to the `public` directory. This can be changed to fit your projects needs. Just note that the changes would also need to be reflected in the `webpack.config.js` file.


### Running the Webpack Dev Server

To run the Webpack Dev Server, you will want to move into the aforementioned shared folder on your Vagrant server. If you haven't already, shell into your Vagrant server via the `vagrant ssh` command. From there, type `cd /vagrant`. Now that you're in the right location, you just need to run `npm start` to fire up the Webpack Dev Server.

Once you have the Webpack Dev Server up and running, you can jump over to your browser and visit `localhost:8881` and see that appication is running!

That's all there is to it. Now you have Node.js, NVM, React.js, Webpack, and PostCSS installed in a virtual machine and your local system environment is left untouched!

### Running the Webpack Dev Server

Running the Webpack Dev Server will not actually generate the output files. Instead it keeps and serves the resulting files from memory. When you're ready to generate the final output files for your project, run `npm run bundle`. This will generate everything into the `public` directory and you can distribute from there!

