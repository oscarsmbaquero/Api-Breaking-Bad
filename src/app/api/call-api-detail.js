

const fetchCharacterDetail = async (characterId) =>{


    const url = `https://breakingbadapi.com/api/characters/ ${characterId}`;
    const res =  await fetch(url);

    const result = await res.json();

    //console.log(result);

    return result;

}

export {fetchCharacterDetail};