<template>
    <div class="createTag-wrapper" @click="$emit('click',$event)">
        <button class="button" :class="{[classPrefix+'-button-color']:classPrefix}">
            <slot></slot>
        </button>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Labels extends Vue{
        @Prop() classPrefix?: string;
        
    }
</script>

<style lang="scss" >

.createTag-wrapper{
    
    text-align: center;
    padding:16px;
    margin-top:44-16 px ;
    font-family: Arial, Helvetica, sans-serif; 

    .button{
    background: rgb(160, 160, 160);
    color:white;
    border-radius: 4px;   
    border:none;
    height: 40px;
    padding:0 16px
  }
}


</style>