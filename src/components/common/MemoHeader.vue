<template>
  <header>
    <div class="header-nav">
      <div class="header-left">
        <i class="iconfont icon-back" v-if="headerLeft"></i>
      </div>
      <div class="header-right">
        <span class="edit" @click="edit" v-text="editOrCancel"></span>
      </div>
    </div>
    <h1 v-text="pageTitle" class="pageTitle"></h1>
  </header>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "MemoHeader",
  data() {
    return {
      pageTitle: "备忘录", //标题
      editOrCancel: "编辑",
      headerLeft: true, //是否需要返回图标
    }
  },
  methods: {
    ...mapMutations(["reverseEdit"]),
    edit() {
      if(this.editOrCancel == '取消'){
        //去除memo的样式,找到memo-list组件
        const components = this.$parent.$children;
        components.some(component=> {
          try {
            const collection = component.$refs.memoList.children;
            for (const li of collection) {
              li.style.backgroundColor = '';
              //获得li的子元素i元素选择框
              const e = li.children[0].children[0];
              //取消选中
              e.classList.remove("icon-choose");
              e.classList.add("icon-circle");
            }
            return true;
          } catch (error) {
            //console.log("组件没有$refs.memoList")
            return false;
          }
        })
      }
      //修改文本
      this.editOrCancel = this.editOrCancel == '编辑' ? '取消':'编辑';
      //修改为编辑状态
      this.reverseEdit();
    }
  },
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
  .header-right
    width 50%
    .edit 
      font-size 0.16rem
      float right
      padding-right 0.1rem
      color #D7973B
  .pageTitle
    font-size 0.24rem
    font-family "微软雅黑"
    line-height 0.4rem
    padding 0 0.2rem
    padding-top 0.4rem
</style>