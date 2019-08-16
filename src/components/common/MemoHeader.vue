<template>
  <header>
    <div class="header-nav">
      <div class="header-left" @click="back">
        <slot name="icon"></slot>
      </div>
      <div class="header-right">
        <slot name="edit"></slot>
      </div>
    </div>
    <slot name="pageTitle"></slot>
  </header>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "MemoHeader",
  data() {
    return {
      pageTitle: "备忘录", //标题
    }
  },
  methods: {
    back(){
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus" scoped>
  .header-nav
    display flex
    line-height 0.4rem
    width 100%
    position fixed 
    background #fff
    z-index 1
  .header-left
    width 50%
    color #D7973B
  .header-right
    width 50%
    color #D7973B
    .edit 
      font-size 0.14rem
      float right
      padding-right 0.1rem
  .pageTitle
    font-size 0.24rem
    font-family "微软雅黑"
    line-height 0.4rem
    padding 0 0.2rem
    padding-top 0.4rem
</style>