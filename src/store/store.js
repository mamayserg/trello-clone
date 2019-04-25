import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


    export const store = new Vuex.Store({
    state: {
        STORAGE_KEY : 'todo-storage',
        todos : [],
        lists : [],
        data : "test",


    },


    mutations: {
        addColumn(state,name){
            state.lists.push({title: name,id: state.lists.length,cards:[]} )
            localStorage.setItem(state.STORAGE_KEY, JSON.stringify(state.lists));
            console.log(" state done",state.lists );
        },
        deleteList(state,list){
            state.lists.splice(state.lists.indexOf(list), 1);
            localStorage.setItem(state.STORAGE_KEY, JSON.stringify(state.lists))
        },
        addCard(state,card){
            var now = new Date()
            card.date = now.toLocaleString();

            card.id = state.todos.length
            state.todos.push(card);
            localStorage.setItem(state.STORAGE_KEY, JSON.stringify(state.todos));

            console.log(" state done",state.todos );

        },
        deleteCard(state,card){
            state.todos.splice(state.todos.indexOf(card), 1);
            localStorage.setItem(state.STORAGE_KEY, JSON.stringify(state.todos))
        },
        updateCard (state,card){

            localStorage.setItem(STORAGE_KEY, JSON.stringify(card));

        }

    },


    actions: {

    }
  });
