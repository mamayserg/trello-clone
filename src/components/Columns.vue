<template>
    <div  >
            <section >
                <h1>todos</h1>
                <input
                       v-model="newTodo"
                       v-on:keyup.enter="addTodo"
                       placeholder="What needs to be done?" autofocus>
                <ul >
                    <li v-for="todo in filteredTodos"
                        :class="{ completed: todo.completed, editing: todo == editedTodo}">
                        <div >
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
            </section>
    </div>

</template>

<script>
    const STORAGE_KEY = 'todo-storage';
    export default {
        data () {
            return {
                newTodo: '',
                todos:[],
                editedTodo:null,
                visibility: 'all'

            }
        },
        created () {
            this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        computed: {
            filteredTodos() {
                //all
                //completed
                //active
                if(this.visibility === 'all') {
                    return this.todos;
                }
                else if ( this.visibility === 'active') {
                    return this.todos.filter(function(todo) {
                        return !todo.completed;
                    });
                }
                else {
                    //completed
                    return this.todos.filter(function(todo) {
                        return todo.completed;
                    })

                }
            }

        },
        methods: {
            addTodo() {
                this.todos.push({title: this.newTodo, completed: 'false', id: this.todos.length });
                this.newTodo = '';
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));

            },
            removeTodo(todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
                console.log("daun",this.$store.state.data);
            },
            editTodo(todo) {
                this.editedTodo = todo;

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