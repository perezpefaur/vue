import { createStore } from "vuex";
import { public_key } from "../marvel";
import axios from "axios";

export default createStore({
	state: {
		characters: [],
		character: [],
		url: "",
	},
	getters: {},
	mutations: {
		getCharacters(state) {
			state.characters = [];
			axios
				.get(
					`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
				)
				.then((result) => {
					result.data.data.results.forEach((item) => {
						state.characters.push(item);
					});
				})
				.catch((error) => {});
		},

		getCharacter(state, id) {
			state.character = [];
			axios
				.get(
					`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`
				)
				.then((result) => {
					result.data.data.results.forEach((item) => {
						state.character.push(item);
						console.log(state.character);
					});
				});
		},
	},
	actions: {
		getCharacters: (context) => {
			context.commit("getCharacters");
		},

		getCharacter: (context, id) => {
			context.commit("getCharacter", id);
		},
	},
	modules: {},
});
