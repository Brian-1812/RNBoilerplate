# RNBoilerplate
Ready to go React Native Boilerplate

## Integrations with:
  - React-Navigation for navigation
  - Redux & Redux Persist (Pesisting Data) & Redux Saga (for asynchrounous calls)
  - SplashScreen and Android Navigation Bar Color Change Support
  - Multilanguage (internationalization and localization) support
  - FastImage for image caching
  - React-native-vector-icons & SVGs for custom icons & lottie animations
  - Call APIs with Axios client (api.get, etc)
  - React-native-sensitive-info for storing tokens, etc..

## Installation
 Clone this repository
```sh
$ git clone https://github.com/Brian-1812/RNBoilerplate.git
```
Install dependencies
```sh
$ npm install
``` 
or 
```sh 
yarn 
```

## Rename the project and customize the SplashScreen, and you're ready to go 😊

## Using RN-Vector & SVG icons & JSON animations
- SVGs
  Just copy your SVGs into Assets/SVG folder and import into index.js in Assets/SVG
  You can then use it by
  ```
  import SVGIcon from 'path_to_asset_folder/SVG'
  ```
  and
  ```
  <SVGIcon.YourIconName width={width} height={height} />
  ```
- JSON
  ```
  import LottieView from 'lottie-react-native'
  ```
  and import json file:
  ```
  const animation = require('path_to_json_file')
  ```
  and use it with:
  ```
  <LottieView source={animation}/>
  ```
