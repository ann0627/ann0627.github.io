
<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <p><nuxt-link to="/blogs">回列表頁</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // validate ({ params }) {
  //   return /^\d+$/.test(params.slug)
  // },
  async asyncData({ params }) {
    // console.log(params.slug);
    // let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.slug}`)
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    console.log(data);
    return { 
      title: data.title,
      content: data.body
    }
  },
  head() {
    return {
      // 頁面 title 設為該文章標題
      title: this.title
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
