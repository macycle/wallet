<template>
      <div>
            <ul class="types">
                <li :class="value==='-'?'selected':''"  @click="changeType('-')">支出</li>
                <li :class="value==='+'?'selected':''" @click="changeType('+')">收入</li>
            </ul>
        </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';


@Component
export default class Types extends Vue{
    
    @Prop({default:'-'}) readonly value!: string;
    changeType(type: string){
        if(type!=='-' && type!=='+'){
            throw new Error('type is unknown')
        }
        this.$emit('update:value',type)
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