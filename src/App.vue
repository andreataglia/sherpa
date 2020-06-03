<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden">
      <div v-show="drawer" class="fixed inset-0 flex z-40">
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
                @click.stop="drawer = false"
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
              <span class="ml-2 text-gray-900 font-semibold"
                >Welcome To Sicily</span
              >
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <router-link
                  v-for="(link, index) in links"
                  :key="index"
                  :to="link.to"
                  :class="{ 'mt-1': index > 0 }"
                  class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white hover:bg-yellow-700 focus:outline-none transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-200 group-hover:text-yellow-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                  {{ link.text }}
                </router-link>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 bg-yellow-700 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-yellow-300 group-hover:text-yellow-100 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Team
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

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 bg-red-500 pt-5 pb-4">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="h-8 w-auto" src="./assets/sicily.svg" />
          <span class="ml-2 text-gray-900 font-semibold"
            >Welcome To Sicily</span
          >
        </div>
        <div class="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 px-2">
            <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              :class="{ 'mt-1': index > 0 }"
              class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:bg-yellow-700 focus:outline-none transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-200 group-hover:text-yellow-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                />
              </svg>
              {{ link.text }}
            </router-link>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-yellow-700 focus:outline-none transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-yellow-300 group-hover:text-yellow-100 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Team
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          @click="drawer = true"
          class="cursor-pointer px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
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
              <h1 class="text-2xl font-semibold text-gray-900">How It Works</h1>
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
export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    links: [
      { icon: 'mdi-home', text: 'Home', to: '/' },
      { icon: 'mdi-help-circle', text: 'How It Works', to: '/howitworks' },
      { icon: 'mdi-account-multiple', text: 'Team', to: '/team' },
      { icon: 'mdi-message-processing', text: 'FAQ & Contacts', to: '/faq' },
      { icon: 'mdi-city', text: 'Terms of Service', to: '/tos' },
    ],
  }),
};
</script>
