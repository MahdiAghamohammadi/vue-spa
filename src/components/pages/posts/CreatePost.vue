<template>
  <div class="col-md-6">
    <h2 class="mb-4">Create Post:</h2>
    <form @submit.prevent="validate">
      <div class="form-group mb-2">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
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
          rows="3"
          placeholder="Body"
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
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  setup() {
    const form = reactive({
      title: "",
      body: "",
      titleError: "",
      bodyError: "",
    });
    const loading = ref(false);
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
        createPost();
      }
    }
    function createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts/", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function (response) {
          // handle success
          loading.value = false;
          Swal.fire({
            title: "Success!",
            text: "Post Created Successfully",
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
    return { form, validate, loading };
  },
};
</script>

<style>
</style>