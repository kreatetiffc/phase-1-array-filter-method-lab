// Code your solution
function findMatching (drivers, string) {
    return drivers.filter(el => el.toLowerCase() === string.toLowerCase());
  }


function fuzzyMatch(drivers, string){
  return drivers.filter(driver => driver.startsWith(string))
  
}

function matchName(drivers, string){
  return drivers.filter(driver => driver.name === string)
}