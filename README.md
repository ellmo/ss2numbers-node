# System Shock 2 in numbers ![node.js](https://i.imgur.com/KZU7t5Z.png)![express.js](https://i.imgur.com/99Y9XGp.png)![image](https://i.imgur.com/0KoGQzl.png)

_**disclaimer**: this is my first [node.js](http://nodejs.org/) application ever!_

####Uses:
- node.js _(0.10.21)_
- express _(3.4.5)_
- grunt _(0.4.2)_, with:
  - clean
  - copy
  - jade
  - uglify
- jade _(0.35.0)_
- stylus _(0.41.0)_

####Includes:

- jQuery
- underscore.js
- backbone.js
- backbone.marionette
- backbone.stickit
- jaderuntime

####Serves as a reference for building the simplest http apps.

## _important:_
This app relies **heavily** on GRUNT to switch between _production_ and _development_ modes. The repository is always to be kept in _development_ mode with all app (not server) JavaScript files in `/public/js`.

###### SWITCHING MODES WITH DIRTY GIT STAGE IS STUPID

### Production mode

To switch the app to _production_ mode, use `grunt prod`, which will backup all source JavaScript files to `/src/js` direcotry and uglify them into a single `/public/js/app.min.js`. It will also swap `/views/layout.jade` file for a production one, which links 
this uglified file instead of all separate source files.

### Development mode

With the app in _production_ mode you can switch back to _development_ mode running `grunt dev`, which will basically revert the changes and clean the files. You may end up with git showing changes to the `JST` defining script, but nothing major. These should be safe to both `commit` or `checkout -- .`, as they should only differ in time of creation.

###### SWITCHING MODES WITH DIRTY GIT STAGE IS STUPID
