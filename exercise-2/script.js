const INPUT = document.getElementById("name-input");
const BUTTON = document.getElementById("fetch-button");
BUTTON.addEventListener("click", () => {
  const name = INPUT.value;
  // check if AGIFY variable is already in local storage
  const AGIFY = localStorage.getItem(name);
  console.log(AGIFY);
  if (AGIFY && typeof AGIFY === "string") {
    // AGIFY is in local storage and is a string, so we'll parse it
    const RESULT = JSON.parse(AGIFY);
    const RESULT_DIV = document.createElement("div");
    RESULT_DIV.textContent = `Name: ${name}, age: ${RESULT.age}`;
    document.body.appendChild(RESULT_DIV);
  } else {
    // AGIFY is not in local storage or is not a string, so we'll make a new request
    fetch(`https://api.AGIFY.io?name=${name}`)
      .then((response) => response.json())
      .then((AGIFY) => {
        // store AGIFY in local storage as a string
        localStorage.setItem(name, JSON.stringify(AGIFY));
        const RESULT_DIV = document.createElement("div");
        RESULT_DIV.textContent = `Name: ${name}, age: ${AGIFY.age}`;
        document.body.appendChild(RESULT_DIV);
      });
  }
});
