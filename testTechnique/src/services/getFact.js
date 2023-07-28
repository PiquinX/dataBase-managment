export async function getFact () {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    const { fact } = data

    const oneWordFact = fact.split(' ')[0]

    return oneWordFact
}