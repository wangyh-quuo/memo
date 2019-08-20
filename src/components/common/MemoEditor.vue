<template>
  <div>
    <div class="box" ref="editor" contenteditable="true" v-html="memo.thisMemo.content">
    </div>
    <footer class="footer">
      <!-- tabbar -->
      <div class="footer-left">
        <i class="iconfont icon-delete" @click="delMemo"></i>
      </div>
      <div class="footer-center">
        <i class="iconfont icon-true" @click="addTodo"></i>
      </div>
      <div class="footer-right">
        <i class="iconfont icon-memo"></i>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "MemoEditor",
  computed: {
    ...mapState(["memo"])
  },
  methods: {
    ...mapMutations(["deleteMemo","success"]),
    /* 添加代办 */
    addTodo() {
      const todo = document.createElement("div");
      todo.setAttribute("data","no");
      todo.classList.add('iconfont','icon-circle');
      this.$refs.editor.appendChild(todo);
    },
    /* 点击todo */
    todoClick(el){
      const target = el.target;
      if(target.getAttribute('data')=='no'){
        target.classList.remove('icon-circle');
        target.classList.add('icon-choose');
        target.setAttribute('data','yes');
      }else if(target.getAttribute('data')=='yes'){
        target.classList.remove('icon-choose');
        target.classList.add('icon-circle');
        target.setAttribute('data','no');
      }
    },
    /* 删除备忘录 */
    delMemo(){
      this.deleteMemo(this.memo.thisMemo.id);
      this.success();
      //回到备忘录页面
      this.$router.push("/");
    }
  },
  mounted() {
    //给todo图标添加点击事件，使得在进入该页面时能够有效果
    this.$refs.editor.addEventListener("click",this.todoClick);
  },
};
</script>

<style lang="stylus" scoped>
  .box
    line-height: 0.25rem
    height: 5rem
    padding-bottom: 0.5rem
</style>