<template></template>

<script>
export default {
  //Sign Out
  asyncData() {
    $nuxt.$fire.auth.signOut();
  },
};
</script>
