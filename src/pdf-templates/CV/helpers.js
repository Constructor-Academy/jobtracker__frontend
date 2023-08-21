export const getInstituteAndLocation = (institution, city, country) => {
    let result = ''
    if (institution) result += institution
    if (city && country) {
        result += ` (${city}, ${country})`
    } else if (city) {
        result += ` (${city})`
    } else if (country) {
        result += ` (${country})`
    }
    return result
}

export const getLocation = (city, country) => {
    let result = ''
    if (city) result += city
    if (city && country) {
        result += `, ${country}`
    } else if (country) {
        result += country
    }
    return result
}
