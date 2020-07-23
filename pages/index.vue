<template>
<div>
  <v-parallax
    :height="small_device ? '575' : '650'"
    :src="assets_url + 'images/bg/hero-bg-parallax.jpg'"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="10" sm="7" md="5" lg="4">
        <v-img
          :src="assets_url + 'q_60/images/call-me-dev.png'"
          :contain="true"
        >
        </v-img>
        <h3 class="subheading grey--text text--darken-1">a web developer</h3>
      </v-col>
    </v-row>
  </v-parallax>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="mt-12 mb-12 pa-10"
    >
      <v-col cols="12" md="8" sm="8">
        <div class="text-center">
          <v-avatar size="100">
            <img
              :src="assets_url + 'c_scale,w_150/images/build-rider.png'"
              alt="John"
            >
          </v-avatar>
          <div class="mt-8 mb-5">
            <div class="display-2 font-weight-medium teal--text text--lighten-2 mb-6">Hi.</div>
            <h2 class="brown--text text--lighten-2">My name is Devara Eko Katon Mahardika</h2>
            <p class="grey--text text--darken-1 font-weight-medium">
              I'm a web developer based in Yogyakarta, Indonesia. <br>
              My passion and focus is backend development.<br>
              But, I also love to create a beautiful and responsive website.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>

    <break-section/>

    <v-row class="mt-12 mb-12 pa-10">
      <v-col cols="12">
        <div class="text-center">
          <div class="display-2 font-weight-medium teal--text text--lighten-2 mb-6">What I can do.</div>
        </div>
      </v-col>
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
          class="mb-5"
        >
          <v-col cols="12" md="4" sm="12" order-md="last">
            <div class="text-center">
              <v-img
                :src="assets_url + 'q_60/images/web-development.png'"
              >
              </v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <div class="headline font-weight-medium teal--text text--lighten-2 mb-6">Develop what you need.</div>
            <p class="grey--text text--darken-1">
              I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <div class="col-md-4 col-sm-12">
            <div class="text-center">
              <v-img
                :src="assets_url + 'q_60/images/web-design.png'"
              >
              </v-img>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="headline font-weight-medium teal--text text--lighten-2 mb-6">Design what you want.</div>
            <p class="grey--text text--darken-1">
              I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
            </p>
          </div>
        </v-row>
      </v-col>
    </v-row>

    <break-section/>

    <v-row class="mt-12 mb-12 pa-10">
      <v-col cols="12">
        <div class="text-center">
          <div class="display-2 font-weight-medium teal--text text--lighten-2 mb-6">Technology that I can.</div>
        </div>
      </v-col>
      <v-col cols="12">
        <technologies/>
      </v-col>
    </v-row>

    <break-section/>

    <v-row
      align="center"
      justify="center"
      class="mt-12 mb-12 pa-10"
    >
      <v-col cols="12" md="8" sm="8">
        <div class="text-center">
          <div class="mb-5">
            <div class="display-2 font-weight-medium teal--text text--lighten-2 mb-6">I can help.</div>
            <h2 class="teal--text text--lighten-2">I’m currently available for freelance work.</h2>
            <p class="grey--text text--darken-1">
              If you have a project that you want to get started, <br>
              think you need my help with something or just fancy saying hey, then get in touch.
            </p>
            <v-btn
              class="ma-2"
              tile color="teal lighten-2"
              dark
              href="mailto:devaraekokm@gmail.com"
            >
              <v-icon left>mdi-send</v-icon> Message Me
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import { mapState } from 'vuex'

import Technologies from '~/components/Technology.vue'
import BreakSection from '~/components/BreakSection.vue'

export default {
  components: {
    Technologies,
    BreakSection
  },
  computed: {
    ...mapState(['assets_url']),
    small_device() {
      return this.$vuetify.breakpoint.name == 'xs' ? true : false;
    }
  },
  data() {
    return {
      fab: false
    }
  }
}
</script>

<style lang="css" scoped>
.v-speed-dial--right {
    right: 45px;
}
.v-speed-dial--bottom {
    bottom: 61px;
}
</style>
