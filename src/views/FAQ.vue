<template>
  <v-container fluid style="max-width:600px">
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <h3>FREQUENTLY ASKED QUESTIONS:</h3>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel v-for="faq in faq" :key="faq.header">
            <v-expansion-panel-header>
              {{ faq.header }}
              <template v-slot:actions>
                <v-icon color="primary">$expand</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ faq.text }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col>
        <v-banner elevation="8">
          If you couldn't find your answer or simply wanna know more you can
          reach us out on Telegram. Here is the admins' usernames:
          <br><br>
          <ul>
            <li>
              Paolo:
              <a href="https://t.me/andrea_andy_0" target="_blank"
                >@andrea_andy_0</a
              >
            </li>
            <li>
              Andrea:
              <a href="https://t.me/andrea_andy_0" target="_blank"
                >@andrea_andy_0</a
              >
            </li>
          </ul>
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        header: 'Who are we?',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
      },
      {
        header: 'Who are we?2',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
      },
      {
        header: 'Who are we?3',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
      },
      {
        header: 'Who are we?4',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
      },
      {
        header: 'Who are we?5',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
      }
    ]
  })
};
</script>
