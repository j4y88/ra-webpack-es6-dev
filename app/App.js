/**
 * Created by Edward_J_Apostol on 2017-04-28.
 * Edit by Jason_Ng on 2017-05-01.
 */

export default class App {
    class VideoPlayer extends Object {
            constructor(videoFigureTag,videoTag,sourceTag,getAllAnchors){
                super();
                this.videoFigureTag = videoFigureTag;
                this.videoTag = videoTag;
                this.sourceTag = sourceTag;
                this.allAnchors = getAllAnchors;
            }

            onAnchorClick(e){
                e.preventDefault(); //or e.stopPropergration()

                let video = this.videoTag;
                console.log(this);
                console.log(video);
                console.log(this.sourceTag);
                debugger;
                video.removeAttribute("controls");
                video.removeAttribute("poster");

                let currentElement = e.target; // img
                let currentLink = e.target.parentElement; // anchor
                console.log(currentLink);
                let currentHref = currentLink.getAttribute("href");
                let source = this.sourceTag;
                source[0].src = currentHref;
                video.load();
                video.play();

            }
        }

        let onReady =  (e) => {

            // es6Playground();

            let videoFigureTag = document.getElementById('video_player');
            let videoTag = document.querySelector("#video_player video");
            let sourceTag = document.querySelectorAll("#video_player video source");

            let getAnchors = document.getElementsByTagName("a");
            // or more specific...
            let getAllAnchors = document.querySelectorAll("#video_player figcaption a");
            console.log(videoTag);
            debugger;
            let videoPlayer = new VideoPlayer(videoFigureTag,videoTag,sourceTag,getAllAnchors);

            for (let ai = 0; ai<videoPlayer.allAnchors.length; ai++){
                let currentAnchors = videoPlayer.allAnchors;
                console.log(currentAnchors[ai].getAttribute("href"));
                // debugger;
                let currentAnchor = currentAnchors[ai];
                console.log(ai);
                console.log(currentAnchor);
                currentAnchor.addEventListener("click",videoPlayer.onAnchorClick.bind(videoPlayer),false);
            }

        };

        window.addEventListener("load",onReady,false);
}
    makeVideoPlayer(){
    window.addEventListener("load",this.OnPageLoad,False);
    }

onPageLoad(e)onPageLoadconsoole.log("this page is loaded");
//this.vp=new videoplayer();
};