import React from 'react';
import Layout from '../components/Layout.js';
import {Button, Container, Row,Image} from 'react-bootstrap';
import Scene from '../components/Scene.js';
export default function Home() {
    return (
      <>
        <Layout>
            <section id='inicio' className='mb-5  d-flex justify-content-center align-items-center'>
              <Container>
                <Row>
                  <div className='col-12 col-lg-6 d-flex align-items-center '>
                    <div>
                      <div><h1 className='text-center'>lorem</h1></div>
                      <div><p className='text-center'>In fermentum eget odio at viverra. Nulla elementum, lacus sit amet placerat tempor, sem magna auctor enim, vel porta felis dolor in justo. In imperdiet posuere orci non mattis. Aliquam suscipit elit luctus luctus condimentum. Nulla maximus est sodales tincidunt cursus. Etiam dapibus eu ligula a eleifend. Phasellus tristique quam sit amet sem viverra scelerisque. Nullam vitae justo ac tellus sollicitudin molestie ut venenatis augue. Cras justo ipsum, dignissim id malesuada eu, scelerisque eget felis. Morbi semper vel neque sed ornare. Pellentesque tellus sapien, malesuada vel convallis ut, pulvinar nec sapien.</p></div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 d-flex align-items-center hero '>
                    <Scene></Scene>
                  </div>
                </Row>
              </Container>
            </section>
        </Layout>
      </>
    );
}
