import{displayCharacterList} from './views/view-list';
import{displayDetailsCharacter} from './views/view-list-details';
import{displayNameCharacter} from './views/view-list-name';
import{displayFilterSerie} from './views/view-filter-serie';
import{displayFilterBreaking} from './views/view-filter-breaking';
import{displayFilterBetter} from './views/view-filter-better';
import{displayAllFilters} from './views/view-allFilter';
import{displayCharacterRandom} from './views/view-random';

// import{displaySwal} from './views/view-swal';

import './styles/styles.scss';
import 'bootstrap';

const addListeners = () => {
  document.getElementById('allCharacter').addEventListener('click', displayCharacterList);//evento para traer todos los personajes'

  document.getElementById('searchCharacter').addEventListener('click',displayDetailsCharacter);//evento para buscar personaje por id

  document.getElementById('searchCharacterName').addEventListener('click',displayNameCharacter);//evento para buscar personaje  por nombre

  document.getElementById('filter').addEventListener('click',displayFilterSerie);//evento para filtrar personajes por serie
  document.getElementById('breaking').addEventListener('click',displayFilterBreaking);//evento para filtrar personajes Breaking Bad
  document.getElementById('betterCaul').addEventListener('click',displayFilterBetter);//evento para filtrar personajes Better Call Saul

  document.getElementById('allFilter').addEventListener('click',displayAllFilters);//evento para filtrar personajes por serie

  document.getElementById('random').addEventListener('click', displayCharacterRandom);//evento para mostrar aleatoriamente 

  
}
// const function1 = ()=>{
//   // { Swal.fire('Api de Breaking Bad');}
// }



window.onload = () => {
  addListeners();
  displayAllFilters();
  // function1();
};
