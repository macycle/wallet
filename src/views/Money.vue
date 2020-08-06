<template>
    <Layout class-prefix="layout">
       
        <!--数字面板-->
       <number-pad @update:value='onUpdateMounts' @submit="saveRecord"/>
        
        <!--收支面板-->
       <types :value.sync='record.type'/>

        <!--备注面板-->
       <notes @update:value='onUpdateNotes'/>

        <!--标签面板-->
        <Tags :data-source.sync="tags" @update:value='onUpdateTags'/>   <!--驼峰式作为属性需要转化为-式-->

       
    </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue'
import {Component, Watch} from 'vue-property-decorator';

type Record={
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;   //可以写Date类
}

@Component({
    components:{NumberPad,Types,Notes,Tags}
})
    export default class Money extends Vue{
        tags=['衣','食','住','行','彩票','嫖娼'];
        recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]') 

        record: Record={
            tags:[],
            notes:'',
            type:'+',
            amount:0,
        }

        onUpdateTags(value: string[]){
           this.record.tags=value
        }
        onUpdateNotes(value: string){
            this.record.notes=value
        }
        
        onUpdateMounts(value: string){
            this.record.amount=parseFloat(value)
        }
        saveRecord(){
            const record2: Record=JSON.parse(JSON.stringify(this.record));    //深拷贝
            record2.createdAt=new Date()
            this.recordList.push(record2)
        }

        @Watch('recordList')
        fuck(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
        }

    }
</script>

<style lang="scss">
 .layout-content{
     display: flex;
     flex-direction: column-reverse;
 }
    
</style>

<style lang='scss' scoped>
@import '~@/assets/style/reset.scss';
</style>