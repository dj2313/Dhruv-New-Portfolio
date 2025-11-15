import { useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";
import { Canvas } from "@react-three/fiber";

const Stars = () => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => new Float32Array(inSphere(new Float32Array(5000), { radius: 1.2 })));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 100;
      ref.current.rotation.y -= delta / 125;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#e9d5ff"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

