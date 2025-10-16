async function loadWorld() {
    const res = await fetch("/world");
    const world = await res.json();

    document.getElementById("worldDiv").innerHTML = "The people of Pharloom:";

    for (let i = 0; i < world.regions.length; i++) {
        for (let j = 0; j < world.regions[i].towns.length; j++) {
            for (let k = 0; k < world.regions[i].towns[j].notable_people.length; k++) {
                document.getElementById("worldDiv").innerHTML += `<br>${world.regions[i].towns[j].notable_people[k].name} the ${world.regions[i].towns[j].notable_people[k].role}`;
            }
        }
    }
}

loadWorld();

let myForm = document.querySelector("#dataForm");

myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(myForm);
    let formObj = Object.fromEntries(formData.entries());

    const res = await fetch("/flowergift", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObj)
    });

    const updatedWorld = await res.json();
    loadWorld();
});
