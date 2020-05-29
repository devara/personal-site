<template>
  <div>
    <v-parallax
      :height="small_device ? '575' : '650'"
      :src="assets_url + 'images/hero-bg.jpg'"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 :class="small_device ? 'hero-text-small' : 'hero-text'">My life.</h1>
          <h3 class="subheading grey--text text--darken-1">how I spend my days</h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-item-group v-model="window" mandatory>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            v-for="(life, n) in length"
            :key="n"
            cols="3"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                :hover="true"
                class="d-flex align-center"
                :height="small_device ? '100' : '150'"
                @click="toggle"
                :color="active ? life.color + ' ' + life.color_variant : ''"
              >
                <v-icon
                  :color="active ? 'white' : life.color + ' ' + life.color_variant"
                  :class="[small_device ? 'display-1' : 'display-2', 'flex-grow-1', 'text-center']"
                >
                  mdi-{{ life.icon }}
                </v-icon>
              </v-card>
            </v-item>
          </v-col>
        </v-row>

      </v-container>
    </v-item-group>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" lg="10">
          <v-window
            v-model="window"
            class="elevation-2"
          >
            <v-window-item
              v-for="(life, n) in length"
              :key="n"
            >
              <v-card flat>
                <v-card-text>
                  <v-row class="mb-4" align="center">
                    <v-avatar class="mr-4">
                      <v-icon>mdi-{{ life.icon }}</v-icon>
                    </v-avatar>
                    <div :class="['display-2', life.color + '--text text--'+life.color_variant, 'pa-2']">{{ life.name }}</div>
                  </v-row>

                  <div
                    v-for="(story, n) in life.stories"
                    :key="n"
                  >
                    <p class="font-weight-medium">{{ story.paragraph }}</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['assets_url']),
    small_device() {
      return this.$vuetify.breakpoint.name == 'xs' ? true : false;
    }
  },
  data: () => ({
    length: [
      {
        name: 'Loving my Pet',
        icon: 'cat',
        color: 'orange',
        color_variant: 'darken-1',
        stories: [
          {
            paragraph: 'I have a pet, cat. Not a Persian or Anggora, but an ordinary local cat. When she was little, she came to my house with a cute and funny face, meowing spoiledly. Looks like she is hungry, okay I give a little food available at home and hooked for her to eat. She eats with gusto.'
          },
          {
            paragraph: 'She did not want to leave my house. Because I am an animal lover, I care for her until she grows up. She sometimes sleeps with me, sometimes with my mom. Aaah so sweet... Hahaha..'
          },
          {
            paragraph: 'She also likes to play out with other cats. Until finally she was pregnant. Oh, my God. Who has impregnated her to not want to take responsibility. I felt I wanted to find the naughty male cat and I married them both. Even though I dont know how to marry an animal hahaha..'
          }
        ]
      },
      {
        name: 'Watching Netflix',
        icon: 'netflix',
        color: 'red',
        color_variant: 'darken-3',
        stories: [
          {
            paragraph: 'Who doesn`t know Netflix? Surely many of you like watching movies on Netflix, whether it`s a movie or a drama series. When bored, need entertainment, Netflix is ​​always be my first choice. There are also lots of original films by Netflix that are fun and worth it to watch. '
          },
          {
            paragraph: 'Me and my friends sometimes like to spend the weekend to watch movies together. I like psychological films, mysteries, thrillers, and puzzles, which invite me to think along the film hahaha'
          },
          {
            paragraph: 'My favorite serial? MONEY HEIST (Spanish: La casa de papel, "The House of Paper"). If you like watching Netflix, you will often see this movie appear on the homepage. This series makes me impatiently waiting for the new season. What kind of continuation of the story in this series, makes me feel so curious. YOU MUST WATCH THIS! 😎'
          }
        ]
      },
      {
        name: 'Playing video game',
        icon: 'gamepad-variant',
        color: 'light-blue',
        color_variant: 'lighten-1',
        stories: [
          {
            paragraph: 'Besides watching movies, I also like playing video games. whether it`s a PC game or an online game for mobile. '
          },
          {
            paragraph: 'For PC games, I like strategy games, like Tropico, or Age of Empire Series, this can make me feel at home to play it. '
          },
          {
            paragraph: 'Tropico? Hmmm this game makes me addicted hahaha. The player assumes the role of "El Presidente", the leader of the Caribbean island nation of Tropico. Play on large archipelagos for the first time in the series. Manage multiple islands at the same time and adapt to various new challenges. Send your agents on raids to foreign lands to steal world wonders and monuments, to add them to your collection. Build bridges, construct tunnels and transport your citizens and tourists in taxis, buses and aerial cable cars. Tropico 6 offers completely new transportation and infrastructure possibilities. Customize the looks of your palace at will and choose from various extras. YOU SHOULD TRY THIS GAME! 😎'
          }
        ]
      },
      {
        name: 'Deepen my coding skill',
        icon: 'file-code-outline',
        color: 'pink',
        color_variant: 'lighten-1',
        stories: [
          {
            paragraph: 'NGODING, yeah, maybe I can`t get away from coding. I like technology, especially programming languages. In programming, there is always something new every day. Although maybe I can`t master all programming languages, at least I`ve tried it. Especially in web programming, I feel I don`t want to be left behind if there are new innovations, new tools, which make coding easier, and more powerful.'
          },
          {
            paragraph: 'SO, LETS WRITE THE CODES! 😎'
          }
        ]
      }
    ],
    window: 0,
  }),
  head: {
    title: 'About my Life'
  }
}
</script>