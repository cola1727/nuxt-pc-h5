<template>
  <nav id="navbar">
    <div class="nav-wrap">
      <div class="logo">
        <Logo />
        <h1>PC互联</h1>
      </div>
      <div class="language">
        <span>ColorOS</span>
        <span>CH</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="less" scoped>
#navbar {
  width: 100%;
  padding: 0 240px;
  position: fixed;
  top: 0;
  .nav-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 77px;
    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > h1 {
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
}
</style>
