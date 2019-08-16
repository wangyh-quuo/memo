<template>
<transition name="tips">
 <div class="tips" v-show="tip">
   <div class="tips-text" v-text="info"></div>
 </div>
</transition>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "Tips",
  computed: {
    ...mapState(["tip","info"])
  },
};
</script>

<style lang="stylus" scoped>
  .tips
    position: fixed
    top: 50%
    left: 50%
    z-index: 999
    transform: translateX(-50%)
    display: flex
    justify-content: center
    align-items: center
    width: 0.9rem
    height: 0.9rem
    background: rgba(0,0,0,0.6)
    padding: 0.08rem 0.12rem
    border-radius: 0.1rem
  .tips-text
    padding: 0.08rem 0.12rem
    color: #fff
  .tips-enter
    background: rgba(0,0,0,0)
  .tips-enter-active
    transition: all 1s ease 

</style>