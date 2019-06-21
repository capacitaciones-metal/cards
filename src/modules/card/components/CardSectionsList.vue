<template>
    <v-list
            subheader
            dense
    >
        <v-subheader

        >
            {{ title }}
        </v-subheader>

        <template v-for="(item,index) in items">
            <v-list-tile :key="index" v-if="index<max">
                <v-list-tile-content>
                    <v-list-tile-title>{{item}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider
                    v-if="index + 1 < max"
                    :key="'d'+index"
            ></v-divider>


        </template>
    </v-list>
</template>

<script>
    export default {
        name: "CardSectionsList",
        props: {
            title: String,
            items: Array,
            max: {type: Number, default: 3}
        }
    }
</script>

<style scoped>

</style>