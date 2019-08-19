<template>
  <footer class="footer">
    <!-- tabbar -->
    <div class="footer-left">
      <span v-if="isClickEdit" @click="delChoose">删除选中</span>
    </div>
    <div class="footer-center">
      <span v-if="!isClickEdit">{{memo.memoList.length}}条备忘录</span>
    </div>
    <div class="footer-right">
      <router-link to="/memo/0" tag="i" v-if="!isClickEdit" class="iconfont icon-memo"></router-link>
      <span  v-if="isClickEdit" @click="delAll">删除全部</span>
    </div>
  </footer>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "MemoFooter",
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["memo","isClickEdit"])
  },
  methods: {
    ...mapMutations(["reverseEdit","deleteAll","deleteMemo","success","fail"]),
    /* 删除所有memo */
    delAll() {
      this.deleteAll();
      this.reverseEdit();
      this.success();
    },
    /* 删除选中的memo */
    delChoose(){
      //找到memo-list组件
      const components = this.$parent.$children;
      const chooseList = [];
      components.some(component=>{
        if(component.$refs.memoList){
          const collection = component.$refs.memoList.children;
          //找到选中的memo,并把其id置入一个数组中
          for (const li of collection) {
            if(li.style.backgroundColor){
              chooseList.push(li.getAttribute("id"));
            }
          }
          return true;
        }
      })
      if(chooseList.length==0){
        this.fail("未选中数据");
      }else{
        //调用删除方法
        this.deleteMemo(chooseList);
        //删除成功后
        this.reverseEdit();
        this.success();
      }
    }
  },
};
</script>

<style lang="stylus">
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