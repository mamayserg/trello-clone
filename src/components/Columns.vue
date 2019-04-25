<template>
    <div>
        <button class="add-card-btn " @click="listModal = true"><a> <md-icon >add</md-icon></a>Add list</button>
        <div>
            <div>
                <md-dialog :md-active.sync="listModal">
                    <md-dialog-title>LIST</md-dialog-title>
                    <md-field>
                        <label>List name</label>
                        <md-input v-model="newlist" maxlength="50"></md-input>
                    </md-field>
                    <md-dialog-actions>
                        <md-button class="md-primary" @click="listModal = false">Close</md-button>
                        <md-button class="md-primary" @click="checkList">Save</md-button>
                    </md-dialog-actions>
                </md-dialog>
            </div>

        </div>
      <div  class="lists-container" v-for=" list in lists">
        <div class="list"  >
          <div class="head"> {{list.title}}
             <md-menu id="md-menu" md-size="big" md-direction="bottom-end">
                  <md-button class="md-icon-button" md-menu-trigger>
                   <md-icon >more_horiz</md-icon>
                  </md-button>

                 <md-menu-content>
                   <md-menu-item @click="removeList(list)">
                       <span>Delete list</span>
                       <md-icon>delete</md-icon>
                   </md-menu-item>

                   <md-menu-item @click="editList(list)">
                       <span>Edit list </span>
                       <md-icon>edit</md-icon>
                   </md-menu-item>
                  </md-menu-content>
             </md-menu>
          </div>
          <div class="lists" v-for=" card in filteredTodos ">
              <Cards v-bind:todo="card" ></Cards>
             <!--<md-card >-->
               <!--<md-card-header>-->
                   <!--<md-avatar>-->
                       <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57mJ_WCiEU7QOmtRARPFJ1i0Wj20k9mGvd_R7NDV0vPVrpg8duA" alt="Avatar">-->
                   <!--</md-avatar>-->

                   <!--<div class="md-title" >{{todo.name}}</div>-->
                   <!--<div class="md-subhead">Subtitle here</div>-->

                   <!--<md-menu id="icon" md-size="big" md-direction="bottom-end">-->
                       <!--<md-button class="md-icon-button" md-menu-trigger>-->
                           <!--<md-icon >more_vert</md-icon>-->
                       <!--</md-button>-->

                       <!--<md-menu-content>-->
                           <!--<md-menu-item @click="removeTodo(todo)">-->
                               <!--<span>Delete card</span>-->
                               <!--<md-icon>delete</md-icon>-->
                           <!--</md-menu-item>-->

                           <!--<md-menu-item @click="editTodo(todo)">-->
                               <!--<span>Edit card </span>-->
                               <!--<md-icon>edit</md-icon>-->
                           <!--</md-menu-item>-->
                       <!--</md-menu-content>-->
                   <!--</md-menu>-->
               <!--</md-card-header>-->

               <!--<md-card-expand>-->
                   <!--<md-card-actions md-alignment="space-between">-->
                       <!--<md-card-expand-trigger>-->
                           <!--<md-button class="md-icon-button">-->
                               <!--<md-icon>keyboard_arrow_down</md-icon>-->
                           <!--</md-button>-->
                       <!--</md-card-expand-trigger>-->
                   <!--</md-card-actions>-->

                   <!--<md-card-expand-content>-->
                       <!--<md-card-content>-->
                           <!--{{todo.title}}-->
                       <!--</md-card-content>-->
                   <!--</md-card-expand-content>-->
               <!--</md-card-expand>-->
           <!--</md-card>-->
           <!--<hr class="e-separator e-separator-fullwidth">-->
         </div>

               <div>
                   <div>
                       <md-dialog :md-active.sync="cardModal">
                           <md-dialog-title>CARD</md-dialog-title>

                           <md-field>
                               <label>Card name</label>
                               <md-input v-model="name" maxlength="50"></md-input>
                           </md-field>
                           <md-field>
                               <label>What needs to be done?</label>
                               <md-textarea v-model="description" maxlength="300"></md-textarea>
                           </md-field>
                           <md-field>
                               <label>Only images</label>
                               <md-file v-model="image" accept="image/*" />
                           </md-field>
                           <md-dialog-actions>
                               <md-button class="md-primary" @click="cardModal= false">Close</md-button>
                               <md-button class="md-primary" @click="addTodo">Save</md-button>
                           </md-dialog-actions>
                       </md-dialog>
                   </div>
                   <button class="add-card-btn " @click="cardModal= true"><a> <md-icon >add</md-icon></a>Add a card</button>

               </div>
                 <!--<button class="add-card-btn btn"><a > <md-icon >add</md-icon></a>Add a card</button>-->

            </div>
                <!--<h1>todos</h1>-->
                <!--<input-->
                       <!--v-model="newTodo"-->
                       <!--v-on:keyup.enter="addTodo"-->
                       <!--placeholder="What needs to be done?" autofocus>-->
                <!--<ul >-->
                    <!--<li v-for="todo in filteredTodos"-->
                        <!--:class="{ completed: todo.completed, editing: todo == editedTodo}">-->
                        <!--<div >{{ todo.name }}-->
                            <!--<input  type="checkbox" v-model="todo.completed" />-->
                            <!--<label @dblclick="editTodo(todo)">{{ todo.title }}</label>-->
                            <!--<button type="button" class="btn btn-primary"  @click="removeTodo(todo)"></button>-->
                        <!--</div>-->
                        <!--<input  type="text"-->
                               <!--v-model="todo.title"-->
                               <!--@blur="doneEdit(todo)"-->
                               <!--@keyup.enter="doneEdit(todo)" />-->
                    <!--</li>-->
                <!--</ul>-->
                <!--<input  id="toggle-all" type="checkbox">-->
                <!--<label for="toggle-all">Mark all as complete</label>-->
                <!--<ul ></ul>-->

      </div>
    </div>
