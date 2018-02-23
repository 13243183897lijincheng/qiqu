<template>
  <div class="refresh_banner" v-show="show" :style="{transform: 'translateY('+ translateDis +'px)'}">
   <img v-show="this.refreshStatus !== 'droped'" class="arrow_img" src="./../assets/imgs/arrow.png" alt="" :style="{transform:'rotateZ(' + (this.refreshStatus === 'droping' ? 0 : 180) + 'deg)'}">
   <img v-show="this.refreshStatus === 'droped'" class="loading" src="./../assets/imgs/loading.png" >
   {{msg}}
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props: ['distance', 'refreshStatus'],
  data: function () {
    return {
    }
  },
  computed: {
    ...mapState({
      show: state => state.index.showRefreshBanner
    }),
    translateDis: function () {
      if (this.distance > 40) {
        return 40
      } else {
        return this.distance
      }
    },
    msg: function () {
      if (this.refreshStatus === 'droping') {
        return '松开刷新'
      } else if (this.refreshStatus === 'droped') {
        return '加载中...'
      } else {
        return '下拉刷新'
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.refresh_banner{
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: rgba($color: #000000, $alpha: 0.4);
    position: absolute;
    top:0.98rem;
    font-size: 0.16rem;
    width: 100%;
    text-align: center;
    color: #fff;
    .arrow_img{
      width: 0.15rem;
      height: 0.22rem;
      vertical-align: middle;
      margin-top: -4px;
    }
    .loading{
      width: 0.22rem;
      height: 0.22rem;
      vertical-align: middle;
      animation: loadAnimate 1s;
      animation-iteration-count: infinite;
      -moz-animation: loadAnimate 1s;
      -webkit-animation: loadAnimate 1s;
      -o-animation: loadAnimate 1s;
    }

    @keyframes loadAnimate
    {
      from {transform: rotateZ(0deg)}
      to {transform: rotateZ(360deg)}
    }
}
</style>
