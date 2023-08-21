export const getFullName = (first_name, last_name) => {
    let result = ''
    if(first_name){
        result += first_name
    }
    if(last_name){
        if(result !== ''){
            result += ' '
        }
        result += `${last_name}`
    }
    return result
}
