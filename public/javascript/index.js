const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((response) => {
      // console.log('the response', response.data)
      const data = response.data;
      let listItems ='';
      data.forEach(character => {
        listItems += `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`
      });
      document.getElementsByClassName('characters-container')[0].innerHTML = listItems;
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    let id = document.getElementById('character-id').value;
    // console.log('o id é' , id)
    charactersAPI.getOneRegister(id).then((response) =>{
     let foundCharater = response.data;
     document.getElementById('name').innerHTML = foundCharater.name;
     document.getElementById('occupation').innerHTML = foundCharater.occupation;
     document.getElementById('weapon').innerHTML = foundCharater.weapon;
     document.getElementById('cartoon').innerHTML = foundCharater.cartoon;
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id).then((res) =>{
      console.log('deleted', res)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById('id-edited').value;
    const name = document.getElementById('name-edited').value;
    const occupation = document.getElementById('occupation-edited').value;
    const weapon = document.getElementById('weapon-edited').value;
    const cartoon = document.getElementById('cartoon-edited').checked;
    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon
  }
  charactersAPI.updateOneRegister(id, updatedCharacter).then((response) => {
  console.log('updated character', updatedCharacter);
  });
  });


  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    const cartoon = document.getElementById('cartoon-input').checked;
    const newCharacter = {
        name,
        occupation,
        weapon,
        cartoon
    }
    charactersAPI.createOneRegister(newCharacter).then((response) => {
    console.log('new character', newCharacter);
    });
});
});


