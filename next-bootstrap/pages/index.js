import React from 'react';
import Layout from '../components/Layout.js';
import {Button, Container, Row,Image} from 'react-bootstrap';
import Scene from '../components/Scene.js';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home() {
    return (
      <>
        <Layout>
            <section id='inicio' className='mb-5  d-flex justify-content-center align-items-center'>
              <Container>
                <Row>
                  <div className='col-12 col-lg-6 d-flex align-items-center '>
                    <div>
                      <div><motion.h1
                      initial={{opacity:0,scale:0.5,y:-100,rotate:500,x:100}}
                      whileInView={{opacity:1,scale:0.5,y:0,rotate:0,x:0}}
                      transition={{duration:1}}
                      viewport={{once:false}}
                       className='text-center text-white'>lorem</motion.h1></div>
                      <div><motion.p
                      initial={{opacity:0,x:-100}}
                      whileInView={{opacity:1,x:0}}
                      transition={{duration:1}}
                      viewport={{once:false}}
                       className='text-center'>In fermentum eget odio at viverra. Nulla elementum, lacus sit amet placerat tempor, sem magna auctor enim, vel porta felis dolor in justo. In imperdiet posuere orci non mattis. Aliquam suscipit elit luctus luctus condimentum. Nulla maximus est sodales tincidunt cursus. Etiam dapibus eu ligula a eleifend. Phasellus tristique quam sit amet sem viverra scelerisque. Nullam vitae justo ac tellus sollicitudin molestie ut venenatis augue. Cras justo ipsum, dignissim id malesuada eu, scelerisque eget felis. Morbi semper vel neque sed ornare. Pellentesque tellus sapien, malesuada vel convallis ut, pulvinar nec sapien.</motion.p></div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 d-flex align-items-center hero '>
                    <Scene></Scene>
                  </div>
                </Row>
              </Container>
            </section>
            <section>
              <Container>
                <Row>
                  <div className='col-12 d-flex justify-content-start'>
                     <motion.button
                     whileHover={{rotate:360,}}
                     whileTap={{ rotate:0, }}
                     transition={{duration:1}} //☺
                      variant="light"><FontAwesomeIcon icon="fa-regular fa-bell" /></motion.button>
                  </div>
                </Row>
              </Container>
            </section>
        </Layout>
      </>
    );
}
