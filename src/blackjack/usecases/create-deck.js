import _ from 'underscore';

//Create and shuffle a new deck
/**
 * @description create and shuffle a new deck
 * @returns {Array<string>} return the deck created
 */
export const createDeck = () => {
    let deck = [];
    let types = ['C','D','H','S'],
        specials = ['J','Q','K','A'];

    for( let i = 2; i < 11; i++){
        for(let type of types){
            deck.push(`${i}${type}`);
        }
    };

    for( const type of types ){
        for (const special of specials) {
            deck.push(`${special}${type}`);
        }
    }

    //Shuffle the deck
    return _.shuffle( deck );
};

