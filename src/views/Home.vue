<template>
  <div class="home">
    <memo-header v-show="!search">
      <template #icon>
        <i class="iconfont icon-back"></i>
      </template>

      <template #edit>
        <span class="edit" v-show="memo.memoList.length" @click="edit" v-text="editOrCancel"></span>
        <span class="edit disable" v-show="!memo.memoList.length" v-text="editOrCancel"></span>
      </template>

      <template #pageTitle>
        <h1 v-text="pageTitle" class="pageTitle"></h1>
      </template>
    </memo-header>

    <!-- 搜索 -->
    <section>
      <search></search>
    </section>
    <section>
      <memo-list></memo-list>
    </section>
    <!-- 提示 -->
    <tips></tips>
    <section>
      <div style="padding-bottom: 0.4rem;"></div>
      <memo-footer></memo-footer>
    </section>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MemoHeader from "@/components/common/MemoHeader";
import Search from "@/components/common/Search";
import Tips from "@/components/common/Tips";
import MemoList from "@/components/home/MemoList";
import MemoFooter from "@/components/home/MemoFooter";
import { mapMutations, mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      pageTitle: "备忘录" //标题
    };
  },
  components: {
    MemoHeader,
    Search,
    MemoList,
    MemoFooter,
    Tips
  },
  computed: {
    ...mapState(["memo", "isClickEdit", "search"]),
    //文本值
    editOrCancel() {
      return this.isClickEdit ? "取消" : "编辑";
    }
  },
  methods: {
    ...mapMutations(["reverseEdit"]),
    edit() {
      if (this.editOrCancel == "取消") {
        //去除memo的样式,找到memo-list组件
        const components = this.$children;
        components.some(component => {
          try {
            const collection = component.$refs.memoList.children;
            for (const li of collection) {
              li.style.backgroundColor = "";
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
        });
      }
      //修改为编辑状态
      this.reverseEdit();
    }
  }
};
</script>
