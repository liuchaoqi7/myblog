<template>
  <div class="content-healthy">
    <ul class="tab-list">
      <li
        v-for="item of healthyList"
        :key="item.id"
        :class="{bgColor:item.value==$store.state.currentHealthy}"
        @click="changeBg(item.value)"
      >{{item.value}}</li> 
    </ul>
    <div class="item-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      healthyList:[
        {
          id:"001",
          value:"生活习惯"
        },
        {
          id:"002",
          value:"运动"
        },
        {
          id:"003",
          value:"心情"
        }
      ]
    }
  },
  methods:{
    changeBg(value){
      this.$store.commit('changeBgTabHealthy',value)
      this.$router.push('/content/健康/'+this.$store.state.currentHealthy)
    }
  }
}
</script>

<style scoped>
.content-healthy{
  width:10rem;
  margin:0 auto;
  display: flex;
}
.tab-list{
  background: #dac39a;
  flex: 1 0 0%;
}
.tab-list>li{
  display: flex;
  justify-content: center;
  border:solid 0.01rem #aaa;
  padding: 0.05rem 0;
}
.bgColor{
  background: #ead7b3;
  border-right: none!important;
}
.item-content{
  background:#ead7b3;
  flex: 4 0 0%;
}
</style>
