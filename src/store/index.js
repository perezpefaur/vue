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
		getCharacters(state, query) {
			state.characters = [];
			if (query != ''){
				axios
				.get(
					`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&limit=100&apikey=${public_key}`
				)
				.then((result) => {
					result.data.data.results.forEach((item) => {
						state.characters.push(item);
					});
				})
				.catch((error) => {});
			} else {
				axios
				.get(
					`https://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`
				)
				.then((result) => {
					result.data.data.results.forEach((item) => {
						state.characters.push(item);
					});
				})
				.catch((error) => {});
			}
		},

		getCharacter(state, id) {
			state.character = [];
			axios
				.get(
					`https://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`
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
					`https://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${public_key}`
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
		getCharacters: (context, query) => {
			context.commit("getCharacters", query);
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
