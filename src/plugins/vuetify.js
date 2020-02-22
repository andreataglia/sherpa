import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

//remember to update the _variables.scss file as well
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.lighten1,
        secondary: colors.cyan.lighten3,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
});
