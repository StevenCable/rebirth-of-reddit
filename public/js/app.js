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

//IMAGE
    let linkAsImage = document.createElement('a');
    linkAsImage.className = 'linkAsImage';
    imageDataContainer.appendChild(linkAsImage);
    linkAsImage.setAttribute('href',pageData.url);
    

    let dataAsImage = document.createElement('div');
    dataAsImage.className = `dataAsImage`; 
    dataAsImage.style.background = `url(${pageData.url})no-repeat center`;
    linkAsImage.appendChild(dataAsImage);

//TEXT
    let dataAsText = document.createElement('div');
    dataAsText.className = 'dataAsText';
    linkAsImage.appendChild(dataAsText);

//TITLE
    let linkAsTitle = document.createElement('a');
    linkAsTitle.className = 'linkAsTitle';
    dataAsText.appendChild(linkAsTitle);
    linkAsTitle.setAttribute('href',pageData.url);

    let dataAsTitle = document.createElement('div');
    dataAsTitle.className = `dataAsTitle`; 
    dataAsTitle.innerHTML = pageData.title;
    dataAsText.appendChild(dataAsTitle);

//AUTHOR
    let linkAsAuthor = document.createElement('a');
    linkAsTitle.className = 'linkAsAuthor';
    dataAsText.appendChild(linkAsAuthor);
    linkAsTitle.setAttribute('href',pageData.url);

    let dataAsAuthor = document.createElement('div');
    dataAsAuthor.className = `by: ${dataAsAuthor}`; 
    dataAsAuthor.innerHTML = pageData.author;
    dataAsText.appendChild(dataAsAuthor);

//TIME POSTED
    // let linkAsTimeCreated = document.createElement('a');
    // linkAsTimeCreated.className = 'linkAsTimeCreated';
    // imageDataContainer.appendChild(linkAsTimeCreated);
    // linkAsTimeCreated.setAttribute('href',pageData.url);

    let dataAsTimeCreated = document.createElement('div');
    dataAsTimeCreated.className = `dataAsTimeCreated`; 
    dataAsTimeCreated.innerHTML = moment.unix(pageData.created_utc).fromNow();
    dataAsText.appendChild(dataAsTimeCreated);

//VOTES
    let dataAsUpVotes = document.createElement('div');
    dataAsUpVotes.className = `dataAsUpVotes`; 
    dataAsUpVotes.innerHTML = `${pageData.ups} views`;
    dataAsText.appendChild(dataAsUpVotes);



    

    

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
