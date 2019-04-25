<template>
    <div>
    <md-toolbar class="md-primary">
        <a href=""> <md-icon>menu</md-icon></a>
        <a href="#"> <md-icon>home</md-icon></a>
        <md-avatar>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57mJ_WCiEU7QOmtRARPFJ1i0Wj20k9mGvd_R7NDV0vPVrpg8duA" alt="Avatar">
        </md-avatar>
    </md-toolbar>

    </div>
</template>
<script>
  export default {
data() {
return {
    active: false,
    newlist:""
}},
      methods: {
          addList(){
              this.active =false
          }
      }

}
</script>
<style>
    </style>