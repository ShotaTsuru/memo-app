<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="memo-box">
    <h1>一覧</h1>
    <div class="memo">
      <ul>
        <li v-for="item in memos" v-bind:key="item.id"><a href="" v-on:click.prevent="showForm">{{ item.title }}</a></li>
        <li><a href="" v-on:click.prevent="showForm">+</a></li>
      </ul>
      <div class="form-box" v-show="showText">
        <form>
            <textarea type="text" ref="title" id="edit-area" cols="30" rows="10"></textarea>
            <div id="button-box">
              <div id="edit"><a href="" v-on:click.prevent="addMemo">編集</a></div>
              <div id="delete"><a href="" v-on:click.prevent="removeMemo">削除</a></div>
            </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
let STORAGE_KEY = 'memos-vuejs-demo'
let memoStorage = {
  fetch: function() {
    let memos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    memos.forEach(function(todo, index) {
      todo.id = index
    })
    memoStorage.uid = memos.length
    return memos
  },
  save: function(memos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos))
  }
}

export default {
  name: 'App',
  data () {
    return {
      memos: [],
      showText: false
    }
  },
  methods: {
    showForm: function() {
      this.showText = true
      console.log(this.memos);
    },
    addMemo: function() {
      let title = this.$refs.title
      this.memos.push({
        id: memoStorage.uid++,
        title:  title.value,
      })
      title.value = ''
      this.showText = false
      memoStorage.save(this.memos)
    },
    removeMemo: function(item) {
      let index = this.memos.indexof(item);
      this.memos.splice(index, 1);
    }
  },
  created () {
    this.memos = memoStorage.fetch();
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

#app {
  max-width: 640px;
  margin: 0 auto;
}

h1, h2 {
  font-weight: normal;
}
li {
  list-style: none; 
  text-align: left;
}

.memo-box {
  width: 100%;
  height: 800px;
  background-color: #ececec;
  padding: 8px;
}
.memo {
  display: flex;
  justify-content: space-between;
  background-color: whitesmoke;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  padding: 32px;
}

.form-box {
  width: 70%;
  height: 80%;
}

#edit-area {
  resize: none;
  width: 100%;
}

#button-box {
  display: flex;
  justify-content: space-around;
}

#edit {
  color: #fff;
  background-color: #eb6100;
  width: 60%;
  border: none;
  margin: 5px;
}

#delete {
  color: #fff;
  background-color: #eb6100;
  width: 30%;
  border: none;
  margin: 5px
}

a {
  text-decoration: none;

}


#edit-area {
  resize: none;
  width: 100%;
}

#button-box {
  display: flex;
  justify-content: space-around;
}

#edit {
  color: #fff;
  background-color: #eb6100;
  width: 60%;
  border: none;
  margin: 5px;
}

#delete {
  color: #fff;
  background-color: #eb6100;
  width: 30%;
  border: none;
  margin: 5px
}





table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}


</style>
