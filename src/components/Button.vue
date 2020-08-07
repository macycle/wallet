<template>
    <div class="createTag-wrapper" @click="$emit('click',$event)">
        <button class="button">
            <slot></slot>
        </button>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Labels extends Vue{
    }
</script>

<style lang="scss" scoped>

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