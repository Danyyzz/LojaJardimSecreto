document.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
  
    const imagem1 = document.getElementById("imagem1");
    const imagem2 = document.getElementById("imagem2");
  
    imagem1.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    imagem2.style.transform = `translateY(${(scrollPosition - window.innerHeight) * 0.3}px)`;
  });


  document.querySelector('.menu__conta').addEventListener('mouseover', () => {
    const dropmenu = document.querySelector('.dropmenu');
    dropmenu.style.display = 'block';
  });
  
  document.querySelector('.menu__conta').addEventListener('mouseleave', () => {
    const dropmenu = document.querySelector('.dropmenu');
    dropmenu.style.display = 'none';
  });
  
  // Garantir que o submenu desapareça ao mover o mouse para fora
  document.querySelector('.dropmenu').addEventListener('mouseleave', () => {
    const dropmenu = document.querySelector('.dropmenu');
    dropmenu.style.display = 'none';
  });