</template>

<script>
    import Cards from './Cards'
    const STORAGE_KEY = 'todo-storage';
    export default {
        data () {
            return {
                card:{},
                image:null,
                newlist : "",
                textarea : "",
                listModal: false,
                cardModal: false,
                name: "",
                label: "",
                description: "",
                todos:[],
                editedList: false,
                visibility: 'all',
                completed: false

            }
        },
        created () {
            this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        components: {Cards},
        computed: {
            lists (){
                return this.$store.state.lists
            },
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
            addList(){
                if (this.newlist === ""){
                   return
                }
                else {
                this.$store.commit('addColumn',this.newlist);
                this.listModal= false;
                this.newlist = "";}
            },
            editList(list){
                this.listModal= true;
                this.newlist= list.title
                this.editedList= true
            },
            checkList(){
                if (this.editedList === true ) {
                    this.listModal= false;
                }
                else{
                    this.addList();
                }

            },
            addTodo() {
                var now = new Date( )
                var date = now.toLocaleString();
                this.card.name = this.name;
                this.card.image = this.image;
                this.card.description = this.description;

                this.label;
                // save to store
                this.$store.commit('addCard',this.card)

                this.image = undefined ;
                this.description = '';
                this.name = '';
                this.cardModal= false;


            },
            removeList(list) {
                this.$store.commit('deleteList',list);
            },

            editTodo(todo) {
            // this.cardModal = true;
            //     this.newTodo = todo.title;
            //     this.name = todo.name;
            //     this.completed = todo.completed;
            //


            },
            doneEdit(todo) {

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
        padding-left: 8px;

    }

    .lists-container{
        width: 100%;
        height:100%;
        background-color: #66a3c7;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2vw;
        padding: 10px;


    }
    .list {

        display: flex;
        flex-direction: column;
        background-color: #e2e4e6;
        /*max-height: calc(100vh - 11.8rem);*/
        margin-right: 3px;
        margin-bottom: 3px;
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
    #md-menu {
        position: absolute;
        left: 290px;
    }
    .md-title{
        font-size: 20px;
    }
</style>