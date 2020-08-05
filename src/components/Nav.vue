<template>
    <nav class="nav">
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name='labels'/>
            标签
        </router-link>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name='money'/>
        记账
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name='statistics'/>
        统计
        </router-link>
    </nav>
</template>


<style lang="scss" scoped>
@import '~@/assets/style/global.scss';
    .nav{
        display: flex;
        box-shadow:0 0 3px rgba(0,0,0,0.25);
        flex-direction: row;
        font-size: 15px;
        > .item{
            padding: 2px 0;
            display: flex;
            flex:1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon{
                width: 30px;
                height: 30px;
            }
            
        }
        > .item.selected{
            background-color: $color-buttoncolor
        }
    }
</style>