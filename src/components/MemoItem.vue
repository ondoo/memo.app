<template>
  <div class="memo-item">
    <div>{{ memo.createAt }}</div>
    <textarea v-if="isUpdateMode" v-model="memo.content"></textarea>
    <div v-else>{{ memo.content }}</div>
    <div>
      <button v-if="!isUpdateMode" @click="deleteMemo">삭제</button>
      <button v-else @click="changeMode('read')">취소</button>
      <button v-if="isUpdateMode" @click="saveMemo">저장</button>
      <button v-else @click="changeMode('update')">수정</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["memo"],
  data() {
    return {
      isUpdateMode: false,
    };
  },
  methods: {
    saveMemo() {},
    deleteMemo() {
      this.$store.commit("deleteMemo", this.memo.id);
    },
    changeMode(modeType) {
      if (modeType === "update") {
        this.isUpdateMode = true;
      } else if (modeType === "read") {
        this.isUpdateMode = false;
      }
    },
  },
  mounted() {
    console.log("memoitem");
  },
};
</script>

<style>
</style>