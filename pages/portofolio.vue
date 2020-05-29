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
          <h1 :class="small_device ? 'hero-text-small' : 'hero-text'">Portofolio.</h1>
          <h3 class="subheading grey--text text--darken-1">let me write the codes</h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row
        align="center"
        justify="center"
        class="mt-12 mb-12 pa-10"
      >
        <v-col cols="12">
          <div class="text-center">
            <img class="codes-image" :src="assets_url +'images/write-codes.png'" alt="">
            <h4 class="display-1 font-weight-medium teal--text text--lighten-3">What I've been up to.</h4>
            <p class="grey--text text--darken-1">Here's a selection of my some recent works  😎</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-for="(portofolio, i) in portofolios"
      :key="i"
      :fluid="true"
      :class="portofolio.color"
    >
      <v-row
        :class="small_device ? 'pa-6' : 'pa-12'"
        align="center"
        justify="center"
      >
        <v-col cols="12" md="5" :order-md="portofolio.img_order">
          <v-card
            :shaped="true"
          >
            <v-img
              :lazy-src="assets_url + '' + portofolio.img"
              :src="assets_url + '' + portofolio.img"
            >

            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <div class="text-center white--text">
            <h5 class="portofolio-name font-weight-bold">{{ portofolio.name }}</h5>
            <p class="mt-2 mb-5">{{ portofolio.type }}</p>
            <p>{{ portofolio.desc }}</p>
          </div>
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
  head: {
    title: 'Portofolio'
  },
  data() {
    return {
      portofolios: [
        {
          name: 'Kopinan - Explore Coffee Shop',
          type: 'Web Design / Web Application',
          img: 'images/portofolio/kopinan.jpg',
          img_order: 'first',
          color: 'brown darken-1',
          desc: 'Kopinan (kopinan.com) was built on my own ideas and desires with the aim of making it easy for coffee lovers to find information and find the location of coffee shops around them.'
        },
        {
          name: 'Bisindo Surakarta',
          type: 'Web Design / Community Website',
          img: 'images/portofolio/bisindo-surakarta.jpg',
          img_order: 'last',
          color: 'yellow darken-2',
          desc: 'Bisindo Surakarta is a community website for the deaf in the Surakarta area. This website allows deaf people to learn deaf languages, because it provides many videos that contain the vocabulary of the deaf language and is demonstrated by deaf linguists. Users can also register and login to take an exam to find out how far they are capable of understanding deaf vocabulary.'
        },
        {
          name: 'Ulegan Bawang - Shallot Paste',
          type: 'Web Design / Corporate Website Design',
          img: 'images/portofolio/shallot-paste.jpg',
          img_order: 'first',
          color: 'orange darken-1',
          desc: 'Design and build a company profile website using responsive design concepts. Easy and compatible to be accessed with a variety of devices.'
        },
        {
          name: 'University of Proklamasi 45 Yogyakarta',
          type: 'Web Design / Web Application',
          img: 'images/portofolio/up45-website.jpg',
          img_order: 'last',
          color: 'red lighten-1',
          desc: 'Main website for this university. Redesign the whole of site, using the right color blend, placing maximum content and making it easier for users to find the information needed.'
        },
        {
          name: 'University of Proklamasi 45 Yogyakarta Payroll System',
          type: 'Web Application / Payroll Information System',
          img: 'images/portofolio/up45-payroll.jpg',
          img_order: 'first',
          color: 'blue lighten-2',
          desc: 'Designing and building employee payroll information systems, in accordance with needs and applicable regulations.'
        },
        {
          name: 'University of Proklamasi 45 Yogyakarta Admission System',
          type: 'Web Application / Admission System',
          img: 'images/portofolio/up45-pmb.jpg',
          img_order: 'last',
          color: 'red lighten-2',
          desc: 'Design and rebuild a new student admission system that makes it easy for prospective new students to find information, register and confirm registration fees, and take online tests.'
        }
      ]
    }
  }
}
</script>
<style scoped>
.codes-image {
  max-width: 125px;
}
.portofolio-name {
  font-size: 1.75rem;
  line-height: 2rem;
}
</style>