<template>
  <div class="mx-auto pb-12 px-4 sm:pb-16">
    <div class="bg-white shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Reach us out!
            </h3>
            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                It's us, Andrea and Paolo. You can reach
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div
            class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
          >
            <span class="flex w-full sm:col-start-2">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-blue-50 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                @click="chosenApp = 'wa'"
              >
                <img src="@/assets/telegram.png" class="w-8 mr-2" />
                Reach Paolo on Telegram
              </button>
            </span>
            <span
              class="mt-3 flex w-full sm:mt-0 sm:col-start-1"
            >
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-200 text-sm leading-5 font-medium rounded-md text-gray-700 bg-blue-50 hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                @click="chosenApp = 'te'"
              >
                <img src="@/assets/telegram.png" class="w-8 mr-2" />
                Reach Andrea on Telegram
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow rounded-lg px-4 py-5 max-w-3xl mx-auto mt-5">
      <div class="mt-5">
        <dl>
          <div
            v-for="(q, index) in faq"
            :key="index"
            :class="index > 0 ? ['mt-6 border-t border-gray-200 pt-6'] : []"
          >
            <dt class="text-lg leading-7">
              <!-- Expand/collapse question button -->
              <button
                class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                @click="q.opened = !q.opened"
              >
                <span class="font-medium text-gray-900">
                  {{ q.header }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <!--
                    Expand/collapse icon, toggle classes based on question open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                  <svg
                    class="h-6 w-6 transform"
                    :class="{ '-rotate-180': q.opened }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12" v-show="q.opened">
              <p class="text-base leading-6 text-gray-500">
                {{ q.text }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        header: 'What is “Welcome to Sicily”?',
        text: `Welcome to Sicily is a new way to connect travelers with local people. We have realized that way too often we tend to focus on “things to do” at the destination, while forgetting if they are “the right things to do”. Welcome to Sicily will help you find the local experts that suit your needs and expectations. No more averages or ratings, Welcome to Sicily is all about finding the people you like and trust. Once you are connected with them you can easily chat with them on your favorite messaging apps such as Telegram or Whatsapp. 
`,
        opened: false,
      },
      {
        header: 'Is the service free?',
        text: `Yes, It is totally free! We wouldn’t know how much to charge so far. But the guys who are helping you out, our ambassadors, don’t get any money. For this reason, at the end of your trip, we’ll ask you for a completely optional tip to be shared among the ambassadors of your team.`,
        opened: false,
      },
      {
        header: 'Does this only work in Sicily?',
        text: `So far we are experimenting in Sicily only but stay in the loop as we might expand the service to new and exciting destinations everywhere in the world...`,
        opened: false,
      },
      {
        header: 'How does it work?',
        text: `“Welcome to Sicily” is pretty straightforward: you’ll be presented with several profiles of local people we call “Ambassadors”. You’ll be able to browse through their videos and photos to find the ones you like and trust the most. You can add up to 10 different ambassadors to your team. Once you feel like your team is set, simply select the messaging app you like to use and we will create a group chat with the ambassadors you have chosen. There are no limits in terms of how many messages you can send or things that you want to ask. Just browse, select and start chatting right away.`,
        opened: false,
      },
      {
        header: 'Will I meet the ambassadors in person?',
        text: `The service is chat-only for now. In the future we might add the possibility to interact with the ambassadors face to face. Of course you may end up being friends with someone and want to meet in person, but that is totally up to you.`,
        opened: false,
      },
      {
        header: 'Who are the “Ambassadors”',
        text: `Ambassadors are people we carefully select to help you experience the best possible vacation of your life. Ambassadors are people who deeply care about the places you’ll visit, and things you’ll do. They are willing to help you because they believe that there is so much more to be discovered than what you get to see on travel guides, blogs or websites.`,
        opened: false,
      },
      {
        header: 'How about privacy?',
        text: `We don’t sell out anything regarding any info that may come up in the chat. We promise!! We only read them to learn in order to improve the service. The same applies to your mobile number in case you use WhatsApp: we simply need it to add you to the chat. Once your trip is over we’ll delete your phone number from any property we may possess. If you prefer to keep your info completely private we have added Telegram as a viable option to not reveal your identity.`,
        opened: false,
      },
    ],
  }),
};
</script>
