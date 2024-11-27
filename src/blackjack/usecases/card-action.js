
/**
 * @description Return the next value from the array given
 * @param {Array<String>} deck 
 * @returns  {String }
 */
export const getCard = ( deck ) => {
    return deck.pop();
}

/**
 * Return the int value from the card given
 * @param { String } card 
 * @returns { Number }
 */
export const cardValue = ( card ) => {
    const valor = card.substring(0, card.length - 1);
    let points = isNaN(valor) ?
                ( valor === 'A' )? 11:10
                :valor * 1;    

    
    return points;
}