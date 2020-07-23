<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      src="https://res.cloudinary.com/devaraeko/image/upload/images/bg/nav-slide-bg.jpg"
      :right="true"
      :temporary="true"
      dark
      fixed
      app
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar size="75px">
            <v-img src="https://res.cloudinary.com/devaraeko/images/build-rider.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Devara Eko</v-list-item-title>
            <v-list-item-subtitle>devaraekokm@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      elevate-on-scroll
      color="teal lighten-4"
      height="90px"
      :hide-on-scroll="true"
      :light="true"
      fixed
      app
    >
      <v-row class="d-sm-none">
        <v-col cols="2">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            color="teal"
          />
        </v-col>
        <v-col class="d-flex justify-space-around">
          <v-btn
            nuxt
            to="/"
            icon
          >
            <v-img
              src="https://res.cloudinary.com/devaraeko/image/upload/c_scale,w_100/images/dev-logo.png"
              max-width="75px"
            ></v-img>
          </v-btn>
        </v-col>
        <v-col cols="2" class="d-flex justify-end">
          
        </v-col>
      </v-row>

      <v-btn
        nuxt
        to="/"
        icon
        class="ml-6 ml-sm-4 ml-md-4 ml-lg-8 d-none d-sm-flex"
      >
        <v-img
          src="https://res.cloudinary.com/devaraeko/image/upload/c_scale,w_100/images/dev-logo.png"
          max-width="75px"
        ></v-img>
      </v-btn>
      <v-spacer class="d-none d-sm-flex" />
      <v-btn
        text
        color="teal darken-2"
        nuxt
        to="/"
        class="d-none d-sm-flex title font-weight-bold"
      >
        Home
      </v-btn>
      <v-btn
        text
        color="teal darken-1"
        nuxt
        to="/experience"
        class="d-none d-sm-flex title font-weight-bold"
      >
        Experience
      </v-btn>
      <v-btn
        text
        color="teal darken-1"
        nuxt
        to="/portofolio"
        class="d-none d-sm-flex title font-weight-bold"
      >
        Portofolio
      </v-btn>
      <v-btn
        text
        color="teal darken-1"
        nuxt
        to="/life"
        class="d-none d-sm-flex title mr-5 font-weight-bold"
      >
        Life
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      dark
      padless
      class="d-inline-block"
    >
      <v-card
        flat
        tile
        class="teal lighten-2 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            class="mx-4 white--text"
            icon
            :href="icon.url"
            :target="'_blank'"
          >
            <v-icon size="30px">{{ icon.name }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Discuss about web development and technology? Just text me 😎
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          © {{ new Date().getFullYear() }} — Devara Eko. Made with ❤️ + ☕
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-variant-outline',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-briefcase-outline',
          title: 'Experience',
          to: '/experience'
        },
        {
          icon: 'mdi-apps',
          title: 'Portofolio',
          to: '/portofolio'
        },
        {
          icon: 'mdi-emoticon-cool-outline',
          title: 'Life',
          to: '/life'
        }
      ],
      title: 'Dev World',
      icons: [
        {
          name: 'mdi-gmail',
          url: 'mailto:devaraekokm@gmail.com'
        },
        {
          name: 'mdi-twitter',
          url: 'https://twitter.com/devara_eko'
        },
        {
          name: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/devaraeko/'
        },
        {
          name: 'mdi-instagram',
          url: 'https://www.instagram.com/devaraeko/'
        }
      ]
    }
  }
}
</script>
<style>
.hero-title {
  height: 75px;
  max-height: 80px;
}
.hero-text {
  font-family: 'Pacifico', 'cursive';
  font-size: 4rem;
  font-weight: lighter;
  color: #F4A0A0;
}
.hero-text-small {
  font-family: 'Pacifico', 'cursive';
  font-size: 3rem;
  font-weight: lighter;
  color: #F4A0A0;
}
</style>
