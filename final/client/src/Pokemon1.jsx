import { useState, useEffect } from "react";

function Pokemon1() {
  const [fromServer, setFromServer] = useState({something: "Name"});
  const [nickname, setNickname] = useState({nname: "Nickname"});
  const [pokenature, setNature] = useState({nature: "Nature"});

  useEffect(() => {
    async function loadData() {
      await fetch("/api/pokemon")
        .then(res => res.json())
        .then(data => {
          setFromServer({something: data.pokemon.team[0].name});
          setNickname({nname: data.pokemon.team[0].nickname});
          setNature({nature: data.pokemon.team[0].nature});
      });
    }
    loadData();
  }, []);

  return (
    <>
      <div id = "slot1body">
        <h1 id = "name">{fromServer.something}</h1>
        <h2 id = "nickname">{nickname.nname}</h2>
        <hr></hr>
        <div id = "description">This is where the description would go... IF I HAD ONE</div>
        <div id = "types">This is where the types would go</div>
        <div id = "nature">{pokenature.nature}</div>
        <div id = "moves">Here is where the moves would go if you added them properly</div>
        <div id = "stats">Here is where the stats would go</div>
        <div id = "details">This is where the rest of the stuff goes</div>
      </div>
    </>
  )
}

export default Pokemon1