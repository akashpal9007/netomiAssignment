
fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json")
  .then(res => res.json())
  .then(data => {
    let countrySelect = document.getElementById("country");
    let stateSelect = document.getElementById("state");
    for (let i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.value = data[i].name;
      option.text = data[i].name;
      countrySelect.appendChild(option);
    }
        countrySelect.addEventListener("change", function(){
            stateSelect.innerHTML = "<option value=''>Select a state</option>";
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === this.value) {
                      for (let j = 0; j < data[i].states.length; j++) {
                        let option = document.createElement("option");
                        option.value = data[i].name;
                        option.text = data[i].name;
                        stateSelect.appendChild(option);
                      }
                    }
                  }
                }
                )
              }
  )