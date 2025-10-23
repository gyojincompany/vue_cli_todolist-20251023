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
import api from "./config/axiosConfig";

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
  async created() {
    //페이지 로딩시에 자동으로 호출
    await this.loadTodos(); //페이지 로딩 될때 새로운 백엔드 할일 불러오기
  },
  methods: {
    async loadTodos() {
      //기존의 할일 리스트 가져오기
      try {
        const res = await api.get("/todos"); //백엔드에 모든 할일리스트 가져오기 호출
        this.todos = res.data;
      } catch (err) {
        console.error("할일 리스트 불러오기 실패", err);
      }
    },
    async addTodo(newTodoText) {
      //새 할일 쓰기
      try {
        const res = await api.post("/todos", { content: newTodoText });
        this.todos.push(res.data);
      } catch (err) {
        console.error("할일 추가 실패", err);
      }

      // this.todos.push({
      //   id: Date.now(), //현재 시간(밀리터리 초 단위)->절대 중복되지 않는 값
      //   content: newTodoText,
      // });
    },

    async deleteTodo(id) {
      //할일 삭제
      try {
        await api.delete(`/todos/${id}`);
        //id->TodoList에서 넘겨준 todo.id(삭제할 할일의 id)
        this.todos = this.todos.filter((todo) => todo.id !== id);
        //새로운 배열을 필터링해서 생성 ->조건에 맞지 않는 요소들만 남김
      } catch (err) {
        console.error("할일 삭제 실패", err);
      }
    },
  },
};
</script>

<style>
#app {
  max-width: 400px;
  text-align: center;
  margin: 50px auto;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #faf9f9;
  padding: 10px;
}

#app h1 {
  color: cadetblue;
}
</style>
