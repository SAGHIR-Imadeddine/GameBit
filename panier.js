
const categories = [
    {
        id: 100,
        name: "Monitor",
        picture:"",
    },
    {
        id: 101,
        name: "Headset",
        picture:"",
    },
    {
        id: 102,
        name: "Mouse",
        picture:"",
    },
    {
        id: 103,
        name: "Keyboard",
        picture:"",
    },
    {
        id: 104,
        name: "Laptop",
        picture:"",
    },
    {
        id: 105,
        name: "Console",
        picture:"",
    },
    {
        id: 106,
        name: "Game",
        picture:"",
    },
    
]


const products = [
    {
        id: 40,
        name: "Playstation 5",
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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
        quantity:1,
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



const cardsDiv = document.querySelector('.cards')

products.forEach(product => {
    const newDiv = document.createElement('div');
    newDiv.className = `flex flex-col bg-violet-500/40 w-fit p-5 rounded-md card`;
    newDiv.setAttribute('data-category', product.category);
    newDiv.innerHTML = `
    <div class="flex gap-5 w-[330px]">
        <div class="image">
            <img src="${product.picture}" alt="" class="w-[240px] h-[200px] object-cover">
        </div>
        <div class="div1 flex flex-col justify-evenly">
            <div class="price text-2xl font-bold text-center">$${product.price}</div>
            <button href="" class="cardbtn bg-violet-500 rounded-2xl p-2 text-sm  items-center" id="addBtn_${product.id}">add to card</button>
            <br>
            <a href="" class="persbtn bg-violet-500 rounded-2xl p-2">Personalize</a>
        </div>
    </div>
    <div class="div2">
        <div class="titlep text-3xl font-bold text-center">${product.name}</div>
        <div class="details">
            <ul class="list-disc ml-4">
                ${product.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    </div>
  `;

    cardsDiv.appendChild(newDiv);
    const addBtn = document.getElementById(`addBtn_${product.id}`);
    addBtn.addEventListener("click", () => {
    addPanier(product);
    console.log(product)
    // 

})
});
document.addEventListener('DOMContentLoaded', () => {
    const cartSidebar = document.getElementById('pro');
    const panier = getPanier();

    panier.forEach(product => {
        const total = product.quantity * product.price;
        const productDiv = document.createElement('div');
        productDiv.className = 'p-4 border rounded-md mb-4 bg-white shadow-md ';

        productDiv.innerHTML = `
            <div class="flex justify-between  ">
                <div class="text-black w-4 font-bold">${product.name}</div>
                <div class="text-black">${product.quantity}</div>
                <div class="text-black">$${total}</div>
            </div>
        `;

        cartSidebar.appendChild(productDiv);
    });

    updateTotalPrice(); // Update the total price in the cart
});
const totalElement = document.getElementById('total-price');
function updateTotalPrice() {
    const total = getTotalPrice();
    totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
}

function savePanier(panier){
    localStorage.setItem("panier",JSON.stringify(panier));
}
function getPanier(){
    let panier = localStorage.getItem("panier"); 
    if(panier==null){
        return [];
    }else{
       return JSON.parse(panier) 
    }
}
function addPanier(product) {
    let panier = getPanier();
    let foundProduct = panier.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity++;
        updateCartSidebar(); // Update the cart sidebar with new quantity
        savePanier(panier);
    } else {
        product.quantity = 1;
        panier.push(product);
        savePanier(panier);

        const total = product.quantity * product.price;
        const cartSidebar = document.getElementById('pro');
        const productDiv = document.createElement('div');
        productDiv.className = 'p-4 border rounded-md mb-4 bg-white shadow-md';
        const abbreviatedName = product.name.substring(0, 3);

        productDiv.innerHTML = `
            <div class="flex justify-between ">
            <div class="text-black w-6 font-bold" title="${product.name}">${abbreviatedName}</div>
            <div class="flex items-center gab-4">
            <button class="quantity-btn" onclick="decreaseQuantity(${product.id})">-</button>
            <div class="text-black">${product.quantity}</div>
            <button class="quantity-btn" onclick="increaseQuantity(${product.id})">+</button>
        </div>
                <div class="text-black">$${total.toFixed(2)}</div>
            </div>
        `;

        cartSidebar.appendChild(productDiv);
    }
    updateTotalPrice();
}

function decreaseQuantity(productId) {
    let panier = getPanier();
    let foundProduct = panier.find(p => p.id == productId);
    if (foundProduct != undefined && foundProduct.quantity > 1) {
        foundProduct.quantity--;
        updateCartSidebar();
        savePanier(panier);
    }
}

function increaseQuantity(productId) {
    let panier = getPanier();
    let foundProduct = panier.find(p => p.id == productId);
    if (foundProduct != undefined) {
        foundProduct.quantity++;
        updateCartSidebar();
        savePanier(panier);
    }
}
function updateCartSidebar() {
    let panier = getPanier();
    const cartSidebar = document.getElementById('pro');
    cartSidebar.innerHTML = '';

    for (const productId in panier) {
        const product = panier[productId];
        const total = product.quantity * product.price;
        const productDiv = document.createElement('div');
        productDiv.className = 'p-4 border rounded-md mb-4 bg-white shadow-md';
        const abbreviatedName = product.name.substring(0, 3);

        productDiv.innerHTML = `
            <div class="flex justify-between ">
            <div class="text-black w-6 font-bold" title="${product.name}">${abbreviatedName}</div>
            <div class="flex items-center">
            <button class="quantity-btn text-black" onclick="decreaseQuantity(${product.id})">-</button>
            <div class="text-black">${product.quantity}</div>
            <button class="quantity-btn text-black" onclick="increaseQuantity(${product.id})">+</button>
        </div>
                <div class="text-black">$${total.toFixed(2)}</div>
            </div>
        `;

        cartSidebar.appendChild(productDiv);
    }

    updateTotalPrice(); 
}
document.addEventListener('DOMContentLoaded', () => {
    updateCartSidebar(); 
});
function updateTotalPrice() {
    const total = getTotalPrice();
    const totalElement = document.getElementById('total-price');
    totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
}
let popup = document.getElementById("popup");

    function openPopup() {
        popup.style.display = 'flex';
        const cartSidebar = document.getElementById('pro');
        const totalsidebar = document.getElementById('total-price');
    
        cartSidebar.innerHTML = '';
         totalsidebar.innerHTML = '$0.00';
    
        // Clear the cart data in local storage
        localStorage.removeItem('panier');
        console.log("khadam");
    }

    function closePopup() {
        popup.style.display = 'none';
        console.log("conge");
    }
// document.getElementById('clearCartBtn').addEventListener('click', function() {
//             // Clear the cart
           
//     // Clear the cart sidebar
    
// });


function removeFromPanier(product){
    let panier = getPanier();
    panier=panier.filter(p=> p.id != product.id);
    savePanier(panier);
}
function changequantity(product,quantity){
    let panier = getPanier();
    let foundProduct = panier.find(p =>p.id==product.id);
    if(foundProduct != undefined){
        foundProduct.quantity +=quantity;
    if(foundProduct.quantity<=0){
        removeFromPanier(foundProduct);
    }else{
      savePanier(panier);
    }
    }  
}
function getNumberProduct(){
    let panier = getPanier();
    let number =0;
    for(let product of panier){
        number += product.quantity;
    }
    return number;
}
function getTotalPrice(){
    let panier = getPanier();
    let total =0;
    for(let product of panier){
        total += product.quantity  * product.price;
    }
    return total;

}


const catDiv = document.querySelector('.categories')

categories.forEach(({name}) => {
    const categoryLink = document.createElement("a");
    categoryLink.href = "#";
    categoryLink.className = "border-2 border-violet-500 rounded-3xl p-2 hover:bg-violet-500/40";
    categoryLink.setAttribute("data-category", name);
    categoryLink.textContent = name;

    catDiv.appendChild(categoryLink);
});



const categoryLinks = document.querySelectorAll('.categories a');
const cards = document.querySelectorAll('.cards .card');
const pagination = document.querySelector('.pagination');

const itemsPerPage = 6;
let currentPage = 1;

function updatePagination() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    cards.forEach(function (card, index) {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

categoryLinks.forEach(function (categoryLink) {
    categoryLink.addEventListener('click', function (event) {
        event.preventDefault();

        const selectedCategory = categoryLink.getAttribute('data-category');

        categoryLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        categoryLink.classList.add('active');

        cards.forEach(function (card) {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        currentPage = 1;
        updatePagination();
        updatePageNumberClass();
        updateButtonVisibility();
    });
});

const nextPageButton = document.getElementById('nextPage');
const prevPageButton = document.getElementById('prevPage');

nextPageButton.addEventListener('click', function () {
    if (currentPage < numberedPages.length) {
        currentPage++;
        updatePagination();
        updatePageNumberClass();
        updateButtonVisibility();
    }
});

prevPageButton.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
        updatePageNumberClass();
        updateButtonVisibility();
    }
});

// Implement pagination controls (numbered pages)
const numberedPages = document.querySelectorAll('.pagination [data-page]');
numberedPages.forEach(function (page) {
    page.addEventListener('click', function () {
        const pageNumber = parseInt(page.getAttribute('data-page'));
        if (pageNumber) {
            currentPage = pageNumber;
            updatePagination();
            updatePageNumberClass();
            updateButtonVisibility();
        }
    });
});

// Function to update page number classes
function updatePageNumberClass() {
    numberedPages.forEach(function (page) {
        const pageNumber = parseInt(page.getAttribute('data-page'));
        if (pageNumber === currentPage) {
            page.classList.add('bg-violet-500');
        } else {
            page.classList.remove('bg-violet-500');
        }
    });
}
// Function to update button visibility
function updateButtonVisibility() {
    if (currentPage === 1) {
        prevPageButton.style.display = 'none';
    } else {
        prevPageButton.style.display = 'inline';
    }

    if (currentPage === numberedPages.length) {
        nextPageButton.style.display = 'none';
    } else {
        nextPageButton.style.display = 'inline';
    }
}
// Function to update categorie bg

function updateCategoryClass(selectedCategory) {
    const categoryLinks = document.querySelectorAll('.categories a');

    categoryLinks.forEach(function (categoryLink) {
        const category = categoryLink.getAttribute('data-category');

        if (category === selectedCategory) {
            categoryLink.classList.add('bg-violet-500');
            categoryLink.classList.add('border-white');

        } else {
            categoryLink.classList.remove('bg-violet-500');
            categoryLink.classList.remove('border-white');

        }
    });
}

// Call the function when a category link is clicked to update its class
categoryLinks.forEach(function (categoryLink) {
    categoryLink.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedCategory = categoryLink.getAttribute('data-category');
        categoryLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        categoryLink.classList.add('active');
        updateCategoryClass(selectedCategory); // Call the function
        // ... your other code for filtering and pagination
    });
});

// Initial pagination setup
updatePagination();
updatePageNumberClass();
updateButtonVisibility();


categoryLinks.forEach(function (categoryLink) {
    categoryLink.addEventListener('click', function (event) {
        event.preventDefault();

        const selectedCategory = categoryLink.getAttribute('data-category');

        categoryLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        categoryLink.classList.add('active');

        cards.forEach(function (card) {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === cardCategory) {
                card.style.display = 'block';
                pagination.style.display = 'none';
            }else if(selectedCategory === 'all'){
            pagination.style.display = 'flex';
            updatePagination();

            } else {
                card.style.display = 'none';
            }
        });
    });
});
