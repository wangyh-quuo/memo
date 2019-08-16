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
    <tips></tips>
  </div>
</template>
<script>
import MemoHeader from "@/components/common/MemoHeader";
import MemoEditor from "@/components/common/MemoEditor";
import Tips from "@/components/common/Tips";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Memo",
  components: {
    MemoHeader,
    MemoEditor,
    Tips
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
    ...mapMutations(["addMemo","queryMemoById","updateMemo","success"]),
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
      //如果params==0则是新增memo页面，则直接添加,否则为修改页面
      this.getContent();
      if(this.$router.currentRoute.params.id==0){
        const memo = {
          id: new Date().getTime(),
          content: this.content,
          date: new Date().format("yyyy/MM/dd hh:mm:ss")
        }
        this.addMemo(memo);
        this.success("添加成功!");
        //添加成功后跳转页面
        this.$router.push({name: 'memo', params: {id: memo.id}});
      }else{
        //更新该memo的数据
        const memo = {
          id: this.$router.currentRoute.params.id,
          content: this.content,
          date: new Date().format("yyyy/MM/dd hh:mm:ss")
        }
        this.updateMemo(memo);
        this.success("修改成功!");
      }
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