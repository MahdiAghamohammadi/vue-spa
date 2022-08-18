<template>
  <div>
    <router-link :to="{ name: 'createPost' }" class="btn btn-dark btn-sm"
      >Create</router-link
    >
  </div>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="col-md-4" v-for="post in posts" :key="post.id">
    <PostCardView :post="post" />
  </div>
</template>
<script>
import PostCardView from "./CardView.vue";
import axios from "axios";
import { ref } from "vue";
export default {
  components: {
    PostCardView,
  },
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then(function (response) {
          // handle success
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPosts();
    return { posts, loading };
  },
};
</script>
<style>
</style>