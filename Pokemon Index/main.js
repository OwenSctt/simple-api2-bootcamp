document.querySelector('button').addEventListener('click', getGif)

function getGif(){
    const food = document.querySelector('input').value
     

    fetch(`https://pokeapi.co/api/v2/pokemon/${food}`)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      document.getElementById('name').innerHTML = data.name
      document.getElementById('type1').innerHTML = data.types[0].type.name
      if(data.types === true){
        document.getElementById('type2').innerHTML = data.types[1].type.name
      }
      document.getElementById('hp').innerText = data.stats[0].base_stat
      document.getElementById('attack').innerText = data.stats[0].base_stat
      document.getElementById('defense').innerText = data.stats[2].base_stat
      document.getElementById('specialAttack').innerText = data.stats[3].base_stat
      document.getElementById('specialDefense').innerText = data.stats[4].base_stat
      document.getElementById('speed').innerText = data.stats[5].base_stat
      document.getElementById('1').innerText = data.moves[0].move.name
      document.getElementById('2').innerText = data.moves[1].move.name
      document.getElementById('3').innerText = data.moves[2].move.name
      document.getElementById('4').innerText = data.moves[3].move.name
      document.getElementById('5').innerText = data.moves[4].move.name
      document.getElementById('6').innerText = data.moves[5].move.name
      document.getElementById('7').innerText = data.moves[6].move.name
      document.getElementById('8').innerText = data.moves[7].move.name
      document.getElementById('9').innerText = data.moves[8].move.name
      document.getElementById('10').innerText = data.moves[9].move.name
    
    
})
} 
