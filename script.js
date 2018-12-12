alert("Hello, world")


var joeyObject = {
firstName: "Joseph",
lastName: "Wellman",
age: "32",
likesTravel: true
}

console.log(joeyObject.firstName)
console.log(joeyObject.lastName)
console.log(joeyObject.age)
console.log(joeyObject.likesTravel)

var moviesArray = ["Pulp Fiction", "The Big Lebowski"];
var firstItem = moviesArray[0] // "Pulp Fiction"
var secondItem = moviesArray[1] // "The Big Lebowski"

var williamGrades = [62, 97, 99, 85, 73, 97];
var firstItem = williamGrades[0] // 62

console.log(firstItem)

var secondItem = williamGrades[1] // 97
var thirdItem = williamGrades[2] // 99
var fourthItem = williamGrades[3] // 85
var fifthItem = williamGrades[4] // 73
var sixthItem = williamGrades[5] // 97

console.log(sixthItem)

var averageGrade = ((williamGrades[0] + williamGrades[1] + williamGrades[2] + williamGrades[3] + williamGrades[4] + williamGrades[5]) / williamGrades.length)

console.log(averageGrade)

var clintObject = {
    firstName: "Clint",
    lastName: "Eastwood",
    age: "300 years old",
    favoriteFood: "endangered species"}

console.log(clintObject.favoriteFood)

var clinthobbies = ["acting", "talking to chairs"]
var firstItem = clinthobbies[0] // "acting"
var secondItem = clinthobbies[1] // "talking to chairs"

var fullName = `${clintObject.firstName} ${clintObject.lastName}`

console.log(fullName)

sentence = `${fullName} is ${clintObject.age}.  He loves to eat ${clintObject.favoriteFood}.`
console.log(sentence)

console.log(clinthobbies[0])
console.log(clinthobbies[1])

hobbiesSentence = `${fullName} has ${clinthobbies.length} known hobbies, which include his love(s) for ${clinthobbies[0]} and ${clinthobbies[1]}.`
console.log(hobbiesSentence)