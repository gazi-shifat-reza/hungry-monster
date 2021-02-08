document.getElementById('search-btn').addEventListener('click', function () {
    const getInput = document.getElementById('input-data').value;
    getAllMenu(getInput);
})
//Function for get all the menu from api
const getAllMenu = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            getFoodMenus(data.meals);
        })
        .catch(error => {
            const showMessage = document.getElementById('error-msg');
            const message =`
                ${name} is not available now
            `;
            showMessage.innerText = message;
        });
}

//Function for all matching menu
const getFoodMenus = menus => {     
    const menusDiv = document.getElementById('all-menus');
    menusDiv.innerHTML = '';
    menus.forEach(menu => {
        const menuDiv = document.createElement('div')
        menuDiv.className = 'menu';
        const menuInfo = `
            <div onclick = "displayIngredient('${menu.strMeal}')">
            <img src = "${menu.strMealThumb}">
            <p>${menu.strMeal}</p>
        `;
        menuDiv.innerHTML = menuInfo;
        menusDiv.appendChild(menuDiv);
    })
}

//function for fetch the ingredients
const displayIngredient = menu => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`)
        .then(res => res.json())
        .then(data => renderIngredient(data.meals[0]));
}

//function for rendering all the ingredients
const renderIngredient = ingredient => {
    const menuDetailsDiv = document.getElementById('menu-details');
    const ingredientsAll = `
        <img src = "${ingredient.strMealThumb}">
        <h2>${ingredient.strMeal}</h3>
        <h4>Ingredients:</h5>
        <p>${ingredient.strIngredient1}</p>
        <p>${ingredient.strIngredient2}</p>
        <p>${ingredient.strIngredient3}</p>
        <p>${ingredient.strIngredient4}</p>
        <p>${ingredient.strIngredient5}</p>
        <p>${ingredient.strIngredient6}</p>
        <p>${ingredient.strIngredient7}</p>
        <p>${ingredient.strIngredient8}</p>
        <p>${ingredient.strIngredient9}</p>
        <p>${ingredient.strIngredient10}</p>
    `;
    menuDetailsDiv.innerHTML = ingredientsAll;
    document.getElementById('search-btn').addEventListener('click', function () {
        menuDetailsDiv.innerHTML = '';
    })

}