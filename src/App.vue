<template>
  <div id="app">
    <div><button>도움말</button></div>
    <h1>짧은 일기</h1>
    <div class="memo-form">
      <div><label>제목</label><input type="text" v-model="memo.title" /></div>
      <div><label>내용</label><textarea v-model="memo.content"></textarea></div>
      <button @click="addMemo">추가</button>
    </div>
    <MemoList :memoList="memoList" />
  </div>
</template>
<script>
import firebase from "firebase";

import MemoList from "./components/MemoList.vue";
export default {
  components: {
    MemoList,
  },
  data() {
    return {
      memo: {
        title: null,
        content: null,
      },
      memoList: [],
    };
  },
  methods: {
    listMemo() {
      firebase
        .firestore()
        .collection("posts")
        .get()
        .then((qs) => {
          let temp = [];
          qs.forEach((doc) => {
            const serverPost = doc.data();
            const post = {
              id: doc.id,
              content: serverPost.content,
              createAt: serverPost.createAt.toDate().toLocaleString(),
              title: serverPost.title,
            };
            // this.memoList.push(post);
            temp.push(post);
          });
          this.memoList = temp;
        });
    },
    addMemo() {
      firebase
        .firestore()
        .collection("posts")
        .doc()
        .set({
          title: this.memo.title,
          content: this.memo.content,
          createAt: new Date(),
        })
        .then(() => {
          this.memo.title = "";
          this.memo.content = "";
          alert("추가완료");
          this.listMemo();
        });
    },
    addPost() {},
  },
  created() {
    this.listMemo();
  },
};
</script>
<style lang="scss">
</style>
