// Sample recipes data
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "./assets/Veggie_Delight.jpg",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.7
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    // Add the rest of the recipe objects here...
    {
        "name": "Steak",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.0
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 3.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "./assets/Chicken_Grill.jpg",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }

];
  
  // Function to display recipes
  function displayRecipes(recipesToDisplay) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
  
    recipesToDisplay.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('recipe-card');
  
      card.innerHTML = `
        <div class="recipe-cardd">
            <div class="recipe-img">
                <img src="${recipe.imageSrc}" alt="${recipe.name}">
            </div>
            <div class="recipe-info">
                <p id="rt"> ${recipe.type}</p>
                <div class="star">
                    <p>${recipe.name}</p>
                    <p><img src="./assets/Star.svg"> ${recipe.rating}</p>
                </div>
                <div class="time">
                    <p>${recipe.time}</p>
                    
                    <div>
                        <button class="like-button ${recipe.isLiked ? 'liked' : ''}" data-recipe-index="${recipe.index}">
                        ${recipe.isLiked ? '<img src="./assets/like.svg">' : '<img src="./assets/Un-like.svg">'}
                        </button>
                        <img src="./assets/comments.png">
                    </div>
                </div>    
            </div> 
        </div>
      `;
  
      recipesContainer.appendChild(card);
    });
  
    // Add event listeners for like buttons
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const recipeIndex = button.getAttribute('data-recipe-index');
        recipes[recipeIndex].isLiked = !recipes[recipeIndex].isLiked;
        displayRecipes(recipesToDisplay);
      });
    });
  }
  
  // Initial display of recipes


// Initial display of recipes
recipes.forEach((recipe, index) => {
  recipe.index = index; // Add an index property to recipes
});
displayRecipes(recipes);
  
  // Search functionality
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
  });
  
  // Type filtering
  const showAllButton = document.getElementById('show-all');
  const showVegButton = document.getElementById('show-veg');
  const showNonVegButton = document.getElementById('show-nonveg');
  
  showAllButton.addEventListener('click', function () {
    displayRecipes(recipes);
  });
  
  showVegButton.addEventListener('click', function () {
    const vegRecipes = recipes.filter(recipe => recipe.type === 'veg');
    displayRecipes(vegRecipes);
  });
  
  showNonVegButton.addEventListener('click', function () {
    const nonVegRecipes = recipes.filter(recipe => recipe.type === 'non-veg');
    displayRecipes(nonVegRecipes);
  });
  
  // Rating filtering
  const ratingAbove4_5 = document.querySelector('input[value="above-4.5"]');
  const ratingBelow4_0 = document.querySelector('input[value="below-4.0"]');
  
  ratingAbove4_5.addEventListener('change', function () {
    const highRatedRecipes = recipes.filter(recipe => recipe.rating >= 4.0);
    displayRecipes(highRatedRecipes);
  });
  
  ratingBelow4_0.addEventListener('change', function () {
    const lowRatedRecipes = recipes.filter(recipe => recipe.rating < 4.0);
    displayRecipes(lowRatedRecipes);
  });

//=====================================================

showAllButton.addEventListener('click', function () {
  ratingAbove4_5.checked = false; // Uncheck the "Rating Above 4.5" radio button
  ratingBelow4_0.checked = false; // Uncheck the "Rating Below 4.0" radio button
  displayRecipes(recipes); // Show all dishes
});

showVegButton.addEventListener('click', function () {
    ratingAbove4_5.checked = false; // Uncheck the "Rating Above 4.5" radio button
    ratingBelow4_0.checked = false; // Uncheck the "Rating Below 4.0" radio button
    const vegRecipes = recipes.filter(recipe => recipe.type === 'veg');
    displayRecipes(vegRecipes);
});

showNonVegButton.addEventListener('click', function () {
    ratingAbove4_5.checked = false; // Uncheck the "Rating Above 4.5" radio button
    ratingBelow4_0.checked = false; // Uncheck the "Rating Below 4.0" radio button
    const nonVegRecipes = recipes.filter(recipe => recipe.type === 'non-veg');
    displayRecipes(nonVegRecipes);
});


//======================================================


document.getElementById("burger-button").addEventListener("click", function () {
    const menuOverlay = document.getElementById("menu-overlay");
    menuOverlay.style.display = "block";
  });
  
  document.getElementById("menu-overlay").addEventListener("click", function () {
    this.style.display = "none";
  });
  
  