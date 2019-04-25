# EmaGif, a Vue Example Application


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```


### 1. Use Vuex
As it's very easy to integrate and it provides a clear and simple architecture to your application, Vuex should be used for simple projects as well without thinking too much.

### 2. Create Vuex store using a Factory
It can help a lot in testing if the Vuex store is not a singleton entity in your application:

1. You can recreate a new Store with the predefined settings and extensions anytime in any test
2. You can pass dependencies into it and it can help a lot to fake or mock hard-to-test dependencies (eg. a request library).

