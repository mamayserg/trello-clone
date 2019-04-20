import Vue from 'vue';
import Vuex from 'vuex';
import GiphyFetcher from '../libraries/giphy/fetcher';

Vue.use(Vuex);

export const DEFAULT_DEPENDENCIES = {
  giphyFetcher: GiphyFetcher.create(),
  randomGenerator: (max) => Math.floor(Math.random() * max)
};

export const RANDOM_SEARCH_TERMS = ['cats in boots', 'simons cat', 'westie in panic', 'nooooo', 'yesss'];


export const createStore = function(libraries) {
  libraries = { ...DEFAULT_DEPENDENCIES, ...libraries };

  return new Vuex.Store({
    state: {

      selectedGif: {}
    },


    mutations: {

    },


    actions: {

    }
  })
};
