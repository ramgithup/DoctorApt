import React from 'react'
import HomeBody from './HomeBody'
import HomeFaqs from './HomeFaqs'
import HomeHeader from './HomeHeader'
import { Container } from 'react-bootstrap'
import FooterSupport from './FooterSupport'

const Home = () => {
  return (
    <>
      <Container>
        <HomeHeader />
        <HomeBody />
        <HomeFaqs />
        <FooterSupport/>
      </Container>
    </>
  )
}

export default Home
