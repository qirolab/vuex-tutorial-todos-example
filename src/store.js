import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "todo item a",
        completed: false
      },
      {
        title: "todo item b",
        completed: false
      },
    ]
  },

  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },

    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },

  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },

    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },

    TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  },

  actions: {
    addNewTodo({ commit }, todoItem) {
      commit('NEW_TODO', todoItem);
    },

    deleteTodo({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem);
    },

    toggleTodoStatus({ commit }, todoItem) {
      commit('TOGGLE_TODO_STATUS', todoItem);
    }
  }
});