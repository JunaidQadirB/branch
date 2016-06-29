# branch
A WordPress starter theme based on Timber library and Bootstrap. (Forked from [Timber Starter Theme](http://github.com/Upstatement/timber-starter-theme))

<div style="text-align:center">
<a href="http://github.com/JeyKeu/branch"><img src="http://i.imgur.com/dpXBLbu.png" style="display:block; margin:auto; width:100%; max-width:100%"/></a>
<div>


Features
---
- Based on Timber library. 
- Uses Bootstrap and is responsive 
- Uses NPM for package management. 
- Uses Less 
- Uses Grunt for building and auto reloading

Theme Prerequisites
---
Timber-library WordpPress plugin. Get it from [here](https://downloads.wordpress.org/plugin/timber-library.0.22.6.zip) or [here](https://github.com/timber/timber/tree/0.22.6)

Development Prerequisites
---

- [Nodejs](http://nodejs.org)
- [Grunt](http://gruntjs.com/) - `npm install -g grunt-cli`
- [LiveReload] (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) Chrome extension (optional)

Configure for development
---

- Clone the repo in to the themes directory of your development WordPress installation.

    `git clone https://github.com/JeyKeu/branch.git your-theme-name`
    
- Change to the `your-theme-name` directory
- Remove the `.git` directory and run `git init` to initialize your own git repo
- Open up `style.css` and modify theme name and other details to your liking
- Edit `grunt/open.js` and replace `http://localhost` to match your WordpPress installation URL.
- Make sure you have `nodejs` installed and run

    `npm install`
    
- and then

    `grunt watch`

Happy theming y'all!!
