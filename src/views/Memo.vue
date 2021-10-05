<template>
  <div class="memo-box">
    <h1>一覧</h1>
    <div class="memo">
      <ul>
        <li v-for="item in memos" v-bind:key="item.id">
          <router-link :to="{ path: '/memo/' + item.id }" v-on:click.prevent="showForm">{{ item.content.split('\n')[0] }}</router-link>
        </li>
        <li><router-link to="/edit" v-on:click.prevent="showForm">+</router-link></li>
      </ul>
      <div class="form-box">
        <form>
          <textarea :value="memos[this.$route.params.id].content" type="text" ref="content" id="edit-area" cols="30" rows="10"></textarea>
          <div id="button-box">
            <div id="edit"><a href="" v-on:click.prevent="editMemo">編集</a></div>
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
  name: 'Memo',
  data () {
    return {
      memos: [],
      showText: false
    }
  },
  methods: {
    showForm: function() {
      this.showText = true
    },
    addMemo: function() {
      let content = this.$refs.content
      this.memos.push({
        id: memoStorage.uid++,
        content:  content.value,
      })
      content.value = ''
      this.showText = false
      memoStorage.save(this.memos)
     

    },
    removeMemo: function() {
      this.memos.splice(this.$route.params.id, 1);
      memoStorage.save(this.memos)
      this.$router.push('/');
      console.log(1);
    },
    editMemo: function() {
      let content = this.$refs.content
      console.log(this.memos);
      let memo = {
        id: this.$route.params.id,
        content:  content.value,
      }
      this.memos.splice(memo.id, 1, memo);
      memoStorage.save(this.memos)
      this.$router.push('/');
    }
  },
  created () {
    this.memos = memoStorage.fetch();
  },
}
</script>
