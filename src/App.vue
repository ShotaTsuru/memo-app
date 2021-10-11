<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
</template>

<script>
let STORAGE_KEY = 'memos-vuejs-demo'
let memoStorage = {
  fetch: function() {
    let memos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    memoStorage.uid = memos.length
    return memos
  },
  save: function(memos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos))
  }
}

// import Edit from './views/Edit.vue'
export default {
  name: 'App',
  // components: {
  //   Edit
  // },
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
      let content = this.$refs.content
      this.memos.push({
        id: memoStorage.uid++,
        content:  content.value,
      })
      content.value = ''
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
  }
}
</script>

<style>
@import "../css/app.css";

</style>
