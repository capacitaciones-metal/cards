<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>IT</span>
        <span class="font-weight-light">CARDS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Cristian Incarnato</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <cards></cards>
    </v-content>
  </v-app>
</template>

<script>
import Cards from './modules/card/page/Cards'
export default {
  name: 'App',
  components: {
    Cards
  },
  data () {
    return {
      //
    }
  }
}
</script>
