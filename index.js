// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }

  function blocksToFeet(blocks) {
    return blocks * 264;
  }

  function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return blocksToFeet(distanceInBlocks);
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return blocksToFeet(distanceInBlocks);
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

  