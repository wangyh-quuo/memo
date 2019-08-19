<template>
<div>
  <div class="search">
    <div class="search-content">
      <div class="icon">
        <i class="iconfont icon-search"></i>
      </div>
      <input type="search" class="input" placeholder="搜索" v-model="keyword" @input="queryMemo" @click="showSearch">
    </div>
    <div v-if="search" class="result-list">
      <div class="title">
        <p>备忘录</p>
        <p>已找到{{queryResult.length}}项</p>
      </div>
      <router-link tag="div" :to="{name: 'memo', params: {id: item.id}}" class="result-item" v-for="item of queryResult" :key="item.id">
        <p>{{item.content | textFormat}}</p>
        <p>{{item.date}}</p>
      </router-link>
    </div>
  </div>
  <div class="overlay" v-if="search" @click="showSearch">

   </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "search",
  data() {
    return {
      keyword: '',
      queryResult: []
    }
  },
  computed: {
    ...mapState(["memo","search"])
  },
  filters: {
    textFormat: function(value){
      return value.replace(/<[\s|\S]+\/?>/g,'');
    }
  },
  methods: {
    ...mapMutations(["reverseSearch"]),
    showSearch(){
      //显示遮盖层
      this.reverseSearch();
    },
    queryMemo() {
      this.queryResult=[];
      //如果keyword为空,则查找结果为空
      if(this.keyword=='' || this.keyword==undefined){
        this.queryResult=[];
      }else{//如果备忘录列表为空则查找结果为空
        if(this.memo.memoList.length>0){
          for (const memo of this.memo.memoList) {
            if(memo.content.includes(this.keyword)){
              this.queryResult.push(memo);
            }
          }
        }else{
          this.queryResult=[];
        }
      }
      if(this.queryResult.length==0){
        this.queryResult=[];
      }else{
        //console.log(this.queryResult)
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
  .search
    padding: 0.1rem
  .search-content
    position: relative
    z-index: 3 
    padding: 0.05rem 0
    background: #eee
    border-radius: 0.05rem
    .icon
      position absolute
      top: 50%
      transform translate(50%,-50%)
    .icon-search
      font-size: 0.12rem  
    .input 
      padding-left: 0.3rem
      width: 100%
      background: #eee
      border: none
      height: 0.2rem
  .overlay
    position: fixed
    top:0
    left:0
    z-index: 2
    width: 100%
    height: 100%
    background: rgba(0,0,0,0.7)
  .result-list
    position: relative;
    top: 0.05rem
    background: #eee;
    border-radius: 0.1rem
    z-index: 3
  .result-item
    width: 100%
    line-height: 0.25rem
    border-bottom: 0.01rem solid  #ccc
    p
      padding: 0 0.1rem
      overflow: hidden 
      white-space: nowrap
      text-overflow: ellipsis
  .result-item:last-child
    border: 0
  .title
    display: flex
    justify-content: left
    background: #333
    color: #D7973B
    line-height: 0.25rem
    p
      padding: 0 0.1rem
      width: 50% 
    p:last-child 
      text-align: right
</style>