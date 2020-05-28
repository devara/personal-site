<template>
  <div>
    <v-parallax
      height="650"
      src="http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/hero-bg.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h2 class="hero-text">About my life.</h2>
          <h3 class="subheading grey--text text--darken-3">how I spend my days</h3>
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
                height="200"
                @click="toggle"
                :color="active ? life.color + ' ' + life.color_variant : ''"
              >
                <v-icon :color="active ? 'white' : life.color + ' ' + life.color_variant" class="display-2 flex-grow-1 text-center">mdi-{{ life.icon }}</v-icon>
              </v-card>
            </v-item>
          </v-col>
        </v-row>

      </v-container>
    </v-item-group>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="9">
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
                    <div :class="['display-2', life.color + '--text text--'+life.color_variant]">{{ life.name }}</div>
                  </v-row>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
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
  export default {
    data: () => ({
      length: [
        {
          name: 'Loving my Pet',
          icon: 'cat',
          color: 'orange',
          color_variant: 'darken-1'
        },
        {
          name: 'Watching Netflix',
          icon: 'netflix',
          color: 'red',
          color_variant: 'darken-3'
        },
        {
          name: 'Playing video game',
          icon: 'gamepad-variant',
          color: 'light-blue',
          color_variant: 'lighten-1'
        },
        {
          name: 'Deepen my coding skill',
          icon: 'file-code-outline',
          color: 'pink',
          color_variant: 'lighten-1'
        }
      ],
      window: 0,
    }),
    head: {
      title: 'About my Life'
    }
  }
</script>