<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="{ name: 'showPost', params: { id: post.id } }">{{
        post.title
      }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
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