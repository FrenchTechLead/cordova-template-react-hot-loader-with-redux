![Image of the month picker](https://user-images.githubusercontent.com/10856604/27512150-4728d672-5937-11e7-854a-7df65ecff4c4.png)
#   Cordova / Phonegap, React, Redux Template
This work is mostly inspired by [this](https://github.com/phonegap/phonegap-template-react-hot-loader) project.

### Presentation
This template mixes Cordova with React And Redux in order to develop some efficient apps with almost zero configuration, you can use ES6 syntax to write your components based on this template.


### Requirements
the following software need to be installed :
* Npm
* Cordova 
* SDK of your target Device(s) (iOS / Android)

### Installation
```shell
git clone https://github.com/Meshredded/cordova-template-react-hot-loader-with-redux
cd cordova-template-react-hot-loader-with-redux
npm install 
```
### Run:
##### Web Browser:
```shell 
npm start 
```
Then go to : [http://localhost:8080](http://localhost:8080).
##### Android:
```shell 
cordova platform add android
cordova run android
```
##### iOS:
```shell 
cordova platform add ios
cordova run ios
```
In this mode, the app will live-reload changes to React components using react-hot-loader and CSS changes using the Webpack CSS loader.

### Build the app for production
To build the app without the development hot module reloading server:
```shell 
npm run build 
```
This will switch your `config.xml` file to production mode, build the app bundle to `/www` using Webpack, and run `cordova build` for you.

### Issues :
For any suggestion you can [open an issue here](https://github.com/Meshredded/cordova-template-react-hot-loader-with-redux/issues).

### Licence :
MIT
