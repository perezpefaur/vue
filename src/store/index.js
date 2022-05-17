import { createStore } from "vuex";
import { secret_key, public_key } from "../marvel";
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
			this.url = "";
			state.character = [];
			axios
				.get(
					`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`
				)
				.then((result) => {
					result.data.data.results.forEach((item) => {
						state.character.push(item);
						console.log(item.thumbnail.path);
						state.url = `${item.thumbnail.path}/`;
						console.log(state.url);
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
