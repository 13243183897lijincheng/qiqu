<template>
  <div class="card_content">
      <div class="title" v-if="!!contentData.title && contentData.item_type!=2">{{contentData.title}}</div>
      <div class="tuwen" v-if="contentData.item_type==0">
          <img :src="contentData.images[0].url || 'http://image.uc.cn/s/uae/g/0q/product/anonymous1.png'" alt="">
      </div>

      <div class="joke" v-if="contentData.item_type==1">{{contentData.summary}}</div>

      <div class="video" v-if="contentData.item_type==3">
         <div class="playBtn"></div>
         <img :src="contentData.thumbnails[0].url || 'http://image.uc.cn/s/uae/g/0q/product/anonymous1.png'" alt="">
      </div>

      <div class="daily" v-if="contentData.item_type==2">
        <div class="dailyMain">
          <div class="dailyImg">
            <img :src="contentData.thumbnails[0].url" alt="">
          </div>
          <div class="dailyCtn">
            <p class="dailyTitle">{{contentData.title}}</p>
            <p class="dailySum">{{contentData.subtitle}}</p>
          </div>
        </div>
        <div class="dailyFoot">
          <div class="options">
            <i></i><span>123</span>
          </div>
          <div class="comm">
            <i></i><span>123</span>
          </div>
          <div class="share">
            <i></i><span>123</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['contentData'],
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.card_content{
  font-size: 0.15rem;
  line-height: 0.26rem;
  color:#787878;
  .title,.joke{
    padding: 0.02rem 0.18rem 0.1rem;
  }
  .tuwen, .video{
      position: relative;
      width: 100%;
      img{
          width: 100%;
      }
  }
  .video{
    .playBtn{
      width: 0.45rem;
      height: 0.45rem;
      position: absolute;
      left: 50%;
      top: 50%;
      background-position: -2rem -1.25rem;
      margin-left: -0.225rem;
      margin-top: -0.225rem;
      z-index: 2;
      background-image: url(http://image.uc.cn/s/uae/g/0q/product/sprite/26.png);
      background-size: 2.5rem 2.375rem;
      background-repeat: no-repeat;
    }
  }
  .daily{
    padding: 0.1rem;
    background-color: #fff;
    box-sizing: border-box;
    .dailyMain{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 0.1rem;
      margin-bottom: 0.04rem;
      .dailyImg{
        width: 0.78rem;
        height: 0.78rem;
        margin-right: 0.1rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .dailyCtn {
        flex-grow: 6;
        p{
          padding: 0px;
          margin: 0px;
        }
        .dailyTitle{
          font-weight: 600;
          color: #222;
        }
        .dailySum{
          color:#787878;
          font-size: 0.12rem
        }
      }
    }
    .dailyFoot{
      height: 0.3rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      i{
        background-image: url(http://image.uc.cn/s/uae/g/0q/product/sprite/26.png);
        background-size: 250px 237.5px;
        background-repeat: no-repeat;
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        vertical-align: middle;
      }
      .options{
        width: 33%;
        border-right: 1px solid #EAEAEA;
        text-align: center;
        i{
          background-position: -150px -100px;
        }
      }
      .comm{
        width: 33%;
        border-right: 1px solid #EAEAEA;
        text-align: center;
        i{
          background-position: -200px -100px;
        }
      }
      .share{
        width: 33%;
        text-align: center;
        i{
              background-position: -100px -100px;
        }
      }
    }
  }
}
</style>
