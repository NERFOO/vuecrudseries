import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import SerieComponent from './components/SerieComponent.vue';
import CreatePersonaje from './components/CreatePersonaje.vue';
import UpdatePersonaje from './components/UpdatePersonaje.vue';
import PersonajesComponent from './components/PersonajesComponent.vue';


const routes = [
    {
        path : "/" , component : HomeComponent
    },
    {
        path: "/serie/:id" , component : SerieComponent
    },
    {
        path: "/createPersonaje" , component : CreatePersonaje
    },
    {
        path: "/updatePersonaje" , component : UpdatePersonaje
    },
    {
        path: "/personajes/:id" , component : PersonajesComponent
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
});

export default router;