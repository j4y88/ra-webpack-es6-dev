/**
 * Created by Edward_J_Apostol on 2017-04-27.
 */
class VideoPlayer extends Object {
    constructor(videoFigureTag,videoTag,sourceTag,getAllAnchors){
        super();
        this.createPlayer();
        this.initLinks();
    }

    createPlayer(){
        let playerComponent = document.createDocumentFragment();
        // create the elements
        this.createVideoFigureTag(playerComponent);
        this.createVideoTag(playerComponent);
        this.createSourceTags(playerComponent);
        this.createAnchorTags(playerComponent);
        // create the videoplayer properties
        this.videoFigureTag = playerComponent.querySelector("#video_player");
        this.videoTag = playerComponent.querySelector("#video_player video");
        this.sourceTag = playerComponent.querySelectorAll("#video_player video source");
        this.allAnchors = playerComponent.querySelectorAll("#video_player figcaption a");
        document.querySelector("body").appendChild(playerComponent);

    }

    createVideoFigureTag(playerComponent){
        let figureTag = document.createElement("figure");
        figureTag.setAttribute("id","video_player");
        playerComponent.appendChild(figureTag);
    }

    createVideoTag(playerComponent){
        let videoTag = document.createElement("video");
        let firstPosterImage = "./images/nambia1.jpg";
        videoTag.setAttribute("id","videoPlayerTag"); // new added ID
        videoTag.setAttribute("controls","");
        videoTag.setAttribute("poster",firstPosterImage);
        playerComponent.querySelector("#video_player").appendChild(videoTag);
    }

    createSourceTags(playerComponent){

        // default sources
        let firstSources = ["./media/nambia1.mp4","./media/nambia1.webm"];
        // create first source tag
        let sourceTag = document.createElement("source");

        sourceTag.setAttribute("src", firstSources[0] );
        sourceTag.setAttribute("type","video/mp4");
        playerComponent.querySelector("#video_player video").appendChild(sourceTag);
        // create second source tag
        sourceTag = document.createElement("source"); // replaces the first
        sourceTag.setAttribute("src", firstSources[1] );
        sourceTag.setAttribute("type","video/webm");
        playerComponent.querySelector("#video_player video").appendChild(sourceTag);

    }

    createAnchorTags(playerComponent){
        let movieList = ["./media/nambia1.mp4","./media/nambia2.mp4","./media/nambia3.mp4"];
        let thumbList = ["./images/nambia1.jpg","./images/nambia2.jpg","./images/nambia3.jpg"];
        let altList = ["Nambia Timelapse 1","Nambia Timelapse 2","Nambia Timelapse 3"];

        let figCaptionTag = document.createElement("figcaption");
        // use a loop to append them quickly
        for (let i=0; i<movieList.length; i++){
            let anchor = document.createElement("a");
            let img = document.createElement("img");
            anchor.setAttribute("href", movieList[i] );
            img.setAttribute("src", thumbList[i] );
            img.setAttribute("alt", altList[i] );
            anchor.appendChild(img);
            figCaptionTag.appendChild(anchor);
        }
        playerComponent.querySelector("#video_player").appendChild(figCaptionTag);

    }

    initLinks(){
        let currentAnchors = this.allAnchors;
        for (let ai = 0; ai<currentAnchors.length; ai++){
            let currentAnchor = currentAnchors[ai];
            currentAnchor.addEventListener("click",this.onAnchorClick.bind(this),false);
        }
    }

    onAnchorClick(e){
        e.preventDefault();

        let video = this.videoTag;
        video.removeAttribute("controls");
        video.removeAttribute("poster");

        let currentElement = e.target;
        let currentLink = e.target.parentElement;
        console.log(currentLink);
        let currentHref = currentLink.getAttribute("href");
        let source = this.sourceTag;
        //debugger;
        source[0].src = currentHref;
        video.load();
        video.play();

    }
}

let onReady =  (e) => {
    let videoPlayer = new VideoPlayer();
};

window.addEventListener("load",onReady,false);