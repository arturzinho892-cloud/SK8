
// ========================================
// NAVEGAÇÃO DO SITE
// ========================================

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");

const floatingNext = document.getElementById("floatingNext");
const nextLabel = document.getElementById("nextLabel");

let currentPage = 0;


// ========================================
// NOMES DAS PRÓXIMAS PÁGINAS
// ========================================

const pageNames = [
  "Introdução",
  "Características",
  "Lazer & Competições",
  "Exibição"
];


// ========================================
// MOSTRAR UMA PÁGINA
// ========================================

function showPage(index) {

  // Se o número da página não existir, não faz nada
  if (index < 0 || index >= pages.length) {
    return;
  }


  // Remove "active" de todas as páginas
  pages.forEach(function(page) {
    page.classList.remove("active");
  });


  // Remove "active" de todos os botões
  navLinks.forEach(function(link) {
    link.classList.remove("active");
  });


  // Ativa a página escolhida
  pages[index].classList.add("active");


  // Ativa o botão correspondente
  navLinks[index].classList.add("active");


  // Atualiza a página atual
  currentPage = index;


  // Atualiza o botão flutuante
  updateNextButton();


  // Volta para o topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ========================================
// NAVEGAÇÃO PELO MENU
// ========================================

navLinks.forEach(function(link) {

  link.addEventListener("click", function(event) {

    event.preventDefault();

    const pageIndex = Number(link.dataset.page);

    showPage(pageIndex);

  });

});


// ========================================
// BOTÕES COM DATA-NEXT
// ========================================

const nextButtons = document.querySelectorAll("[data-next]");

nextButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const nextPage = Number(button.dataset.next);

    showPage(nextPage);

  });

});


// ========================================
// BOTÃO FLUTUANTE "PRÓXIMA"
// ========================================

floatingNext.addEventListener("click", function() {

  const nextPage = currentPage + 1;

  if (nextPage < pages.length) {

    showPage(nextPage);

  }

});


// ========================================
// ATUALIZAR BOTÃO FLUTUANTE
// ========================================

function updateNextButton() {

  // Se estiver na última página,
  // esconde o botão
  if (currentPage === pages.length - 1) {

    floatingNext.style.display = "none";

    return;
  }


  // Mostra o botão
  floatingNext.style.display = "flex";


  // Nome da próxima página
  nextLabel.textContent = pageNames[currentPage + 1];
}


// ========================================
// INICIALIZAÇÃO
// ========================================

showPage(0);

