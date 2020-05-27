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
          <h2 class="hero-text">My experience.</h2>
          <h3 class="subheading grey--text text--darken-3">never ending journey</h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col>
          <v-timeline>
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
                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{ year.job }}</h2>
                <template
                  v-if="year.in_company"
                >
                  <v-avatar>
                    <img :src="year.company_logo">
                  </v-avatar>
                  <h4 class="font-weight-bold my-4">{{ year.company }}</h4>
                </template>
                <div>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
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
export default {
  data() {
    return {
      years: [
        {
          color: 'cyan',
          year: '2016 - present',
          job: 'Frelance Developer',
          in_company: false
        },
        {
          color: 'green',
          year: '2019 - present',
          job: 'Software Developer',
          in_company: true,
          company: 'Paperlust',
          company_logo: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/company/paperlust.png'
        },
        {
          color: 'pink',
          year: '2018 - present',
          job: 'Software Developer',
          in_company: true,
          company: 'PT. Krafthaus Indonesia',
          company_logo: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/company/krafthaus.png'
        },
        {
          color: 'amber',
          year: '2017 - 2018',
          job: 'Web Aplication Developer',
          in_company: true,
          company: 'Universitas Proklamasi 45 Yogyakarta',
          company_logo: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/company/up45.png'
        },
        {
          color: 'brown',
          year: '2016 - 2017',
          job: 'Web Developer',
          in_company: true,
          company: 'Penerbit Genesis',
          company_logo: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/company/penerbit-genesis.png'
        },
      ]
    }
  }
}
</script>