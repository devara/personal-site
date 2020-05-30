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
        <v-col class="text-center" cols="12">
          <h1 :class="small_device ? 'hero-text-small' : 'hero-text'">Experience.</h1>
          <h3 class="subheading grey--text text--darken-1">never ending journey</h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col>
          <v-timeline
            :dense="small_device"
          >
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template v-slot:opposite>
                <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-4">
                <p v-if="small_device" :class="`${year.color}--text mb-1`">{{ year.year }}</p>
                <h2 :class="`headline font-weight-bold mb-4 ${year.color}--text`">{{ year.job }}</h2>
                <template
                  v-if="year.in_company"
                >
                  <v-avatar>
                    <img :src="assets_url+''+year.company_logo">
                  </v-avatar>
                  <h4 class="font-weight-bold mt-1 mb-4">
                    <a class="company-link" :href="year.company_site" target="_blank">{{ year.company }}</a>
                  </h4>
                </template>
                <div class="grey--text text--darken-1">
                  {{ year.job_desc }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      years: [
        {
          color: 'cyan',
          year: '2016 - present',
          job: 'Freelance Developer',
          in_company: false,
          job_desc: 'I’m currently still available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.'
        },
        {
          color: 'green',
          year: '2019 - present',
          job: 'Software Developer',
          in_company: true,
          company: 'Paperlust',
          company_logo: 'images/company/paperlust.png',
          company_site: 'https://paperlust.co/',
          job_desc: 'I work as a software developer at Paperlust, "Top Wedding and Event Stationery by Independent Creatives" based in Melbourne, Australia. But I work from Indonesia because Paperlust has an office in this country. Paperlust is the platform where print design lovers can find work they love from Australia’s best design talent.'
        },
        {
          color: 'pink',
          year: '2018 - present',
          job: 'Software Developer',
          in_company: true,
          company: 'PT. Krafthaus Indonesia',
          company_logo: 'images/company/krafthaus.png',
          company_site: 'https://krafthaus.co.id/',
          job_desc: 'My role at this company is a software developer. Krafthaus is Digital Agency based in Yogyakarta. Krafthaus have a wide array of services to offer their clients. But can generally boil all of their services down into one of these 3 general categories: Digital Strategy, Consultations and SEO; Web and Application Development; Designs and Branding.'
        },
        {
          color: 'amber',
          year: '2017 - 2018',
          job: 'Web Programmer',
          in_company: true,
          company: 'Universitas Proklamasi 45 Yogyakarta',
          company_logo: 'images/company/up45.png',
          company_site: 'https://up45.ac.id/',
          job_desc: 'I worked as a web programmer at this University for one year. I was asked to redesign the main website and make the CMS more powerful to be used by administrators. I also redesigned the new student admission system and made it integrated with affiliate systems designed by third-party vendors.'
        },
        {
          color: 'red',
          year: '2016 - 2017',
          job: 'Web Developer',
          in_company: true,
          company: 'Penerbit Genesis',
          company_logo: 'images/company/penerbit-genesis.png',
          company_site: 'https://penerbitgenesis.com/',
          job_desc: 'Design, build and maintenance a company profile website along with its product catalog.'
        },
      ]
    }
  },
  computed: {
    ...mapState(['assets_url']),
    small_device() {
      return this.$vuetify.breakpoint.name == 'xs' ? true : false;
    }
  },
  head: {
    title: 'My Experience'
  }
}
</script>
<style scoped>
.company-link {
  text-decoration: none;
}
</style>