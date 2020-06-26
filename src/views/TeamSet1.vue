<template>
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="sm:flex sm:items-start sm:justify-between">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ $t('teamisset.1.title') }}
          </h3>
          <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
            <p>
              {{ $t('teamisset.1.text') }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div class="flex justify-evenly w-full overflow-hidden mt-2">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-green-50 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              @click="chosenApp = 'wa'"
            >
              <img src="@/assets/whatsapp.png" class="w-10 sm:mr-2" />
              <span class="hidden sm:inline-block">{{
                $t('teamisset.1.wa.btn')
              }}</span>
            </button>
          </span>
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-blue-50 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              @click="chosenApp = 'te'"
            >
              <img src="@/assets/telegram.png" class="w-10 sm:mr-2" />
              <span class="hidden sm:inline-block">{{
                $t('teamisset.1.te.btn')
              }}</span>
            </button>
          </span>
        </div>

        <div
          class="mt-5 rounded-md bg-green-50 px-4 py-3 sm:flex sm:justify-between items-center"
          v-show="chosenApp == 'wa'"
        >
          <div class="flex justify-between w-full overflow-hidden mt-2">
            <div>
              <label
                for="phone_number"
                class="block text-sm font-medium leading-5 text-gray-700"
                >{{ $t('teamisset.1.wa.text') }}
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <select
                    v-model="mobilePrefix"
                    aria-label="Country"
                    class="form-select h-full py-0 pl-3 pr-7 w-20 sm:w-40 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
                  >
                    <option v-for="(pre, index) in prefix" :key="index">{{
                      pre
                    }}</option>
                  </select>
                </div>
                <input
                  id="phone_number"
                  class="form-input block w-full pl-20 sm:pl-40 sm:text-sm sm:leading-5"
                  placeholder="+39 123 456 789"
                  v-model="mobileNumber"
                />
              </div>
            </div>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                @click="done()"
                class="btn btn-dark rounded-md"
              >
                {{ $t('teamisset.1.btnNext') }}
              </button>
            </span>
          </div>
        </div>
        <div
          class="mt-5 rounded-md bg-blue-50 px-4 py-3 sm:flex sm:justify-between items-center"
          v-show="chosenApp == 'te'"
        >
          <div class="flex justify-between w-full overflow-hidden mt-2">
            <div>
              <label
                for="username"
                class="block text-sm font-medium leading-5 text-gray-700"
                >{{ $t('teamisset.1.te.text') }}
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span
                  class="hidden sm:inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                >
                  https://t.me/
                </span>
                <input
                  id="username"
                  class="form-input flex-1 block w-full px-3 py-2 rounded-md sm:rounded-none sm:rounded-r-md sm:text-sm sm:leading-5"
                  :placeholder="$t('teamisset.1.te.text')"
                  v-model="telegramName"
                />
              </div>
            </div>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                @click="done()"
                class="btn btn-dark rounded-md"
              >
                {{ $t('teamisset.1.btnNext') }}
              </button>
            </span>
          </div>
        </div>
      </div>
      <!-- <div class="mt-5">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
          >
            {{ $t('teamisset.1.btnhelp') }}
          </button>
        </span>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TeamSet',
  data: () => ({
    chosenApp: '',
    mobileNumber: '',
    mobilePrefix: '',
    telegramName: '',
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
      'Åland Islands',
    ],
  }),
  methods: {
    validateForm() {
      if (this.chosenApp == 'wa') {
        if (this.mobilePrefix == '') {
          this.$toast(this.$t('teamisset.1.wa.errorPrefix'), {
            type: 'err',
          });
          return false;
        }
        if (this.mobileNumber.length < 8) {
          this.$toast(this.$t('teamisset.1.wa.errorNumber'), {
            type: 'err',
          });
          return false;
        }
        return true;
      } else if (this.chosenApp == 'te') {
        if (this.telegramName.length > 2) return true;
        this.$toast(this.$t('teamisset.1.te.error'), {
          type: 'err',
        });
      }
      return false;
    },
    done() {
      if (this.validateForm()) {
        this.$store.commit('setUserLead', {
          chosenApp: this.chosenApp,
          lead:
            this.chosenApp === 'te'
              ? this.telegramName
              : this.mobilePrefix + ' ' + this.mobileNumber,
        });
        let params = this.$store.state.userLead;
        axios
          .get(
            `.netlify/functions/send-email?team=${params.team}&chosenApp=${params.chosenApp}&lead=${params.lead}&ref=${params.ref}`
          )
          .then((response) => {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.$router.push('/teamisset/final');
      }
    },
  },
  computed: {
    currentUserLead() {
      return this.$store.state.userLead;
    },
  },
};
</script>
