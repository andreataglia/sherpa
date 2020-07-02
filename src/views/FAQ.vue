<template>
  <div class="mx-auto pb-12 px-4 sm:pb-16">
    <div class="bg-white shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ $t('faq.title') }}
            </h3>
            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                {{ $t('faq.text') }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="flex flex-col sm:flex-row justify-between">
            <a href="https://t.me/andrea_andy_0" target="_blank">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-blue-50 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mx-2"
              >
                <img src="@/assets/telegram.png" class="w-8 mr-2" />
                {{ $t('faq.andrea') }}
              </button>
            </a>

            <a href="https://t.me/paolo_debellini" target="_blank">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-blue-50 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mx-2 mt-2 sm:mt-0"
              >
                <img src="@/assets/telegram.png" class="w-8 mr-2" />
                {{ $t('faq.paolo') }}
              </button>
            </a>
          </div>
          <div class="px-2 mt-2 sm:mt-4">
            <a href="mailto:hello@welcometosicily.app" target="_blank">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-red-200 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 w-full"
              >
                <svg
                  class="h-6 w-6 mr-2 text-red-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                  />
                </svg>
                {{ $t('faq.mail') }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow rounded-lg px-4 py-5 max-w-3xl mx-auto mt-5">
      <div class="mt-5">
        <dl>
          <div
            v-for="(q, index) in faq"
            :key="index"
            :class="index > 0 ? ['mt-6 border-t border-gray-200 pt-6'] : []"
          >
            <dt class="text-lg leading-7">
              <!-- Expand/collapse question button -->
              <button
                class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                @click="q.opened = !q.opened"
              >
                <span class="font-medium text-gray-900">
                  {{ $t(`faq.questions.${index}.header`) }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <!--
                    Expand/collapse icon, toggle classes based on question open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                  <svg
                    class="h-6 w-6 transform"
                    :class="{ '-rotate-180': q.opened }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12" v-show="q.opened">
              <p class="text-base leading-6 text-gray-500">
                {{ $t(`faq.questions.${index}.text`) }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        opened: false,
      },
      {
        opened: false,
      },
      {
        opened: false,
      },
      {
        opened: false,
      },
      {
        opened: false,
      },
      {
        opened: false,
      },
      {
        opened: false,
      },
    ],
  }),
};
</script>
