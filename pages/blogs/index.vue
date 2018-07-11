
<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <nuxt-link :to="'/blogs/'+blog.id">{{ blog.title }}</nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">回首頁</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        // 將網址的資料指給res，並取前五筆資料，建議 console.log 以下兩點，來看其差異
        // console.log(res); 包含其它物件
        // console.log(res.data); 選取 100 筆資料
        // console.log(res.data);
        return { 
          blogs: res.data.slice(0, 6),
        }
      })
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
