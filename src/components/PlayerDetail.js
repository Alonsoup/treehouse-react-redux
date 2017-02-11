import React, { PropTypes } from 'react';

const PlayerDetail = props => {
  if(props.player.created){
    return (
      <div className="player-detail">
        <h3>{ props.player.name }</h3>
        <ul>
          <li>
            <span>Score: </span> 
            { props.player.score }
          </li>
          <li>
            <span>Created: </span> 
            { props.player.created }
          </li>
          <li>
            <span>Updated: </span> 
            { props.player.updated }
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p className="player-detail">Click on a player to see more details</p>);
  }
};

PlayerDetail.PropTypes = {
  player: React.PropTypes.object
};


export default PlayerDetail;
