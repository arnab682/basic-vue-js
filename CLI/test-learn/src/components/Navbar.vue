<template>
    <div>
        <nav>
            <ul>
                <li><a href="https://vuejs.org">Home</a></li>
                <li><a href="https://forum.vuejs.org">Post</a></li>
                <li><a href="https://chat.vuejs.org">Category</a></li>
                <li><a href="https://twitter.com/vuejs">About</a></li>
                <li><a href="https://news.vuejs.org">Contact</a></li>
            </ul>
        </nav>
    </div>    
      
</template>
  
  <script>
  export default {
    name: 'HelloWorld',
    // props: {
    //   msg: String
    // }
    data(){
      return{
        
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  