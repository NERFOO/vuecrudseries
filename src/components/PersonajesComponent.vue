<template>
    <div>
        <h1>Personajes</h1>

        <router-link :to="`/serie/${this.id}`" class="btn btn-danger">Volver</router-link>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody v-if="personajes">
                <tr v-for="pers in personajes" :key="pers">
                    <td>{{pers.nombre}}</td>
                    <td><img :src="pers.imagen" alt="imagen" style="width:200px"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServicesSeries from './../services/ServicesSeries';
const service = new ServicesSeries();

export default {
    name : "PersonajesComponent" ,
    data() {
        return{
            personajes : null ,
            id : 0
        }
    },
    mounted() {
        this.id = this.$route.params.id;

        service.personajesId(this.id).then( res => {
            this.personajes = res;
        })
    }
}
</script>

<style>

</style>