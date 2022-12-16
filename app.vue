<template>
  <div>
    <p>{{ this.page.title }}</p>
    <p>Test</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      page: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1337/api/page");
      this.page = response.data.data.attributes;
      console.log(response);
    } catch (error) {
      this.error = error;
    }
    console.log(this.page.title);
  },
};
</script>
