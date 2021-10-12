<template>
  <div class="memo-box">
    <h1>一覧</h1>
    <div class="memo">
      <ul>
        <li v-for="item in memos" v-bind:key="item.id">
          <router-link :to="{ path: '/memo/' + item.id }">{{ item.content.split('\n')[0] }}</router-link>
        </li>
        <li><router-link to="/new">+</router-link></li>
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
import { memoStorage } from "../modules/storage";
export default {
  name: 'Memo',
  data () {
    return {
      memos: []
    }
  },
  methods: {
    removeMemo: function() {
      this.memos.splice(this.$route.params.id, 1);
      memoStorage.save(this.memos)
      this.$router.push('/');
    },
    editMemo: function() {
      let content = this.$refs.content
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
  }
}
</script>
