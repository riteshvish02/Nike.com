import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import './style.css'

const gltfLoader = new GLTFLoader()

//locomotive

// function inet(){
// gsap.registerPlugin(ScrollTrigger);
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//     getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// }

// inet();

let model;
let initialScale = 3

gltfLoader.load(
    '/models/nike_tc_7900_sail/scene.gltf',
    (gltf)=>{
        model = gltf.scene
         
        console.log(gltf);
        gltf.scene.position.set(0,-2,0)
        gltf.scene.scale.set(initialScale,initialScale,initialScale)
        gltf.scene.rotation.set(-Math.PI/2,Math.PI/2,0)
        scene.add(gltf.scene)
        
        shoeanimate()
       
        //    updateModelScale()
            

                 
    },
    
)

    function shoeanimate(){
            let tl2 = gsap.timeline({
                scrollTrigger:{
                    scroller:"body",
                    trigger:"#page1",
                    start:"top 0%",
                    end:"bottom -100%",
                    markers:true,
                    scrub:true,
                    pin:true
                }
            })
            tl2.to("#page1",{
                backgroundColor:"red",
                duration:1.5,
            },"var")
           
            tl2.to(model.position,{
                y:0,
            },"var")
            tl2.to(model.rotation,{
                x:0,
                duration:1,
                delay:0.05
            },"var")
            tl2.to(model.rotation,{
                y:5,
                duration:1.5,
                delay:0.05
            },"var2")
            tl2.to(model.scale,{
                x:4,
                y:4,
                z:4,
                duration:1.5,
                delay:0.05
            },"var2")
           }
function updateModelScale() {
    if (model) {
        const scaleFactor = Math.min(window.innerWidth / 800, window.innerHeight / 800); // Adjust 800 to the desired base size
        const newScale = initialScale * scaleFactor;
        model.scale.set(newScale, newScale, newScale);
    }
}
/**
 * Base
 */
// Debug
// const gui = new dat.GUI({width:400,height:1000})
// var guiDom = gui.domElement;

// Position the GUI panel
// guiDom.style.position = 'absolute'; // Set the position to absolute
// guiDom.style.top = '10px';          // Distance from the top of the screen
// guiDom.style.left = '10px';  
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
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
// scene.add(DirectionalLightHelper)
// gui.add(directionalLight.position,'x').max(10).min(0).step(0.0001).name('DirectionalLightX')
// gui.add(directionalLight.position,'y').max(10).min(0).step(0.0001).name('DirectionalLightY')
// gui.add(directionalLight.position,'z').max(10).min(0).step(0.0001).name('DirectionalLightZ')
// gui.add(directionalLight,'intensity').min(0).max(10).step(0.001).name('lightIntensity')


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    updateModelScale()
    
})


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


//helpers
// gui.add(renderer,'toneMapping',{
//     No:THREE.NoToneMapping,
//     Linaer:THREE.LinearToneMapping,
//     Reinhard:THREE.ReinhardToneMapping,
//     cineon:THREE.CineonToneMapping,
//     ACESFilmicg:THREE.ACESFilmicToneMapping,
// })
/**
 * Animate
 */
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

