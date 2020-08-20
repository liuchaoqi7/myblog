<template>
  <div class="content-life">
    <router-link 
      tag="div"
      :to="'/content/'+item.path"
      class="item" 
      v-for="item of lifeList"
      :key="item.id"
      @click.native="changeBg(item.path)"
      >
      <img :src="item.url" alt="" class="item-img">
      <p class="item-desc">{{item.desc}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lifeList:[
        {
          id:"001",
          url:require("@/assets/img/人生.jpg"),
          desc:"人生就像一张白纸，想要把这张纸绘画成一幅什么样的画全靠自己这支笔！",
          path:"人生"
        },
        {
          id:"002",
          url:require("@/assets/img/事业.jpg"),
          desc:"一份成功的事业既可以让家人过上富裕的生活，也可以体现自己的人生价值！",
          path:"事业"
        },
        {
          id:"003",
          url:require("@/assets/img/情感.jpg"),
          desc:"亲情、友情和爱情是人生中不可或缺的，如若或缺将会是人生的遗憾！",
          path:"情感"
        },
        {
          id:"004",
          url:require("@/assets/img/健康.jpg"),
          desc:"身体是革命的本钱，拥有一个健康的身体才有机会去体验多彩的人生！",
          path:"健康"
        }
      ]
    }
  },
  methods:{
    changeBg(value){
      this.$store.commit('changeBgTab',value)
    }
  }
}
</script>

<style scoped>
.content-life{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item{
  width:10rem;
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: center;
}
.item-img{
  height: 100%;
}
.item-desc{
  color: #fff;
  align-self: center;
  position: absolute;
}
</style>
