// Seleciona o link "Home" com o id "home-link"
var homeLink = document.getElementById("home-link");

// Adiciona um evento de clique ao link
homeLink.addEventListener("click", function() {
  location.reload();
});

// Seleciona o link "Contato" com o id "contact-link"
var contactLink = document.getElementById("contact-link");

// Adiciona um evento de clique ao link
contactLink.addEventListener("click", function() {
  Swal.fire({
    title: 'Contato',
    html: 'Email: contato@movidesk.com<br>Telefone: (11) 99999-9999<br>WhatsApp: (11) 99999-9999',
    showCancelButton: false,
    confirmButtonText: 'OK',
  });
});

// Seleciona o link "Clientes" com o id "clients-link"
var clientsLink = document.getElementById("clients-link");

// Adiciona um evento de clique ao link
clientsLink.addEventListener("click", function() {
  Swal.fire({
    title: 'Clientes',
    html: 'Empresa 1<br>Empresa 2<br>Empresa 3',
    showCancelButton: false,
    confirmButtonText: 'OK',
  });
});
