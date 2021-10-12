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
       
      </div>
    </div>
  </div>
</template>
<script>
import { memoStorage } from "../modules/storage";
export default {
  name: 'App',
  data () {
    return {
      memos: []
    }
  },
  created () {
    this.memos = memoStorage.fetch();
  }
}
</script>
