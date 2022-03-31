
import { fetchCharacterDetail } from "../api/call-api-detail";

const displayDetailsCharacter = async () =>{

  const character = document.getElementById('character');
  const characterId = document.getElementById('charcterId').value;
  const details = await fetchCharacterDetail(characterId);
  character.innerHTML='';
    const char = details[0];
    console.log(char);

    if(char){
    const DetailsHTML =
   `<div class = details-container>
      <li class="details-item">
          <img class="details-item__image__detail" src="${char.img}"/>
          <div class= "details__h">
            <h5 class="details-item__text">Personaje : ${char.name }</h5>
            <h5 class="details-item__text">Apodo : ${char.nickname}</h5>
            <h5 class="details-item__text"> Serie : ${char.category}</h5>
            <h5 class="details-item__text">Interprete : ${char.portrayed}</h5>
          </div>
      </li>;
     </div> `;
    character.innerHTML = DetailsHTML;
    }else{
      Swal.fire('Debes de introducir un Id correcto');
    }
}

export {displayDetailsCharacter};