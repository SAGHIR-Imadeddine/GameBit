const products = [
    {
        id: 40,
        name: "Playstation 5",
        picture:"img/play5.jpg",
        price: 499.99,
        category: "Console",
        details: [
            "visuels en 4K et en HDR",
            "Manette sans fil DualSense™",
            "ASTRO's PLAYROOM",
            "Câble USB",
            "Câble HDMI®",
        ]
    },
    {
        id: 92,
        name: "Logitech G402 Souris",
        picture:"img/souris.jpg",
        price: 499.99,
        category: "Mouse",
        details: [
            "8 boutons programmables",
            "une vitesse de réaction",
            "Taux de Rapport Avancé",
            "Conception Confortable",
            "N° 1 mondial des périphériques gaming",
        ]
    },
    {
        id: 85,
        name: "MSI Optix G244F 23.8",
        picture:"img/moniteur1.jpg",
        price: 499.99,
        category: "Monitor",
        details: [
            "Ecran de 23.8 pouces avec résolution Full HD",
            "Dalle IPS Rapide",
            "Performances gaming supérieures",
            "2 connecteurs HDMI 1.4b",
            "1 connecteur DisplayPort 1.2a",
        ]
    },
    {
        id: 37,
        name: "Assassin's Creed Mirage",
        picture: "img/game1.jpg",
        price: 499.99,
        category: "Game",
        details: [
            "une expérience d'action-aventure",
            "Plateforme : PS4",
            "Date de sortie marché : 05/10/2023",
            "Genre du jeu vidéo : Action",
            "Editeur : Ubisoft®",
        ]
    },
    {
        id: 41,
        name: "Playstation 5",
        picture:"img/play5.jpg",
        price: 499.99,
        category: "Console",
        details: [
            "visuels en 4K et en HDR",
            "Manette sans fil DualSense™",
            "ASTRO's PLAYROOM",
            "Câble USB",
            "Câble HDMI®",
        ]
    },
    {
        id: 38,
        name: "Assassin's Creed Mirage",
        picture: "img/game1.jpg",
        price: 499.99,
        category: "Game",
        details: [
            "une expérience d'action-aventure",
            "Plateforme : PS4",
            "Date de sortie marché : 05/10/2023",
            "Genre du jeu vidéo : Action",
            "Editeur : Ubisoft®",
        ]
    },
    {
        id: 50,
        name: "Casque Gamer",
        picture:"img/casque1.jpg",
        price: 499.99,
        category: "Headset",
        details: [
            "Son surround7.1",
            "Microphone cardioïde flexible",
            "Agréable à porter",
            "Suppression passive du bruit",
            "Compatible PC et consoles",
        ]
    },
    {
        id: 81,
        name: "MSI Optix G244F 23.8",
        picture:"img/moniteur1.jpg",
        price: 499.99,
        category: "Monitor",
        details: [
            "Ecran de 23.8 pouces avec résolution Full HD",
            "Dalle IPS Rapide",
            "Performances gaming supérieures",
            "2 connecteurs HDMI 1.4b",
            "1 connecteur DisplayPort 1.2a",
        ]
    },
    {
        id: 39,
        name: "Assassin's Creed Mirage",
        picture: "img/game1.jpg",
        price: 499.99,
        category: "Game",
        details: [
            "une expérience d'action-aventure",
            "Plateforme : PS4",
            "Date de sortie marché : 05/10/2023",
            "Genre du jeu vidéo : Action",
            "Editeur : Ubisoft®",
        ]
    },
    {
        id: 52,
        name: "Casque Gamer",
        picture:"img/casque1.jpg",
        price: 499.99,
        category: "Headset",
        details: [
            "Son surround7.1",
            "Microphone cardioïde flexible",
            "Agréable à porter",
            "Suppression passive du bruit",
            "Compatible PC et consoles",
        ]
    },
    {
        id: 42,
        name: "Playstation 5",
        picture:"img/play5.jpg",
        price: 499.99,
        category: "Console",
        details: [
            "visuels en 4K et en HDR",
            "Manette sans fil DualSense™",
            "ASTRO's PLAYROOM",
            "Câble USB",
            "Câble HDMI®",
        ]
    },
    {
        id: 60,
        name: "Razer Ornata Chroma",
        picture:"img/clavier1.jpg",
        price: 499.99,
        category: "Keyboard",
        details: [
            "un confort de jeu accru",
            "membrane en caoutchouc",
            "le toucher agréable des claviers",
            "la précision tactile des touches",
            "16,8 millions couleurs personnalisables",
        ]
    },
    {
        id: 82,
        name: "MSI Optix G244F 23.8",
        picture:"img/moniteur1.jpg",
        price: 499.99,
        category: "Monitor",
        details: [
            "Ecran de 23.8 pouces avec résolution Full HD",
            "Dalle IPS Rapide",
            "Performances gaming supérieures",
            "2 connecteurs HDMI 1.4b",
            "1 connecteur DisplayPort 1.2a",
        ]
    },
    {
        id: 51,
        name: "Casque Gamer",
        picture:"img/casque1.jpg",
        price: 499.99,
        category: "Headset",
        details: [
            "Son surround7.1",
            "Microphone cardioïde flexible",
            "Agréable à porter",
            "Suppression passive du bruit",
            "Compatible PC et consoles",
        ]
    },
    {
        id: 61,
        name: "Razer Ornata Chroma",
        picture:"img/clavier1.jpg",
        price: 499.99,
        category: "Keyboard",
        details: [
            "un confort de jeu accru",
            "membrane en caoutchouc",
            "le toucher agréable des claviers",
            "la précision tactile des touches",
            "16,8 millions couleurs personnalisables",
        ]
    },
    {
        id: 70,
        name: "HP Victus Gaming",
        picture:"img/lap1.jpg",
        price: 499.99,
        category: "Laptop",
        details: [
            "Windows 11 Famille",
            "NVIDIA GeForce RTX 4070 8Go VRAM",
            "Résolution : 1920 x 1080",
            "IPS, micro-bord, antireflet",
            "Core i7-13700H - RAM 16Go - 512Go SSD",
        ]
    },
    {
        id: 62,
        name: "Razer Ornata Chroma",
        picture:"img/clavier1.jpg",
        price: 499.99,
        category: "Keyboard",
        details: [
            "un confort de jeu accru",
            "membrane en caoutchouc",
            "le toucher agréable des claviers",
            "la précision tactile des touches",
            "16,8 millions couleurs personnalisables",
        ]
    },
    {
        id: 71,
        name: "HP Victus Gaming",
        picture:"img/lap1.jpg",
        price: 499.99,
        category: "Laptop",
        details: [
            "Windows 11 Famille",
            "NVIDIA GeForce RTX 4070 8Go VRAM",
            "Résolution : 1920 x 1080",
            "IPS, micro-bord, antireflet",
            "Core i7-13700H - RAM 16Go - 512Go SSD",
        ]
    },
    {
        id: 80,
        name: "MSI Optix G244F 23.8",
        picture:"img/moniteur1.jpg",
        price: 499.99,
        category: "Monitor",
        details: [
            "Ecran de 23.8 pouces avec résolution Full HD",
            "Dalle IPS Rapide",
            "Performances gaming supérieures",
            "2 connecteurs HDMI 1.4b",
            "1 connecteur DisplayPort 1.2a",
        ]
    },
    {
        id: 72,
        name: "HP Victus Gaming",
        picture:"img/lap1.jpg",
        price: 499.99,
        category: "Laptop",
        details: [
            "Windows 11 Famille",
            "NVIDIA GeForce RTX 4070 8Go VRAM",
            "Résolution : 1920 x 1080",
            "IPS, micro-bord, antireflet",
            "Core i7-13700H - RAM 16Go - 512Go SSD",
        ]
    },
    {
        id: 83,
        name: "MSI Optix G244F 23.8",
        picture:"img/moniteur1.jpg",
        price: 499.99,
        category: "Monitor",
        details: [
            "Ecran de 23.8 pouces avec résolution Full HD",
            "Dalle IPS Rapide",
            "Performances gaming supérieures",
            "2 connecteurs HDMI 1.4b",
            "1 connecteur DisplayPort 1.2a",
        ]
    },
    {
        id: 90,
        name: "Logitech G402 Souris",
        picture:"img/souris.jpg",
        price: 499.99,
        category: "Mouse",
        details: [
            "8 boutons programmables",
            "une vitesse de réaction",
            "Taux de Rapport Avancé",
            "Conception Confortable",
            "N° 1 mondial des périphériques gaming",
        ]
    },
    {
        id: 84,
        name: "MSI Optix G244F 23.8",
        picture:"img/moniteur1.jpg",
        price: 499.99,
        category: "Monitor",
        details: [
            "Ecran de 23.8 pouces avec résolution Full HD",
            "Dalle IPS Rapide",
            "Performances gaming supérieures",
            "2 connecteurs HDMI 1.4b",
            "1 connecteur DisplayPort 1.2a",
        ]
    },
    {
        id: 91,
        name: "Logitech G402 Souris",
        picture:"img/souris.jpg",
        price: 499.99,
        category: "Mouse",
        details: [
            "8 boutons programmables",
            "une vitesse de réaction",
            "Taux de Rapport Avancé",
            "Conception Confortable",
            "N° 1 mondial des périphériques gaming",
        ]
    },

]

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    return productId;
}
  
