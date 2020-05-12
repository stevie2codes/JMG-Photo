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
    this.camera.position.z = 20;
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
    const geometry = new THREE.SphereGeometry(10, 20, 20);

    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: "black"
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
    this.cube.rotation.x += 0.001;
    // this.cube.rotation.y += 0.003;
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
