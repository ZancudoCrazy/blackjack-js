import { getCard, cardValue } from './card-action';
export const setPlayers = ( playersOnTable ) =>{
    
    let players = [];
    for( let player of playersOnTable ){
        players.push({
            board: player,
            points: 0,
        });
    }

    return players;
}

//give point to the player
export const addPoints = ( player, deck ) =>{
    const card = getCard( deck );
    player.points += cardValue(card);
    
    player.board.querySelector('small').innerText = player.points;

    const cardImg = document.createElement('img');
    cardImg.src = `../../../assets/cards/${card}.png`;
    cardImg.classList.add('card');

    player.board.querySelector('[name="hand"]').append( cardImg );
    return player.points;
}