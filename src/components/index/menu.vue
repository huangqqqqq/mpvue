<template>
  <scroll-view class="menu-wrap" :scroll-x="true">

    <ul class="menu-list" :style="{width: width + 'px'}">

      <li class="menu-item" v-for="(item, index) in menuList" :key="item.id" :class="{active: index === selecteIndex}"
      @click="selectMenu(index)">
        {{ item.name }}

      </li>

    </ul>

  </scroll-view>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      selectIndex: 0
    }
  },

  computed: {
    ...mapState({
      list: state => state.home.menuList
    }),

    menuList () {
      return [{id: 0, name: '推荐'}, ...this.list];
    },

    width () {
      return this.menuList.length * 80;
    }
  },

  created() {
    // 请求数据
    this.$store.dispatch('home/getMenuAction');
  },

  methods: {
    // 切换菜单
    selectMenu (index) {
      // 修改样式
      this.selectIndex = index;

      // 传递下标给index页面，切换组件
      this.$emit('selected', index);
    }
  }
}
</script>

<style>
.menu-wrap{
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
}
.menu-list{
    display: flex;
}
.menu-item{
    flex: 1;
    font-size: 12px;
    color: #333;
    text-align: center;
    height: 14px;
    padding: 3px 0;
}
.menu-item.active{
    color: #b4282d;
    border-bottom: 2px solid #b4282d;
}
</style>

