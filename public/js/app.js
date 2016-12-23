/*jshint esversion: 6*/
console.log('sanity check biaatch');
let targetParentAPI = 'https://www.reddit.com/r/earthporn.json'; 

//myBoards create XHR for http://reddit.com/r/MY_FAVORITE_SUBBREDDIT.json
//"random" http://reddit.com/r/ANOTHER_SUBBREDDIT.json
// "GetTheAPP" http://reddit.com/r/ANOTHER_SUBBREDDIT.json
let mainContainer = document.getElementById('mainContainer');



function getMedia(){
  for (let i = 0; i < parentAPITarget.length; i++){
    let pageData = parentAPITarget[i].data;

    let mediaCard = document.createElement('div');
    mediaCard.className = 'mediaContainer';

    mainContainer.appendChild(mediaCard);

    let aspectRatio = document.createElement('div');
    aspectRatio.className = 'aspectRatio';
    mediaCard.appendChild(aspectRatio);

    let imageDataContainer = document.createElement('div');
    imageDataContainer.className = 'imageDataContainer';
    mediaCard.appendChild(imageDataContainer);
    // imageDataContainer.addEventListener('click', (e)=>{
      

    // });
    let linkAsImage = document.createElement('a');
    linkAsImage.className = 'linkAsImage';
    imageDataContainer.appendChild(linkAsImage);
    linkAsImage.setAttribute('href',pageData.url);

    let dataAsImage = document.createElement('div');
    dataAsImage.className = `dataImage`; 
    dataAsImage.style.background = `url(${pageData.url})no-repeat center`;
    linkAsImage.appendChild(dataAsImage);


    // let linkAsData = document.createElement('a');
    // linkAsData.className = 'linkAsImage';
    // imageDataContainer.appendChild(linkAsData);

    // let dataAsImage = document.createElement('div');
    // dataAsImage.className = `dataImage`; 
    // dataAsImage.style.background = `url(${parentAPITarget[i].data.url})no-repeat center`;
    // imageDataContainer.appendChild(dataAsImage);

    

    

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
