import React from 'react';
import Layout from '../components/Layout.js';
import {Button, Container, Row,Image} from 'react-bootstrap';
import Scene from '../components/Scene.js';
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { useState,useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Home() {
  const[loading,setLoading ]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[ ])
    return (
      <>
      {
        loading?
        <div className='d-flex justify-content-center align-items-center div-preloader'>
          <PacmanLoader color="#a75cc5" />
        </div>
        :
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
                   className='text-center text-white'>In fermentum eget odio at viverra. Nulla elementum, lacus sit amet placerat tempor, sem magna auctor enim, vel porta felis dolor in justo. In imperdiet posuere orci non mattis. Aliquam suscipit elit luctus luctus condimentum. Nulla maximus est sodales tincidunt cursus. Etiam dapibus eu ligula a eleifend. Phasellus tristique quam sit amet sem viverra scelerisque. Nullam vitae justo ac tellus sollicitudin molestie ut venenatis augue. Cras justo ipsum, dignissim id malesuada eu, scelerisque eget felis. Morbi semper vel neque sed ornare. Pellentesque tellus sapien, malesuada vel convallis ut, pulvinar nec sapien.</motion.p></div>
                </div>
              </div>
              <div className='col-12 col-lg-6 d-flex align-items-center hero '>
                <Scene></Scene>
              </div>
            </Row>
          </Container>
        </section>
        <section className='mb-5 mt-5'>
          <Container>
            <Row>
              <div className='col-12 d-flex justify-content-start'>
                 <motion.button
                 className='boton'
                 whileHover={{rotate:360,scale:1.3,}}
                 whileTap={{ rotate:0, }}
                 transition={{duration:1}} //☺
                  variant="light"><FaBell size={44} ></FaBell></motion.button>
              </div>
            </Row>
            <Row>
              <div className='col-3'>

              </div>
              <div className='col-lg-6 d-flex col-12'>
                <div className='imagen-mancha-satelite '>
                </div>
              </div>
              <div className='col-lg-3 col-12 d-flex align-items-end'>
              <motion.button
                 className='boton1'
                 whileHover={{rotate:360,scale:1.3}}
                 whileTap={{ rotate:0,}}
                 transition={{duration:1}}>
                <FaQuestion size={44}></FaQuestion>
                </motion.button>
              </div>
            </Row>
          </Container>
        </section  >
    </Layout>
      }
      </>
    );
}

