import { setPlayers, addPoints, createDeck } from "./usecases";

  let deck = createDeck(),
      players = [];
  
  const btn_give = document.querySelector('#give-card'),
        btn_stop = document.querySelector('#stop'),
        btn_new_game = document.querySelector('#new-game');
  
  

  const reset = ( reset ) => {
      btn_give.disabled = reset;
      btn_stop.disabled = reset;
      btn_new_game.disabled = !reset;
  }

  btn_new_game.addEventListener('click', () =>{
      
      reset( false );

      players = setPlayers( document.querySelectorAll('.board') );
      
      for( let player of players ){
          player.board.querySelector('[name="hand"]').innerHTML = '';
          addPoints( player, deck );
      }
      
  } );


  btn_give.addEventListener('click',() => {
      const player = players[1];

      addPoints( player, deck );
      
      setTimeout( () => {
          if( player.points > 21 ){     
              reset( true );
              alert('PERDISTE')  
              return false;
          }
      }, 500)
      
  })
  
  
  
  btn_stop.addEventListener('click', () => {
      let playerPoints = players[1].points,
          botPoints = players[0].points;
      
      reset( true );
      
      while(( playerPoints > botPoints 
          && botPoints < 21
          && playerPoints <= 21) ||
          ( playerPoints == botPoints && botPoints < 18 ) ){
          botPoints = addPoints( players[0], deck );
      }
      
      setTimeout( () => {
          if((playerPoints > botPoints && playerPoints <= 21)
              || botPoints > 21 ){
             alert('has ganado'); 
          }else if( botPoints === playerPoints ){
              alert('Empate');
          }else{
              alert('Perdiste');
          }            
      },100)
  });