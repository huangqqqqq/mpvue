<template>
<div class="content">
    <image class="banner" :src="bannerUrl" mode="widthFix" />
    <div v-for="(item, i) in cateList" :key="item.id" class="cate-list-wrap">
        <h3 class="title">{{item.name}}</h3>
        <h6 class="subtitle">{{item.frontName}}</h6>
        <ul class="cate-list">
            <li class="cate-item" v-for="(cateItem, j) in item.itemList" :key="cateItem.id"
            v-if="j%2 === 0">
                <div class="left item" @click="goDetail(cateItem)">
                    <image :src="cateItem.picUrl" mode="widthFix" :lazy-load="true" />
                    <p>{{cateItem.name}}--{{j}}</p>
                </div>
                <div class="right item" @click="goDetail(item.itemList[j+1])" v-if="(j+1) < item.itemList.length">
                    <image :src="item.itemList[j+1].picUrl" mode="widthFix" :lazy-load="true" />
                    <p>{{item.itemList[j+1].name}}</p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {
        index: Number
    },
    computed: {
        ...mapState({
            bannerUrl: (state)=>state.home.cateBannerUrl,
            cateList: (state)=>state.home.cateList
        })
    },
    watch: {
        index: {
            handler(newVal){
                console.log('newVal:', newVal);
                // 根据选中的下标计算id
                let pageId = this.$store.state.home.menuList[this.index].id;
                // 发送请求，请求该页面的数据
                 this.$store.dispatch('home/getCategoryListAction', {id: pageId});
            },
            immediate: true
        }
    },
    methods: {
        // 进入详情页面
        goDetail(item){
            wx.navigateTo({
                // url: '/pages/goods-detail/main'
                url: `../goods-detail/main?id=${item.id}`
            })
        }
    }
}
</script>

<style scoped>
.banner{
    width: 100%;
}
.cate-list-wrap .title{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
    padding-top: 14px;
}
.cate-list-wrap .subtitle{
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 18px;
    padding-bottom: 8px;
    margin-top: 10px;
}
.cate-item{
    width: 100%;
    display: flex;
}
.cate-item .item{
    width: 50%;
    box-sizing: border-box;
    padding: 5px;
}
.cate-item .item image{
    width: 100%;
}
</style>
