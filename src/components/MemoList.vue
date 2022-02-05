<template>
  <div>
    <MemoItem :memo="memo" v-for="memo in memoList" :key="memo.id" />
  </div>
</template>

<script>
import MemoItem from "./MemoItem.vue";
export default {
  props: ["memoList"],
  components: {
    MemoItem,
  },
  mounted() {
    console.log('memolist');
  }
};
</script>

<style>
</style>