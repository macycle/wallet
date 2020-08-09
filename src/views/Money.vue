<template>
    <Layout class-prefix="layout">
        <!--数字面板-->
       <numberPad :value.sync="record.amount" @submit="saveRecord"/>
        
        <!--收支面板-->
       <Tabs :data-source="typeList" :value.sync='record.type'/>

        <!--备注面板-->
       <Notes fileName="备注:" :value.sync="record.notes" placeholder="请输入备注"/>

        <!--标签面板-->
        <Tags @fuck="onUpdateTags"/>   <!--驼峰式作为属性需要转化为-式-->

       
    </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import Tabs from '@/components/Tabs.vue'
import {Component} from 'vue-property-decorator';

@Component({
    components:{NumberPad,Notes,Tags,Tabs},
    
})
    export default class Money extends Vue{
        typeList=[{text:'支出',value:'-'},{text:'收入',value:'+'}]
        get recordList(){
            return this.$store.state.recordList;
        }

        record: RecordItem = {
            tags: [],
            amount:0,
            notes:'',
            type:'+',
            
        }

        created() {
            this.$store.commit('fetchRecords')   //一开始从localstorage获取数据
        }

        onUpdateNotes(value: string){
            this.record.notes=value
        }

        onUpdateTags(value: Tag[]){
            this.record.tags=value;
        }
        
        saveRecord(){
            if(!this.record.tags||this.record.tags.length===0){
                return window.alert('请至少选择一个标签')
            }
            this.$store.commit('createRecord',this.record);
            if(this.$store.state.createRecordError===null){
                window.alert('已保存');
            }
            
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