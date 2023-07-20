// Example data for harmful effects and prevention measures
const harmfulEffects = [

  // Add more harmful effects here
];

const preventionMeasures = [

  // Add more prevention measures here
];

// Function to populate the harmful effects list
function populateHarmfulEffects() {
  const effectsList = document.querySelector("#effects ul");
  harmfulEffects.forEach((effect) => {
    const li = document.createElement("li");
    li.textContent = effect;
    effectsList.appendChild(li);
  });
}

// Function to populate the prevention measures list
function populatePreventionMeasures() {
  const preventionList = document.querySelector("#prevention ul");
  preventionMeasures.forEach((measure) => {
    const li = document.createElement("li");
    li.textContent = measure;
    preventionList.appendChild(li);
  });
}

// Call the functions to populate the lists when the page loads
window.onload = function () {
  populateHarmfulEffects();
  populatePreventionMeasures();
};
