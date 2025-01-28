const container = document.getElementById("container")
const API_URL = "https://first-mono-repo-server.onrender.com"

async function getFruits() {
    const response = await fetch(`${API_URL}/fruits`)
    const data = await response.json()
    console.log(data)

    data.forEach((fruit) => {
        const pTag = document.createElement('p')
        pTag.textContent = `${fruit.name} - ${fruit.colour}`
        container.appendchild(pTag)
    })
}

getFruits()

