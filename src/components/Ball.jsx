import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
    Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import '../styles/Ball.css'

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl])

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh scale={2.75} castShadow receiveShadow>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={"white"}
                    polygonOffset
                    polygonOffsetFactor={5}
                    flatShading />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal} />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({ icon }) => {
    return (
        <div className="ball-container ">

            <Canvas
                frameloop='demand'
                gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false}
                    />
                    <Ball imgUrl={icon} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default BallCanvas;