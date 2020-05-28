<template>
  <v-container fluid style="max-width:600px">
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <div class="subtitle-2">FREQUENTLY ASKED QUESTIONS</div>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="faq in faq" :key="faq.header">
            <v-expansion-panel-header>
              {{ faq.header }}
              <template v-slot:actions>
                <v-icon color="primary">$expand</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left">
              {{ faq.text }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col>
        <v-card elevation="2" class="pa-4">
          If you couldn't find your answer or simply wanna know more you can
          reach us out on Telegram. Here is the admins' usernames:
          <br /><br />
          <ul>
            <li>
              Paolo:
              <a href="https://t.me/paolo_debellini" target="_blank"
                >paolo_debellini</a
              >
            </li>
            <li>
              Andrea:
              <a href="https://t.me/andrea_andy_0" target="_blank"
                >@andrea_andy_0</a
              >
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        header: 'What is “Welcome to Sicily”?',
        text: `Welcome to Sicily is a new way to connect travelers with local people. We have realized that way too often we tend to focus on “things to do” at the destination, while forgetting if they are “the right things to do”. Welcome to Sicily will help you find the local experts that suit your needs and expectations. No more averages or ratings, Welcome to Sicily is all about finding the people you like and trust. Once you are connected with them you can easily chat with them on your favorite messaging apps such as Telegram or Whatsapp. 
`
      },
      {
        header: 'Is the service free?',
        text: `Yes, It is totally free! We wouldn’t know how much to charge so far. But the guys who are helping you out, our ambassadors, don’t get any money. For this reason, at the end of your trip, we’ll ask you for a completely optional tip to be shared among the ambassadors of your team.`
      },
      {
        header: 'Does this only work in Sicily?',
        text: `So far we are experimenting in Sicily only but stay in the loop as we might expand the service to new and exciting destinations everywhere in the world...`
      },
      {
        header: 'How does it work?',
        text: `“Welcome to Sicily” is pretty straightforward: you’ll be presented with several profiles of local people we call “Ambassadors”. You’ll be able to browse through their videos and photos to find the ones you like and trust the most. You can add up to 10 different ambassadors to your team. Once you feel like your team is set, simply select the messaging app you like to use and we will create a group chat with the ambassadors you have chosen. There are no limits in terms of how many messages you can send or things that you want to ask. Just browse, select and start chatting right away.`
      },
      {
        header: 'Will I meet the ambassadors in person?',
        text: `The service is chat-only for now. In the future we might add the possibility to interact with the ambassadors face to face. Of course you may end up being friends with someone and want to meet in person, but that is totally up to you.`
      },
      {
        header: 'Who are the “Ambassadors”',
        text: `Ambassadors are people we carefully select to help you experience the best possible vacation of your life. Ambassadors are people who deeply care about the places you’ll visit, and things you’ll do. They are willing to help you because they believe that there is so much more to be discovered than what you get to see on travel guides, blogs or websites.`
      },
      {
        header: 'How about privacy?',
        text: `We don’t sell out anything regarding any info that may come up in the chat. We promise!! We only read them to learn in order to improve the service. The same applies to your mobile number in case you use WhatsApp: we simply need it to add you to the chat. Once your trip is over we’ll delete your phone number from any property we may possess. If you prefer to keep your info completely private we have added Telegram as a viable option to not reveal your identity.`
      }
    ]
  })
};
</script>
