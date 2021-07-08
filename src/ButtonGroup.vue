<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
       console.log(this.$el)
      for(let node of this.$el.children){
        if(node.nodeName.toLocaleLowerCase()!=="button"){
          console.warn(`g-button-group的子组件应该全为g-button,你在里面填入了${node.nodeName.toLocaleLowerCase()}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.g-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    margin-left: -1px;
    /*&:not(:first-child){*/
    /*  border-left:none ;*/
     /*} 此方法会导致bordercolor缺少一边*/
     &:not(:first-child){
       margin-left: -1px;
     }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-bottom-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index:1
    }
  }

}
</style>