<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoInput @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodoText) {
      this.todos.push({
        id: Date.now(), //현재 시간(밀리터리 초 단위)->절대 중복되지 않는 값
        content: newTodoText,
      });
    },
    deleteTodo(id) {
      //id->TodoList에서 넘겨준 todo.id(삭제할 할일의 id)
      this.todos = this.todos.filter((todo) => todo.id !== id);
      //새로운 배열을 필터링해서 생성 ->조건에 맞지 않는 요소들만 남김
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
