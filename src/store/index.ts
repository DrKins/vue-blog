import { createStore } from "vuex";

export default createStore({
  state: {
    APIData: [
      {
        id: 0,
        text: "Sint ipsum nulla enim ipsum est minim dolor eiusmod excepteur consequat velit.",
        likes: 10,
        dislikes: 0,
      },
      {
        id: 1,
        text: "Adipisicing eiusmod consequat adipisicing proident dolor commodo irure ut aliqua dolore.",
        likes: 12,
        dislikes: 2,
      },
    ],
  },
  getters: {
    GetAPI: (state) => state.APIData,
  },
  mutations: {},
  actions: {},
  modules: {},
});
