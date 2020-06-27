import React, { useState, useEffect } from 'react';

export function usePosition(facing) {
  const [position, setPosition] = useState({x:0,y:0});

  function handlePositionChange(facing) {
    if (facing == 'up'){
        let x = position.x
        let y = position.y
        setPosition({x:x, y:(y+1)})
    } else if (facing == 'right'){
        let x = position.x
        let y = position.y
        setPosition({x:(x+1), y:y})
    } else if (facing == 'down'){
        let x = position.x
        let y = position.y
        setPosition({x:x,y:(y-1)})
    } else if (facing == 'left') {
        let x = position.x
        let y = position.y
        setPosition({x:(x-1),y:y})
    } else {
        //we do nothing lebowski
    }
    //setIsOnline(status.isOnline);
  }

  useEffect(() => {
    //ChatAPI.subscribeToFriendStatus(facing, handleFacingChange);
    handlePositionChange(facing)
    return () => {
        
      //ChatAPI.unsubscribeFromFriendStatus(facing, handleFacingChange);
    };
  });

  return position;
}