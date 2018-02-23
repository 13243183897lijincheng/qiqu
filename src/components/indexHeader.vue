<template>
  <div :class="{index_header:true,hideStatus:hideHeader}">
    <div class="index_user"></div>
    <div class="index_add"></div>
    <ul class="index_nav_list">
      <li @click="switchTab({name: item, index: index})"  :class="{ index_nav_item: true, checked: checkedIndex == index}" v-for=" (item, index) in navList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      navList: ['精选', '视频', '段子', '发现', '奇趣专栏'],
      checkedIndex: 0
    }
  },
  computed: {
    ...mapState({
      hideHeader: state => state.index.hideHeader
    })
  },
  mounted () {
  },
  methods: {
    switchTab (obj) {
      this.checkedIndex = obj.index
      this.$emit('switchTab', obj)
    }
  }
}
</script>
<style lang="scss" scoped>
.index_header {
  max-width: 5rem;
  margin: 0 auto;
  width: 100%;
  height: 1.39rem;
  font-size: 0.16rem;
  background-image: url('http://qiqu-img.uc.cn/qiqu/img/buz/ico/background.png');
  background-size: 100% 100%;
  position: fixed;
  transform: translateY(0rem);
  transition: transform 200ms;
  -moz-transition: transform 200ms; /* Firefox 4 */
  -webkit-transition: transform 200ms; /* Safari 和 Chrome */
  -o-transition: transform 200ms; /* Opera */
  z-index: 5;
  .index_user{
    position: absolute;
    left: 0.12rem;
    top: 0.36rem;
    width: 0.32rem;
    height: 0.32rem;
    // background-image: url('http://qiqu-img.uc.cn/qiqu/img/buz/ico/person.png');
    background-image: url('./../assets/imgs/person.png');
    background-size: 100% 100%;
  }
  .index_add{
    position: absolute;
    right: 0.12rem;
    top: 0.36rem;
    width: 0.32rem;
    height: 0.32rem;
    background-image: url('http://qiqu-img.uc.cn/qiqu/img/buz/ico/add.png');
    background-size: 100% 100%;
  }
  .index_nav_list {
    padding: 0rem;
    margin: 0rem;
    position: absolute;
    bottom: 0px;
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 0.14rem;
    box-sizing: border-box;
    .index_nav_item {
      flex: 1;
      text-align: center;
      height: 0.32rem;
      line-height: 0.29rem
    }
    .checked {
      font-weight: 900
    }
  }
}
.hideStatus{
  transform: translateY(-1.05rem)
}
</style>
