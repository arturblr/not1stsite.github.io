document.addEventListener("DOMContentLoaded", function(){
	
	function changeHeader(){
		console.log('Scrolling', window.scrollY);
		let headerClasses = document.getElementsByTagName("header")[0].classList
		if (window.scrollY > 0){
				let isHeaderHasClass = document.getElementsByTagName("header")[0].classList.contains('scrolling')
				if (!isHeaderHasClass){
					headerClasses.add("scrolling")
				}
		} else{
			headerClasses.remove("scrolling")
		}
	}
	
	
	document.addEventListener("scroll",changeHeader)
	
	
	//video
	
	let videoElement = document.getElementsByTagName('video')[0]
	
	function setVideoPlay() {
		videoButton.style.display = 'none';
		videoElement.style.display = 'block';
		videoElement.play();
	}
	
	let videoButton = document.querySelector(".video-play a")
	videoButton.addEventListener("click", setVideoPlay)
	
	
	document.getElementsByTagName('video')[0].addEventListener('ended',myHandler,false);

    function myHandler(e) {
    videoButton.style.display = 'block';
	videoElement.style.display = 'none';
    }
	
	
});

