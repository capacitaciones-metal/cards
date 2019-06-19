<template>
    <div>
        <v-container fluid  grid-list-xl>
            <v-layout row wrap>
                <v-flex xs4>
                    <card :title="'DBA'" :subtitle="'Administrador de base de datos'"></card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    import Card from '../components/Card'
    export default {
        name: "Cards",
        components:{Card}
    }
</script>

<style scoped>

</style>