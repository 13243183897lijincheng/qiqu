<template>

  <div class="list" v-if="!!data" @touchstart='touchStart' >
    <listCard v-for="(item, index) in data" :key="index" :cardData="item" />
  </div>

</template>
<script>
import { mapActions } from 'vuex'
import listCard from './list-card'

export default {
  props: ['listData'],
  data () {
    return {
      name: 'This is List Page',
      touchStartX: 0,
      touchStartY: 0,
      touchDirection: 'none'
    }
  },
  components: {
    listCard
  },
  computed: {
    data: function () {
      return this.listData
    }
  },
  methods: {
    ...mapActions(['setShowRefreshBanner', 'setDropEnd']),
    touchStart (e) {
      // console.log('start', e, e.currentTarget)
      let tar = e.currentTarget
      this.touchStartX = e.targetTouches[0].pageX
      this.touchStartY = e.targetTouches[0].pageY
      tar.addEventListener('touchmove', this.touchMove)
      tar.addEventListener('touchend', this.touchEnd)
    },
    touchMove (e) {
      // 获取滑动的位置信息
      let moveX = e.targetTouches[0].pageX
      let moveY = e.targetTouches[0].pageY
      let dx = moveX - this.touchStartX
      let dy = moveY - this.touchStartY
      let x = Math.abs(dx)
      let y = Math.abs(dy)

      // 判断滑动的方向
      if (x + y < 4) {
        console.log('滑动距离太小')
        this.touchDirection = 'none'
      } else if ((x > 2 * y) && (dx < 0)) {
        // console.log('向左滑动')
        this.touchDirection = 'left'
      } else if ((x > 2 * y) && (dx > 0)) {
        // console.log('向右滑动')
        this.touchDirection = 'right'
      } else if ((y > 2 * x) && (dy > 0)) {
        // console.log('向下滑动')
        this.touchDirection = 'down'
      } else if ((y > 2 * x) && (dy < 0)) {
        // console.log('向上滑动')
        this.touchDirection = 'up'
      } else {
        console.log('不满足滑动条件')
        this.touchDirection = 'none'
      }

      if (this.touchDirection === 'down' && dy > 5) {
        this.setShowRefreshBanner(true)
        this.$emit('downMove', dy)
      }
    },
    touchEnd (e) {
      // console.log('touchEnd', e)
      let tar = e.currentTarget
      tar.removeEventListener('touchmove', this.touchMove)
      tar.removeEventListener('touchend', this.touchEnd)
      this.setDropEnd(true)
      if (this.touchDirection === 'down') {
        this.$emit('downEnd')
      }
    },
    loadBottom () {
      console.log('Bottom')
    }
  }
}
</script>
<style scoped lang='scss'>
.list{
    width: 100%;
    box-sizing: border-box;
    padding: 1.49rem 0.1rem 0.1rem;
    background: #eee;
    .list_card{
        font-size: 0.16rem;
        margin: 0rem 0rem 0.1rem;
        background-color: #fff;
    }
}
</style>
