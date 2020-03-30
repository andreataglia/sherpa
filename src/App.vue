<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      right
      dark
      color="primary"
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

    <v-app-bar app dense>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-content class="bgColor">
      <vue-page-transition name="fade">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
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
      { icon: 'mdi-message-processing', text: 'FAQ & Contacts', to: '/faq' },
      { icon: 'mdi-city', text: 'Terms of Service', to: '/about' }
    ]
  })
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";

.bgColor{
  background-color: $background-color;
}

.fillHeight {
  // height: calc(100vh - 74px);
  // align-items: stretch;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
