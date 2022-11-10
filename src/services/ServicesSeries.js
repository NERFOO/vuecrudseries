import Global from "./../Global";
import axios from "axios";

export default class ServicesSeries{
    getSeries() {
        return new Promise(function (resolve) {
            var request = "/api/series/";
            var url = Global.urlSeries + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getSerieId(id) {
        return new Promise(function (resolve) {
            var request = "/api/series/" + id;
            var url = Global.urlSeries + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    personajesId(id) {
        return new Promise(function (resolve) {
            var request = "/api/Series/PersonajesSerie/" + id;
            var url = Global.urlSeries + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    personajes() {
        return new Promise(function (resolve) {
            var request = "/api/personajes/";
            var url = Global.urlSeries + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    postPersonaje(personaje) {
        return new Promise(function (resolve) {
            var request = "/api/personajes/";
            var url = Global.urlSeries + request;

            axios.post(url, personaje).then( res => {
                resolve(res);
            })
        })
    }

    putPersonaje(personaje, serie) {
        return new Promise(function (resolve) {
            var request = `/api/personajes/${personaje}/${serie}`;
            var url = Global.urlSeries + request;

            axios.put(url).then( res => {
                resolve(res.data);
            })
        })
    }

}