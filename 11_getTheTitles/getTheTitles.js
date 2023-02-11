const getTheTitles = function(books) {
    return books.reduce((p,c,i,a) => {
        p[i] = c.title;
        return p;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
