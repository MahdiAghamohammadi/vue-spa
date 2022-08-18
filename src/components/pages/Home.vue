<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          quia distinctio? Nam laborum explicabo esse expedita inventore
          molestias accusantium hic aut aspernatur perferendis nulla at, et
          suscipit sapiente ea voluptates.
        </p>
        <router-link :to="{ name: 'users' }" class="btn btn-dark btn-sm"
          >Users</router-link
        >
        <router-link :to="{ name: 'posts' }" class="btn btn-light btn-sm ms-3"
          >Posts</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>