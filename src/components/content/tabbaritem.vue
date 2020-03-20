<!--  -->
<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isactive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :class="{active:isactive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props:{
    path:String
  },
  data() {
    return {
      // isactive:true
    }
  },
  computed: {
    isactive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(err=>{});
    },
  },
};
</script>
<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  /* background-color: aquamarine; */
  font-size: 14px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: skyblue;
}
</style>