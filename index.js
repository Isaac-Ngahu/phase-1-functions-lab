// Code your solution in this file!
function distanceFromHqInBlocks(dist){
if(dist>42){
    return dist-42;
}else{
    return 42-dist;
}
}
function distanceFromHqInFeet(distance){
    if(distance===42){
        return (dist-42)*264;
    }else if(distance>42){
        return (distance-42)*264;
    }else{
        return (42-distance)*264;
    }
}
function distanceTravelledInFeet(dist1,dist2){
if(dist1>dist2){
    return (dist1-dist2)*264;
}else{
    return (dist2-dist1)*264;
}
}
function calculatesFarePrice(start, destination){
   const feet=(start-destination)*264;
   const feet2=(destination-start)*264;
   if(feet<=400){
    return 0;
   }else if(feet>400 && feet<2000){
    const charges=feet-400;
    return charges*0.02
   }else if(feet>2000 && feet<=2500){
    const charges=25;
    return charges;
   }else if(feet>2500) {
    return "cannot travel that far";
   }
   
}