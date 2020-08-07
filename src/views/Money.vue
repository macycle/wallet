<template>
    <Layout class-prefix="layout">
        <!--数字面板-->
       <number-pad @update:value='onUpdateMounts' @submit="saveRecord"/>
        
        <!--收支面板-->
       <types :value.sync='record.type'/>

        <!--备注面板-->
       <notes @update:value='onUpdateNotes' fileName="备注:" placeholder="请输入备注"/>

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
import model from '@/model';

@Component({
    components:{NumberPad,Types,Notes,Tags}
})
    export default class Money extends Vue{
        recordList: RecordItem[] = model.fetch();
        tags=window.tagList;
        record: RecordItem = {
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
            model.create(this.record)
        }

        @Watch('recordList')
        onRecordListChange(){
            model.save()
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