<template>
  <div>
    <div
      class="fixed inset-0 z-50 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          id="easy-toast-default"
          v-show="showing"
          class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto"
          :class="{
            'bg-green-50': !options.type,
            'bg-red-50': options.type == 'err',
          }"
        >
          <div class="rounded-lg shadow-xs overflow-hidden">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg
                    v-show="!options.type"
                    class="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    v-show="options.type == 'warn'"
                    class="h-6 w-6 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    v-show="options.type == 'err'"
                    class="h-6 w-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p
                    class="text-sm leading-5 font-medium"
                    :class="{ 'text-green-800': !options.type, 'text-red-800': options.type === 'err' }"
                  >
                    {{ options.title }}
                  </p>
                  <p
                    class="mt-1 text-sm leading-5"
                    :class="{ 'text-green-700': !options.type, 'text-red-700': options.type === 'err' }"
                    v-show="options.body"
                  >
                    {{ options.body }}
                  </p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    @click="close"
                  >
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snackbar',
  data() {
    return {
      options: {},
      showing: false,
    };
  },
  methods: {
    close: function() {
      this.showing = false;
      clearTimeout(this.timeoutId);
    },
    show: function(options) {
      this.options = options;
      clearTimeout(this.timeoutId);
      this.showing = true;
      this.timeoutId = setTimeout(() => {
        this.close();
      }, 4000);
    },
  },
};
</script>