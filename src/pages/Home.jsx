import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import FindCarForm from '../components/UI/FindCardForm';
import HeroSlider from '../components/UI/HeroSlider';

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
    </Helmet>    
  )
}

export default Home