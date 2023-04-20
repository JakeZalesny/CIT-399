// Pretty much everything in JavaScript is an object, that's why this works.
// Modules are private by default. The export keyword is what allows this to be used by others.  

//Named Export
export const random = (number) => {
    return Math.floor(Math.random()*number);
}

//wrapper function
export const qs = (selector, element = document) => {
    //Instead of searching the whole document, you look through the element. 
    return element.querySelector(selector);
}