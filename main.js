console.clear();

let newUsersArray = [];

const fetchFunc = () => {
  for (let k = 0; k < 10; k++) {
    // fetch("https://randomuser.me/api/?nat=au")
    // fetch("https://randomuser.me/api/?nat=us")
    // fetch("https://randomuser.me/api/?nat=fr")
    fetch("https://randomuser.me/api/?nat=gb")
    // fetch("https://randomuser.me/api/?inc=name,picture,cell")
    // fetch("https://randomuser.me/api/?exc=dob, registered, nationality, location")
      .then((response) => response.json())
      .then((data) => {
        let fetchedResults = data.results;
        for (let i = 0; i < 1; i++) {
          fetchedResults.forEach((element) => {
            // let name2 = Object.values(element.name);
            // console.log(name2[2]);
            newUsersArray.push(element);
            newUsersArray.sort((a, b) =>
              a.name.last.localeCompare(b.name.last)
            );
          });
        }
      });
  }
  return newUsersArray;
};

setTimeout(function () {
  newUsersArray.forEach((element) => {
    const ul = document.createElement("ul");
    const otherUl = document.createElement("ul");
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    let name = Object.values(element.name).join(" ");
    // console.log(name.split(" ")[2]);
    let photo = element.picture.medium;
    let gender = element.gender;
    let city = element.location.city;
    let state = element.location.state;
    let country = element.location.country;
    let email = element.email;
    let dob = Object.values(element.dob);
    let phone = element.phone;
    let cell = element.cell;
    const displayButton = document.createElement("button");
    const hideButton = document.createElement("button");
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");
    const div7 = document.createElement("div");

    displayButton.addEventListener("click", () => {
      otherUl.style.display = "flex";
      div.innerText = "Gender: " + gender;
      div1.innerText = "City: " + city;
      div2.innerText = "State: " + state;
      div3.innerText = "Country: " + country;
      div4.innerText = "Email: " + email;
      div5.innerText = "Age: " + dob[1];
      div6.innerText = "Phone: " + phone;
      div7.innerText = "Cell: " + cell;
    });

    hideButton.addEventListener("click", () => {
      otherUl.style.display = "none";
    });

    // document.body.style.flexDirection = "column";
    // document.body.style.display = "grid";
    // document.body.style.justifyContent = "spaced-between";

    // document.body.style.flexWrap = "wrap";
    // document.body.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr)";

    document.body.style.height = "100%"
    document.body.style.width = "100%";

    h3.innerText = name;

    img.src = photo;

    displayButton.innerText = "More Info";
    displayButton.style.margin = "5px";

    hideButton.innerText = "Hide";
    hideButton.style.margin = "5px";

    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.margin = "5px";

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(displayButton);
    li.appendChild(hideButton);

    otherUl.style.alignSelf = "flex-end";
    otherUl.style.display = "flex";
    otherUl.style.flexDirection = "column";

    otherUl.append(div);
    otherUl.appendChild(div1);
    otherUl.appendChild(div2);
    otherUl.appendChild(div3);
    otherUl.appendChild(div4);
    otherUl.appendChild(div5);
    otherUl.appendChild(div6);
    otherUl.appendChild(div7);

    ul.appendChild(li);
    ul.style.listStyle = "none";
    ul.style.display = "flex";

    document.body.appendChild(ul);
    document.body.appendChild(otherUl);
  });
}, 1500);

setTimeout(function () {
  console.log(newUsersArray, "outside of function");
}, 2000);
