import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
const gui = new dat.GUI({width:400,height:1000})
// var guiDom = gui.domElement;
// Position the GUI panel


const gltfLoader = new GLTFLoader()

//locomotive

function inet(){
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

inet();




let model
gltfLoader.load(
    '/models/nike_air_max_90 (2)/scene.gltf',
    (gltf)=>{
        model = gltf.scene
        gltf.scene.scale.set(10,10,10)
        console.log(gltf);
        gltf.scene.position.set(0,-2.8,0)
        gltf.scene.rotation.set(-1,1.4,-0.40)
        model.traverse((child) => {
            if (child.isMesh) {
              // Ensure the material is a standard material
              if (child.material.isMeshStandardMaterial) {
                // Set the metalness and roughness
                child.material.metalness = 0.3; // Example value for metalness
                child.material.roughness = 1; // Example value for roughness
              }
            }
          });
        scene.add(gltf.scene)
        adjustModelForScreen()
           
           
            
           function shoeanimate(){
            const isMobile = window.innerWidth <= 768;
            
            let tl2 = gsap.timeline({
                scrollTrigger:{
                    scroller:"#main",
                    trigger:"#page1",
                    start:"top 0%",
                    end:"bottom -400%",
                    // markers:true,
                    scrub:true,
                    pin:true
                }
            })
            tl2
            .to("#mount1",{
                x:-440,
                duration:1.5,
            },"var")
            .to("#mount2",{
                x:440,
                duration:1.5,
            },"var")
            .to("#page1 #text .texts",{
               opacity:"0",
            },"var")
            .to('.cld',{
                y:-800,
                duration:2,
                // backgroundColor:'red'
            },"var")
            .to('#page1 #cloudanimate',{
                bottom : '-100%',
                duration:2,
                // backgroundColor:'red'
            },"var")
            .to(model.position,{
                y:0,
                delay:-0.1
            },"var")
    
            .to(model.rotation,{
                z:-0.5,
                x:0.5,
                y:1,
                delay:-1.8
                // duration:1.5,
            },"var2")
            .to(model.scale,{
                x: isMobile ? 5 : 11,
                y: isMobile ? 5 : 11,
                z: isMobile ? 5 : 11,
                duration:1.5,
                delay:-1.8
            },"var2")
            .to(model.position,{
                x:isMobile ? -0.5 : -1.2,
                z:0,
                duration:1.5,
                delay:-1.8
            },"var2")
            .from("#page1 #infotext1 h1",{
                opacity:0,
                scale:"1.3",
                duration:0.5,
                delay:-1,
            },"var2")
            .from("#page1 #infotext1 h2,#page1 #infotext1 h3",{
                opacity:0,
                scale:"1.3",
                duration:0.5,
                delay:-1,
                stagger:0.2,
            },"var2")
            .to("#page1 #infotext1 h2,#page1 #infotext1 h3,#page1 #infotext1 h1",{
                opacity:0,
                scale:"1.3",
                duration:0.1,
            },"var2")
            .to(model.position,{
                x:isMobile ? 0.5 : 1.3,
                y:0.15,
                duration:1.5,
            },"var3")
            .to('#page1 #cloudanimate',{
                bottom : '-50%',
                duration:2,
                // backgroundColor:'red'
            },"var3")
            .to(model.rotation,{
                x:1.3,
                y:-0.8,
                z:1,
                duration:2,
            },"var3")
            .from("#page1 #infotext2 h1",{
                opacity:0,
                scale:"1.3",
                duration:0.5,
                delay:-1,
            },"var4")
            .from("#page1 #infotext2 h2,#page1 #infotext2 h3",{
                opacity:0,
                scale:"1.3",
                duration:0.5,
                delay:-1,
                stagger:0.2,
            },"var4")
            .to("#page1 #infotext2 h2,#page1 #infotext2 h3,#page1 #infotext2 h1",{
                opacity:0,
                scale:"1.3",
                duration:0.1,
            },"var4")
            
            .to(model.position,{
                x:-0,
                y:-0.5,
                duration:2,
            },"var5")
            .to('#page1 #cloudanimate',{
                bottom : '0%',
                duration:2,
                // backgroundColor:'red'
            },"var5")
            .to(model.rotation,{
                x:0.4,
                y:1.5,
                z:-0.2,
                duration:2,
             },"var5")
            .to('#main',{
                zIndex:"999999999999999999999999999999999999999999999",
                duration:1,
                delay:1,
             },"var6")
        //          .to(model.scale,{
        //     x:6,
        //     y:6,
        //     z:6,
        //     duration:1,
        // },"v7")
        // .to(model.rotation,{
        //     x:-Math.PI/2,
        //     duration:1,
        // },"v7")
        // .to(model.position,{
        //     y:-2,
        //     duration:1,
        // },"v7")
       
           }
           shoeanimate()

        //    let tl = gsap.timeline({
        //     scrollTrigger:{
        //         scroller:"#main",
        //         trigger:"#page2",
        //         start:"-50% bottom",
        //         end:"top 0%",
        //         markers:true,
        //         scrub:true,
        //     }
        //    })

        //    tl
        //    .to('#main',{
        //       zIndex:"999999999999999999999999999999999999999999999",
        //       duration:0.1,
        //    },"var6")
        //    .to(model.scale,{
        //     x:6,
        //     y:6,
        //     z:6,
        //     duration:1,
        // },"var6")
        // .to(model.rotation,{
        //     x:-Math.PI/2,
        //     duration:1,
        // },"var6")
        // .to(model.position,{
        //     y:-2,
        //     duration:1,
        // },"var6")
       
          
            
           function guicall(){
            gui.add(gltf.scene.position,'x').min(-8).max(8).step(0.2).name('shoePositionX')
           gui.add(gltf.scene.position,'y').min(-8).max(8).step(0.2).name('shoePositionY')
           gui.add(gltf.scene.position,'z').min(-8).max(8).step(0.2).name('shoePositionZ')
           gui.add(gltf.scene.scale,'x').min(0).max(8).step(0.2).name('shoeScaleX')
           gui.add(gltf.scene.scale,'y').min(0).max(8).step(0.2).name('shoeScaleY')
           gui.add(gltf.scene.scale,'z').min(0).max(8).step(0.2).name('shoeScaleZ')
           gui.add(gltf.scene.rotation,'x').min(-Math.PI).max(Math.PI).step(0.2).name('shoeRotationX')
           gui.add(gltf.scene.rotation,'y').min(-Math.PI).max(Math.PI).step(0.2).name('shoeRotationY')
           gui.add(gltf.scene.rotation,'z').min(-Math.PI).max(Math.PI).step(0.2).name('shoeRotationZ')

           
           }
           guicall()
        
    },
    
)


/**
 * Base
 */
// Debug
 
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight('#ffffff', 5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(2, 2, 1)
scene.add(directionalLight)
const DirectionalLightHelper = new THREE.DirectionalLightHelper(directionalLight,0.2)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


let wasMobile = sizes.width <= 768; // Assume mobile view if initial width <= 768

function refreshPageIfNeeded() {
    const isMobile = window.innerWidth <= 768;

    // Check if the viewport crossed the mobile threshold
    if (isMobile !== wasMobile) {
        location.reload(); // Reload the page
    }

    wasMobile = isMobile;
}


refreshPageIfNeeded();



function adjustModelForScreen() {
    if (model) {
        const aspectRatio = window.matchMedia("(max-width: 768px)").matches
        console.log(aspectRatio);
        if (aspectRatio) { // Portrait mode
            model.scale.set(3, 3, 3)
        } else { // Landscape mode
            model.scale.set(7.5, 7.5, 7.5)
        }
    }
}

function updateSizes() {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
}

function updateCamera() {
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
}

function updateRenderer() {
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function onWindowResize() {
    updateSizes()
    updateCamera()
    updateRenderer()
    adjustModelForScreen()
}

window.addEventListener('resize',()=>{
    
    onWindowResize()
    refreshPageIfNeeded();
}
    )


const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener("mousemove",(event)=>{
    cursor.x = (event.clientX / sizes.width) - 0.5
    cursor.y = (event.clientY / sizes.height) - 0.5
    console.log(cursor);
})




/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, 2)
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true,  
    antialias:true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
// renderer.toneMapping = THREE.ReinhardToneMapping
renderer.toneMappingExposure = 3



//  * Animate
//  */



const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
    // controls.update()
  
    let parallaxX = cursor.x  * 0.25
    let parallaxY = -cursor.y * 0.25
  
    camera.position.x = (parallaxX) 
    camera.position.y = (parallaxY) 

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}




tick()