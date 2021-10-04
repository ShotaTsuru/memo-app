<template>
  <div class="memo-box">
    <h1>一覧</h1>
    <div class="memo">
      <ul>
        <li>test</li>
        <li><a href="">+</a></li>
      </ul>
      <div class="form-box">
        <form>
            <textarea id="edit-area" cols="30" rows="10"></textarea>
            <div id="button-box">
              <div id="edit"><a href="">編集</a></div>
              <div id="delete"><a href="">削除</a></div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
