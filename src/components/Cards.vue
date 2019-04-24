
<template>
    <div>


        <md-card>
            <md-card-header>
                <md-avatar>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57mJ_WCiEU7QOmtRARPFJ1i0Wj20k9mGvd_R7NDV0vPVrpg8duA" alt="Avatar">
                </md-avatar>

                <div class="md-title" >Titleheredыыыыыыыыыыыы  ыыыыыыыыыыыыыыыыыыыыыы</div>
                <div class="md-subhead">Subtitle here</div>

                <md-menu id="icon" md-size="big" md-direction="bottom-end">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon >more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item @click="">
                            <span>Удатиь</span>
                            <md-icon>delete</md-icon>
                        </md-menu-item>

                        <md-menu-item @click="">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                    </md-card-content>
                </md-card-expand-content>
            </md-card-expand>
        </md-card>
        <hr class="e-separator e-separator-fullwidth">
    </div>

</template>

<script>

export default {
data() {
return {
}
},
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
    margin: 10px;
    display: inline-block;
    vertical-align: top;
    overflow-x: hidden;
}



</style>
