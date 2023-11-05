
const hq = 42 //Location of hq (value)
//create a function for how far from the pickup location the passenger is.
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(hq - pickupLocation) //Math.abs returns absolute number meaning -5 and 5 both return 5

}
//create a function that gives us distance in feet.
function distanceFromHqInFeet(pickupLocation) {
    return Math.abs(distanceFromHqInBlocks(pickupLocation)) * 264
}
//create a function named distanceTravelledInFeet that takes 2 param.
function distanceTravelledInFeet(num1, num2) {
    return Math.abs(num1 - num2) * 264
}
//create a function that does the same as previous test
function calculatesFarePrice(start, destination) {
    let fare = Math.abs(start - destination) * 264
    if (fare < 400) {
        return 0
    } else if (fare > 400 && fare < 2000) {
        let cost = (fare * 0.02 - 8).toFixed(2)
        return parseFloat(cost)
    } else if (fare > 2000 && fare < 2500) {
        return 25
    } else if (fare > 2500) {
        return 'cannot travel that far'
    }

}
//return the fare for customer
//first 400 free
//400-2000ft. .02 per foot
//flat fee 25.00 over 2000ft under 2500ft
//return 'cannot travel that far if over 2500ft