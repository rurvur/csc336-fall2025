import { useState, useEffect, use } from "react";

function Pokemon6() {
  const [fromServer, setFromServer] = useState({something: "Name"});
  const [nickname, setNickname] = useState({nname: "Nickname"});
  const [pokenature, setNature] = useState({nature: "Nature"});
  // This would have been much easier if I understood set methods better but I also don't want to touch it and break it, sorry!
  const [moves, setMoves] = useState({move1: "Move1", move2: "Move2", move3: "Move3", move4: "Move4"});
  const [type1, setType1] = useState({type1: "Type1"});
  const [type2, setType2] = useState({type2: "Type2"});
  const [item, setItem] = useState({item: "Item"});
  const [stats, setStats] = useState({hp: 0, attack: 0, defense: 0, spattack: 0, spdefense: 0, speed: 0});

  useEffect(() => {
    function loadData() {
      fetch("/api/pokemon")
        .then(res => res.json())
        .then(data => {
          setFromServer({something: data.pokemon.team[5].name});
          setNickname({nname: data.pokemon.team[5].nickname});
          setNature({nature: data.pokemon.team[5].nature});
          setMoves({
            move1: data.pokemon.team[5].moves[0],
            move2: data.pokemon.team[5].moves[1],
            move3: data.pokemon.team[5].moves[2],
            move4: data.pokemon.team[5].moves[3]
          });
          setType1({type1: data.pokemon.team[5].type});
          setType2({type2: data.pokemon.team[5].type2});
          setItem({item: data.pokemon.team[5].item});
          setStats({
            hp: data.pokemon.team[5].EVs.HP,
            attack: data.pokemon.team[5].EVs.Attack,
            defense: data.pokemon.team[5].EVs.Defense,
            spattack: data.pokemon.team[5].EVs.SpAttack,
            spdefense: data.pokemon.team[5].EVs.SpDefense,
            speed: data.pokemon.team[5].EVs.Speed
          });
      });      
    };

    loadData();

  }, []);

  const [pokeImg, setPokeImg] = useState({Img: "https://static.wikia.nocookie.net/international-pokedex/images/2/2a/Pikachu_%28Yellow%29.png/revision/latest/scale-to-width-down/230?cb=20180525190624"});
  //the above link doesn't really seem to work sadly, it was mostly done for a joke anyways
  const [move1Data, setMove1Data] = useState({Power: "0", type: "", category: "",accuracy: "0", pp: "0"});
  const [move2Data, setMove2Data] = useState({Power: "0", type: "", category: "", accuracy: "0", pp: "0"});
  const [move3Data, setMove3Data] = useState({Power: "0", type: "", category: "", accuracy: "0", pp: "0"});
  const [move4Data, setMove4Data] = useState({Power: "0", type: "", category: "", accuracy: "0", pp: "0"});

  useEffect(() => {
    function PokeData(){
      fetch(`https://pokeapi.co/api/v2/pokemon/${fromServer.something.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
          setPokeImg({Img: data.sprites.front_default});
        });
      fetch(`https://pokeapi.co/api/v2/move/${moves.move1.toLowerCase().replace(/\s+/g, '-')}`)
        .then(res => res.json())
        .then(data => {
          setMove1Data({Power: data.power, type: data.type.name, category: data.damage_class.name, accuracy: data.accuracy, pp: data.pp});
        });
      fetch(`https://pokeapi.co/api/v2/move/${moves.move2.toLowerCase().replace(/\s+/g, '-')}`)
        .then(res => res.json())
        .then(data => {
          setMove2Data({Power: data.power, type: data.type.name, category: data.damage_class.name, accuracy: data.accuracy, pp: data.pp});
        });
      fetch(`https://pokeapi.co/api/v2/move/${moves.move3.toLowerCase().replace(/\s+/g, '-')}`)
        .then(res => res.json())
        .then(data => {
          setMove3Data({Power: data.power, type: data.type.name, category: data.damage_class.name, accuracy: data.accuracy, pp: data.pp});
        });
      fetch(`https://pokeapi.co/api/v2/move/${moves.move4.toLowerCase().replace(/\s+/g, '-')}`)
        .then(res => res.json())
        .then(data => {
          setMove4Data({Power: data.power, type: data.type.name, category: data.damage_class.name, accuracy: data.accuracy, pp: data.pp});
        });
      
    }

    PokeData();
    //Waits for fromServer to load before running PokeData
  }, [fromServer]);

  return (
    <>
      <div id = "slot6body">
        <div id = "namecard6">
          <h1 id = "name">{fromServer.something}</h1>
          <div id = "pokeImg"><img src={pokeImg.Img} alt={fromServer.something} /></div>
          <br></br>
          <h2>{nickname.nname}</h2>
        </div>
        <br></br>
        <div id = "text">
        <div id = "types"><b>Type: </b>{type1.type1}/{type2.type2}</div>
        <div id = "item"><b>Held Item: </b>{item.item}</div>
        <div id = "nature"><b>Nature: </b>{pokenature.nature}</div>
        <h3>Moves:</h3>
        <div id = "moves">
          <b>Move 1: {moves.move1}. </b>
          Power: {move1Data.Power}. 
          Type: {move1Data.type}. 
          Category: {move1Data.category}. 
          Accuracy: {move1Data.accuracy}. 
          PP: {move1Data.pp}
          <br></br>
          <b>Move 2: {moves.move2}. </b>
          Power: {move2Data.Power}. 
          Type: {move2Data.type}. 
          Category: {move2Data.category}. 
          Accuracy: {move2Data.accuracy}. 
          PP: {move2Data.pp}
          <br></br>
          <b>Move 3: {moves.move3}. </b>
          Power: {move3Data.Power}. 
          Type: {move3Data.type}. 
          Category: {move3Data.category}. 
          Accuracy: {move3Data.accuracy}. 
          PP: {move3Data.pp}
          <br></br>
          <b>Move 4: {moves.move4}. </b>
          Power: {move4Data.Power}. 
          Type: {move4Data.type}. 
          Category: {move4Data.category}. 
          Accuracy: {move4Data.accuracy}. 
          PP: {move4Data.pp}
        </div>
        <h3>EVs:</h3>
        <div id = "stats">
          HP: {stats.hp}<br></br>
          Attack: {stats.attack}<br></br>
          Defense: {stats.defense}<br></br>
          Sp. Attack: {stats.spattack}<br></br>
          Sp. Defense: {stats.spdefense}<br></br>
          Speed: {stats.speed}
        </div>
        </div>
      </div>
    </>
  )
}

export default Pokemon6