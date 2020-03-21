<!--  -->
<template>
  <div class="tabconctol">
    <div v-for="(item , index) in titles" 
    :key="item.index" 
    class="tabconctol1"
    :class="{active:index === currentI}" @click="itemC(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"tabconctol",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data() {
    return {
      currentI:2,
    }
  },
  methods: {
    itemC(index){
      this.currentI = index;
      // console.log(index);
      this.$emit('tabClick',index)
    }
  },
}

</script>
<style scoped>
.tabconctol{
  display: flex;
  text-align: center;
  font-size: 15px;
}
.tabconctol1{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabconctol1 span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
  
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>