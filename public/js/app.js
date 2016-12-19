/*jshint esversion: 6*/
console.log('sanity check biaatch');
let targetParentAPI = 'https://www.reddit.com/r/earthporn.json'; 

//myBoards create XHR for http://reddit.com/r/MY_FAVORITE_SUBBREDDIT.json
//"random" http://reddit.com/r/ANOTHER_SUBBREDDIT.json
// "GetTheAPP" http://reddit.com/r/ANOTHER_SUBBREDDIT.json
let mainContainer = document.getElementById('mainContainer');
mainContainer.innerHTML = "suck it sucker";



function getMedia(){
  for (let i = 0; i < parentAPITarget.length; i++){
    let mediaCard = document.createElement('div');
    mediaCard.className = 'mediaContainer';
    mediaCard.addEventListener('click', (e)=>{

    });
    console.log("mainContainer: " + mainContainer);
    console.log('mediaCard: '+ mediaCard);
    
    mainContainer.appendChild(mediaCard);

    let dataAsImage = document.createElement('img');
    dataAsImage.id = `dataImage-${i}`; 
    dataAsImage.src = parentAPITarget[i].data.url;
    console.log("data as image: " + dataAsImage);
    dataAsImage.style.maxHeight = '500px';
    dataAsImage.style.maxWidth = '500px';
    mediaCard.appendChild(dataAsImage);

    

    

 }


}
function reqListener(){
  parentAPITarget = JSON.parse(this.response).data.children;

  getMedia();

  console.log("wut dis: " + parentAPITarget);
}

oReqParent = new XMLHttpRequest();
oReqParent.addEventListener('load', reqListener);
oReqParent.open('GET',targetParentAPI);
oReqParent.send();
