import axios from 'axios'

const state = {
  name: 'Hello World! Hello EveryOne',
  hideHeader: false, // 是否隐藏头部
  showRefreshBanner: false, // 是否显示刷新banner
  dropEnd: false, // 控制是否拖拽结束
  scrollBase: 0, // 触底加载更多的基准
  currentTab: 20070, // 用来控制tab切换
  index: [],
  video: {},
  joke: {}
}

const getters = {
  reverseName: state => state.name.split('').reverse().join('')
}

const mutations = {
  setData (state, obj) {
    console.log(obj, state[obj.tab].length < 1)
    if (state[obj.tab].length < 1 || obj.option === 'refresh') {
      state[obj.tab] = obj.value
    } else if (obj.value.length < 1) {
      state[obj.tab] = []
    } else {
      state[obj.tab] = [...state[obj.tab], ...obj.value]
    }
  },
  setHideHeader (state, value) {
    state.hideHeader = value
  },
  setRefreshBanner (state, value) {
    state.showRefreshBanner = value
  },
  setdropEnd (state, value) {
    state.dropEnd = value
  },
  setScrollBase (state, value) {
    state.scrollBase = value
  },
  setCurrentTab (state, value) {
    state.currentTab = value
  }
}

const actions = {
  setHideHeader (ctx, value) {
    ctx.commit('setHideHeader', value)
  },
  setShowRefreshBanner (ctx, value) {
    ctx.commit('setRefreshBanner', value)
  },
  setDropEnd (ctx, value) {
    ctx.commit('setdropEnd', value)
  },
  setScrollBase (ctx, value) {
    ctx.commit('setScrollBase', value)
  },
  setCurrentTab (ctx, value) {
    ctx.commit('setCurrentTab', value)
  },
  clearData (ctx) {
    ctx.commit({
      type: 'setData',
      tab: 'index',
      value: []
    })
  },
  fetchData (ctx, obj) {
    let promise = new Promise(function (resolve, reject) {
      axios.get('http://qiqu-api.uc.cn/api1/channel/' + ctx.state.currentTab + '?method=new&app=ucqiquh5&uc_param_str=dnnivebichfrmintcpgieiwidsudsvospr&recoid=' + localStorage.getItem('recoid') || '')
        .then(function (res) {
          localStorage.setItem('recoid', res.data.data.recoid)
          let temp = res.data.data.items.map(function (item) {
            return res.data.data[item.map][item.id]
          })
          ctx.commit({
            type: 'setData',
            tab: 'index',
            value: temp,
            option: obj.option
          })
          // document.getElementsByClassName('list')[0].clientHeight
          // console.log(this.$refs.list.clientHeight)
          resolve(res)
        })
    })
    promise.then(function (data) {
      !!obj && !!obj.sucFn && obj.sucFn(data)
    })
    promise.catch(function (error) {
      !!obj && !!obj.errFn && obj.errFn(error)
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
