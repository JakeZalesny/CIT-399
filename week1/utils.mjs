// Pretty much everything in JavaScript is an object, that's why this works.
// Modules are private by default. The export keyword is what allows this to be used by others.  

export const random = (number) => {
    return Math.floor(Math.random()*number);
}

