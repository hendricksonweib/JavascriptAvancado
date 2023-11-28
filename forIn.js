const person = {
    person: "Weib",
    idade: "20y",
    cidade:"slz",
    ocupação:"estudante"
}

for(arr in person){
    console.log(`${arr} - ${person[arr]}`)
}