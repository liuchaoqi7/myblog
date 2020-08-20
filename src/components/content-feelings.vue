<template>
  <div class="content-feelings">
    <ul class="tab-list">
      <li
        v-for="item of feelingsList"
        :key="item.id"
        :class="{bgColor:item.value==$store.state.currentFeelings}"
        @click="changeBg(item.value)"
      >
        {{item.value}}
      </li>
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
      feelingsList:[
        {
          id:"001",
          value:"亲情"
        },
        {
          id:"002",
          value:"友情"
        },
        {
          id:"003",
          value:"爱情"
        }
      ]
    }
  },
  methods:{
    changeBg(value){
      this.$store.commit('changeBgTabFeelings',value)
      this.$router.push('/content/情感/'+this.$store.state.currentFeelings)
    }
  }
}
</script>

<style scoped>
.content-feelings{
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
