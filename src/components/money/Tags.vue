<template>
    <div class="tags">
            <div class="new">
                <button @click="createTag">新增标签</button>
            </div>
            <ul class="current">
                <li v-for="item in dataSource" :key="item.id" @click="toggle(item)" :class="selectedTags.indexOf(item)>=0?'selected':''">{{item.name}}</li>    <!--有多少个数据项，就生成多少个li，每个li的item都不一样；-->
            </ul>
            
        </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';
    import tagListModel from '@/tagListModel';
    tagListModel.fetch();

@Component
    export default class Notes extends Vue{
       @Prop() dataSource: string[] | undefined;
       selectedTags: string[]=[];    //默认是一个数组；用来存放选中的tags;
       tags=tagListModel.data;

       toggle(tag: string){
           const index=this.selectedTags.indexOf(tag);
           if(index>=0){
               this.selectedTags.splice(index,1)
           }else{
               this.selectedTags.push(tag);
           }
           this.$emit('update:value',this.selectedTags)   //当我toggle变化的时候就会触发$emit
       }
       
        createTag(){
            const name=window.prompt('请输入标签名');
            if(name){
                const message=tagListModel.create(name)
                if(message === 'duplicated'){
                    window.alert('标签名重复')
                }else if(message==='success'){
                    window.alert('添加成功')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.tags{
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current{
        display: flex;
        flex-wrap: wrap;
        $bg:#d9d9d9;
        > li{
            background-color: $bg;
            $h:24px;
            height:$h;
            border-radius:($h/2);
            padding: 0 16px;
            margin-right: 12px;
            line-height: $h;
            margin-top: 4px;
            &.selected{
                background:darken($bg,50%);
                color:white
            }
            
        }
    }
    > .new{
        padding: 10px 2px 0;
        button{
            background:transparent;
            border:none;
            color:#999;
            border-bottom:1px solid;
            padding: 0 4px;

        }
    }
}
</style>