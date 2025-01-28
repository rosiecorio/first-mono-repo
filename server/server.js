import express from "express"
import cors from "cors"
const app = express()
app.use(cors())

let fruits = [
    {name: "banana", colour: "yellow"},
    {name: "apple", colour: "red"},
    {name: "kiwi", colour: "green"},
    {name: "strawberry", colour: "red"}
]

app.get("/", (request, response) => {
    response.json("This site is working!")
})

app.get("/fruits", (request, response) => {
    response.json(fruits)
})

app.listen('8080', () => {
    console.log("Server is running on 8080!")
})