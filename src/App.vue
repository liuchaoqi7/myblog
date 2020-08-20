<template>
  <div id="app">
    <div class="home-header">
      <div class="login">
        <router-link
          to="/content/登录"
          >登录
        </router-link>
        <router-link
          to="/content/注册"
          >注册</router-link>
      </div>
      <div class="tab">
        <ul class="tab-list">
          <router-link 
            tag="li"
            v-for="item of tabList"
            :key="item.id"
            :to='"/content/"+item.value'
            @click.native="changeBg(item.value)"
            :class="{itemChangeBg:item.value==$store.state.current}"
            >
            {{item.value}}
          </router-link>
        </ul>
      </div>
    </div>
    <router-view class="router-view"></router-view>
    <div class="home-footer">
      <p>本博客的部分素材来源于网络，如有侵权请联系站长</p>
      <p>微电同号：15664002199</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data(){
    return {
      tabList:[
        {
          id:"001",
          value:"人生",
          path:"contentLife"
        },
        {
          id:"002",
          value:"事业",
          path:"contentCause"
        },
        {
          id:"003",
          value:"情感",
          path:"contentFeelings"
        },
        {
          id:"004",
          value:"健康",
          path:"contentHealthy"
        }
      ]
    }
  },
  methods:{
    changeBg(value){
      this.$store.commit('changeBgTab',value)
      this.$store.commit('changeBgTabCauseInit')
      this.$store.commit('changeBgTabFeelingsInit')
      this.$store.commit('changeBgTabHealthyInit')
    },
    changeBgInit(){
      this.$store.state.current
    },
    localStorage(){
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("stateInfo", JSON.stringify(this.$store.state));
      });
      if (sessionStorage.getItem("stateInfo")) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem("stateInfo"))
          )
        );
      }
  
      sessionStorage.removeItem("stateInfo");
    }
    // ,
    // getData(){
    //   axios.get('/api/index.json').then(this.getDataSucc)
    // },
    // getDataSucc(res){
    //   console.log(res)
    // }
  },
  mounted(){
    this.changeBgInit();
    this.localStorage()
    // this.getData()
  }
}
</script>

<style scoped>
.home-header{
  background-image: url(./assets/img/home-header.jpg);
  background-size: 100% 100%;
  width: 100%;
  min-width: 12rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.home-header>div{
  width:100%;
}
.login{
  display: flex;
  justify-content:flex-end;
  background: #f3f3f3;
  padding:0.1rem;
  box-sizing: border-box;
}
.login>span{
  margin:0 0.2rem;
}
.tab{
  display: flex;
  justify-content: center;
  background: #BFAB86;
  
}
.tab-list{
  width: 10rem;
  display: flex;
  justify-content:space-evenly;
}
.tab-list>li{
  flex-grow:1;
  display: flex;
  justify-content: center;
  padding:0.1rem;
  color:#fff;
  font-size: 0.2rem;
}
.itemChangeBg{
  background:#fff;
  border-top:0.05rem solid #f77825;
  color:#000!important;
}
.router-view{
  width: 10rem;
  margin:0 auto;
  box-sizing: border-box;
}
.home-footer{
  height:2rem;
  width: 100%;
  min-width: 12rem;
  text-align: center;
  background: #f1e1c2;
  color:#928686;
  font-size: 0.12rem;
}
.home-footer>p:first-child{
  padding:0.7rem 0 0.1rem 0;
  
}
</style>
