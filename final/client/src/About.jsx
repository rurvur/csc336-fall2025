function About() {
  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    try {
    const response = await fetch("/api/formfill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Saved:", result);
    } catch (error) {
      console.error("Error submitting:", error);
    }
  
  }



  return (
    <>
      <div id = "homepage">
        <div id = "homebody">
          <div id = "homenamecard">
            <h1>Welcome to the Pokemon Team Organizer Form!</h1>
          </div>
          <div id = "text">
            <br></br>
            <b><i> Simply Input details in accordance with the instructions and the website will work its magic!</i></b>
            <p>Make sure to fill out all fields correctly to ensure your Pokemon appears in the desired slot with accurate information from PokeAPI!</p>
            <form onSubmit = {handlesubmit}>
              <label>Pokemon Name: </label>
              <input type="text" name="name" required />
              <br></br>
              <label>Nickname: </label>
              <input type="text" name="nickname" required />
              <br></br>
              <label>Nature: </label>
              <input type="text" name="nature" required />
              <br></br>
              <label>Type 1: </label>
              <input type="text" name="type1" required />
              <br></br>
              <label>Type 2 (if none, leave blank): </label>
              <input type="text" name="type2"/>
              <br></br>
              <label>Held Item: </label>
              <input type="text" name="item" required />
              <br></br>
              <label>Move 1: </label>
              <input type="text" name="move1" required />
              <br></br>
              <label>Move 2: </label>
              <input type="text" name="move2" required />
              <br></br>
              <label>Move 3: </label>
              <input type="text" name="move3" required />
              <br></br>
              <label>Move 4: </label>
              <input type="text" name="move4" required />
              <br></br>
              <label>Slot Number (1-6): </label>
              <input type="number" name="slot" min="1" max="6" required />
              <br></br>
              <label>HP EVs: </label>
              <input type="number" name="hpEVs" min="0" max="252" required />
              <br></br>
              <label>Attack EVs: </label>
              <input type="number" name="attackEVs" min="0" max="252" required />
              <br></br>
              <label>Defense EVs: </label>
              <input type="number" name="defenseEVs" min="0" max="252" required />
              <br></br>
              <label>Special Attack EVs: </label>
              <input type="number" name="specialAttackEVs" min="0" max="252" required />
              <br></br>
              <label>Special Defense EVs: </label>
              <input type="number" name="specialDefenseEVs" min="0" max="252" required />
              <br></br>
              <label>Speed EVs: </label>
              <input type="number" name="speedEVs" min="0" max="252" required />
              <br></br>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default About