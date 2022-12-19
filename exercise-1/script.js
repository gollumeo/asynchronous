const button = document.getElementById("load-button");

button.addEventListener("click", () => {
  fetch("objects.json")
    .then((response) => response.json())
    .then((superheroes) => {

      const list = document.createElement("ul");

      superheroes.forEach((name) => {
        if (name.members) {
          name.members.forEach((member) => {
            const listName = document.createElement("li");
            listName.textContent = member.name;
            list.appendChild(listName);
          });
        }
      });
      document.body.appendChild(list);
    });
});
