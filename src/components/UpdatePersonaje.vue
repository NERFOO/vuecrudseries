<template>
    <div>
        <h1>Update Personaje</h1>

        <label>Seleccione una serie</label>
        <select class="form-select" v-model="idSerie">
            <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{serie.nombre}}</option>
        </select>

        <label>Seleccione un personaje</label>
        <select class="form-select" v-model="idPersonaje">
            <option v-for="pers in personajes" :key="pers" :value="pers.idPersonaje">{{pers.nombre}}</option>
        </select>
        <br>
        <button @click="actualizarPersonaje()" class="btn btn-info">Crear personaje</button>
    </div>
</template>

<script>
import ServicesSeries from './../services/ServicesSeries';
const service = new ServicesSeries();

export default {
    name : "UpdatePersonaje" ,
    data() {
        return{
            personajes : [] ,
            series : [] ,
            idSerie : 1 ,
            idPersonaje : 1
        }
    },
    methods : {
        actualizarPersonaje() {
            service.putPersonaje(this.idPersonaje, this.idSerie).then( () => {
                this.$router.push(`/personajes/${this.idSerie}`);
            })
        }
    },
    mounted() {
        service.getSeries().then( res => {
            this.series = res;
        });
        service.personajes().then( res => {
            this.personajes = res;
        })
    }
}
</script>

<style>

</style>