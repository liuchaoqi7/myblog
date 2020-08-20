<template>
	<div class="child-learn">
		<router-link 
		    v-for="item of learnItemList"
		    :key="item.id"
			:to="'/'+item.path"
			tag="div"
			class="learn-item" 
			>
			<img :src="item.url" alt="" class="learn-img">
			<p class="learn-desc">{{item.desc}}</p>
		</router-link>
	</div>
</template>

<script>
export default {
	data(){
		return{
			learnItemList:[
			  {
			  	id:"001",
			  	path:"detailInterview",
			  	url:require("@/assets/img/interview.jpg"),
			  	desc:"前端面试题"
			  },
			  {
			  	id:"002",
			  	path:"detailTotal",
			  	url:require("@/assets/img/total.jpg"),
			  	desc:"前端知识点汇总"
			  },
			  {
			  	id:"003",
			  	path:"detailHtml",
			  	url:require("@/assets/img/html.jpg"),
			  	desc:"HTML"
			  },
			  {
			  	id:"004",
			  	path:"detailCss",
			  	url:require("@/assets/img/css.jpg"),
			  	desc:"CSS"
			  },
			  {
			  	id:"005",
			  	path:"content/事业/childTwoJavascript",
			  	url:require("@/assets/img/javascript.jpg"),
			  	desc:"JavaScript"
			  },
			  {
			  	id:"006",
			  	path:"detailJquery",
			  	url:require("@/assets/img/jquery.jpg"),
			  	desc:"JQuery"
			  },
			  {
			  	id:"007",
			  	path:"detailVue",
			  	url:require("@/assets/img/vue.jpg"),
			  	desc:"Vue"
			  }
			]
		}
	}
}
</script>

<style scoped>
.child-learn{
  display: flex;
  flex-basis: 80%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding:0.5rem 0;
}  
.learn-item{
  display: flex;
  flex-direction: column;
  margin-bottom:0.5rem;
}
.learn-img{
  width:3rem;
  height: 2rem;
  margin-bottom: 0.3rem;
}
.learn-desc{
  align-self: center;
}
</style>
