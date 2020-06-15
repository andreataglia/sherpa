<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->

    <transition leave-active-class="transition ease-in-out duration-300">
      <div class="md:hidden" v-show="drawer">
        <div class="fixed inset-0 flex z-30">
          <transition
            enter-active-class="transition-opacity ease-linear duration-300"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity ease-linear duration-300"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-show="drawer" class="fixed inset-0">
              <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </transition>
          <transition
            enter-active-class="transition ease-in-out duration-300 transform"
            enter-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition ease-in-out duration-300 transform"
            leave-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div
              v-show="drawer"
              class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-red-500"
            >
              <div class="absolute top-0 right-0 -mr-14 p-1">
                <button
                  @click="drawer = false"
                  class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto" src="./assets/sicily.svg" />
                <span class="ml-2 text-gray-900 font-semibold text-lg"
                  >Welcome To Sicily</span
                >
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2">
                  <a
                    v-for="(link, index) in links"
                    :key="index"
                    @click="goTo(link.to)"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white hover:bg-yellow-700 focus:outline-none transition ease-in-out duration-150 cursor-pointer"
                    :class="{
                      'mt-1': index > 0,
                      'bg-yellow-700': link.routeName === currentRoute.name,
                    }"
                  >
                    <svg
                      @click="drawer = false"
                      class="mr-4 h-6 w-6 transition ease-in-out duration-150"
                      :class="
                        link.routeName === currentRoute.name
                          ? ['group-hover:text-yellow-100 text-yellow-300']
                          : ['text-gray-200 group-hover:text-yellow-300']
                      "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path :d="link.icon" />
                    </svg>
                    {{ link.text }}
                  </a>
                </nav>
              </div>
            </div>
          </transition>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
    </transition>

    <!-- Static sidebar for DESKTOP -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 bg-red-500 pt-5 pb-4">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="h-8 w-auto" src="./assets/sicily.svg" />
          <span class="ml-2 text-gray-900 font-semibold text-lg"
            >Welcome To Sicily</span
          >
        </div>
        <div class="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- Sidebar component -->
          <nav class="flex-1 px-2">
            <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-yellow-700 focus:outline-none transition ease-in-out duration-150"
              :class="{
                'mt-1': index > 0,
                'bg-yellow-700': link.routeName === currentRoute.name,
              }"
            >
              <svg
                class="mr-3 h-6 w-6  transition ease-in-out duration-150"
                :class="
                  link.routeName === currentRoute.name
                    ? ['group-hover:text-yellow-100 text-yellow-300']
                    : ['text-gray-200 group-hover:text-yellow-300']
                "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path :d="link.icon" />
              </svg>
              {{ link.text }}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative flex-shrink-0 flex h-16 bg-white shadow">
        <button
          @click="drawer = true"
          class="cursor-pointer px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
          v-click-outside="hideDrawer"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <div class="w-full flex items-center">
              <h1 class="text-2xl font-semibold text-gray-900">
                {{ currentRoute.meta.readableName }}
              </h1>
            </div>
          </div>
          <div class="flex items-center">
            <button
              @click="$router.go(-1)"
              class="text-gray-400 rounded-full hover:text-gray-800 focus:outline-none"
              aria-label="Back Button"
            >
              <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <main
        class="flex-1 relative z-0 overflow-y-auto pb-6 pt-3 focus:outline-none"
        tabindex="0"
      >
        <!-- <div class="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">How It Works</h1>
        </div> -->
        <div class="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
          <vue-page-transition name="fade">
            <router-view></router-view>
          </vue-page-transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
  name: 'App',
  directives: {
    ClickOutside,
  },
  data: () => ({
    drawer: null,
    links: [
      {
        icon: 'M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z',
        text: 'Home',
        to: '/',
        meta: { readableName: 'Home' },
      },
      {
        icon:
          'M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z',
        text: 'How It Works',
        to: '/howitworks',
        routeName: 'howitworks',
      },
      {
        icon:
          'M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z',
        text: 'Team',
        to: '/team',
        meta: { readableName: 'Home' },
      },
      {
        icon:
          'M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
        text: 'FAQ & Contacts',
        to: '/faq',
        routeName: 'faq',
      },
      {
        icon:
          'M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z',
        text: 'Terms of Service',
        to: '/tos',
        routeName: 'tos',
      },
    ],
  }),
  methods: {
    goTo(link) {
      // this.drawer = false;
      this.$router.push(link);
    },
    hideDrawer() {
      this.drawer = false;
    },
  },
  computed: {
    currentRoute() {
      return this.$route;
    },
  },
};
</script>
