
<template>
    <div>


        <md-card>
            <md-card-header>
                <md-avatar>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57mJ_WCiEU7QOmtRARPFJ1i0Wj20k9mGvd_R7NDV0vPVrpg8duA" alt="Avatar">
                </md-avatar>

                <div class="md-title" >{{todo.name}}</div>
                <div class="md-subhead">{{todo.date}}</div>
                <div class="md-subhead" v-if="todo.dateEdit!=undefined">edited :{{todo.dateEdit}}</div>


                <md-menu id="icon" md-size="big" md-direction="bottom-end">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon >more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item @click="removeCard(todo)">
                            <span>Удатиь</span>
                            <md-icon>delete</md-icon>
                        </md-menu-item>

                        <md-menu-item @click="cardModal= true">
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
                       {{myCard.description}}
                    </md-card-content>
                </md-card-expand-content>
            </md-card-expand>
        </md-card>
        <div>
            <md-dialog :md-active.sync="cardModal">
                <md-dialog-title>CARD</md-dialog-title>

                <md-field>
                    <label>Card name</label>
                    <md-input v-model="todo.name" maxlength="50"></md-input>
                </md-field>
                <md-field>
                    <label>What needs to be done?</label>
                    <md-textarea v-model="todo.description" maxlength="400"></md-textarea>
                </md-field>
                <md-field>
                    <label>Only images</label>
                    <md-file v-model="todo.image" accept="image/*" />
                </md-field>
                <md-dialog-actions>
                    <md-button class="md-primary" @click="cardModal= false">Close</md-button>
                    <md-button class="md-primary" @click="editCard">Save</md-button>
                </md-dialog-actions>
            </md-dialog>
        </div>
    </div>

</template>

<script>

export default {
    props:['todo'],
data() {
return {
    card:{},
    cardModal: false,
    name:"",
    description: "",
    image: "",
    feedback:"",
    label: ""
}
},
    methods: {
        editCard() {
            // this.name = this.todo.name;
            // this.description=this.todo.description;
            // this.image=this.todo.image;


            // var editCard = this.$store.state.todos.find((card) => {
            //     return card.id === this.todo.id;
            // });
            //  editCard.name = this.todo.name;
            //  editCard.image = this.todo.image;
            //  editCard.description = this.todo.description;
            //  editCard.feedback = this.todo.feedback;
            //  editCard.label =this.todo.label
            // var now = new Date()
            // editCard.dateEdit = now.toLocaleString();
            // console.log( this.editCard,"EDIR");
            // //  this.$store.commit('updateCard',this.card)
            //
            // this.cardModal = false;

        },
        removeCard(card){
            this.$store.commit('deleteCard',card)
            console.log(card);
        }
    },
    computed:{
        myCard(){
            return this.todo
        }
    }

}
</script>
<style >


#icon{
     position: absolute;
     top: 10px;
     right: 5px;
 }
.md-title{
    overflow-x:hidden;
    padding-right: 5px;

}

md-card {
    width: 320px;
    height: 5px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    overflow-x: hidden;
}



</style>
