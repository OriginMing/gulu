<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon :name="icon" v-if="icon" class="icon"></g-icon>
    <g-icon name="Loading" class="loading"></g-icon>
    <div class="slotContainer">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props:["icon","iconPosition"]
    props:{
      icon:{},
      iconPosition:{
        default:'left',
        type:String,
        // validator: function (value) {
        //   if (value !== 'left' && value !== 'right') {
        //     return false
        //   } else {
        //     return true
        //   }
        // }
        validator(value){
          console.log(value)
          return value ==='left' || value ==='right'
        } //validator代码优化
      }
    }
  }
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --border-color:#eee;
  }
  @keyframes  spin{
    0%{
      transform: rotate(0deg);
    }100%{
    transform: rotate(360deg);
         }

    
  }
  #app{
    margin: 20px;
  }
  :root{
    --font-size:14px;
    --button-height:32px;
    --button-bg:white;
    --button-active-bg:#eee;
    --border-radius:4px;
    --color:#333;
    --border-color:#999;
    --border-color-hover:#666 ;
  }
  .g-button{
    vertical-align: middle;//解决inline对不齐的问题
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 2px 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background: var(--button-active-bg);
    }
    &:focus{
      outline: none;
    }

    > .icon{
      order:1;
      margin-left: 0.1em;
    }
    > .slotContainer{
     order: 2;
    }
    &.icon-right{
      .icon{
        order:2;
        margin-right: 0.1em;
      }
      > .slotContainer{
        order: 1;
      }
    }
    .loading{
      animation: spin 2s infinite linear;
    }
  }
</style>