<template>
    <div>
        <div>
            <!--<Selecter select="ggg" :options="options"></Selecter>-->
        </div>
        <a v-link="{name:'index'}">hosssme</a>
        <a v-link="'/root'">frrrrrr</a>
    </div>
</template>
<style>
</style>
<script>
    import Selecter from './Selecter';
    export default{
        data(){
            return{
                msg:'hello vue',
                options:[
                    {
                        name:'wc',
                        option:'ssss'
                    },
                    {
                        name:'wcg1',
                        option:'wcg21'
                    },
                    {
                        name:'wcg2',
                        option:'wcg21'
                    },
                    {
                        name:'gg',
                        option:'ggg'
                    }
                ]
            }
        },
        components:{
            Selecter,
        }
    }
</script>