export const decodeSkillLevel = (level) => {
    switch(level){
    case 'BA':
        return 'basic'
    case 'IM':
        return 'intermediate'
    case 'PR':
        return 'proficient'
    case 'NA':
        return 'native'
    default:
        return ''
    }
}

export const mapSeparators = (arraySkillsLangs) => {
    let stringSkillsLang = arraySkillsLangs.join(', ')
    if(arraySkillsLangs.length < 2){
        return stringSkillsLang
    } else {
        return stringSkillsLang.replace(/,(?=[^,]*$)/, ' and')
    }
}
