let STORAGE_KEY = 'memos-vuejs-demo'
export let memoStorage = {
  fetch: function() {
    let memos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    // memos.forEach(function(todo, index) {
    //   todo.id = index
    // })
    if (memos[0]){
      memoStorage.uid = memos[memos.length - 1].id;
    }else{
      memoStorage.uid = memos.length
    }
    return memos
  },
  save: function(memos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos))
  }
}