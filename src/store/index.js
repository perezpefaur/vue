import { createStore } from "vuex";
import { public_key } from "../marvel";
import axios from "axios";

export default createStore({
	state: {
		characters: [],
		character: [],
		comics: [],
		url: "",
	},
	getters: {},
	mutations: {
		getCharacters(state) {
			state.characters = [];
			axios
				.get(
					`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`
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
		getComics(state, id) {
			state.comics = [];
			axios
				.get(
					`http://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${public_key}`
				)
				.then((result) => {
					result.data.data.results.forEach((item) => {
						state.comics.push(item);
						console.log(state.comics);
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

		getComics: (context, id) => {
			context.commit("getComics", id);
		},
	},
	modules: {},
});
