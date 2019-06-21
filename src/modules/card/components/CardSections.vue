<template>
    <v-tabs
            :color="tabBrackgroundColor"
            dark
            :height="32"
            grow
            :show-arrows="false"
    >
        <v-tabs-slider :color="tabSliderColor"></v-tabs-slider>

        <v-tab href="#tasks">
            <span><v-icon>assignment</v-icon></span>
        </v-tab>

        <v-tab href="#skills">

            <span><v-icon>stars</v-icon></span>
        </v-tab>

        <v-tab href="#especializations">
            <span><v-icon>style</v-icon></span>

        </v-tab>

        <v-tab-item :value="'tasks'">
            <card-sections-list :items="tasks" :title="'Tareas'" />
        </v-tab-item>

        <v-tab-item :value="'skills'">
            <card-sections-list :items="skills" :title="'Habilidades'" />
        </v-tab-item>

        <v-tab-item :value="'especializations'">
            <card-sections-list :items="especializations" :title="'Especializaciones'" />
        </v-tab-item>

    </v-tabs>
</template>

<script>

    import CardSectionsList from './CardSectionsList'

    export default {
        name: "CardSections",
        props: {
            tabBrackgroundColor: {type: String, default: "cyan"},
            tabSliderColor: {type: String, default: "white"},
            tasks: Array,
            especializations: Array,
            skills: Array
        },
        components: {
            CardSectionsList
        }
    }
</script>

<style scoped>

</style>