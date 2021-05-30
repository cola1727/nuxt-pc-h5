<template>
  <div class="container">
    <div class="banner">
      <div class="title"></div>
    </div>
    <div class="main-container">
      <div
        class="content"
        :style="{ position: contentFixed ? 'fixed' : 'relative' }"
      ></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { wheelEvent } from "@/plugins/wheel.js";

export default {
  name: "home",
  data() {
    return {
      contentFixed: false
    };
  },
  computed: {
    // contentFixed() {
    //  window.addEventListener &&  window.addEventListener("scroll", function(e) {
    //     console.log(window.scrollY);
    //     let scrollTop = window.scrollY,
    //     clientHieght = window.innerHeight;
    //     if (scrollTop >= clientHieght) {
    //       _that.contentFixed = true
    //     } else {
    //     }
    //   });
    // }
  },
  mounted() {
    const _that = this;
    window.onload = () => {
      window.addEventListener("scroll", function(e) {
       
        let scrollTop = window.scrollY,
          clientHieght = window.innerHeight;
        if (scrollTop >= clientHieght && scrollTop < 2 * clientHieght) {
           console.log(scrollTop);
          document.addEventListener("mousewheel", wheelEvent, { passive: false });
        } 
        else {
          document.removeEventListener("mousewheel", wheelEvent, {
            passive: false
          });
        }
      });
      // window.addEventListener("mousewheel", wheelEvent, { passive: true });
    };
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  .banner {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url("~assets/images/banner2.jpg") no-repeat;
    background-size: cover;
    animation: 6s bannerScale;
  }
  .main-container {
    width: 100%;
    height: 100vh;
    .content {
      width: 100%;
      height: 100%;
      background-color: aqua;
    }
  }
  .footer {
    width: 100%;
    height: 400px;
  }
}
@keyframes bannerScale {
  0% {
    transform: scale(1.2);
  }
}
</style>
