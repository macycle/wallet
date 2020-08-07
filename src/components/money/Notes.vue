<template>
    <div>
            <label class="notes">
                <span class="name">{{this.fileName}}</span>
                <input type="text" :placeholder="this.placeholder" v-model="value" @input="change">
            </label>
        </div> 
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
    export default class Notes extends Vue{
        value =''
        @Prop({required:true}) fileName!: string;
        @Prop() placeholder?: string;
        change(){
            this.$emit('update:value',this.value)
        }
    }
</script>

<style lang="scss" scoped>
.notes{
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