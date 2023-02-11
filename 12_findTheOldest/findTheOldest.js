const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((p,c,i,a) => {
        if (!c.hasOwnProperty('yearOfDeath')) {
            c.yearOfDeath = new Date().getFullYear();
        };
        if (i === 0) {
            return c;
        }
        if ((c.yearOfDeath - c.yearOfBirth) > (p.yearOfDeath - p.yearOfBirth)) {
            return c;
        } else {return p};
    }, {})
};


// Do not edit below this line
module.exports = findTheOldest;
