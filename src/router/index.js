import Vue from 'vue'
import Router from 'vue-router'
import contentLife from '@/components/content-life'
import contentCause from '@/components/content-cause'
import contentFeelings from '@/components/content-feelings'
import contentHealthy from '@/components/content-healthy'
import childCause from '@/components/child-cause'
import childLearn from '@/components/child-learn'
import childWork from '@/components/child-work'
import detailInterview from '@/components/detail-interview'
import detailTotal from '@/components/detail-totle'
import detailHtml from '@/components/detail-html'
import detailCss from '@/components/detail-css'
import childTwoJavascript from '@/components/child-two-javascript'
import detailJquery from '@/components/detail-jquery'
import detailVue from '@/components/detail-vue'
import childFamily from '@/components/child-family'
import childFriend from '@/components/child-friend'
import childLove from '@/components/child-love'
import childHabit from '@/components/child-habit'
import childMotion from '@/components/child-motion'
import childHappy from '@/components/child-happy'
import contentLogin from '@/components/content-login'
import contentLoginSucc from '@/components/content-login-succ'
import contentRegist from '@/components/content-register'
import contentRegistFail from '@/components/content-register-fail'
import contentRegistSucc from '@/components/content-register-succ'
import detailJavascriptTotal from '@/components/detail-javascript-total'
import detailJavascriptDom from '@/components/detail-javascript-dom'
import detailJavascriptHeight from '@/components/detail-javascript-height'
import detailJavascriptEs6 from '@/components/detail-javascript-es6'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: contentLife,
      name:"人生"
    }
    ,
    {
      path: '/content/人生',
      component: contentLife,
      name:"人生"
    },
    {
      path: '/content/事业',
      component: contentCause,
      children:[
        {
          path:"",
          component:childCause,
        },
        {
          path:"事业",
          component:childCause,
        },
        {
          path:"学习",
          component:childLearn,
        },
        {
          path:"工作",
          component:childWork,
        },
        {
          path:"childTwoJavascript",
          component:childTwoJavascript,
        }

      ]

    },
    {
      path: '/content/情感',
      component: contentFeelings,
      name:"情感",
      children:[
        {
        	path:"",
        	component:childFamily
        },
        {
        	path:"亲情",
        	component:childFamily
        },
        {
        	path:"友情",
        	component:childFriend
        },
        {
        	path:"爱情",
        	component:childLove
        }
      ]
    },
    {
      path: '/content/健康',
      component: contentHealthy,
      name:"健康",
      children:[
        {
        	path:"",
        	component:childHabit
        },
        {
        	path:"运动",
        	component:childMotion
        },
        {
        	path:"生活习惯",
        	component:childHabit
        },
        {
        	path:"心情",
        	component:childHappy
        }
      ]
    },
    {
     path:"/detailInterview",
     component:detailInterview
    },
    {
     path:"/detailTotal",
     component:detailTotal
    },
    {
     path:"/detailHtml",
     component:detailHtml
    },
    {
     path:"/detailCss",
     component:detailCss
    }
    // ,
    // {
    //  path:"/detailJavascript",
    //  component:detailJavascript
    // }
    ,
    {
     path:"/detailJquery",
     component:detailJquery
    },
    {
     path:"/detailVue",
     component:detailVue
    },
    {
     path:"/content/登录",
     component:contentLogin
    },
    {
     path:"/content/登录成功",
     component:contentLoginSucc
    },
    {
     path:"/content/注册",
     component:contentRegist
    },
    {
     path:"/content/注册失败",
     component:contentRegistFail
    },
    {
     path:"/content/注册成功",
     component:contentRegistSucc
    },
    {
     path:"/detailJavascriptTotal",
     component:detailJavascriptTotal
    },
    {
     path:"/detailJavascriptDom",
     component:detailJavascriptDom
    },
    {
     path:"/detailJavascriptHeight",
     component:detailJavascriptHeight
    },
    {
     path:"/detailJavascriptEs6",
     component:detailJavascriptEs6
    }
    
  ]
})
