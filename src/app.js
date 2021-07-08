import Vue from "vue"
import Button from  './Button'
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
new Vue({
  el:'#app',
  data:{
    isLoading1:true,
    isLoading2:true,
    isLoading3:true,
  }
})