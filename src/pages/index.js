import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Banner from '../sections/banner'
import KeyFeature from '../sections/key-feature'
import ServiceSection from '../sections/service-section'
import WorkFlow from '../sections/workflow'
import Package from '../sections/package'
import TestimonialCard from '../sections/testimonial'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="TRACTIAN" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Package />
        <WorkFlow />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  )
}
