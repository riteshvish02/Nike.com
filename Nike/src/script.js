import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'


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

// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 5000)
// })

// gsap.ticker.lagSmoothing(0)




let model
gltfLoader.load(
    '/models/nike_tc_7900_sail/scene.gltf',
    (gltf)=>{
        model = gltf.scene
        console.log(gltf);
        model.position.set(0,-2,0)
        model.scale.set(1,1,1)
        model.rotation.set(-Math.PI/2,Math.PI/2,0)
        scene.add(model)
        adjustModelForScreen()
            // gsap.to(model.position,{
            //     y:"",
            //     duration:1.2,
            //     yoyo:true,
            //     repeat:-1,
            // })

            // let tl1 = gsap.timeline({
            //     scrollTrigger:{
            //         scroller:"#main",
            //         trigger:"#page1",
            //         start:"top 0%",
            //         end:"bottom 50%",
            //         markers:true,
            //         scrub:true,
            //         pin:true,
            //     }
            // })
            // tl1.to("#mount1",{
            //     x:-420,
            //     onComplete:()=>{
            //         console.log("hello");
            //         shoeanimate()
            //     }
            // })

           
            
           function shoeanimate(){
            let tl2 = gsap.timeline({
                scrollTrigger:{
                    scroller:"#main",
                    trigger:"#page1",
                    start:"top 0%",
                    end:"bottom -100%",
                    markers:true,
                    scrub:true,
                    pin:true
                }
            })
            tl2.to("#mount1",{
                x:-420,
                duration:1.5,
            },"var")
            tl2.to("#mount2",{
                x:420,
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
                x:1,
                y:1,
                z:1,
                duration:1.5,
                delay:0.05
            },"var2")
           }
           shoeanimate()
            
            

           
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
            model.scale.set(2, 2, 2)
        } else { // Landscape mode
            model.scale.set(3, 3, 3)
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