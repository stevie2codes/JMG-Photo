import React, { Component } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class HomeCube extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 20;
    this.camera.lookAt(new THREE.Vector3());
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setClearColor("0x000000, 0");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.enableDamping = true;
    // this.controls.dampingFactor = 0.25;
    // this.controls.enableZoom = false;
    //ADD CUBE
    //TorusKnotBufferGeometry
    const geometry = new THREE.SphereGeometry(10, 65, 60);

    const light = new THREE.DirectionalLight("white", 2);
    light.position.set(2, 1, 1);
    this.scene.add(light);

    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      "https://res.cloudinary.com/df9q0hnuw/image/upload/v1588135385/earth_dswq4r.jpg"
    );
    // const moonTexture = loader.load("../images/moon.jpg");

    const material = new THREE.MeshPhongMaterial({
      roughness: 1,

      // wireframe: true,

      map: texture
    });

    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    // this.cube.rotation.x += 0.003;
    this.cube.rotation.y += 0.003;
    this.cube.rotation.z += 0.002;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "40vw",
            height: "40vh"
          }}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </React.Fragment>
    );
  }
}

export default HomeCube;
