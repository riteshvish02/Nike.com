import './style.css'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
const totalItems = 7;
const loadingBarElement  = document.querySelector('.loadingbar')
const loadingBarElementh2  = document.querySelector('.loadingbar h2')
const loadingManager = new THREE.LoadingManager(
    // Loaded
    () =>
    {
        // Wait a little
        window.setTimeout(() =>
            {
            gsap.to('.loader', { display: 'none' });
            // Animate overlay

        }, 1000)

      
    },

    // Progress
    (itemUrl, itemsLoaded, itemsTotal) =>
    {
        console.log("progress", itemsLoaded, itemsTotal);

        // Calculate the progress and update the loadingBarElement
        const progressRatio = itemsLoaded / totalItems;
        const progressPercentage =( (itemsLoaded / totalItems) * 100).toFixed();
        // console.log(progressRatio, progressPercentage.toFixed());
    
        loadingBarElement.style.transform = `scaleX(${progressRatio})`;
         loadingBarElementh2.textContent = progressPercentage + "%"
    }
)
const gltfLoader = new GLTFLoader(loadingManager)

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
    '/models/sneakers/scene.gltf',
    (gltf)=>{
        model = gltf.scene
        if(model){
            
       model.scale.set(10,10,10)
        console.log(gltf);
       model.position.set(0,-2.8,0)
       model.rotation.set(-1.2,0,0)
        model.traverse((child) => {
            if (child.isMesh) {
              // Ensure the material is a standard material
              if (child.material.isMeshStandardMaterial) {
                // Set the metalness and roughness
                child.material.metalness = 0.2; // Example value for metalness
                child.material.roughness = 0.8; // Example value for roughness
              }
            }
          });
        gsap.to('.loader',{
            display:'none',
        })
        scene.add(model)
        gsap.to('#main',{
            display:'block',
        })
        gsap.to('nav',{
            display:'flex',
        })
        
        adjustModelForScreen()
           
           
            
           function shoeanimate(){
            const isMobile = window.innerWidth <= 768;
            gsap.from("#page1 #text",{
                opacity:"0",
                scale:1.2,
                duration:1.2
            })
            let tl2 = gsap.timeline({
                scrollTrigger:{
                    scroller:"#main",
                    trigger:"#page1",
                    start:"top 0%",
                    end:"bottom -800%",
                    // markers:true,
                    scrub:true,
                    pin:true
                }
            })
            tl2
           
            .to(".webgl",{
                top:0,
                left:0,
            },"var")
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
                z:-0.6,
                x:0.2,
                y:-0.5,
                delay:-1.8
                // duration:1.5,
            },"var2")
            .to(model.scale,{
                x: isMobile ? 3.5 : 7,
                y: isMobile ? 3.5 : 7,
                z: isMobile ? 3.5 : 7,
                duration:1.5,
                delay:-1.8
            },"var2")
            .to(model.position,{
                x:isMobile ? -0.5 : -1.2,
                z:0,
                duration:1.5,
                delay:-1.8
            },"var2")
            .to("#page1 #infotext1",{
                display:'flex',
                duration:0.1,
                delay:-1,
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
                duration:0.5,
            },"var2")
            .to(model.position,{
                x:isMobile ? 0.5 : 1.3,
                y:0,
                duration:1.5,
            },"var3")
            .to('#page1 #cloudanimate',{
                bottom : '-50%',
                left:"0",
                duration:2,
                // backgroundColor:'red'
            },"var3")
            .to(model.rotation,{
                x:0.2,
                y:-2.8,
                z:-0.8,
                duration:2,
            },"var3")
            .to("#page1 #infotext2",{
                display:'flex',
                duration:0.1,
                delay:-1,
            },"var4")
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
            },"va4")
            .to("#page1 #infotext2 h2,#page1 #infotext2 h3,#page1 #infotext2 h1",{
                opacity:0,
                scale:"1.3",
                duration:0.5,
            },"var4")
            .to(model.position,{
                x:-0,
                y:isMobile ? -1.4 : -1.2,
                duration:2,
            },"var5")
            .to('#page1 #cloudanimate',{
                bottom :'0%',
                left:"0",
                duration:2,
            },"var5")
            .to(model.rotation,{
                x:0,
                y:0,
                z:0,
                duration:2,
             },"var5")
             .to(model.scale,{
                x:isMobile ? 2.7 :5,
                y:isMobile ? 2.7 :5,
                z:isMobile ? 2.7 :5,
                duration:2,
             },"var5")
             .from("#mount3",{
                y:215,
                duration:1,
                delay:1,
            },"var5")
            .to("#page1 #infotext3 ",{
                display:"block",
                duration: 0.1,
            },"var5")
            .to("#page1 #infotext3 #line #childline ,#page1 #infotext3 #line2 #childline",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.5,
            },"var6")
            .to("#page1 #infotext3 #line3 #childline ",{
                clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 10% 100%)",
                duration: 0.5,
            },"var6")
            .to("#page1 #infotext3 #line h2,#page1 #infotext3 #line2 h3,#page1 #infotext3 #line3 h2",{
                opacity:1,
                duration: 0.1,
            },"var7")
            .to("#page1 #infotext3 #line #childline ,#page1 #infotext3 #line2 #childline",{
                opacity:0,
                duration: 2,
            },"var8")
            .to("#page1 #infotext3 #line3 #childline ",{
                opacity:0,
                duration: 2,
            },"var8")
            .to("#page1 #infotext3 #line h2,#page1 #infotext3 #line2 h3,#page1 #infotext3 #line3 h2",{
                opacity:0,
                delay:0.3,
                duration: 1,
            },"var8")
            .to(model.position,{
                y:-2.3,
                duration: 1,
            },"var9")
            .to(model.rotation,{
                x:-Math.PI/2,
                duration: 1,
            },"var9")
            
            

        
           }
           shoeanimate()
        }else{
            gsap.to('.loader',{
                display:'flex',
            })
            gsap.to('#main',{
                display:'none',
            })
        }
        
    },
    
)

  
  function menu(){
    var flag = 0;
    var ans = document.querySelectorAll("#menu")
    ans.forEach((elem)=>{
        elem.addEventListener("click",function(){
            if(flag === 0){
            var tl = gsap.timeline()
            tl
            .to(".line",{
                position:"absolute",
                duration:1
            })
            .to("#l1",{
                position:"relative",
                transform:" rotate(45deg)  translateY(0px) translateX(4px)",
                marginLeft: "-5px"
            },"a")
            .to("#l3",{
                position:"relative",
                transform:" rotate(-45deg)  translateX(2px)",
                marginLeft: "-5px"
            },"a")
            .to("#l2",{
                opacity:0
            },"a")
           
            flag =1 
        }
        else{
            var tl = gsap.timeline()
    
            tl
            .to("#l1",{
                position:"relative",
                transform:" rotate(0deg)  translateY(0px) translateX(0px)",
                marginLeft: "0px"
            },"a")
            .to("#l3",{
                position:"relative",
                transform:" rotate(0deg)  translateX(0px)",
                marginLeft: "0px"
            },"a")
            .to("#l2",{
                opacity:1,
                position:"relative"
            },"a")
           
            flag = 0
        }
    
        })
    })
    
}
menu()

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
            model.scale.set(5.5, 5.5, 5.5)
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
})




