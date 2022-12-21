import contributors from "./contributors.json" assert { type: "json" };
// ref to tbody
const tbodyRef = document
  .getElementById("contributors")
  .getElementsByTagName("tbody")[0];

// all json keys
const keys = Object.keys(contributors[0]);
for (let row = 0; row < contributors.length; row++) {
  const myCurrentRow = document.createElement("tr");
  for (let col = 0; col < keys.length; col++) {
    const myCurrentCell = document.createElement("td");
    // pick row index from upper loop and then key from inner loop
    const value = contributors[row][keys[col]];
    // add simple text or link using condition
    const newElement =
      ["site", "githubUsername"].indexOf(keys[col]) > -1
        ? Object.assign(document.createElement("a"), {
            href:
              keys[col] === "githubUsername"
                ? "https://github.com/" + contributors[row][keys[col]]
                : contributors[row][keys[col]],
            textContent: value,
            target: "_blank",
          })
        : document.createTextNode(value);
    myCurrentCell.appendChild(newElement);
    myCurrentRow.appendChild(myCurrentCell);
  }
  tbodyRef.appendChild(myCurrentRow);
}
