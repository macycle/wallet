<template>
      <div>
            <ul class="types">
                <li :class="type==='-'?'selected':''"  @click="changeType('-')">支出</li>
                <li :class="type==='+'?'selected':''" @click="changeType('+')">收入</li>
            </ul>
        </div>
</template>

<script>
    export default {
        name:'types',
        data(){
            return {
                type:'-',    //'+'代表收入，'-'代表支出
            }
        },
        methods:{
            changeType(type){
                if(type!=='-'&&type!=='+'){    
                    throw new Error('type is unknown')
                }
                this.type=type;
            }
        }
    }
</script>

<style lang="scss" scoped>
.types{
    background:#c4c4c4;
    display: flex;
    text-align:center;
    font-size:24px;
    > li{
        display: flex;
        flex: 1;
        height: 64px;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected::after{   /*after是控制selected的伪类 */
           content: '';
           position: absolute;
           bottom:0;
           left: 0;
           width:100%;
           height:4px;
           background:#333

        }
    }
}
</style>