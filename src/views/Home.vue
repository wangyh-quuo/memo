<template>
  <div class="home">
    <memo-header></memo-header>
    <!-- 搜索 -->
    <search></search>
    <section>
      <memo-list></memo-list>
    </section>
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
import MemoList from "@/components/home/MemoList";
import MemoFooter from "@/components/home/MemoFooter";
export default {
  name: "home",
  data() {
    return {
      isClickEdit: false
    };
  },
  components: {
    MemoHeader,
    Search,
    MemoList,
    MemoFooter
  },
  methods: {
    
  }
};
</script>
