<template>
  <div class="memo-box">
    <h1>一覧</h1>
    <div class="memo">
      <ul>
        <li v-for="item in memos" v-bind:key="item.id">
          <router-link :to="{ path: '/memo/' + item.id }" v-on:click.prevent="showForm">{{ item.content.split('\n')[0] }}</router-link>
        </li>
        <li><router-link to="/new" v-on:click.prevent="showForm">+</router-link></li>
      </ul>
      <div class="form-box">
        <form>
        <textarea type="text" ref="content" id="edit-area" cols="30" rows="10"></textarea>
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
import { memoStorage } from "../modules/storage";
export default {
  name: 'New',
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
      this.$router.push('/');
    },
    removeMemo: function(item) {
      let index = this.memos.indexof(item);
      this.memos.splice(index, 1);
    }
  },
  created () {
    this.memos = memoStorage.fetch();
    this.showText = true
  },
  components: {

  }
}
</script>
