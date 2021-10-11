let STORAGE_KEY = 'memos-vuejs-demo'
export let memoStorage = {
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