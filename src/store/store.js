import Vue from 'vue';
import Vuex from 'vuex';
import GiphyFetcher from '../libraries/giphy/fetcher';

Vue.use(Vuex);


    export const store = new Vuex.Store({
    state: {
      data : "test",

      selectedGif: {}
    },


    mutations: {

    },


    actions: {

    }
  });
