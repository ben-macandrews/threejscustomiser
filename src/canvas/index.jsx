import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'


function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop> */}
          <Center>
            <Shirt />
          </Center>
        {/* </Backdrop> */}
      </CameraRig>

    </Canvas>
  )
}

export default CanvasModel