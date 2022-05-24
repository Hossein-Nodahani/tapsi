let serviceDetails =document.getElementsByClassName("service-details");
let serviceIcons =document.getElementsByClassName("icon");

setInterval(autoChangeService , 5000);

for (const iterator of serviceIcons) {
    iterator.addEventListener("click", showService)
}

function showService(event){
    const clickedLogo = event.target;
    autoChangeService()
}

function autoChangeService (currentItem=0) {

   for (let item = currentItem; item < serviceDetails.length; item++) {
       const currentDetail = serviceDetails[item];
       const currentIcon = serviceIcons[item];
       item==serviceDetails.length-1 ? (nextDetail=serviceDetails[0]) : (nextDetail=serviceDetails[item+1]);
       item==serviceDetails.length-1 ? (nextIcon=serviceIcons[0]) : (nextIcon=serviceIcons[item+1]);
      if (currentDetail.classList.contains("show-item")){
          currentDetail.classList.toggle("show-item");
          nextDetail.classList.toggle("show-item");
          currentIcon.classList.toggle("opacity");
          nextIcon.classList.toggle("opacity");
          break;
      }
   }
}

