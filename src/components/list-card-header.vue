<template>
  <div class="card_header">
      <div class="avatar">
          <img :src="headerData.avatar" alt="">
      </div>
      <div class="nickname">{{headerData.nickname}}</div>
      <div class="feedback" :data-id="headerData.id">举报</div>
  </div>
</template>
<script>
export default {
  props: ['headerData'],
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.card_header {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0.15rem 0.18rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    box-sizing: border-box;
    div{
        line-height: 0.3rem;
        height: 0.3rem;
    }
    .avatar{
        img{
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 0.1rem;
            transform: translateY(-2px)
        }
    }
    .nickname{
        flex-grow: 10;
        font-size: 0.14rem;
        color: #888;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .feedback{
        width: 0.344rem;
        height: 0.18rem;
        line-height: 0.2rem;
        text-align: center;
        display: inline-block;
        border: 1px solid #ccc;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        color: #ccc;
        font-size: 0.12rem;
    }

}
</style>
