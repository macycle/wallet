<template>
    <Layout>
        <!--标签面板-->
        <div class="tags">
            <ul class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <div class="new">
                <button>新增标签</button>
            </div>
        </div>

        <!--备注面板-->
        <div>
            <label class="notes">
                <span class="name">备注</span>
                <input type="text">
            </label>
        </div>

        <!--收支面板-->
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li class="selected">收入</li>
            </ul>
        </div>

        <!--数字面板-->
        <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>ok</button>
                <button>0</button>
                <button>.</button>
            </div>
        </div>
    </Layout>
</template>

<script>
    export default {
        name:'money'
    }
</script>
