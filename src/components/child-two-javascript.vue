<template>
	<div class="child-javascript">
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
			  	path:"detailJavascriptTotal",
			  	url:require("@/assets/img/javascript.jpg"),
			  	desc:"JavaScript知识点汇总"
			  },
			  {
			  	id:"002",
			  	path:"detailJavascriptDom",
			  	url:require("@/assets/img/javascriptDom.jpg"),
			  	desc:"JavaScript DOM编程艺术"
			  },
			  {
			  	id:"003",
			  	path:"detailJavascriptHeight",
			  	url:require("@/assets/img/javascriptHeight.jpg"),
			  	desc:"JavaScript 高级程序设计"
			  },
			  {
			  	id:"004",
			  	path:"detailJavaScriptEs6",
			  	url:require("@/assets/img/Es6.jpg"),
			  	desc:"深入理解ES6"
			  }
			]
		}
	}
}
</script>

<style scoped>
.child-javascript{
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