/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, 2)
scene.add(camera)


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
  
    let parallaxX = cursor.x  * 0.08
    let parallaxY = -cursor.y * 0.08
  
    camera.position.x = (parallaxX) 
    camera.position.y = (parallaxY) 

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}




tick()


//menubar

document.addEventListener("DOMContentLoaded",function(){
    const menuImgContainer = document.querySelector('.menu-img')
    const images = document.querySelectorAll(".menu-img img")
    let mouse = {x:0,y:0}
    let cx = window.innerWidth /2 ;
    let cy = window.innerHeight /2 ;

    const scales = [0.81,0.84,0.87,0.9]

    function update(){
        let dx = mouse.x - cx
        let dy = mouse.y - cy

        let tiltx = (dy/cy) * 20
        let tilty = (dx/cx) * 20

        gsap.to(menuImgContainer,{
            duration:2,
            transform:`rotate3d(${tiltx},${tilty},0,15deg)`,
            ease:"power3.out",

        })
        images.forEach((img,index)=>{
            let parallaxX = -(dx * (index+1))/100
            let parallaxY = -(dy * (index+1))/100

            let transformStyles = `translate(calc(-50% + ${parallaxX}px),calc(-50% + ${parallaxY}px)) scale(${scales[index]})`
            gsap.to(img ,{
                duration:2,
                transform:transformStyles,
                ease:"power3.out",
            })
        })
    }
    document.body.addEventListener('mousemove',function(event){
        mouse.x = event.clientX
        mouse.y = event.clientY
        update()
    })
 })

