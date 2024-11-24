document.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
  
    const imagem1 = document.getElementById("imagem1");
    const imagem2 = document.getElementById("imagem2");
  
    imagem1.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    imagem2.style.transform = `translateY(${(scrollPosition - window.innerHeight) * 0.3}px)`;
  });


  document.querySelectorAll('.dropdown-toggle').forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = dropdown.nextElementSibling;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });