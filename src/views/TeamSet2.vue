<template>
  <div
    class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div>
      <div
        class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
      >
        <svg
          class="h-6 w-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3
          class="text-lg leading-6 font-medium text-gray-900"
          id="modal-headline"
        >
          {{ $t('teamisset.2.title') }}
        </h3>
        <div class="mt-2">
          <p class="text-sm leading-5 text-gray-500">
            {{ $t('teamisset.2.text1') }}
          </p>
          <p class="mt-6 text-sm leading-5 text-gray-500">
            {{ $t('teamisset.2.text2') }}
          </p>
        </div>
      </div>
    </div>
    <router-link to="/faq">
      <span class="mt-5 flex w-full rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >
          {{ $t('teamisset.2.btn') }}
        </button>
      </span>
    </router-link>
    <!-- <div
      class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense justify-center"
    >
      <span class="flex w-full rounded-md shadow-sm sm:col-start-2">
        <button
          type="button"
          class="inline-flex btn btn-light justify-center w-full rounded-md "
        >
          Give Feedback
        </button>
      </span>
      
    </div> -->
  </div>
</template>

<script>

export default {
  // data: () => ({
  // })
};
</script>
