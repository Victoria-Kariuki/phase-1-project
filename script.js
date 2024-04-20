// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to dogList on the website
  function doggyWorld(dogs) {
    const dogListElement = document.querySelector('div.dog-list');
    
    // Clear previous innerhtml
    dogListElement.innerHTML = '';
  
    
    // Iterate through products and create HTML elements to display them
    p.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      
      const dogName = document.createElement('h2');
      dogName.textContent = dog.name;
      
      const dogImageurl= document.createElement('p');
      productPrice.textContent = `Price: ${image-url}`;
      
      const dogDescription = document.createElement('p');
      dogDescription.textContent = dog.description;
      const dogImage=document.createElement('img')
      dogImage.src=dog.image
  
  
      Item.appendChild(dogName);
      Item.appendChild(dogImage-url);
      Item.appendChild(dogDescription);
      
    });
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event){