<template>
  <select v-model="$i18n.locale">
    <option value="it">Italiano</option>
    <option value="en">English</option>
  </select>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
};
</script>

<style></style>
