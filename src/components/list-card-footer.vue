<template>
  <div class="card_footer">
      <div class="prase">56</div>
      <div class="pit">2</div>
      <div class="comment">2</div>
  </div>
</template>
<script>
export default {
  props: ['footerData'],
  data: function () {
    return {
      name: '底部区域'
    }
  }
}
</script>
<style lang="scss" scoped>
.card_footer{
    width: 100%;
    height: 0.4rem;
    line-height: 0.33rem;
    padding: 0rem 0.18rem;
    box-sizing: border-box;
    div{
        float: left;
        padding-left: 0.24rem;
        position: relative;
        color:#888;
        font-size: 0.13rem;
    }
    div::before{
        content: "";
        display: block;
        width:24px;
        height: 24px;
        background-image: url(http://image.uc.cn/s/uae/g/0q/product/sprite/26.png);
        background-repeat: no-repeat;
        background-size: 250px 237.5px;
        position: absolute;
        left:0;
        top: 0.06rem;
    }
    .prase::before{
        background-position: -25px -100px;
    }
    .prase{
        margin-right: 0.14rem;
    }
    .pit::before{
         background-position: -75px -100px;
    }
    .comment::before{
         background-position: -200px -100px;
    }
    .comment{
        float: right;
    }
}
</style>
