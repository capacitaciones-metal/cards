<template>

            <v-card :elevation="elevation" :hover="hover" :class="{ 'pcard-indigo': true, 'pbox': true }">
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

            </v-card>

</template>

<script>
    export default {
        name: "Card",
        props: {
            title: String,
            subtitle: String,
        },
        data: function () {
            return {
                elevation: 10,
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