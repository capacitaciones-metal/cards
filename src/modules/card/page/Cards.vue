<template>
    <div>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs4>
                    <card   v-for="(card,index) in cards"
                            :key="index"
                            :title="card.title"
                            :subtitle="card.subtitle"
                            :tasks="card.tasks"
                    ></card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    import Card from '../components/Card'

    export default {
        name: "Cards",
        components: {Card},
        data: function(){
            return {
                cards:[
                    {
                        title: 'DBA',
                        subtitle: 'Administrador de base de datos',
                        tasks: [
                            'Diseño, implementación y mantenimiento',
                            'Gestion de acceso y seguridad',
                            'Backup y Restauración',
                            'Monitorio de Performance',
                            'Resolución de fallas e incidentes'
                        ]
                    }
                ]

            }
        }
    }
</script>

<style scoped>

</style>