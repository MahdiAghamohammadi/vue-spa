<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="{ name: 'showUser', params: { id: user.id } }">{{
        user.name
      }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">username: {{ user.username }}</li>
      <li class="list-group-item">email: {{ user.email }}</li>
      <li class="list-group-item">phone: {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>


<style scoped>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  text-decoration: none;
  cursor: text;
}
</style>