<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click="goBack"/>
            <span class="title">编辑标签</span>
            <span></span>
        </div>
        <div class="note-wrapper">
             <Notes :value="tag.name" @update:value="updateTag" file-name="标签名:" placeholder="请输入标签名" ></Notes>
        </div>
        <Button class="edit" @click="remove">删除标签</Button>
    </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/tagListModel';
import Notes from '@/components/money/Notes.vue';
import Button from '@/components/Button.vue'

@Component({components:{Notes,Button}})
    export default class EditLabel extends Vue{
        tag?: {id: string;name: string}=undefined;
        created() {
            const id=this.$route.params.id;
            tagListModel.fetch();
            const tags=tagListModel.data;
            const tag=tags.filter(t=>t.id===id)[0];
            if(tag){
                this.tag=tag;
            }else{
                this.$router.replace('/404')
            }
        }
        updateTag(name: string){
            if(this.tag){
                tagListModel.update(this.tag.id,name);
            }
        }
        remove(){
            if(this.tag){
                if(tagListModel.remove(this.tag.id)){
                    this.$router.back()
                }else{
                    window.alert('删除失败')
                }
            }
            
        }
        goBack(){
            this.$router.back()
        }
    }
</script>

<style lang="scss" scoped>
.edit{
   text-align: center;
   padding-top: 16px;
   margin-top: 44px;

}

.note-wrapper{
    background-color: white;
    margin-top: 8px;
}

.navBar{
    text-align: center;
    font-size:20px;
    padding:12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
}
</style>