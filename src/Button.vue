<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('myclick')">
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon name="Loading" class="loading icon" v-if="loading" ></g-icon>
    <div class="slotContainer">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default  {
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
      },
      loading:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped lang="scss">

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