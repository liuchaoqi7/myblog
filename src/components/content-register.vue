<template>
  <div class="content-login">
    <p class="desc">注册页面</p>
    <form action="" method="get">
      <div>
        <span>姓名:</span><input type="text" value="" name="name" ref="username">
      </div>
      <div>
        <span>密码:</span><input type="password" value="" name="password" ref="password">
      </div>
      <div>
        <input type="submit" >
        <span @click="check" class="check">验证</span>
      </div>
    </form>
    <p>提示：登录注册表单模块只是为了测试一下插件axios获取JSON数据的相关功能，所以有些功能内容并没有开发，望谅解；</p>
    <p>以下几个账户已被注册，进行注册测试时，会显示已被注册；由于是前端的模拟数据，请点击“验证”按钮测试：</p>
    <p>姓名：小明；密码：ming</p>
    <p>姓名：小博；密码：bo</p>
    <p>姓名：小红；密码：hong</p>
    <p>姓名：小绿；密码：lv</p>
    <p>姓名：小蓝；密码：lan</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    getData(){
      axios.get('/api/index.json').then(this.getDataSucc)
    },
    getDataSucc(res){
      const data=res.data;
      if(data.data){
        let userData=data.data.userList
        let register=false;
        for(let i=0;i<userData.length;i++){
          if(userData[i].userName==this.$refs.username.value){
            this.$router.push("/content/注册失败")
            register=true;
            // console.log("成功")
          }
          // else if(userData[i].userName!==this.$refs.username.value && this.$refs.username.value!=="" &&this.$refs.password.value!==""){
          //   let userObject={};
          //   let id="00"+(userData.length+1);
          //   // console.log(id)
          //   userObject.id=id;
          //   userObject.userName=this.$refs.username.value;
          //   userObject.password=this.$refs.password.value;
          //   userData.push(userObject)
          //   console.log(userData)
          // }
        };
        if(!register){
          if(this.$refs.username.value!=="" && this.$refs.password.value!==""){
          	let userObject={};
            let id="00"+(userData.length+1);
            // console.log(id)
            userObject.id=id;
            userObject.userName=this.$refs.username.value;
            userObject.password=this.$refs.password.value;
            userData.push(userObject)
            console.log(userData)
            this.$router.push("/content/注册成功")
          }
        }
      }
    },
    check(){
      this.getData()
    }
  }
}
</script>

<style scoped>
.content-login{
  text-align: center;
  padding:0.5rem 0;
}
.desc{
  font-weight: bold;
}

form>div{
  padding:0.3rem 0;
}
.check{
  background: #aaa;
}
</style>
