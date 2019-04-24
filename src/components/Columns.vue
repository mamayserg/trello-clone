<template>
    <div  class="lists-container" >
   <div class="list">
       <div class="head"> to do </div>
       <div class="lists" v-for=" todo in filteredTodos ":class="{ completed: todo.completed, editing: todo == editedTodo}" >


           <md-card >
               <md-card-header>
                   <md-avatar>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57mJ_WCiEU7QOmtRARPFJ1i0Wj20k9mGvd_R7NDV0vPVrpg8duA" alt="Avatar">
                   </md-avatar>

                   <div class="md-title" >{{todo.name}}</div>
                   <div class="md-subhead">Subtitle here</div>

                   <md-menu id="icon" md-size="big" md-direction="bottom-end">
                       <md-button class="md-icon-button" md-menu-trigger>
                           <md-icon >more_vert</md-icon>
                       </md-button>

                       <md-menu-content>
                           <md-menu-item @click="removeTodo(todo)">
                               <span>Удатиь</span>
                               <md-icon>delete</md-icon>
                           </md-menu-item>

                           <md-menu-item @click="editTodo(todo)">
                               <span>Редактировать </span>
                               <md-icon>edit</md-icon>
                           </md-menu-item>
                       </md-menu-content>
                   </md-menu>
               </md-card-header>

               <md-card-expand>
                   <md-card-actions md-alignment="space-between">
                       <md-card-expand-trigger>
                           <md-button class="md-icon-button">
                               <md-icon>keyboard_arrow_down</md-icon>
                           </md-button>
                       </md-card-expand-trigger>
                   </md-card-actions>

                   <md-card-expand-content>
                       <md-card-content>
                           {{todo.title}}
                       </md-card-content>
                   </md-card-expand-content>
               </md-card-expand>
           </md-card>
           <hr class="e-separator e-separator-fullwidth">
       </div>

       <div>
           <div>
               <md-dialog :md-active.sync="active">
                   <md-dialog-title>Preferences</md-dialog-title>

                   <md-field>
                       <label>Card name</label>
                       <md-input v-model="name" maxlength="50"></md-input>
                   </md-field>
                   <md-field>
                       <label>What needs to be done?</label>
                       <md-textarea v-model="newTodo" md-counter="150"></md-textarea>
                   </md-field>
                   <md-dialog-actions>
                       <md-button class="md-primary" @click="active = false">Close</md-button>
                       <md-button class="md-primary" @click="checkTodo">Save</md-button>
                   </md-dialog-actions>
               </md-dialog>
           </div>
           <button class="add-card-btn " @click="active = true"><a> <md-icon >add</md-icon></a>Add a card</button>

       </div>
         <!--<button class="add-card-btn btn"><a > <md-icon >add</md-icon></a>Add a card</button>-->

            </div>
                <h1>todos</h1>
                <input
                       v-model="newTodo"
                       v-on:keyup.enter="addTodo"
                       placeholder="What needs to be done?" autofocus>
                <ul >
                    <li v-for="todo in filteredTodos"
                        :class="{ completed: todo.completed, editing: todo == editedTodo}">
                        <div >{{ todo.name }}
                            <input  type="checkbox" v-model="todo.completed" />
                            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                            <button type="button" class="btn btn-primary"  @click="removeTodo(todo)"></button>
                        </div>
                        <input  type="text"
                               v-model="todo.title"
                               @blur="doneEdit(todo)"
                               @keyup.enter="doneEdit(todo)" />
                    </li>
                </ul>
                <input  id="toggle-all" type="checkbox">
                <label for="toggle-all">Mark all as complete</label>
                <ul ></ul>

    </div>

</template>

<script>
    import Cards from './Cards'
    const STORAGE_KEY = 'todo-storage';
    export default {
        data () {
            return {
                textarea : "",
                active: false,
                name: "",
                newTodo: "",
                todos:[],
                editedTodo: false,
                visibility: 'all',
                completed: false

            }
        },
        created () {
            this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        components: {Cards},
        computed: {
            filteredTodos() {
                return this.$store.state.todos
                //all
                //completed
                //active
                // if(this.visibility === 'all') {
                //     return this.$store.state.todos;
                // }
                // else if ( this.visibility === 'active') {
                //     return this.$store.state.todos.filter(function(todo) {
                //         return !todo.completed;
                //     });
                // }
                // else {
                //     //completed
                //     return this.$store.state.todos.filter(function(todo) {
                //         return todo.completed;
                //     })
                //
                // }
            }

        },
        methods: {
            checkTodo(){
                if (this.editedTodo === true ){
                    this.$store.commit ('updateCard',[this.name,this.newTodo,this.completed])
                    this.editedTodo = false
                    this.completed = false ;

                }
               else {
                    this.addTodo()
                }
            },
            addTodo() {
                this.$store.commit('addCard',[this.name,this.newTodo])
                this.newTodo = '';
                this.name = '';
                this.active= false;


            },
            removeTodo(todo) {
                this.$store.commit('deleteCard',todo)
                // this.todos.splice(this.todos.indexOf(todo), 1);
                // localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
            },
            editTodo(todo) {
            this.active = true;
                this.newTodo = todo.title;
                this.name = todo.name;
                this.completed = todo.completed;
                this.editedTodo = true;


            },
            doneEdit(todo) {
                if (!this.editedTodo) {
                    return
                }
                this.editedTodo = null;
                todo.title = todo.title.trim();
                if (!todo.title) {
                    this.removeTodo(todo);
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
            }
        }

    }
</script>
<style>
    .head{


        line-height: 36px;
        font-size: 20px;
        font-weight: bold;
        border-top-left-radius:  5px;
        border-top-right-radius:  5px;
        padding: 8px;
    }

    .lists-container{
        display: flex;
        width: 31%;
        height:90%;
        background-color: #66a3c7;
        display: flex;
        flex-direction: column;
        padding: 10px;


    }
    .list {
        display: flex;
        flex-direction: column;
        background-color: #e2e4e6;
        max-height: calc(100vh - 11.8rem);
        margin-right: 1rem;
        margin-bottom: 2px;
    }

    .add-card-btn {
        width: 100%;
        display: block;
        font-size: 1.4rem;
        font-weight: 400;
        color: #838c91;
        padding: 1rem;
        text-align: left;
        cursor: pointer;
    }
    column{
        width: 130px;
        heigh-min: 50px;
        background-color: blue;
    }
    #icon{
        position: absolute;
        top: 10px;
        right: 5px;
    }
    .md-title{
        font-size: 20px;
    }
</style>