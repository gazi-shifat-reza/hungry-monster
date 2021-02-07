document.getElementById('search-btn').addEventListener('click', function () {
    const getInput = document.getElementById('input-data').value;
    getAllData(getInput);
})

const getAllData = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getFoodMenus(data.meals))
}
const getFoodMenus = menus => {       //work here
    const menusDiv = document.getElementById('all-menus');
    menus.forEach(menu => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu';
        const menuInfo = `
            <img onclick = "displayIngredient('${menu.strMeal}')" src = "${menu.strMealThumb}">
            <p onclick = "displayIngredient('${menu.strMeal}')">${menu.strMeal}</p>
        `;
        menuDiv.innerHTML = menuInfo;
        menusDiv.appendChild(menuDiv);
    })
}

const displayIngredient = menu => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`)
        .then(res => res.json())
        .then(data => renderIngredient(data.meals[0]));
}

const renderIngredient = ingredient => {
    const menuDetailsDiv = document.getElementById('menu-details');
    const ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'ingredient'
    // const menuName = `
    //     <img src = "${ingredient.strMealThumb}">
    //     <h3>${ingredient.strMeal}</h3>
    // `;
    const ingredientsAll = `
        <img src = "${ingredient.strMealThumb}">
        <h3>${ingredient.strMeal}</h3>
        <p>1. ${ingredient.strIngredient1}</p>
        <p>2. ${ingredient.strIngredient2}</p>
        <p>3. ${ingredient.strIngredient3}</p>
        <p>4. ${ingredient.strIngredient4}</p>
        <p>5. ${ingredient.strIngredient5}</p>
        <p>6. ${ingredient.strIngredient6}</p>
    `;
    ingredientDiv.innerHTML = ingredientsAll;
    menuDetailsDiv.appendChild(ingredientDiv);

}