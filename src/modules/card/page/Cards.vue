<template>

    <v-container fluid grid-list-xl>
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 v-for="(card,index) in cards" :key="index">

                <card
                        :color="card.color"
                        :title="card.title"
                        :subtitle="card.subtitle"
                        :icon="card.icon"
                        :image="card.image"
                        :tasks="card.tasks"
                        :skills="card.skills"
                        :especializations="card.especializations"
                ></card>

            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import Card from '../components/Card'
    import cards from '../provider/cards'

    export default {
        name: "Cards",
        components: {Card},
        data: function () {
            return {
                cards: cards

            }
        }
    }
</script>

<style scoped>

</style>