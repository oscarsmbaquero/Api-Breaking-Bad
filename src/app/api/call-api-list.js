


const  fetchCharacterList = async () => {

    const url = 'https://breakingbadapi.com/api/characters';//me traigo datos de la url
    const res =  await fetch(url);// creo la variable 'res' donde introduzco   los datos traidos de la api

   let result = await res.json();

   //console.log(result);


       return result;

}

export { fetchCharacterList };