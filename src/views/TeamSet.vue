<template>
  <v-container fluid style="max-width:600px">
    <v-row class="pb-10 d-flex flex-column px-4 text-center">
      <div class="subtitle-2">LAST STEP</div>
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
                color="secondary"
                class="title"
                ><v-img
                  src="../assets/whatsapp.png"
                  contain
                  height="100"
                ></v-img>
                WhatsApp
              </v-card>
              <v-card v-else hover ripple
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
                color="secondary"
                class="title"
                ><v-img
                  src="../assets/telegram.png"
                  contain
                  height="100"
                ></v-img>
                Telegram
              </v-card>
              <v-card v-else hover ripple
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
          </v-form>
        </v-card-text>
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
                href="https://t.me/paolo_debellini"
                target="_blank"
                >paolo_debellini</a
              >
              <span v-else>+39 3381298348</span>
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
            See you very soon and...<br />
            Welcome to Sicily! :)
          </div>
        </v-card-text>
      </v-card>
      <v-col cols="12" class="text-center">
        <v-btn
          color="primary"
          height="50"
          width="250"
          class="mx-0"
          @click="done()"
        >
          Done!
        </v-btn>
      </v-col>
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
    prefix: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'American Samoa',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antarctica',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas (the)',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia (Plurinational State of)',
      'Bonaire, Sint Eustatius and Saba',
      'Bosnia and Herzegovina',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      'British Indian Ocean Territory (the)',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cayman Islands (the)',
      'Central African Republic (the)',
      'Chad',
      'Chile',
      'China',
      'Christmas Island',
      'Cocos (Keeling) Islands (the)',
      'Colombia',
      'Comoros (the)',
      'Congo (the Democratic Republic of the)',
      'Congo (the)',
      'Cook Islands (the)',
      'Costa Rica',
      'Croatia',
      'Cuba',
      'Curaçao',
      'Cyprus',
      'Czechia',
      "Côte d'Ivoire",
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic (the)',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Eswatini',
      'Ethiopia',
      'Falkland Islands (the) [Malvinas]',
      'Faroe Islands (the)',
      'Fiji',
      'Finland',
      'France',
      'French Guiana',
      'French Polynesia',
      'French Southern Territories (the)',
      'Gabon',
      'Gambia (the)',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guadeloupe',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Heard Island and McDonald Islands',
      'Holy See (the)',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran (Islamic Republic of)',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      "Korea (the Democratic People's Republic of)",
      'Korea (the Republic of)',
      'Kuwait',
      'Kyrgyzstan',
      "Lao People's Democratic Republic (the)",
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macao',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands (the)',
      'Martinique',
      'Mauritania',
      'Mauritius',
      'Mayotte',
      'Mexico',
      'Micronesia (Federated States of)',
      'Moldova (the Republic of)',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands (the)',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger (the)',
      'Nigeria',
      'Niue',
      'Norfolk Island',
      'Northern Mariana Islands (the)',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Palestine, State of',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines (the)',
      'Pitcairn',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Republic of North Macedonia',
      'Romania',
      'Russian Federation (the)',
      'Rwanda',
      'Réunion',
      'Saint Barthélemy',
      'Saint Helena, Ascension and Tristan da Cunha',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Martin (French part)',
      'Saint Pierre and Miquelon',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Sint Maarten (Dutch part)',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Georgia and the South Sandwich Islands',
      'South Sudan',
      'Spain',
      'Sri Lanka',
      'Sudan (the)',
      'Suriname',
      'Svalbard and Jan Mayen',
      'Sweden',
      'Switzerland',
      'Syrian Arab Republic',
      'Taiwan (Province of China)',
      'Tajikistan',
      'Tanzania, United Republic of',
      'Thailand',
      'Timor-Leste',
      'Togo',
      'Tokelau',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks and Caicos Islands (the)',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates (the)',
      'United Kingdom of Great Britain and Northern Ireland (the)',
      'United States Minor Outlying Islands (the)',
      'United States of America (the)',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Venezuela (Bolivarian Republic of)',
      'Viet Nam',
      'Virgin Islands (British)',
      'Virgin Islands (U.S.)',
      'Wallis and Futuna',
      'Western Sahara',
      'Yemen',
      'Zambia',
      'Zimbabwe',
      'Åland Islands'
    ],
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
