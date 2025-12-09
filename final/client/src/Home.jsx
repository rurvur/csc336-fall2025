function About() {

  return (
    <>
      <div id = "homepage">
        <div id = "homebody">
          <div id = "homenamecard">
            <h1>Welcome to the Pokemon Team Organizer!</h1>
          </div>
          <div id = "text">
            <br></br>
            <b><i> This is a tool that lets you assemble and manage your own Pokemon team! Just use the form in the About page and give it your Pokemon's details!</i></b>
            <p>If your details are formatted correctly, your Pokemon will appear in the slot you selected, with information taken from PokeAPI!</p>
            <p>If you're unsure what info is on the API, you can check it out <a href="https://pokeapi.co/">here!</a></p>
            <p><b>Note: </b>Make sure your data is properly formatted or you might break something. If that happens you may need to run the site locally via the Github repo.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About