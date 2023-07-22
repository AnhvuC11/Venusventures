        // Create a scene
        const scene = new THREE.Scene();
      
        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
      
        // Create a renderer with alpha set to true
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Set the clear color and alpha
        document.getElementById('globe-container').appendChild(renderer.domElement);
      
        // Create a globe geometry
        const geometry = new THREE.SphereGeometry(1, 32, 32);
      
        // Load a texture for the globe
        const texture = new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1129022584726507611/1129278557865136178/venus_surface_map.jpg');
        const material = new THREE.MeshBasicMaterial({ map: texture });
      
        // Create a mesh and add it to the scene
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
      
        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
      
          // Rotate the globe
          globe.rotation.y += 0.01;
      
          // Render the scene with the camera
          renderer.render(scene, camera);
        }
      
        animate();