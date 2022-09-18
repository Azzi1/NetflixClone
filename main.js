const ongletIcon = document.querySelectorAll('.onglet-icon');
const ongletContenu = document.querySelectorAll('.onglet-contenu');

// border assignement to icon 

// function selectedtIconBorder(e) {

//   //removeBorder
//   removeBorder();

//   //remove ongletContenu
//   removeContenu();

//   //assign border
//   this.classList.add('onglet-border')

//   // afficher contenu Onglet correspondant

//   const ongletIconContenu = document.querySelector(`#${this.id}-conteneur`)

//   ongletIconContenu.classList.add('afficher');


function assignBorder() {

  //remove Border
  removeBorder();

  // remove Contenu
  removeOngletContenu();

  // assign border

  this.classList.add('onglet-border');

  // afficher Contenu 

  const ongletIconContenu = document.querySelector(`#${this.id}-conteneur`)

  ongletIconContenu.classList.add('afficher');

}


function removeBorder() {

  ongletIcon.forEach(icon => icon.classList.remove("onglet-border"))
}


function removeOngletContenu() {

  ongletContenu.forEach(onglet => onglet.classList.remove("afficher"))
}



//event Listner 

ongletIcon.forEach(onglet => onglet.addEventListener('click', assignBorder));