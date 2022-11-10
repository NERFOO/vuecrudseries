<template>
    <div>
        <h1>Create Personaje</h1>

        <form method="POST" v-on:submit.prevent="crearPersonaje()">
            <input type="hidden" class="form-control" v-model="personaje.idPersonaje" />
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="personaje.nombre" />
            <label>Imagen</label>
            <input type="text" class="form-control" v-model="personaje.imagen" />
            <label>Id Serie</label>
            <input type="number" class="form-control" v-model="personaje.idSerie" />
            <br />
            <button class="btn btn-info">Crear personaje</button>
        </form>
    </div>
</template>

<script>
import ServicesSeries from './../services/ServicesSeries';
const service = new ServicesSeries();

import Swal from 'sweetalert2';

export default {
    name : "CreatePersonaje" ,
    data() {
        return{
            personaje : {
                idPersonaje : 0 ,
                nombre : "" ,
                imagen : "" ,
                idSerie : 0
            }
        }
    },
    methods : {
        crearPersonaje() {
            service.postPersonaje(this.personaje).then( () => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se ha creado el personaje',
                    showConfirmButton: false,
                    timer: 1500
                }).then( () => {
                    this.$router.push(`/personajes/${this.personaje.idSerie}`);
                })
            })
        }
    }
}
</script>

<style>

</style>