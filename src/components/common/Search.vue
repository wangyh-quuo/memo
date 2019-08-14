<template>
 <div class="search">
   <div class="search-content">
     <div class="icon">
      <i class="iconfont icon-search"></i>
     </div>
    <input type="search" class="input" placeholder="搜索">
   </div>
 </div>
</template>
<script>

export default {
  name: "search"
};
</script>

<style lang="stylus" scoped>
  .search
    padding: 0.1rem
  .search-content
    position: relative 
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

</style>