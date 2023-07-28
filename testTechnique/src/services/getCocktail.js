export async function getCocktail({ fact }) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${fact.length}`)
    const data = await response.json()

    return data['ingredients'][0].strDescription
}