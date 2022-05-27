
function createCharacter() {

    let rootElement = document.getElementById("root");

    let formBody =`
    <h1>Create your character</h1>
    <form>
        <label for="chname">Character name:</label><br>
        <input placeholder="" name="chname"/><br>
        <label for="gender">Gender:</label><br>
            <select name="gender" id="gen" class="first">
                <option class="selectColor" value="empty"></option>
                <option class="selectColor" value="woman">woman</option>
                <option class="selectColor" value="man">man</option>
            </select><br>
        <label for="race">Race:</label><br>
            <select name="race" id="rac" class="first">
                <option class="selectColor" value="empty"></option>
                <option class="selectColor" value="aas">Aasimar</option>
                <option class="selectColor" value="cen">Centaur</option>
                <option class="selectColor" value="dwa">Dwarf</option>
                <option class="selectColor" value="elf">Elf</option>
            </select><br>
        <label for="class">Class:</label><br>
            <select name="class" id="clas" class="first">
                <option class="selectColor" value="empty"></option>
                <option class="selectColor" value="gua">Guardian</option>
                <option class="selectColor" value="bar">Barbarian</option>
                <option class="selectColor" value="dru">Druid</option>
                <option class="selectColor" value="mag">Mage</option>
                <option class="selectColor" value="sor">Sorcerer</option>
                <option class="selectColor" value="war">Warrior</option>
            </select>
    </form>
    <div id="imagePlaceHolder"></div>
    <div id="iconPlaceHolder"></div>
    <h2 id="h2tag"></h2>
    `;

    rootElement.insertAdjacentHTML("beforeend", formBody);

    const input = document.querySelector("input");
    //console.log(input)

    input.addEventListener("input", selectUserName);

    /*const selectTags = document.querySelectorAll("select");
    console.log(selectTags);
    console.log(selectTags[0]); */ //így is működik

    const selectGen = document.getElementById("gen");
    //console.log(selectGen);

    const selectRac = document.getElementById("rac");
    //console.log(selectRac);

    const selectClas = document.getElementById("clas");
    //console.log(selectClas);

    selectGen.addEventListener("input", selectGender);

    selectRac.addEventListener("input", selectRace);

    selectClas.addEventListener("input", selectClass);    

}

window.addEventListener("load", createCharacter);


function selectUserName(e) {
    
    const nameTag = document.getElementById("h2tag");

    //console.log(e)

    let selectedName = e.target.value;

    let displayName =  selectedName.charAt(0).toUpperCase() + selectedName.slice(1); //ezzel lesz nagybetűs

    nameTag.textContent = displayName

    //nameTag.innerHTML = displayName  //Ezzel is működik :)

}

function selectGender(e) {
    
    let content = document.getElementById("imagePlaceHolder");
    //console.log(content)
    //console.log(content.innerHTML)
    
    /*let selectedOption = document.getElementById("gen").value;
    console.log(selectedOption)*/ // így is működik

    let selectedOption = e.target.value;
    //console.log(selectedOption)

    if (selectedOption === 'man'){
        content.innerHTML = `<img src="./images/man.png" alt="man">`
    }else if (selectedOption === 'woman'){
        content.innerHTML = `<img src="./images/woman.png" alt="woman">`
    }else{
        content.innerHTML = ""
    }
}

function selectRace() {

    content = document.getElementById("imagePlaceHolder");

    let selectedOption = document.getElementById("gen").value;
    let selectedRace = document.getElementById("rac").value;
    console.log(selectedRace);

    if (selectedRace === 'aas' && selectedOption === 'woman'){
        content.innerHTML = `<img src="./images/aasimar-woman.png" alt="awom">`
    }else if (selectedRace === 'aas' && selectedOption === 'man'){
        content.innerHTML = `<img src="./images/aasimar-man.png" alt="aman">`
    }else if (selectedRace === 'cen' && selectedOption === 'woman'){
        content.innerHTML = `<img src="./images/centaur-woman.png.png" alt="cwom">`
    }else if (selectedRace === 'cen' && selectedOption === 'man'){
        content.innerHTML = `<img src="./images/centaur-man.png" alt="cman">`
    }else if (selectedRace === 'dwa' && selectedOption === 'woman'){
        content.innerHTML = `<img src="./images/dwarf-woman.png" alt="dwom">`
    }else if (selectedRace === 'dwa' && selectedOption === 'man'){ 
        content.innerHTML = `<img src="./images/dwarf-man.png" alt="dman">`
    }else if (selectedRace === 'elf' && selectedOption === 'woman'){
        content.innerHTML = `<img src="./images/elf-woman.png" alt="ewom">`
    }else if (selectedRace === 'elf' && selectedOption === 'man'){
        content.innerHTML = `<img src="./images/elf-man.png" alt="eman">`
    }else{
        content.innerHTML = ""
    }
}

function selectClass() {

    content = document.getElementById("iconPlaceHolder");

    let selectedClass = document.getElementById("clas").value;
    //console.log(selectedClass);

    if (selectedClass === 'gua'){
        content.innerHTML = `<img src="./images/guardian-icon.png" id="icon" alt="gua">`
    }else if (selectedClass === 'bar'){
        content.innerHTML = `<img src="./images/barbarian-icon.png" id="icon" alt="bar">`
    }else if (selectedClass === 'dru'){
        content.innerHTML = `<img src="./images/druid-icon.png" id="icon" alt="dru">`
    }else if (selectedClass === 'mag'){
        content.innerHTML = `<img src="./images/mage-icon.png" id="icon" alt="mag">`
    }else if (selectedClass === 'sor'){
        content.innerHTML = `<img src="./images/sorcerer-icon.png" id="icon" alt="sor">`
    }else if (selectedClass === 'war'){
        content.innerHTML = `<img src="./images/warrior-icon.png" id="icon" alt="war">`
    }else{
        content.innerHTML = ""
    }
}




