const products = [
  { id: 1, name: "Stylo", price: 5 },
  { id: 2, name: "Cahier", price: 20 },
  { id: 3, name: "Règle", price: 10 },
];
const cardList = document.getElementById("productList")
const searchinput = document.getElementById("searchInput")
const nameofproduct = document.getElementById("nameInput")
const priceproduct = document.getElementById("priceInput")
const addbutton = document.getElementById("addBtn")




searchinput.addEventListener("input" , () => {
    changecardlist(searchinput.value)
  })
addbutton.addEventListener("click" , addAproduct)




function displayallcards(products) {
  products.forEach((produuct) => {
    cardList.innerHTML += `
    <div>
    <h5 id="${produuct.id}">name : ${produuct.name}</h5>
    <p>price : ${produuct.price}</p>
    
    </div>
    <hr>
          `;
  });
}
function changecardlist(valueOfInput) {
    if (valueOfInput == "") {
        cardList.innerText = ""
        displayallcards(products)
        return 
    }
    const searchedcards = products.filter((product) => product.name.includes(valueOfInput))
    cardList.textContent = ""
    displayallcards(searchedcards)
}
function addAproduct() {
    if(nameofproduct.value != "" && priceproduct.value != "") {
        var NewProduct = {
            id : Date.now(),
            name : nameofproduct.value,
            price : priceproduct.value
        }
        products.push(NewProduct)
        cardList.textContent = ""
        displayallcards(products)
    }
}
displayallcards(products)