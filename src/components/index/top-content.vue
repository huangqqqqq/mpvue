<template>
<div class="top content">
    <swiper class="banner" :indicator-dots="true"
        indicator-color="#fff" indicator-active-color="#b4282d"
        :autoplay="true" :interval="3000"
        :circular="true">
        <swiper-item v-for="item in bannerList" :key="item.id">
            <image :src="item.picUrl" mode="widthFix" />
        </swiper-item>
    </swiper>

    <!-- 品牌制造商直供 -->
    <div class="tag-list">
        <div class="tag-item" v-for="item in tagList" :key="item.id">
            <image :src="item.picUrl" mode="widthFix" />
        </div>
    </div>

</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            // 轮播图数据
            bannerList: (state)=>state.home.bannerList,
            tagList: (state)=>state.home.tagList
        })
    },
    created(){
        // 请求轮播图
        this.$store.dispatch('home/getBannerAction');
        // 请求品牌制造商直供数据
        this.$store.dispatch('home/getTagAction');
    }
}
</script>

<style scoped>
.banner{
    height: 200px;
}
.banner image{
    width: 100%;
}
.tag-item{
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    float: left;
}
.tag-item image{
    width: 100%;
}
</style>
