<template>
    <v-card :elevation="elevation" :hover="true" :class="getColorClass">
        <v-card-title primary-title>
            <v-layout row wrap>
                <v-flex xs9 pb-0>
                    <div>
                        <h3 class="pcard-title display-1 font-weight-black font-italic">{{title}}</h3>

                    </div>
                </v-flex>
                <v-flex xs3 pb-0>
                    <v-img
                            :src="icon"
                            contain
                    />
                </v-flex>
                <v-flex xs12 pt-0 mt-0>
                  {{ subtitle }}
                </v-flex>
            </v-layout>

        </v-card-title>

        <v-card-media>
            <v-img
                    :src="image"
                    contain
            />
        </v-card-media>

        <card-sections
                :tasks="tasks"
                :skills="skills"
                :especializations="especializations"
                :tab-brackground-color="color"
        />


    </v-card>

</template>

<script>
    import CardSections from './CardSections'

    export default {
        name: "Card",
        props: {
            color: String,
            title: String,
            subtitle: String,
            icon: String,
            image: String,
            tasks: Array,
            especializations: Array,
            skills: Array
        },
        components: {
            CardSections
        },
        computed: {
            getColorClass() {
                return 'pcard-' + this.color
            }
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


    .pcard-indigo {
        border: 10px solid;
        border-image-source: linear-gradient(45deg, #1A237E, #5C6BC0);
        border-image-slice: 1;
    }

    .pcard-indigo .pcard-title {
        color: #1A237E
    }


    .pcard-grey {
        border: 10px solid;
        border-image-source: linear-gradient(45deg, #263238, #546E7A);
        border-image-slice: 1;
    }

    .pcard-grey .pcard-title {
        color: #263238
    }


    .pcard-red {
        border: 10px solid;
        border-image-source: linear-gradient(45deg, #B71C1C, #C62828);
        border-image-slice: 1;
    }

    .pcard-red .pcard-title {
        color: #B71C1C
    }

    .pcard-purple {
        border: 10px solid;
        border-image-source: linear-gradient(45deg, #4A148C, #7B1FA2);
        border-image-slice: 1;
    }

    .pcard-purple .pcard-title {
        color: #4A148C
    }

</style>