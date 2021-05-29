<template>
  <div class="container">
    <div class="banner">
     
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  .banner {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('~assets/images/banner2.jpg') no-repeat;
    background-size: cover;
    animation: 6s bannerScale;
    
  }
}
@keyframes bannerScale {
  0% {
    transform: scale(1.2);
  }
}
</style>
