<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      right
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app hide-on-scroll dense>
  
      <v-spacer />

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <vue-page-transition name="overlay-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-home', text: 'Home', to: '/' },
      { icon: 'mdi-help-circle', text: 'How It Works', to: '/howitworks' },
      { icon: 'mdi-account-multiple', text: 'Team', to: '/team' },
      { icon: 'mdi-message-processing', text: 'FAQ', to: '/faq' },
      { icon: 'mdi-city', text: 'About', to: '/about' }
    ]
  })
};
</script>

<style>
.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #ff0000 !important;
}
body {
  background-color: grey;
}
</style>
