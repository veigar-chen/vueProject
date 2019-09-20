<template>
    <div class="mascotShow">
        <div class="gPhoto"></div>
        <span class="gPrice">￥100</span>
        <p class="gDescription">商品描述</p>
        <span class="shopName">商店名</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            props:[]
        }
    },
    props:["goods"]
}
</script>

<style lang="scss">
    .mascotShow{
        width: 240px;
        height: 300px;
        background-color: #d1f;
        // margin: 10px 10px ;
        overflow-y: no;
    }
    .gPhoto{
        width: 100%;
        height: 70%;
        background-color: blue;
    }

    .gPrice{
        color: #FF4466;
        font-size: 24px;
    }

    .gDescription{
        margin: 10px 0;
        color: #49F210;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .shopName{
        color:#ccc;
        font-size: 14px;
    }
</style>