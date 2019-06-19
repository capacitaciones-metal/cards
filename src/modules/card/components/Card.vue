<template>

            <v-card :elevation="elevation" :hover="true" :class="{ 'pcard-indigo': true, 'pbox': true }">
                <v-card-title primary-title>
                    <v-layout row>
                        <v-flex xs10>
                            <div>
                                <h3 class="pcard-indigo ptitle display-1 font-weight-black font-italic">{{title}}</h3>
                                <div> {{ subtitle }}</div>
                            </div>

                        </v-flex>
                        <v-flex xs2>
                            <v-img
                                    :src="require('../../../assets/dba.png')"

                            />
                        </v-flex>
                    </v-layout>

                </v-card-title>


                <v-card-text>
                    <h5>Tareas</h5>
                    <ul>
                        <li v-for="(task,index) in tasks" :bind="index">{{task}}</li>
                    </ul>

                </v-card-text>

            </v-card>

</template>

<script>
    export default {
        name: "Card",
        props: {
            title: String,
            subtitle: String,
            tasks: Array
        },
        data: function () {
            return {
                elevation: 2,
                hover: 10
            }
        }

    }
</script>

<style scoped>
    .pcard-indigo.pbox {
        border: 8px #303F9F solid;

    }

    .pcard-indigo.ptitle{
        color:  #1A237E;
    }
</style>