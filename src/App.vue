<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('../src/assets/fonts.css');
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url('../src/assets/basic.scss');
@import url('../src/assets/sidebar.scss');
@import url('../src/assets/content.scss');

@media (min-width: 1367px) {
    html {
        font-size: 80%; 
    }
}
</style>
