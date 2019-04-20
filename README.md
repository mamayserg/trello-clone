# EmaGif, a Vue Example Application

> This application is created to propagate the best practices of developing and testing Vue applications. It implements a simple gif searcher where you can fetch gifs from Giphy based on your criteria and also you can get images for random terms.


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

## Practices
#### General guidelines
- Do not use test doubles (mocks, stubs, spies, etc.) unless there is no other way or very hard to test the related entity. The danger of mocking is that you lose the connection between the real usage and the test context and you can make hard-to-find bugs without breaking any tests after a simple refactoring. "Mock objects can give you a deceptive sense of confidence, and that's why you should avoid them unless there is really no alternative.", said Cedric Beust.  
- Always keep tests and code simple. Use idiomatic solutions (eg. Vuex test helpers, map functions, etc.) where you can. 
- Less code means that you have to read and understand less. Of course, it's only true if you keep your code readable! Do not satisfy readable code in favor of "so-called" elegant, short but hard to understand one.

### 1. Use Vuex
As it's very easy to integrate and it provides a clear and simple architecture to your application, Vuex should be used for simple projects as well without thinking too much.

### 2. Create Vuex store 

