<template>
  <ul class="memo-list" @click="showThisMemo" ref="memoList">
    <li
      class="memo-item"
      v-for="i of 10"
      :key="i"
      v-choose
    >
      <div v-show="choose">
        <i class="iconfont icon-circle"></i>
      </div>
      <div class="content">
        <h1 class="title">今天是充满希望的一天dasdassadasdasdasdasdasdasdasdas</h1>
        <p class="other">
          <span>12:19</span>
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MemoList",
  computed: {
    ...mapState(["choose","isClickEdit"])
  },
  data() {
    return {
      currentChoose: false
    };
  },
  directives: {
    choose: {
      inserted(el) {
        el.addEventListener("click",()=>{
          //获得li的子元素i元素选择框
          const e = el.children[0].children[0];
          //如果已经选中了，则取消选中
          if(el.style.backgroundColor){
            el.style.backgroundColor = '';
            //取消选中
            e.classList.remove("icon-choose");
            e.classList.add("icon-circle");
          }else{
            el.style.backgroundColor = "#FFFACD";
            //选中
            e.classList.remove("icon-circle");
            e.classList.add("icon-choose");
          }
        })
      }
    }
  },
  methods: {
    showThisMemo(e){
      //如果不是编辑状态，则跳转到备忘录详细页面
      if(!this.isClickEdit){
        this.$router.push({name: 'memo',parmas:{id: 1 }});
      }
    },
    cancel(){
      //将所有memo样式还原
      const collection = this.$refs.memoList.children;
      for (const li of collection) {
        li.style.backgroundColor = '';
      }
    }
  },
  mounted() {
    //this.cancel();
  },
};
</script>

<style lang="stylus" scoped>
  .memo-list
    width: 100%
    .memo-item
      display: flex
      align-items: center
      .content
        flex: 1
        padding: 0.1rem 0.1rem 0.1rem 0
        margin-left: 0.1rem 
        border-bottom: 1px solid #ccc
        white-space: nowrap
        overflow: hidden 
        text-overflow: ellipsis
      .title
        font-size: 0.14rem
        line-height: 0.2rem
        white-space: nowrap
        overflow: hidden 
        text-overflow: ellipsis
      .other
        font-size: 0.12rem
        line-height: 0.2rem
</style>