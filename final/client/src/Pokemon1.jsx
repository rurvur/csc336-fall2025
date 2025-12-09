import { useState, useEffect } from "react";

function Pokemon1() {
  const [fromServer, setFromServer] = useState({something: "Name"});
  const [nickname, setNickname] = useState({nname: "Nickname"});
  const [pokenature, setNature] = useState({nature: "Nature"});
  // This would have been much easier if I understood set methods better but I also don't want to touch it and break it, sorry!
  const [moves, setMoves] = useState({move1: "Move1", move2: "Move2", move3: "Move3", move4: "Move4"});
  const [type1, setType1] = useState({type1: "Type1"});
  const [type2, setType2] = useState({type2: "Type2"});
  const [item, setItem] = useState({item: "Item"});
  const [stats, setStats] = useState({hp: 0, attack: 0, defense: 0, spattack: 0, spdefense: 0, speed: 0});

  const [pokeImg, setPokeImg] = useState({Img: "AAAAAAA"});

  useEffect(() => {
    async function loadData() {
      await fetch("/api/pokemon")
        .then(res => res.json())
        .then(data => {
          setFromServer({something: data.pokemon.team[0].name});
          setNickname({nname: data.pokemon.team[0].nickname});
          setNature({nature: data.pokemon.team[0].nature});
          setMoves({
            move1: data.pokemon.team[0].moves[0].replace(/\s+/g, '-'),
            move2: data.pokemon.team[0].moves[1].replace(/\s+/g, '-'),
            move3: data.pokemon.team[0].moves[2].replace(/\s+/g, '-'),
            move4: data.pokemon.team[0].moves[3].replace(/\s+/g, '-')
          });
          setType1({type1: data.pokemon.team[0].type});
          setType2({type2: data.pokemon.team[0].type2});
          setItem({item: data.pokemon.team[0].item});
          setStats({
            hp: data.pokemon.team[0].EVs.HP,
            attack: data.pokemon.team[0].EVs.Attack,
            defense: data.pokemon.team[0].EVs.Defense,
            spattack: data.pokemon.team[0].EVs.SpAttack,
            spdefense: data.pokemon.team[0].EVs.SpDefense,
            speed: data.pokemon.team[0].EVs.Speed
          });
      });
    }

    async function PokeData() {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${fromServer.something.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
          setPokeImg({Img: data.sprites.front_default});
      });
    }
    loadData();
    PokeData();

  }, []);

  return (
    <>
      <div id = "slot1body">
        <h1 id = "name">{fromServer.something}</h1>
        <h2 id = "nickname">{nickname.nname}</h2>
        <hr></hr>
        <div id = "description">This is where the description would go... IF I HAD ONE</div>
        <div id = "types">Type 1: {type1.type1}, Type 2: {type2.type2}</div>
        <div id = "item">Held Item: {item.item}</div>
        <div id = "nature">Nature: {pokenature.nature}</div>
        <div id = "moves">Move 1: {moves.move1}</div>
        <div id = "stats">Attack: {stats.attack}</div>
        <div id = "details"><img src={pokeImg.Img} alt={fromServer.something} /></div>
      </div>
    </>
  )
}

export default Pokemon1