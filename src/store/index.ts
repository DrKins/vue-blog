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
  },
  actions: {
    //creating async call for mutation
    generateCard({ commit }, payload) {
      commit("MutateNewCard", payload);
    },
  },
  modules: {},
});
