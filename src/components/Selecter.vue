<template>
    <div class="selecter">
        <div @click="doOpen()" :class="{'open':open}">{{selected}}</div>
        <ul v-show="open">
            <li v-for="item in options" @click="doSelect(item.option)">{{item.name}}</li>
        </ul>
    </div>
</template>
<style lang="scss">
    .selecter{
        text-align: center;
        position: relative;
        width:100px;
        height:32px;
        line-height:32px;
        border:1px solid gainsboro;
        >div{
            cursor: pointer;
            position: absolute;
            width:100%;
            height:100%;
            &::after{
                 position: absolute;
                 top:0;
                 right:0;
                 height:100%;
                 width: 32px;
                 content: '>';

             }
            &.open::after{
                 content: '∨';
             }

        }
        ul{
            width:100%;
            list-style: none;
            margin:0;
            padding:0;
            position: absolute;
            left:0;
            top:32px;
            border:1px solid gainsboro;
        li{
            border-bottom:1px solid gainsboro;
        }
        }

    }
</style>
<script>
    export default{
        ready(){
            console.log(this.select);
            console.log(this.options);
        },
        data(){
            return{
                open:false
            }
        },
        components:{
        },
        methods:{
            doOpen(){
                this.open = ~this.open;
            },
            doSelect(option){
                this.open = false;
                this.select = option;
            }
        },
        props:{
            options:{
                required:true,
                type:Array,
            },
            select:{
            }
        },
        computed:{
            selected:function(){
                var len = this.options.length;
                for(var i=0;i<len;i++){
                    if(this.options[i].option == this.select){
                        return this.options[i].name;
                    }
                }
                return '';
            }
        }
    }
</script>