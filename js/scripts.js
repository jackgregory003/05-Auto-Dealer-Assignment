const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');
const myTarget = document.querySelector('#cards'); //create an empty card


btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

//grab REVIEW data from json file
import { reviews } from "../data/reviews.js";
console.log(reviews);

for (let i=0; i < reviews.length; i++)
{
console.log(i);

//create a section
const mySection = document.createElement('section')
const myName = document.createElement('h3')
myName.textContent = reviews[i].name

const myReview = document.createElement('p')
myReview.textContent = reviews[i].text


for (let step = 0; step<reviews[i].stars; step++) {


//create images for star ratings
console.log(reviews[i].stars)
const starIndicator = document.createElement('img')
starIndicator.src = "./images/star-outline.svg"
mySection.appendChild(starIndicator)


}//end of for loop





//build the figure with child elements
mySection.appendChild(myName);
mySection.appendChild(myReview)

//add new card to the page
myTarget.appendChild(mySection)

}//end of loop


