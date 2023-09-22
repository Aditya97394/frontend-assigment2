<template>
  <nav>
    <router-link to="/">
      <img src="./assets/tech1.png " width="150" height="150" />
    </router-link>

    <router-link to="/CreateInvoice">CreateInvoice </router-link>
    <router-link to="/History">History</router-link>
    <router-view> </router-view>
  </nav>
</template>

<script >
export default {
  name: "App",
};
</script>

<style >
nav {
  width: 100%;
  font-size: 24px;
  color: black;
}

nav a {
  display: inline-block;
  padding: 5px 10px;
  margin: 10px;
  text-decoration: none;
  margin: 10px;
  color: black;
}
</style>

