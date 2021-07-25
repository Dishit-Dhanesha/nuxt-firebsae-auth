<template>
  <div>
    <h1>This is the protected route</h1>
    <h1>You are loggeed in {{ $nuxt.$fire.auth.currentUser.email }}</h1>
    <button @click="$router.push('./auth/signout')" class="button button3">Logout</button>
  </div>
</template>

<style>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button3 {
  background-color: #5469d4;
  border-radius: 20px;
}
</style>
