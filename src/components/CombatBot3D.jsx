import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

/**
 * 3D Combat Bot Model: "TITAN APEX-1"
 * Features an armored wedge chassis, high-speed dual kinetic spinning disc,
 * dual heavy-duty drive treads, armor plates, and spark emitters.
 */
function BattleBotMesh({ isSpinning = true }) {
  const spinnerRef = useRef()
  const botGroupRef = useRef()

  useFrame((state, delta) => {
    // Spin weapon disc at high velocity
    if (spinnerRef.current && isSpinning) {
      spinnerRef.current.rotation.y += delta * 18
    }

    // Gentle hover / tilt reaction to pointer
    if (botGroupRef.current) {
      const targetY = (state.pointer.x * Math.PI) / 8
      const targetX = (state.pointer.y * Math.PI) / 12
      botGroupRef.current.rotation.y = THREE.MathUtils.lerp(botGroupRef.current.rotation.y, targetY, 0.05)
      botGroupRef.current.rotation.x = THREE.MathUtils.lerp(botGroupRef.current.rotation.x, targetX, 0.05)
    }
  })

  return (
    <group ref={botGroupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        
        {/* Main Armored Wedge Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 0.5, 2.8]} />
          <meshStandardMaterial 
            color="#1e2026" 
            metalness={0.9} 
            roughness={0.25} 
          />
        </mesh>

        {/* Front Angled Hardened Steel Wedge Shield */}
        <mesh position={[0, -0.05, 1.45]} rotation={[-Math.PI / 4, 0, 0]}>
          <boxGeometry args={[2.5, 0.12, 1.1]} />
          <meshStandardMaterial 
            color="#e2e8f0" 
            metalness={0.95} 
            roughness={0.15} 
          />
        </mesh>

        {/* High-Speed Kinetic Spinner Weapon Blade */}
        <group ref={spinnerRef} position={[0, 0.35, 0.8]}>
          {/* Central Weapon Hub */}
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 0.35, 32]} />
            <meshStandardMaterial color="#dc2626" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Tooth 1 */}
          <mesh position={[0, 0, 0.8]}>
            <boxGeometry args={[0.3, 0.22, 1.2]} />
            <meshStandardMaterial color="#f8fafc" metalness={0.95} roughness={0.1} />
          </mesh>
          {/* Tooth 2 */}
          <mesh position={[0, 0, -0.8]}>
            <boxGeometry args={[0.3, 0.22, 1.2]} />
            <meshStandardMaterial color="#f8fafc" metalness={0.95} roughness={0.1} />
          </mesh>
          {/* Kinetic Red Impact Tips */}
          <mesh position={[0, 0, 1.35]}>
            <boxGeometry args={[0.35, 0.26, 0.2]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[0, 0, -1.35]}>
            <boxGeometry args={[0.35, 0.26, 0.2]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.6} />
          </mesh>
        </group>

        {/* Left Armor Track / Wheel Pod */}
        <mesh position={[-1.35, -0.05, 0]}>
          <boxGeometry args={[0.35, 0.6, 2.5]} />
          <meshStandardMaterial color="#0f1115" metalness={0.8} roughness={0.4} />
        </mesh>

        {/* Right Armor Track / Wheel Pod */}
        <mesh position={[1.35, -0.05, 0]}>
          <boxGeometry args={[0.35, 0.6, 2.5]} />
          <meshStandardMaterial color="#0f1115" metalness={0.8} roughness={0.4} />
        </mesh>

        {/* Weapon Motor Dome / Internal Housing */}
        <mesh position={[0, 0.45, -0.3]}>
          <cylinderGeometry args={[0.55, 0.7, 0.4, 16]} />
          <meshStandardMaterial color="#ef4444" metalness={0.85} roughness={0.3} />
        </mesh>

        {/* Neon Cyber Status Glow Bars */}
        <mesh position={[0, 0.28, -1.3]}>
          <boxGeometry args={[1.8, 0.08, 0.08]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1.5} />
        </mesh>

        {/* Sparks / Combat Plasma Dust */}
        <Sparkles 
          count={35} 
          scale={3.5} 
          size={2.5} 
          speed={0.6} 
          color="#ef4444" 
          opacity={0.8} 
        />
      </Float>
    </group>
  )
}

export default function CombatBot3D() {
  const [isSpinning, setIsSpinning] = useState(true)

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900/40 via-black/60 to-zinc-950/80 border border-zinc-700/30 backdrop-blur-xl shadow-2xl group">
      
      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [3.8, 3.2, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 12, 8]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-6, 4, -4]} intensity={2.5} color="#ef4444" />
        <pointLight position={[5, -2, 5]} intensity={1.8} color="#e2e8f0" />

        <BattleBotMesh isSpinning={isSpinning} />
        <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={7} blur={2.5} far={4} />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.1} 
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      {/* Telemetry HUD Overlays */}
      <div className="absolute top-5 left-5 pointer-events-none flex flex-col space-y-1.5 font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-xs font-bold text-red-400 tracking-wider">
            SLIIT BOT SPEC: TITAN APEX-1
          </span>
        </div>
        <div className="text-[11px] text-zinc-400">
          WEAPON: 6,500 RPM KINETIC VERTICAL DISC
        </div>
        <div className="text-[11px] text-zinc-500">
          ARMOR: 6MM AR500 STEEL CHASSIS
        </div>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-5 right-5 flex items-center space-x-2">
        <button
          onClick={() => setIsSpinning(!isSpinning)}
          className="px-3.5 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-600/40 text-xs font-mono text-zinc-200 backdrop-blur-md transition-all cursor-pointer shadow-lg"
        >
          {isSpinning ? 'WEAPON: ARMED (SPINNING)' : 'WEAPON: DISARMED'}
        </button>
      </div>

      <div className="absolute bottom-5 left-5 pointer-events-none text-[11px] font-mono text-zinc-500 hidden sm:block">
        DRAG TO ROTATE 360° INSPECTION
      </div>
    </div>
  )
}