function getProductDetails(productId) {
    const product = products.find((item) => item.id == productId);
    
    if (product) {
        return product;
    } else {
        console.error('Product not found');
    }
}
    
    
const productId = getProductIdFromURL();
const product = getProductDetails(productId);

document.getElementById("product-image").src = product.picture;
document.getElementById("product-name").textContent = product.name;

const detailsList = document.getElementById("product-details");
detailsList.innerHTML = product.details.map(detail => `<li>${detail}</li>`).join('');

const costumMenu = document.getElementById('costum')
const costumBtn = document.getElementById('costum-btn')
const addToCartBtn= document.getElementById('add-to-cart') 

costumBtn.addEventListener('click', ()=>{
    costumMenu.classList.remove('hidden')
    costumBtn.classList.add('hidden')
})
addToCartBtn.addEventListener('click', ()=>{
    costumBtn.classList.remove('hidden')
    costumMenu.classList.add('hidden')
    
    alert('Product added Successfully!!')
})
costumMenu.addEventListener('click', (e)=>{
    const clickedColor = e.target


    costumMenu.querySelectorAll('.border-4').forEach(item => {
        item.classList.remove('border-4');
      });
    
      clickedColor.classList.add('border-4')
})



// let dataTable = [];
// let counter = 0;

// cosBtn.forEach(function (e, index) {
//   e.addEventListener("click", function () {
//     toggleModal();
//     let objPanier = {}; 

//     console.log("customize" + index);
//     console.log(products[index].name);
//     console.log(products[index].price);
//     console.log(products[index].category);
//     popUpImg.src = products[index].image;
//     popUpName.textContent = products[index].name;
//     popUpPrice.textContent = products[index].price;

//     // Add an event listener for the "Add to Cart" button
//     const addToCart = document.getElementById("addToCart");
//     addToCart.addEventListener("click", () => {
//       objPanier.id = counter;
//       objPanier.img = products[index].image;
//       objPanier.name = products[index].name;
//       objPanier.price = price; 
//       objPanier.memory = memorySelect;
//       objPanier.gpu = gpuSelect;
//       objPanier.cpu = cpuSelect;

//       handleSelect(objPanier);
//       dataTable.push(objPanier);
//       localStorage.setItem("dataTable", JSON.stringify(dataTable));
//     });

//     function handleSelect(objPanier) {

//       console.log(objPanier);
//     }

//     counter++;
//   });
// });