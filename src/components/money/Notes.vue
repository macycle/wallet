<template>
    <div>
            <label class="notes">
                <span class="name">备注:</span>
                <input type="text" placeholder="在这里输入备注" v-model="value" @input="change">
            </label>
        </div> 
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
    export default class Notes extends Vue{
        value =''
        change(){
            this.$emit('update:value',this.value)
        }
    }
</script>

<style lang="scss" scoped>
.notes{
    background:#f5f5f5;
    display: flex;
    padding-left: 16px;
    align-items: center;
    .name{
        padding-right:16px;
    }
    input{
        height:64px;
        flex-grow: 1;
        background:transparent;
        padding-right: 16px;
        border:none
    }
}
</style>