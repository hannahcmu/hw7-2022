var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower Video");
	video.playbackRate *= .9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video");
	video.playbackRate /= .9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	console.log(video.currentTime);
	
	if((video.currentTime + 10) < video.duration){
		video.currentTime +=10;
	}
	else(
		video.currentTime = 0
	);
	console.log(video.currentTime)
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Video Slider");
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	
	if(video.muted == true){
		console.log("Unmuted");
		video.muted = false
		this.innerHTML = "Mute"}
	else{
		console.log("Mute");
		video.muted = true
		this.innerHTML = "Unmute"}
	
});


document.querySelector("#orig").addEventListener("click", function() {
    console.log("I am in original");
    fig = document.querySelector("figure")
	console.log("Removing oldSchool")
    fig.classList.remove("oldSchool")
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("I am in vintage");
    fig = document.querySelector("figure")
	fig.classList.add("oldSchool")

});