// Funcionalidades JavaScript da Dance Academy

// Mensagem de boas-vindas ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  alert("Bem-vindo à Dance Academy!");
  document.getElementById("year").textContent = new Date().getFullYear();

  // Contador de visitas nesta sessão (não é um contador global de visitantes)
  const key = "danceAcademyVisits";
  const visits = Number(sessionStorage.getItem(key) || 0) + 1;
  sessionStorage.setItem(key, String(visits));
  document.getElementById("visitCounter").textContent = `Visitas nesta sessão: ${visits}`;
});

// Botão interativo
document.getElementById("welcomeButton").addEventListener("click", () => {
  alert("Obrigado pela tua visita! Continua a dançar e a sonhar :)");
});

// Modo escuro
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const active = document.body.classList.contains("dark");
  themeToggle.textContent = active ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", active ? "Ativar modo claro" : "Ativar modo escuro");
});

// Menu responsivo para telemóveis
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Frases motivacionais aleatórias
const frases = [
  "“A dança é a linguagem escondida da alma.”",
  "“Dançar é sonhar com os pés.”",
  "“A arte transforma vidas.”",
  "“Cada passo é uma nova possibilidade.”",
  "“Encontra o teu ritmo e deixa-te levar.”"
];
document.getElementById("quoteButton").addEventListener("click", () => {
  const quoteText = document.getElementById("quoteText");
  const current = quoteText.textContent;
  let next = current;
  while (next === current) next = frases[Math.floor(Math.random() * frases.length)];
  quoteText.textContent = next;
});

// Formulário demonstrativo: valida e prepara o feedback sem enviar dados
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const modality = document.getElementById("modality").value;
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = `Obrigado, ${name}! A tua mensagem de demonstração está pronta${modality ? ` sobre ${modality}` : ""}. O formulário ainda não envia emails.`;
});

// Alteração de cor de fundo (funcionalidade extra)
document.getElementById("quoteButton").addEventListener("contextmenu", event => {
  event.preventDefault();
  document.body.style.backgroundColor = "#dbeafe";
});
