import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00f0ff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
