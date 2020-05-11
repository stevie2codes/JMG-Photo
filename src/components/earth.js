import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../sass/earth.scss";

class Earth extends Component {
  componentDidMount(time) {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 10;
    this.camera.lookAt(new THREE.Vector3());
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = false;
    this.controls.enableRotate = true;
    //ADD CUBE
    const geometry = new THREE.IcosahedronBufferGeometry(4, 4);

    const positions = geometry.getAttribute("position");
    const vertexCount = positions.count;
    const triangleCount = vertexCount / 2;

    const randomDirections = [];
    const randomStrengths = [];
    for (let i = 0; i < triangleCount; i++) {
      // Get a random unit vector
      const dir = new THREE.Vector3(
        Math.random() * 3 - 1,
        Math.random() * 3 - 1,
        Math.random() * 3 - 1
      )
        .normalize()
        .toArray();

      // Triplicate it and turn into a flat list of x, y, z, x, y, z...
      const directions = [dir, dir, dir].flat();

      // Concat into array
      randomDirections.push(...directions);

      // Do the same but with the 1 random strength float
      const str = Math.random();
      randomStrengths.push(str, str, str);
    }

    // Define the attributes
    const randomDirectionsAttribute = new THREE.BufferAttribute(
      new Float32Array(randomDirections),
      3
    );
    geometry.addAttribute("randomDirection", randomDirectionsAttribute);

    const randomStrengthsAttribute = new THREE.BufferAttribute(
      new Float32Array(randomStrengths),
      1
    );
    geometry.addAttribute("randomStrength", randomStrengthsAttribute);

    // Here's how we define a shader material
    const material = new THREE.ShaderMaterial({
      // We need to pass some information down from the vertex to the fragment shader
      vertexShader: `
        uniform float explosion;
        attribute vec3 randomDirection;
        attribute float randomStrength;
        varying vec3 vOriginalPosition;
        void main () {
          vOriginalPosition = position.xyz;
  
          vec3 pos = position.xyz;
  
          pos += randomDirection * randomStrength * explosion;
  
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.xyz, 1.0);
        }
      `,
      // The vertex shader is defined as a GLSL source string
      fragmentShader: `
        // An incoming value from the vertex shader
        varying vec3 vOriginalPosition;
  
        void main () {
          vec3 color = normalize(vOriginalPosition) * 0.7 + 0.7;
          
          gl_FragColor = vec4(color, 8);
        }
      `,
      // The uniforms allow us to send values down into the shader
      uniforms: {
        // The amount to push particles outward
        explosion: { value: 1.5 }
      },
      side: THREE.DoubleSide
    });

    this.cube = new THREE.Mesh(geometry, material);
    this.cube.castShadow = true;
    this.scene.add(this.cube);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = time => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = time => {
    // this.cube.rotation.x += 0.001;
    this.cube.rotation.y += 0.003;
    this.cube.rotation.z += 0.001;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = time => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="earth"
          className="earthHero"
          style={{
            width: "100vmin",
            height: "100vmin",
            position: "fixed"
          }}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </React.Fragment>
    );
  }
}

export default Earth;
