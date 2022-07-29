import React, { useRef, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Scene = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        const currentMount = mountRef.current
        //Scene
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        )
        camera.position.z = 2
        camera.position.y =0
        scene.add (camera)
        //renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setClearColor(0x5C3070, 0);
        renderer.setSize(currentMount.clientWidth,
                    currentMount.clientHeight)
        currentMount.appendChild(renderer.domElement)
        //loader
        const satelite= new THREE.Group();
        const gltfloader = new GLTFLoader();
        gltfloader.load('./assets/satelite1.gltf',(gltf) =>{
            gltf.scene.scale.set(0.1,0.1,0.1)
            satelite.add(gltf.scene)
            satelite.position.x=-1
            satelite.position.z=-10 
            scene.add(satelite)
        })
        //texturas
        const textureLoader = new THREE.TextureLoader()
        const map = textureLoader.load('./assets/Albedo.jpg')

        //tierra
            const geometry1 = new THREE.SphereGeometry(0.3,32,16,
                )
            const material2 = new THREE.MeshStandardMaterial({
                map:map,
                displacementScale:0.05
            } )
            const circulo = new THREE.Mesh(geometry1,material2)
            circulo.position.x=1.
            circulo.position.y=-0.3
            circulo.rotateX(1)
        scene.add(circulo)
        //luz
        const A0 = new THREE.AmbientLight(0xffffffff,1)
        scene.add(A0)
        const animate = () =>{
            circulo.rotateY(0.004)
            renderer.render(scene,camera)
            requestAnimationFrame(animate)
        }
        animate()


        //clean
        return () => {
            currentMount.removeChild(renderer.domElement)
        }
    },  [])



    return (
    <div className='Contenedor3D'
        ref={mountRef}
        style={{width:'100%', height:'90vh'}}
    >
    </div>
  )
}

export default Scene
