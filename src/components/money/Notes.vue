<template>
    <div>
            <label class="notes">
                <span class="name">{{this.fileName}}</span>
                <input type="text" :placeholder="placeholder" :value="value" @input="change($event.target.value)">
            </label>
        </div> 
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
    export default class Notes extends Vue{
        @Prop({default:''}) value!: string;
        @Prop({required:true}) fileName!: string;
        @Prop() placeholder?: string;

        change(value: string){
            this.$emit('update:value',value)
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