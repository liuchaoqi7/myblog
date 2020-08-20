import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
    current:"人生",
    currentCause:"事业",
    currentFeelings:"亲情",
    currentHealthy:"健康"
	},
	mutations:{
    changeBgTab(state,value){
    	state.current=value
    },
    changeBgTabCause(state,value){
    	state.currentCause=value
    },
    changeBgTabCauseInit(state){
    	state.currentCause="事业"
    },
    changeBgTabFeelings(state,value){
    	state.currentFeelings=value
    },
    changeBgTabFeelingsInit(state){
    	state.currentFeelings="亲情"
    },
    changeBgTabHealthy(state,value){
    	state.currentHealthy=value
    },
    changeBgTabHealthyInit(state){
    	state.currentHealthy="生活习惯"
    }
	},
	actions:{

	}
})