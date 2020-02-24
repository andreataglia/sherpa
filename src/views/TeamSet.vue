<template>
  <v-container fluid style="max-width:600px">
    <v-row class="pb-10 d-flex flex-column px-4 text-center">
      <div class="subtitle-2 my-2">LAST STEP</div>
      <v-card class="mx-0" v-if="currentUserLead.lead == ''" elevation="8">
        <v-card-text>
          Awesome! You're one step away from getting in chat with your personal
          team :)
        </v-card-text>
        <v-card-title>
          Your Team:
        </v-card-title>
        <div class="mx-auto ml-2 pb-4">
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

      <!-- Before Done card -->
      <v-card v-if="currentUserLead.lead == ''" class="my-4" elevation="8">
        <v-card-text>
          If you're happy with your team selection, choose your favourite
          messaging app and let us know how to reach you out so we can create
          the group with your fellow ambassadors.
          <v-row>
            <v-col cols="6">
              <v-card
                v-if="!isTelegram"
                hover
                ripple
                shaped
                color="secondary"
                class="title"
                ><v-img
                  src="../assets/whatsapp.png"
                  contain
                  height="100"
                ></v-img>
                WhatsApp
              </v-card>
              <v-card v-else hover ripple shaped
                ><v-img
                  src="../assets/whatsapp.png"
                  contain
                  height="100"
                  @click="isTelegram = false"
                ></v-img>
                WhatsApp
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                v-if="isTelegram"
                hover
                ripple
                shaped
                color="secondary"
                class="title"
                ><v-img
                  src="../assets/telegram.png"
                  contain
                  height="100"
                ></v-img>
                Telegram
              </v-card>
              <v-card v-else hover ripple shaped
                ><v-img
                  src="../assets/telegram.png"
                  contain
                  height="100"
                  @click="isTelegram = true"
                ></v-img>
                Telegram
              </v-card>
            </v-col>
          </v-row>

          <v-form v-if="!isTelegram" ref="form">
            <v-row>
              <v-col cols="5">
                <v-autocomplete
                  color="secondary"
                  v-model="mobilePrefix"
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
          <v-form v-else ref="form">
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
          <v-btn color="primary" style="width:100%;" @click="done()">
            Done!
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- After Done card -->
      <v-card v-else class="my-4" elevation="8">
        <v-card-text class="text-left">
          <b>Great!</b> You're all set now. We'll be get in touch with you as
          soon as possible (but please let us up to 24 hours) on
          {{ currentUserLead.isTelegram ? 'Telegram' : 'WhatsApp' }}.
          <br /><br />
          If you really can't wait or simply want to get in touch with one of
          the admins earlier you can reach them out on
          {{ currentUserLead.isTelegram ? 'Telegram' : 'WhatsApp' }} at:<br />
          <ul>
            <li>
              Paolo:
              <a
                v-if="currentUserLead.isTelegram"
                href="https://t.me/andrea_andy_0"
                target="_blank"
                >@andrea_andy_0</a
              >
              <span v-else>+39 3452135892</span>
            </li>
            <li>
              Andrea:
              <a
                v-if="currentUserLead.isTelegram"
                href="https://t.me/andrea_andy_0"
                target="_blank"
                >@andrea_andy_0</a
              >
              <span v-else>+39 3452135892</span>
            </li>
          </ul>
          <v-divider class="my-2" />
          <div class="title text-center">
            See you very soon and...<br> Welcome to Sicily! :)
          </div>
        </v-card-text>
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
    mobileNumber: '',
    mobilePrefix: '',
    telegramName: '',
    mobileNumberRule: [
      v => !!v || 'We need your mobile number to add you to the WhatsApp group'
    ],
    telegramRule: [
      v => !!v || 'We need your Telegram username to add you to the group',
      v => v.length > 2 || 'Username must be at least 3 characters'
    ],
    prefix: ['Italy', 'Canada'],
    isTelegram: false
  }),
  methods: {
    done() {
      if (this.$refs.form.validate()) {
        this.$store.commit('setUserLead', {
          isTelegram: this.isTelegram,
          lead: this.isTelegram
            ? this.telegramName
            : this.mobilePrefix + ' ' + this.mobileNumber
        });
      }
    }
  },
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    },
    currentUserLead() {
      return this.$store.state.userLead;
    }
  }
};
</script>
