//  global var 
const navigation = document.getElementById('navlist');
const sections = document.querySelectorAll('section');

// build the navigation function 
function navBuilder() {
    let navUI = ''; // as container 
    // need to select all sections by ID and  displayed data
    sections.forEach(section => {
        const label = section.id;
        const displayedData = section.dataset.nav;
        navUI += `<li><a class="menulinker" href="#${label}">${displayedData }</a></li>`; // which return data nto NavUI container
    });
    navigation.innerHTML = navUI;    // append all elements
}

navBuilder();



// getting the largest value that's less or equal to the number
function offset(section) {
    return Math.floor(section.getBoundingClientRect().top);
}

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: blue;";
    };
};

const sectionActivation = () => {
  sections.forEach(section => {
      const elementOffset = offset(section);

      inviewport = () => elementOffset < 150 && elementOffset >= -150;

      removeActive(section);
      addActive(inviewport(),section);
  });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

  const links = document.querySelectorAll('.navmenu a');
  links.forEach(link => {
      link.addEventListener('click', () => {
          for(i = 0 ; i<sections ; i++){
              sections[i].addEventListener("click",sectionScroll(link));
          }
      });
  });

};

scrolling();