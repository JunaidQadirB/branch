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
- Uses SASS 
- Uses Gulp for building and auto reloading 

Development Prerequisites
---

- [Composer](http://getcomposer.org)
- [Nodejs](http://nodejs.org)
- [Gulp](http://gulpjs.com/)
- [Browsersync](https://browsersync.io/)

Configure for development
---

- Clone the repo in to the themes directory of your development WordPress installation.

    `git clone https://github.com/JeyKeu/branch.git your-theme-name`
    
- Change to the `your-theme-name` directory
- Remove the `.git` directory and run `git init` to initialize your own git repo
- Open up `style.css` and modify theme name and other details to your liking
- Make sure you have `nodejs` installed and run

    `composer install`
    
- and then

    `gulp`

Happy theming y'all!!
