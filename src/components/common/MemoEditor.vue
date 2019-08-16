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
      todo.addEventListener('click',()=>{
        if(todo.getAttribute('data')=='no'){
          todo.classList.remove('icon-circle');
          todo.classList.add('icon-choose');
          todo.setAttribute('data','yes');
        }else{
          todo.classList.remove('icon-choose');
          todo.classList.add('icon-circle');
          todo.setAttribute('data','no');
        }
      });
      this.$refs.editor.appendChild(todo);
    },
    /* 删除备忘录 */
    delMemo(){
      this.deleteMemo(this.memo.thisMemo.id);
      this.success();
      //回到备忘录页面
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
  .box
    line-height: 0.25rem
    height: 5rem
    padding-bottom: 0.5rem
</style>