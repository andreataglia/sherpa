<template>
  <v-container fluid style="max:width:600px;">
    <v-row class="pb-10 d-flex flex-column px-4 text-center">
      <div class="title my-2">LAST STEP</div>
      <v-card>
        <v-card-text>
          Awesome! You're one step away from getting in chat with your personal
          team :)
        </v-card-text>
        <v-card-title>
          Your Team:
        </v-card-title>
        <div class="mx-auto ml-2 pb-4" max-width="600">
          <v-slide-group multiple show-arrows>
            <v-slide-item
              v-for="amb of currentTeam"
              :key="amb.id"
              v-slot:default="{ active, toggle }"
            >
              <team-avatar :id="amb.id"></team-avatar>
            </v-slide-item>
          </v-slide-group>
        </div>
      </v-card>
      <v-card class="my-4">
        <v-card-text>
          If you're happy with your team selection, choose your favourite
          messaging app and let us know how to reach you out so we can create
          the group with your fellow ambassadors.
          <v-row>
            <v-col cols="6">
              <v-card v-if="app=='whatsapp'" hover ripple shaped color="secondary" class="title"
                ><v-img
                  src="../assets/whatsapp.png"
                  contain
                  height="100"
                  @click="app='whatsapp'"
                ></v-img>
                WhatsApp
              </v-card>
              <v-card v-else hover ripple shaped
                ><v-img
                  src="../assets/whatsapp.png"
                  contain
                  height="100"
                  @click="app='whatsapp'"
                ></v-img>
                WhatsApp
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card v-if="app!='whatsapp'" hover ripple shaped color="secondary" class="title"
                ><v-img
                  src="../assets/telegram.png"
                  contain
                  height="100"
                  @click="app='telegram'"
                ></v-img>
                Telegram
              </v-card>
              <v-card v-else hover ripple shaped
                ><v-img
                  src="../assets/telegram.png"
                  contain
                  height="100"
                  @click="app='telgram'"
                ></v-img>
                Telegram
              </v-card>
              </v-col
            >
          </v-row>

          <v-form v-if="app=='whatsapp'">
            <v-row>
              <v-col cols="5">
                <v-autocomplete
                  color="secondary"
                  :items="prefix"
                  item-text="name"
                  label="Nation"
                  prepend-icon="mdi-phone"
                ></v-autocomplete>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  color="secondary"
                  v-model="mobileNumber"
                  :rules="mobileNumberRule"
                  label="Mobile Number"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              bottom
              color="primary"
              elevation="8"
              dark
              fixed
              left
              to="/team"
            >
              <v-icon>mdi-arrow-left-bold</v-icon>
              Back
            </v-btn>
          </v-form>
          <v-form v-else>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  color="secondary"
                  v-model="telegramName"
                  :rules="telegramRule"
                  label="Telegram Username"
                  prepend-icon="mdi-telegram"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              bottom
              color="primary"
              elevation="8"
              dark
              fixed
              left
              to="/team"
            >
              <v-icon>mdi-arrow-left-bold</v-icon>
              Back
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" style="width:100%;">
            Done!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import TeamAvatar from '@/components/TeamAvatar.vue';

export default {
  name: 'TeamSet',
  components: {
    TeamAvatar
  },
  data: () => ({
    valid: false,
    mobileNumber: '',
    telegramName: '',
    mobileNumberRule: [
      v => !!v || 'We need your mobile number to add you to the WhatsApp group'
    ],
    telegramRule: [
      v => !!v || 'We need your Telegram username to add you to the group',
      v => v.length > 2 || 'Username must be at least 3 characters'
    ],
    prefix: ['Italy', 'Canada'],
    app: 'whatsapp'
  }),
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    }
  }
};
</script>
