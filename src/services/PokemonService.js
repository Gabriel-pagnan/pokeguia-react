import { Api } from "./axiosConfig";

const getPokemon = async (pokemon) => {
    try {
        const data = await Api.get(`pokemon/${pokemon}`)
        if(data) {
            return data;
        }
    } catch (e) {
        console.log(e);
    }
}

const getAll = async(limit) => {
    try {
        const data = await Api.get(`pokemon/?limit=${8 + limit}`)
        if(data) {
            return data;
        }
    } catch (e) {
        console.log(e);
    }
}

const getType = async(id) => {
    try {
        const data = await Api.get(`pokemon/${id}`)
        if(data) {
            return data;
        }
    } catch (e) {
        console.log(e);
    }
}

export const PokemonService = {
    getPokemon,
    getAll,
    getType
}