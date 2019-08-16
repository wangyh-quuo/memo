<template>
  <div>
    <memo-header>
      <template #icon>
        <i class="iconfont icon-back"></i>
        <span>备忘录</span>
      </template>
       <template #edit>
        <span class="edit" @click="submit">完成</span>
      </template>
      <template #pageTitle>
        <div class="pageTitle"></div>
      </template>
    </memo-header>
    <section class="memo">
      <p class="memo-time">{{memo.thisMemo.date}}</p>
      <article class="memo-content">
        <memo-editor></memo-editor>
      </article>
    </section>
    
  </div>
</template>
<script>
import MemoHeader from "@/components/common/MemoHeader";
import MemoEditor from "@/components/common/MemoEditor";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Memo",
  components: {
    MemoHeader,
    MemoEditor
  },
  data() {
    return {
      content: {},
    }
  },
  computed: {
    ...mapState(["memo"])
  },
  methods: {
    ...mapMutations(["addMemo","queryMemoById"]),
    //获得编辑器里的内容
    getContent(){
      const component = this.$children;
      component.some(ele=>{
        try {
          if(ele.$refs.editor){
            this.content = ele.$refs.editor.innerHTML;
            return true;
          }
        } catch (error) {
          return false
        }
      })
    },
    submit() {
      this.getContent();
      const memo = {
        id: new Date().getTime(),
        content: this.content,
        date: new Date('2019/08/15 10:35')
      }
      this.addMemo(memo);
    }
  },
  beforeRouteEnter (to, from, next) {
    // 查询memo
    next(vm=>{
      vm.queryMemoById(to.params.id);
      //console.log(vm.memo.thisMemo)
    });
  }
};
</script>

<style lang="stylus" scoped>
.memo-time {
  line-height: 0.2rem;
  color: #ccc;
  text-align: center;
}

.memo-content {
  text-indent: 0.2rem;
}
</style>