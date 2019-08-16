<template>
  <ul class="memo-list" @click="showThisMemo" ref="memoList">
    <li
      class="memo-item"
      v-for="item of memo.memoList"
      :key="item.id"
      :id="item.id"
      v-choose
    >
      <div v-show="isClickEdit">
        <i class="iconfont icon-circle"></i>
      </div>
      <div class="content">
        <h1 class="title">{{item.content | textFormat }}</h1>
        <p class="other">
          <span>{{ item.date }}</span>
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
    ...mapState(["memo","isClickEdit"])
  },
  data() {
    return {
      currentChoose: false
    };
  },
  filters: {
    textFormat: function(value) {
      return value.replace(/<[\s|\S]+\/?>/g,'\t')
    }
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
    //递归获取memo所在的LI元素
    getLI(ele) {
      if(ele.nodeName.toUpperCase()!='LI'){
        ele = ele.parentNode;
        return this.getLI(ele);
      }else{
        return ele;
      }
    },
    showThisMemo(e){
      //如果不是编辑状态，则跳转到备忘录详细页面
      const ele = this.getLI(e.target);
      if(!this.isClickEdit){
       this.$router.push({ name: 'memo', params: { id: ele.getAttribute("id") }});
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