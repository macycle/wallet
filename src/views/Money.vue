<template>
    <Layout class-prefix="layout">
       
        <!--数字面板-->
       <number-pad />
        
        <!--收支面板-->
       <types />

        <!--备注面板-->
       <notes />

        <!--标签面板-->
        <Tags :data-source="tags"/>   <!--驼峰式作为属性需要转化为-式-->

       
    </Layout>
</template>

<script>
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue'
    export default {
        name:'money',
        data(){
            return{
                tags:['衣','食','住','行','彩票','嫖娼']
            }
        },
        components:{NumberPad,Types,Notes,Tags},
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