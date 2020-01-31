<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
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

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span>Sherpa</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Sherpa"
        /></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <vue-page-transition name="overlay-right">
          <!-- component matched by the route will render here -->
          <router-view></router-view>
        </vue-page-transition>
      </v-container>
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
      { icon: 'mdi-contacts', text: 'Home', to: '/' },
      { icon: 'mdi-history', text: 'How It Works', to: '/howitworks' },
      { icon: 'mdi-history', text: 'Team', to: '/team' },
      { icon: 'mdi-content-copy', text: 'FAQ', to: '/faq' },
      { icon: 'mdi-content-copy', text: 'About', to: '/about' }
    ]
  })
};
</script>
