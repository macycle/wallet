<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click="goBack"/>
            <span class="title">编辑标签</span>
            <span></span>
        </div>
        <div class="note-wrapper">
             <Notes :value="tag.name" @update:value="update" file-name="标签名:" placeholder="请输入标签名" ></Notes>
        </div>
        <Button class="edit" @click="remove" class-prefix="delete">删除标签</Button>
    </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Notes from '@/components/money/Notes.vue';
import Button from '@/components/Button.vue';

@Component({
    components:{Notes,Button},
    })
    export default class EditLabel extends Vue{
        get tag(){
            return this.$store.state.currentTag;
        }
        created() {
            const id=this.$route.params.id;   //进入页面就可以获取params.id
            this.$store.commit('fetchTags');
            this.$store.commit('setCurrentTag',id);
             if (!this.tag) {
                this.$router.replace('/404');
            }
        }
        update(name: string){
            if(this.tag){
                this.$store.commit('updateTag',{id:this.tag.id,name});
            }
        }
        remove(){
            if(this.tag){
                this.$store.commit('removeTag',this.tag.id)
            }
            
        }
        goBack(){
            this.$router.back()
        }
    }
</script>

<style lang="scss" scoped>
::v-deep .delete-button-color {
    background:#f34856;
}

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