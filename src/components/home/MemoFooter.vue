<template>
  <footer class="footer">
    <!-- tabbar -->
    <div class="footer-left">
      <span v-if="isClickEdit">删除选中</span>
    </div>
    <div class="footer-center">
      <span v-if="!isClickEdit">n条备忘录</span>
    </div>
    <div class="footer-right">
      <i  v-if="!isClickEdit" class="iconfont icon-memo"></i>
      <span  v-if="isClickEdit">删除全部</span>
    </div>
  </footer>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MemoFooter",
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["isClickEdit"])
  },
};
</script>

<style lang="stylus" scoped>
  .footer
    display: flex
    justify-content: center
    line-height: 0.4rem
    position: fixed
    width: 100%
    background: #fff
    bottom: 0
    z-index: 1
  .footer-left
    padding: 0 0.1rem
    color: #D7973B
  .footer-center
    flex: 1
    text-align: center
  .footer-right
    padding: 0 0.1rem
    color: #D7973B
</style>