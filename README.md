# branch
A WordPress starter theme based on Timber library and Bootstrap. (Forked from [Timber Starter Theme](http://github.com/Upstatement/timber-starter-theme))

<div style="text-align:center">
<a href="http://github.com/JeyKeu/branch"><img src="http://i.imgur.com/dpXBLbu.png" style="display:block; margin:auto; width:100%; max-width:100%"/></a>
<div>


Features
---
- Based on Timber library. 
- Uses Bootstrap and is responsive 
- NPM for package management. 
- SASS 
- Gulp for building
- Browsersync for multi-device testing

Development Prerequisites
---

- [Composer](http://getcomposer.org)
- [Nodejs](http://nodejs.org)
- [Gulp CLI](http://gulpjs.com/)
- [Browsersync](https://browsersync.io/)

Configure for development
---
- Assuming you have installed WordPress, `cd` into `wp-content/themes`
    `composer create-project jeykeu/branch your-theme-name`
- Change to the `your-theme-name` directory
- Open up `style.css` and modify theme name and other details to your liking
- Edit `gulpfile.js` and set `devUrl` to your local WordPress URL in order to use browsersyncing feature
- and then

    `gulp`

Happy theming y'all!!