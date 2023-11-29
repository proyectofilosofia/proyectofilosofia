document.addEventListener('mousemove', (e) => {
    const liquid = document.getElementById('liquid');
    const gradientSize = 750; 
    const gradientX = e.clientX - gradientSize / 2;
    const gradientY = e.clientY - gradientSize / 2;

    liquid.style.backgroundPosition = `${gradientX}px ${gradientY}px`;
    liquid.style.background = `radial-gradient(at ${e.clientX}px ${e.clientY}px, #008DFF, #00C5FF)`;
});


  
  
  
  
  