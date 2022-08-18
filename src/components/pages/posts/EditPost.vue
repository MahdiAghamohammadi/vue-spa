<template>
  <div class="col-md-6">
    <h2 class="mb-4">Edit Post:</h2>
    <form @submit.prevent="validate">
      <div class="form-group mb-2">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model.lazy.trim="form.title"
        />
      </div>
      <div class="form-text text-danger mb-3">
        {{ form.titleError }}
      </div>
      <div class="form-group mb-2">
        <label for="body">Body</label>
        <textarea
          class="form-control"
          id="body"
          rows="7"
          v-model.lazy.trim="form.body"
        ></textarea>
      </div>
      <div class="form-text text-danger mb-3">
        {{ form.bodyError }}
      </div>
      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Edit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
export default {
  setup() {
    const form = reactive({
      title: "",
      body: "",
      titleError: "",
      bodyError: "",
    });
    const loading = ref(false);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          form.title = response.data.title;
          form.body = response.data.body;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function validate() {
      if (form.title === "") {
        form.titleError = "Title is required";
      } else {
        form.titleError = "";
      }

      if (form.body === "") {
        form.bodyError = "Title is required";
      } else {
        form.bodyError = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        updatePost();
      }
    }
    function updatePost() {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function (response) {
          // handle success
          loading.value = false;
          Swal.fire({
            title: "Success!",
            text: "Post edited Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getPost();
    return { form, validate, loading };
  },
};
</script>

<style>
</style>