<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.content }}
    </li>
    <button class="delete" @click="$emit('delete-todo', todo.id)">삭제</button>
  </ul>
</template>

<script>
export default {
  props: ["todos"],
};
</script>

<style></style>
