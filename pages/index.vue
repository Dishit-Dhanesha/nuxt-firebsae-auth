<template>
  <div class="container has-text-centered">
    This is Main page
   
      <br />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapState(['allCrypto']),
  },
  methods: {
    ...mapActions(['getAllCrypto']),
  },
};
</script>
