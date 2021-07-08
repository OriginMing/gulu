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

import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies)
const exp = chai.expect;
{
  //将Button对象转为函数
  let  Constructor = Vue.extend(Button);
  //创建Button的实例//给Button实例传参
  let constructor = new Constructor({
    propsData:{
      icon:'set',
      loading:true,
    }
  });
  //将Button挂载到页面上
  constructor.$mount('#test');
  //
  let docu =  constructor.$el.querySelector('use');
  console.log(docu.getAttribute('xlink:href'))
  let attribute = docu.getAttribute('xlink:href')
  let tset = constructor.$el.querySelector('svg');
  console.log(window.getComputedStyle(tset))
  //点击事件测试
  const spy =  chai.spy(function () {})
  constructor.$on('myclick',spy)
   constructor.$el.click();
  exp(spy).to.have.been.called();
  // exp(attribute).to.eq('#icon-set');
  // constructor.$el.remove();
  // constructor.$destroy();

}