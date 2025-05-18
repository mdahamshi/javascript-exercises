const findTheOldest = function(list) {
    return list.reduce(
      (oldest, curr) => {
        let current_year = new Date().getFullYear();
        current_age = (curr.yearOfDeath ?? current_year) - curr.yearOfBirth;
        oldest_age = (oldest.yearOfDeath ?? current_year) - oldest.yearOfBirth;
        if(current_age > oldest_age)
            return curr;
        return oldest;
      } , list[0] 
    );
};

// Do not edit below this line
module.exports = findTheOldest;
