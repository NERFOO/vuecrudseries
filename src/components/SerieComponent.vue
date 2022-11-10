<template>
    <div>
        <h1>Serie Component</h1>

        <div class="card" style="width: 18rem;" v-if="serie">
            <img :src="this.serie.imagen" class="card-img-top" alt="imagen">
            <div class="card-body">
                <h5 class="card-title">{{this.serie.nombre}}</h5>
                <p class="card-text">{{this.serie.puntuacion}}</p>
                <router-link :to="`/personajes/${this.serie.idSerie}`" class="btn btn-primary">Personajes</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesSeries from './../services/ServicesSeries';
const service = new ServicesSeries();

export default {
    name : "SerieComponent" ,
    data() {
        return{
            serie : null ,
            id : 0
        }
    },
    methods : {
        cargarSerie() {
            this.id = this.$route.params.id;

            service.getSerieId(this.id).then( res => {
                this.serie = res;
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.cargarSerie();
    },
    watch : {
        '$route.params.id'(nextVal, oldVal){
            if (nextVal != oldVal){
                this.cargarSerie();
            }
        }
    }
}
</script>

<style>

</style>