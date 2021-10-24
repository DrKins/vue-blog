import { createStore } from "vuex";
import { StateInterface } from "./interface";

//createStore with interface
export default createStore<StateInterface>({
  state: {
    //state where all cards will be stored.
    APIData: [],
  },
  getters: {
    //getting all cards to components
    GetAPI: (state) => state.APIData,
  },
  mutations: {
    //mutating via action call new card.
    MutateNewCard(state, payload) {
      state.APIData.push(payload);
    },
    //mutate new like to card
    MutateLike(state, payload) {
      state.APIData[payload.id].likes += 1;
    },
    //mutate new dislike
    MutateDislike(state, payload) {
      state.APIData[payload.id].dislikes += 1;
    },
  },
  actions: {
    //creating async call for mutation
    generateCard({ commit }, payload) {
      commit("MutateNewCard", payload);
    },
  },
  modules: {},
});
