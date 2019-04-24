import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


    export const store = new Vuex.Store({
    state: {
        STORAGE_KEY : 'todo-storage',
        todos : [],


        data : "test",


    },


    mutations: {
        addCard(state,[name,description]){
            state.todos.push({name : name, title: description, completed: 'false', id: state.todos.length });
            localStorage.setItem(state.STORAGE_KEY, JSON.stringify(state.todos));

            console.log(" state done",state.todos );

        },
        deleteCard(state,card){
            state.todos.splice(state.todos.indexOf(card), 1);
            localStorage.setItem(state.STORAGE_KEY, JSON.stringify(state.todos))
        },
        updateCard (state,[name,description,status]){

        }

    },


    actions: {

    }
  });
