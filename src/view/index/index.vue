<template>
  <div class="index">
    <indexHeader @switchTab="switchTab" />
    <refreshBanner :distance = "distance" :refreshStatus="refreshStatus" />
    <list ref="list" :listData="index" @downMove="downMove" @downEnd='refresh'/>
    <img v-show="hideHeader" class="goTop" @click="goTop" src="./../../assets/imgs/arrow.png" alt="">
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import indexHeader from '../../components/indexHeader'
import list from '../../components/list.vue'
import refreshBanner from '../../components/refresh-banner.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: 'This is index Page!',
      tab: '精选',
      distance: 0,
      refreshing: false,
      refreshStatus: 'none',
      canRefresh: false,
      showGoTop: false,
      appending: false
    }
  },
  computed: {
    ...mapState({
      name: state => state.index.name,
      index: state => state.index.index,
      dropEnd: state => state.index.dropEnd,
      hideHeader: state => state.index.hideHeader,
      scrollBase: state => state.index.scrollBase
    }),
    ...mapGetters({
      reverseName: 'reverseName'
    })
  },
  components: {
    indexHeader,
    list,
    refreshBanner
  },
  watch: {
  },
  created () {
    let that = this
    this.fetchData({sucFn: function () {
      that.setScrollBase(that.$refs.list.$el.clientHeight)
    }})
    window.onscroll = this.windowScroll
  },
  mounted () {

  },
  methods: {
    switchTab (obj) {
      let that = this
      console.log(obj)
      this.clearData()
      this.tab = obj.name
      let tabId = '20070'
      switch (obj.name) {
        case '精选':
          tabId = 20070
          break
        case '视频':
          tabId = 20081
          break
        case '段子':
          tabId = 20080
          break
        case '奇趣专栏':
          tabId = 20071
          break
        default:
          break
      }
      this.setCurrentTab(tabId)

      this.fetchData({sucFn: function () {
        that.setScrollBase(that.$refs.list.$el.clientHeight)
      }})
    },
    goTop () {
      window.scrollTo(0, 0)
    },
    downMove (dis) {
      this.distance = dis
      if (dis > 40) {
        this.canRefresh = true
        this.refreshStatus = 'droping'
      } else {
        this.canRefresh = false
        this.refreshStatus = 'none'
      }
    },
    refresh () {
      let that = this
      if (this.canRefresh && !this.refreshing) {
        this.refreshStatus = 'droped'
        this.fetchData({
          sucFn: function (data) {
            console.log('Ok')
            that.setScrollBase(that.$refs.list.$el.clientHeight)
            that.setShowRefreshBanner(false)
            this.canRefresh = false
            this.refreshStatus = 'none'
            this.distance = 0
          },
          errorFn: function (err) {
            console.log(err)
            that.setShowRefreshBanner(false)
            this.canRefresh = false
            this.refreshStatus = 'none'
          },
          option: 'refresh'
        })
      } else {
        that.setShowRefreshBanner(false)
        this.canRefresh = false
        this.refreshStatus = 'none'
        this.distance = 0
      }
    },
    windowScroll () {
      if (window.scrollY > 50) {
        this.setHideHeader(true)
      } else {
        this.setHideHeader(false)
      }
      console.log((window.scrollY + 700), this.scrollBase)
      if (((window.scrollY + 700) > (this.scrollBase - 200)) && !this.appending) {
        this.appending = true
        let that = this
        this.fetchData({sucFn: function () {
          that.setScrollBase(that.$refs.list.$el.clientHeight)
          that.appending = false
        }})
      }
    },
    ...mapMutations(['setName']),
    ...mapActions(['clearData', 'setHideHeader', 'fetchData', 'setShowRefreshBanner', 'setDropEnd', 'setScrollBase', 'setCurrentTab'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
li {
  display: block;
  margin: 0rem;
  font-size: 0.36rem;
}
.goTop{
  position: fixed;
  right: 0.2rem;
  bottom: 0.2rem;
  background: rgba(0, 0, 0, 0.4);
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%
}
</style>
