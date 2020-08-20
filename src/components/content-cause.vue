<template>
  <div class="content-cause">
    <ul class="tab-list">
      <li
        v-for="item of liItemList"
        :key="item.id"
        :class="{bgColor:item.value==$store.state.currentCause}"
        @click="changeBg(item.value)"
        >
        {{item.value}}
      </li>
    </ul>
    <router-view
      tag="div"
      class="item-content"
    ></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      liItemList:[
        {
          id:"001",
          value:"事业",
          path:"childCause"
        },
        {
          id:"002",
          value:"学习",
          path:"childLearn"
        },
        {
          id:"003",
          value:"工作",
          path:"childWork"
        }
      ]
    }
  },
  methods:{
    changeBg(value){
      this.$store.commit('changeBgTabCause',value)
      this.$router.push('/content/事业/'+this.$store.state.currentCause)
    }
  }
}
</script>

<style scoped>
.content-cause{
  width:10rem;
  margin:0 auto;
  display: flex;
}
.tab-list{
  background: #dac39a;
  flex: 0 0 20%;
}
.tab-list>li{
  display: flex;
  justify-content: center;
  border:solid 0.01rem #aaa;
  padding: 0.05rem 0;
  border-top:none;
}
/*.tab-list>li:last-child{
  border-bottom:none;
}*/
.bgColor{
  background: #ead7b3;
  border-right: none!important;
}
.item-content{
  background: #ead7b3;
  flex: 0 0 80%;
}
</style>