function page3() {
    const itemsArray = [];
 const cursor = document.querySelector("#page4 .cursor");
 document.querySelector('#page4').addEventListener("mousemove", (e) => {
    gsap.to(cursor,{
        display:"flex",
        left:`${e.clientX - 35}`,
        top:`${e.clientY - 35}`,
      })
 })

document.querySelector("#page4").addEventListener("click",function(event){
    const itemType = Math.random() > 0.5 ? "video" : "image";
    let container = document.createElement("div");
    let elementWidth = 700;
    if(itemType === "video"){
        const videoNumber = Math.floor(Math.random() * 6) + 1;
        container.innerHTML = `<div class="video-container">
                                   <video autoplay loop muted>
                                       <source src="/assets/images-videos/video-${videoNumber}.mp4" type="video/mp4" />
                                    </video>
                                </div>`;
    }
    else{
        const imgNumber = Math.floor(Math.random() * 6) + 1;
        container.innerHTML = `<div class="img-container">
                                     <img src="/assets/images-videos/image-${imgNumber}.jpg" alt="" />
                                </div>`;
    }
    console.log(container);
    const appendedElement = container.firstChild;
    document.querySelector("#page4 .items-container").appendChild(appendedElement);
    appendedElement.style.left = `${event.clientX - elementWidth / 2}px`;
    appendedElement.style.top = `${event.clientY}px`;
    const randomRotation = Math.random() * 10 -5;
    gsap.to(appendedElement,{
        scale:0,
        rotation:randomRotation,
        transformOrigin:"center",
    })
    const tl = gsap.timeline();
    const randomScale = Math.random() * 0.5 + 0.5;
    tl.to(appendedElement,{
        scale:randomScale,
        duration:0.5,
        delay:0.1,
    })
    tl.to(appendedElement,{
        y: () => `-=500`,
        opacity:1,
        duration:4,
        ease:"none",
    },
    "<"
    ).to(appendedElement,{
        opacity:0,
        duration:1,
        onComplete: () => {
            appendedElement.parentNode.removeChild(appendedElement);
            const index = itemsArray.indexOf(appendedElement);
            if(index > -1){
                itemsArray.splice(index,1);
            }
        },
    },
    "-=0.5"
    )
})

}
page3()


const target = document.getElementById('shimmerWave');
function splitTextToSpans(targetElement) {
    if (targetElement) {
        const text = targetElement.textContent;
        targetElement.innerHTML = '';
        for (let character of text) {
            const span = document.createElement('span');
            if (character === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = character;
            }
            targetElement.appendChild(span);
        }
    }
}
splitTextToSpans(target);


document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelectorAll(".menu-open");
    const menuClose = document.querySelectorAll(".menu-close");
    menuOpen.forEach((item)=>{
        item.addEventListener('click', function () {
            if (isOpen) return;
            openMenu();
        });
    })

    if (!menuOpen || !menuClose) {
        console.error("menuOpen or menuClose elements not found.");
        return;
    }

    let isOpen = false;
    const defaultEase = "power4.inOut";

    gsap.set('.menu-link p', { y: 40 });
    gsap.set('.menu-sub-item p', { y: 12 });
    gsap.set(['#img-2', '#img-3', '#img-4'], { top: '150%' });

    menuClose.forEach((item)=>{
        item.addEventListener('click', function () {
            console.log("callleddd");
        if (!isOpen) return;
        closeMenu();
        });
    })

   

    const openMenu = () => {
        gsap.to('.menu', {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
            pointerEvents: "all",
            duration: 1.25,
            ease: defaultEase
        });
       
     
        gsap.to(".menu-link p", {
            y: 0,
            duration: 1,
            stagger: 0.075,
            delay: 0.75,
            ease: "power2.easeIn",
        });
        gsap.to(".menu-sub-item p", {
            y: 0,
            duration: 0.075,
            stagger: 0.05,
            delay: 0.5,
            ease: "power2.easeIn",
        });
        gsap.to(['#img-2', '#img-3', '#img-4'], {
            top: '50%',
            duration: 1,
            delay: .025,
            ease: "power2.easeIn",
            stagger: 0.1,
            onComplete: () => {
                gsap.set("#main", { top: '50%' });
                isOpen = !isOpen;
            }
        });
    };
    const closeMenu = () => {
        gsap.to('.menu', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",

            pointerEvents: "none",
            duration: 1.25,
            ease: defaultEase,

        })
        gsap.to('.menu-items', {
            top: '-300px',
            opacity: 0,
            duration: 1.25,
            ease: defaultEase,

        })
        gsap.to('#main', {
            top: '0%',
            opacity: 1,
            duration: 1.25,
            ease: defaultEase,
            onComplete: () => {
gsap.to('.menu',{
    clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",

})

                gsap.set('.menu-link p', { y: 40 });
                gsap.set('.menu-sub-item p', { y: 12 });
                gsap.set('.menu-items', { opacity: 1, top: "0px" })
                gsap.set(['#img-2', '#img-3', '#img-4'], { top: '150%' });
                isOpen = !isOpen;
            }
        })
    }
})