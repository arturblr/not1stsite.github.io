document.addEventListener("DOMContentLoaded", function(){
	
	// flow scroll
	
	
	const links = document.querySelectorAll('header a[href*="#"]');
	
	  function cleanActiveLinks() {
        const parentsLinks = document.getElementsByClassName("menu-link");
        for (let parent of parentsLinks) {
            parent.classList.remove('active');
        }
    }
	
	document.addEventListener('wheel',cleanActiveLinks)
	
	for (let link of links){
		link.addEventListener('click', function(event){
			event.preventDefault();
			const id = link.getAttribute('href').substr(1);
			document.getElementById(id).scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			})
			cleanActiveLinks();
			event.target.closest('div').classList.add('active');
		})
	}
	
	//header
	
	function changeHeader(){
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
	
	
	//email
	
	function validEmail(value) {
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
        let errorElement = document.getElementsByClassName('error')[0];
        if (isValidEmail) {
            errorElement.style.display = 'none';
        } else {
            errorElement.style.display = 'block';
        }
        return isValidEmail;
    }
	
    let emailInput = document.getElementsByTagName("input")[0];
    console.log(emailInput);
//    if (emailInput) {
//        emailInput.addEventListener('input', function(event) {
//            validEmail(event.target.value);
//        });
//    }
	
    let emailButton = document.querySelectorAll('.email-content button')[0];
    if (emailButton) {
        emailButton.addEventListener('click', function () {
            console.log(emailInput.value)
            const isValidEmail =  validEmail(emailInput.value);
			if (isValidEmail){
				//request to server
			}
        });
    }
	
});

