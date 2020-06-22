<template>
  <div class="h-full mx-auto max-w-sm flex flex-wrap justify-around">
    <ambassador-card :amb-id="getAmbassadorById.id" no-view></ambassador-card>

    <ambassador-gallery class="mt-3" :amb-id="parseInt($route.params.id)" />
    <div
      class="bg-white w-full rounded overflow-hidden shadow-lg flex flex-col sm:flex-row flex-wrap justify-between p-4 text-gray-500 text-sm mt-3"
    >
      <div class="mr-2">
        <div class="font-bold text-gray-800 mr-2 inline-flex sm:mr-0 sm:block">
          {{ $t('team.ambassadorProfile.location') }}
        </div>
        {{ getAmbassadorById.from }}
      </div>
      <div class="mr-2 mt-2 sm:mt-0">
        <div class="font-bold text-gray-800 mr-2 inline-flex sm:mr-0 sm:block">
          {{ $t('team.ambassadorProfile.lang') }}
        </div>
        {{ getAmbassadorById.languages }}
      </div>
      <div class="mt-2 sm:mt-0">
        <div class="font-bold text-gray-800 inline-flex mr-2 sm:mr-0 sm:block">
          {{ $t('team.ambassadorProfile.avgRespTime') }}
        </div>
        {{ getAmbassadorById.resptime }}
      </div>
    </div>

    <div
      class="bg-white w-full rounded overflow-hidden shadow-lg text-left p-4 mt-3 text-justify leading-5 text-gray-500 text-sm"
    >
      <div class="text-red-500 font-bold leading-6">
        {{ $t('team.ambassadorProfile.about') }}
      </div>
      {{ getAmbassadorById.longBio }}
    </div>
  </div>
</template>

<script>
import AmbassadorGallery from '@/components/AmbassadorGallery.vue';
import AmbassadorCard from '@/components/AmbassadorCard.vue';

export default {
  name: 'AmbassadorProfile',
  components: {
    AmbassadorGallery,
    AmbassadorCard,
  },
  data: () => ({}),
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(
        parseInt(this.$route.params.id)
      );
    },
  },
};
</script>
