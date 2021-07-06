<template>
  <button class="g-button">你好</button>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --border-color:#eee;
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
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
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
  }
</style>