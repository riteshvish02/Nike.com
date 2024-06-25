// javascripts/products.js
import '../stylesheets/products.css'; // Adjust the path to your CSS file

// Your JS code for products.html
console.log('Products JS loaded');
gsap.to('#page1 h1',{
    duration: 1,
    opacity: 1,
    y: 100,
    stagger: 0.5,
    delay: 0.5,
    ease: 'power3.inOut'
})