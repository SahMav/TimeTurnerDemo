const playPauseBtn = document.querySelector(".play-pause-btn")
const theaterBtn = document.querySelector(".theater-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const captionsBtn = document.querySelector(".captions-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const mainVideoContainer = document.querySelector(".main-video-container")
const liveVideoContainer = document.querySelector(".live-video-container")
const timelineContainer = document.querySelector(".timeline-container")
const video = document.querySelector("video")
const startTime = document.querySelector(".start-time-text")
const slider = document.querySelector(".slider")
const sliderTime = document.querySelector(".slider-text")
const asyncThumbIndicator = document.querySelector(".view-thumb-indicator")
const syncThumbIndicator = document.querySelector(".thumb-indicator")
const asyncControls = document.querySelector(".async-controls")
const playBtn = document.querySelector(".play-btn")
const skipForwardBtn = document.querySelector(".skip-forward-btn")
const skipBackBtn = document.querySelector(".skip-back-btn")
const speedText = document.querySelector(".speed-text")
const incSpeedBtn = document.querySelector(".increase-btn-img")
const decSpeedBtn = document.querySelector(".decrease-btn-img")
const smallWindowPrompt = document.querySelector(".small-window-prompt")
const bigWindowPrompt = document.querySelector(".big-window-prompt")
const slidesContainer = document.querySelector(".slides-container")
const timerBtn = document.querySelector(".timer-btn")
const bookmarkBtn = document.querySelector(".bookmark-btn")
const activityBtn = document.querySelector(".activity-btn")
const flagBtn = document.querySelector(".slider-btn")




const today = new Date();
const time_0 = today.getHours() + ":" + today.getMinutes()// + ":" + today.getSeconds();

const inf = 1000000

//video update in 0.4s intervals
setInterval(update, 300)
function update(){
  const percent = video.currentTime / video.duration
  timelineContainer.style.setProperty("--progress-position", percent)
  timelineContainer.style.setProperty("--live-progress-position", syncVideo.currentTime/video.duration)
  updateMissedPercent()
  updateAsyncView()
  viewReminder()
  checkforLiveEvents()
  updateSlideThumbs()
  updateTimer()
  checkFlagButton()
}

//Sliders adding and updating
let slidersList = []
let sliderPosList =[]
let slidingSliderIndex = -1
let isSliding = false

slider.addEventListener("click", clone)
function clone(){
  console.log("cloned")
  const cloneSlider = slider.cloneNode(true)
  timelineContainer.appendChild(cloneSlider)
  cloneSlider.style.left = "100%"
  cloneSlider.style.bottom = "50%"
  cloneSlider.setAttribute("index", slidersList.length)
  cloneSlider.setAttribute("isSliding", false)
  cloneSlider.style.cursor = "grab"
  slidersList.push(cloneSlider)
  sliderPosList.push(inf)
  cloneSlider.addEventListener("mousedown", toggleSliding)
  cloneSlider.addEventListener("dblclick", removeSlider)
  // cloneSlider.children[3].addEventListener("click", removeSlider)
}


document.addEventListener("mousemove", e => {
  if (slidingSliderIndex >= 0) moveSlider(e)
})

function toggleSliding(e){
  e.stopPropagation()
  let slider = event.target.parentNode
  let index = parseInt(slider.getAttribute("index"))
  if (isSliding == false){
    isSliding = true
    slider.setAttribute("isSliding", true)
    slidingSliderIndex = index
    slider.style.cursor = "grab"
    
  }
  else{
    slider.style.cursor = "pointer"
    isSliding = false
    slidingSliderIndex = -1
    slider.setAttribute("isSliding", false)
    slider.children[1].style.color = "black"
    let sliderPositionPercent = slider.style.left
    sliderPositionPercent = sliderPositionPercent.substring(0, sliderPositionPercent.length - 1)
    sliderPosList[index] = parseFloat(sliderPositionPercent)
    console.log(sliderPosList)
    flagBtn.style.opacity = "100%"
  }
}

function moveSlider(e){
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const startTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
  const time = ~~(startTime + video.duration * percent)
  const hour = ~~(time/3600)
  const mintue = ~~((time - 3600 * hour)/60)
  const timeText = hour+ ":" + mintue

  if(isSliding && percent > video.currentTime / video.duration){
    let slider = slidersList[slidingSliderIndex]
    slider.style.left = percent * 100 + "%"
    slider.children[1].textContent = timeText
    slider.children[1].style.color = "rgb(200, 200, 200)"
  }
}

function removeSlider(e){
  console.log("closed")
  e.stopPropagation()
  let slider = event.target.parentNode
  let index = parseInt(slider.getAttribute("index"))
  timelineContainer.removeChild(slider)
  sliderPosList[index] = inf
  isSliding = false
}


// Focus and no focus
let isActive = true
let startInactvity
let endInactivity
let sectionStarts = []
let sectionEnds = []

window.addEventListener("blur", toggleFocus)
window.addEventListener("focus", toggleFocus)

const green = "#93c47d"
const red = "#e06666"
const audioTrack = "assets/alert.wav"


function toggleFocus(){
  if(!isAsync){
    if(isActive == true){
      isActive = false
      startInactvity = video.currentTime/video.duration * 100
      sectionStarts.push(startInactvity)
    }
    else{
      isActive = true
      endInactvity = video.currentTime/video.duration * 100
      addSection(startInactvity, endInactvity, red)
      sectionEnds.push(endInactvity)
      totalMissedPercent += (endInactvity - startInactvity)
      // totalMissedPercent += currentMissedPercent
      currentMissedPercent = 0

      //move async thumbnail indicator to the first red section
      // asyncThumbIndicator.style.display = "block"
      // asyncThumbIndicator.children[1].textContent = ""
      // asyncThumbIndicator.style.left = sectionStarts[sectionInd] + "%"
    }
  }
}

let greenSections = []
let redSections = []

let totalRedPercent = 0
let totalGreenPercent = 0

function addSection(start, end, color){
  const section = document.createElement("div")
  section.setAttribute("class", "section")
  section.style.left = start + "%"
  section.style.width = (end - start) + "%"
  section.style.backgroundColor = color
  timelineContainer.appendChild(section)
  if(color == green){
    section.style.zIndex = 10
    greenSections.push(section)
    currentGreenWidth = 0
    totalGreenPercent += (end - start)
  }
  if(color == red){
    // //if there is a small gap between this section and the last --> ignore the gap
    // if(start - sectionEnds.slice(-1) < 1){
    //   section.style.left = sectionEnds.slice(-1) + "%"
    //   section.style.width = (end - sectionEnds.slice(-1)) + "%"
    // }
    redSections.push(section)
    currentRedWidth = 0
    totalRedPercent += (end - start)    
  }
}

let currentGreenWidth = 0
let currentRedWidth = 0
function updateSection(){
  //green section added when viewing asynchronosly to show what we watched, until the end of hte red section!
  if (greenSections.length != 0 && greenSectionActive == true){
    let end = video.currentTime/video.duration * 100
    let start = greenSections[greenSections.length - 1].style.left
    start = parseFloat(start.substring(0, start.length - 1))
    if(end - start > currentGreenWidth){ //only increase length
      currentGreenWidth = end - start
    }
    greenSections[greenSections.length - 1].style.width = currentGreenWidth + "%"
  }

  //red section added when viewing asynchronously to show what we are missing
  if (redSections.length != 0){
    let syncend = syncVideo.currentTime/video.duration * 100
    let syncstart = redSections[redSections.length - 1].style.left
    syncstart = parseFloat(syncstart.substring(0, syncstart.length - 1))
    currentRedWidth = syncend - syncstart
    redSections[redSections.length - 1].style.width = currentRedWidth + "%"
  }
}

let currentMissedPercent
let currentViewedPercent
function updateMissedPercent(){
  if(isActive == false){
    currentMissedPercent = (video.currentTime/video.duration) * 100 - sectionStarts[sectionStarts.length - 1]
  }
  if(isAsync){
    currentViewedPercent = (video.currentTime/video.duration) * 100 - sectionStarts[sectionInd]
    currentMissedPercent = (syncVideo.currentTime/video.duration) * 100 - sectionStarts[sectionStarts.length - 1]
    // console.log("green", totalViewedPercent + currentViewedPercent, ",red:", totalMissedPercent + currentMissedPercent)
  }
}

// Reminder to start asynchronous viewing
let totalMissedPercent = 0
let totalViewedPercent = 0
let playbackPace = 1.7
let reminderSent = false
let timeDifference
let blinkInterval

function viewReminder(){
  let nextSliderPos = Math.min(...sliderPosList)
  let minInd = sliderPosList.indexOf(nextSliderPos)

  // total of what needs to be watched in the future
  const currentPercent = video.currentTime/video.duration * 100
  const requiredViewingTime = ((currentPercent - sectionStarts[sectionInd])/playbackPace) / (1 - 1/playbackPace)
  // const toWatchPercent = (totalMissedPercent + currentMissedPercent) - (totalViewedPercent + currentViewedPercent)
  // const requiredViewingTime = ((totalMissedPercent + currentMissedPercent)/playbackPace) / (1 - 1/playbackPace)


  //send a reminder when it is time to start async viewing only once to start
  if(requiredViewingTime!= 0){
    if ((nextSliderPos - currentPercent) <= requiredViewingTime +0.1 && reminderSent == false && isAsync == false){
      console.log(requiredViewingTime)
      playSound(audioTrack)
      reminderSent = true
      // asyncThumbIndicator.style.left = sectionStarts[sectionInd] + "%"
      // asyncThumbIndicator.style.display = "block"
      // asyncThumbIndicator.children[1].textContent = "Start viewing!"
      // slidersList[minInd].children[1].style.borderStyle = "solid"
      blinkInterval = setInterval(blink, 500)
    }
  }

  //if in reviewing mode update the expected finishing time
  if(isAsync && nextSliderPos <= 100){
    const syncPercent = syncVideo.currentTime / video.duration * 100
    const expectedViewingTime = ((syncPercent - currentPercent)/playbackPace) / (1 - 1/playbackPace)
    timeDifference = (expectedViewingTime - (nextSliderPos - syncPercent)) / 100 * video.duration
    timeDifference = (timeDifference / 60)  // convert to minutes
    //update the slider time-difference
    let minInd = sliderPosList.indexOf(Math.min(...sliderPosList))
    if(timeDifference >= 0){
      slidersList[minInd].children[2].textContent = "+" + timeDifference.toFixed(1) + " min"
      slidersList[minInd].children[2].style.color = red
    }else{
      slidersList[minInd].children[2].textContent = timeDifference.toFixed(1) + " min"
      slidersList[minInd].children[2].style.color = green
    }   
  }

  //if it passes the slide in non-reviewing mode remove the slider
  if(!isAsync && currentPercent >= nextSliderPos){
    slidersList[minInd].style.display = "none"
    sliderPosList[minInd] = inf
  }
}


//border blinking 
function blink(){
  let nextSliderPos = Math.min(...sliderPosList)
  let minInd = sliderPosList.indexOf(nextSliderPos)
  if(slidersList[minInd].children[1].style.borderStyle == "none"){
    slidersList[minInd].children[1].style.borderStyle = "solid" 
    // asyncThumbIndicator.style.display = "block"
  }
  else{
    slidersList[minInd].children[1].style.borderStyle = "none"
    // asyncThumbIndicator.style.display = "none"
  }
}

// start asynchronous viewing (AV)
let sectionInd = 0
let isAsync = false
const syncVideo = liveVideoContainer.children[0]
let midSectionStartTime = 0

asyncThumbIndicator.addEventListener("click", startAV)

function startAV(time){
  if(isAsync == false || isAsync == true /*&& (currentMissedPercent + totalMissedPercent)!= 0*/){
    console.log(time)
    //remove text and change color for indicator
    asyncThumbIndicator.children[1].textContent = ""
    asyncThumbIndicator.children[0].src = "assets/student.png"
    asyncThumbIndicator.style.opacity = "100%"
    mainVideoContainer.style.borderColor = green

    //setup live video container
    liveVideoContainer.style.display = "block"
    // syncVideo.currentTime = video.currentTime
    // syncVideo.play()
    syncVideo.playbackRate = 1
    syncVideo.muted = true

    //start async viewing of the video
    isAsync = true
  

    video.currentTime = time

    //add green section for the async view 
    // addSection(video.currentTime/video.duration * 100, video.currentTime/video.duration * 100, green)
    // greenSectionCount += 1
    // greenSectionActive = true
    greenSectionActive = false   //end the green section when moving to another start point

    // video.currentTime = parseInt(asyncThumbIndicator.style.left.substring(0, asyncThumbIndicator.style.left.length - 1))/100 * video.duration
    video.playbackRate = playbackPace

    
    //add red section for the live video that is being missed (most recent red section being updated right now)
    if(redSectionActive == false){
      addSection(syncVideo.currentTime/video.duration * 100, syncVideo.currentTime/video.duration * 100, red)
      sectionStarts.push(syncVideo.currentTime/video.duration * 100)
      redSectionActive = true
    }

    //show async controls
    asyncControls.style.display = "block"
    asyncControls.style.opacity = "100%"
    asyncControls.style.zIndex = "120"

    //stop blinking 
    asyncThumbIndicator.style.display = "block"
    clearInterval(blinkInterval)

    //update sectionInd, what is the next red section that we are going to view?
    for(let i = 0; i<sectionEnds.length; i ++){
      if(time/video.duration * 100 > sectionEnds[i]){
        sectionInd = i
        console.log(i)
      }
    }
  }

}

// when clicking on the syncthumbindicator we want to jump to the live lecture
syncThumbIndicator.addEventListener("click", jumpToLive)
function jumpToLive(){
  if(isAsync){
      isAsync = false
      
      liveVideoContainer.style.display = "none"
      mainVideoContainer.style.borderColor = "#595959"
      asyncThumbIndicator.children[0].src = "assets/student.png"
      // asyncThumbIndicator.style.opacity = "50%"
      // asyncThumbIndicator.style.left = video.currentTime / video.duration * 100 + "%"
      syncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"

      video.playbackRate = 1
      video.currentTime = syncVideo.currentTime
      // syncVideo.pause()
      syncVideo.muted = true

      //push the last red section's end
      sectionEnds.push(syncVideo.currentTime/video.duration * 100)
      // sectionInd += 1

      // deactive async viewing controls
      asyncControls.style.opacity = "50%"
      asyncControls.style.zIndex = "50"
  }
}

let greenSectionCount = 0
let greenSectionActive = false
let redSectionActive = false


function updateAsyncView(){
  if (isAsync){
    //move thumb-indicator
    asyncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"
    syncThumbIndicator.style.left = "calc(var(--live-progress-position) * 100%)"

    

    //move to next missed section
    if(sectionInd < sectionStarts.length){
      if(video.currentTime >= sectionEnds[sectionInd]/100 * video.duration){
        totalViewedPercent += (sectionEnds[sectionInd] - sectionStarts[sectionInd])
        sectionInd += 1
        greenSectionActive = false
        //video.currentTime = sectionStarts[sectionInd]/100 * video.duration
        currentViewedPercent = 0
        //add green sections starting in the new section
      }
      if(video.currentTime > sectionStarts[sectionInd]/100 * video.duration && greenSectionActive == false){
          addSection(video.currentTime/video.duration * 100, video.currentTime/video.duration * 100, green)
          // addSection(sectionStarts[sectionInd], video.currentTime/video.duration * 100, green)      // made a change so that the green sections only cover red sections.
          greenSectionCount += 1
          greenSectionActive = true
        }
    }

    //update green and red section
    updateSection()

    //exit async viewing
    if (video.currentTime > syncVideo.currentTime){

      isAsync = false
      video.playbackRate = 1
      // syncVideo.pause()
      liveVideoContainer.style.display = "none"
      mainVideoContainer.style.borderColor = "#595959"
      asyncThumbIndicator.children[0].src = "assets/student.png"
      // asyncThumbIndicator.style.opacity = "50%"
      // asyncThumbIndicator.style.left = video.currentTime / video.duration * 100 + "%"
      asyncThumbIndicator.style.display = "initial"
      // syncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"
      // slider.style.left = "100%"
      // sliderTime.textContent = ""

      //reset reminder 
      totalMissedPercent = 0
      currentMissedPercent = 0
      totalViewedPercent = 0
      currentViewedPercent = 0
      reminderSent = false

      // remove the time estimate on the next slider
      let minInd = sliderPosList.indexOf(Math.min(...sliderPosList))
      if(sliderPosList[minInd] <= 100){
        slidersList[minInd].children[2].textContent = ""
      }

      // if there were any sliders and current time is past the slider pos
      if(sliderPosList[minInd] <= 100 && video.currentTime/video.duration * 100 > sliderPosList[minInd]){
      sliderPosList[minInd] = inf
      slidersList[minInd].style.display = "none"
      }

      //push the last red section's end
      sectionEnds.push(video.currentTime/video.duration * 100)
      sectionInd += 1
      greenSectionActive = false
      redSectionActive = false

      // deactive async viewing
      asyncControls.style.opacity = "50%"
      asyncControls.style.zIndex = "50"
    }
  }
}


// asynchronous controls event handling

playBtn.addEventListener("click", togglePlayPause)
function togglePlayPause(){
  if(video.paused){
    video.play()
    playBtn.children[0].setAttribute("src", "assets/pause-btn.png")
    syncVideo.muted = true
  } else{
    video.pause()
    playBtn.children[0].setAttribute("src", "assets/play-btn.png")
    syncVideo.muted = false
  }  
}

skipForwardBtn.addEventListener("click", skipForward)
skipBackBtn.addEventListener("click", skipBack)


const skipInterval = 5
// function skipForward(){
//   if(isAsync){
//     if(sectionInd < sectionEnds.length){
//       if((video.currentTime + skipInterval) / video.duration * 100 < sectionEnds[sectionInd]){
//          video.currentTime += skipInterval
//       }
//       else{
//         video.currentTime = (sectionEnds[sectionInd]) / 100 * video.duration
//       }
//     } else{
//       if((video.currentTime + skipInterval) < syncVideo.currentTime){
//         video.currentTime += skipInterval
//       }
//       else{
//         video.currentTime = syncVideo.currentTime
//       }
//     }
//   }
// }

function skipForward(){
  if(isAsync){
    if(video.currentTime + skipInterval < syncVideo.currentTime){
      video.currentTime += skipInterval
    }else{
      video.currentTime = syncVideo.currentTime
    }
  }
}

// function skipBack(){
//   if(isAsync){
//     if(sectionInd > 0){
//       if((video.currentTime - skipInterval)/ video.duration * 100 < sectionStarts[sectionInd]){
//         sectionInd -= 1
//         video.currentTime = sectionEnds[sectionInd] / 100 * video.duration - skipInterval
//       }
//       else{
//         video.currentTime -= skipInterval
//       }
//     }
//     else{
//       if((video.currentTime - skipInterval)/ video.duration * 100 < sectionStarts[sectionInd]){
//         video.currentTime = sectionStarts[sectionInd]
//       }
//       else{
//         video.currentTime -= skipInterval
//       }
//     }
//   }
// }

function skipBack(){
  if(isAsync){
    if(video.currentTime - skipInterval > 0){
      video.currentTime -= skipInterval
    }else{
      video.currentTime = 0
    }
  }
}


incSpeedBtn.addEventListener("click", increaseSpeed)
decSpeedBtn.addEventListener("click", decreaseSpeed)
function increaseSpeed(){
  playbackPace += 0.1
  video.playbackRate += 0.1
  speedText.textContent = video.playbackRate.toFixed(1)
}

function decreaseSpeed() {
  playbackPace -= 0.1
  video.playbackRate -= 0.1
  speedText.textContent = video.playbackRate.toFixed(1)
}

// closeBtn.addEventListener("click", closeAsyn)
// function closeAsyn(){

// }


// Unanticipated non-defferable events. live pop up questions

const eventTimesList = [20, 100000000]
const promptsList = ["Text for question 1?"]
let eventTimeInd = 0
let signalTime = 0
let signalLength = 10   //how long the signal is shown

function checkforLiveEvents(){
  // if the activity button is on
  if(isCheckingActivity){
    // if viewing asynchronously
    if (isAsync){
      if(syncVideo.currentTime >= eventTimesList[eventTimeInd]){
          playSound(audioTrack)
          smallWindowPrompt.textContent = promptsList[eventTimeInd]
          console.log(promptsList[eventTimeInd])
          syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
          signalTime = syncVideo.currentTime + signalLength
          eventTimeInd += 1
      }
    }else{
      if(video.currentTime >= eventTimesList[eventTimeInd]){
        if(!isActive){
            playSound(audioTrack)
            // activateLive(eventTimeInd)
            bigWindowPrompt.textContent = promptsList[eventTimeInd]
            console.log(promptsList[eventTimeInd])
            syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
            signalTime = video.currentTime + signalLength
        }
        eventTimeInd += 1
      }
    }

    if(signalTime != 0){
      terminateBy(signalTime)
    }
  }
}

function terminateBy(time){
  if(isAsync){
    if(syncVideo.currentTime >= time){
      syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
      smallWindowPrompt.textContent = ""
      signalTime = 0
    }
  }
  else{
    if(video.currentTime >= time){
      syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
      bigWindowPrompt.textContent = ""
      signalTime = 0
    }
  }
}


// slide thumbnails

const slidesTimesList = [0, 15, 23, 43,55, 67, 70, 83, 90, 106, 110, 120]
let slidesThumbsList = []

function addInitialThumbs(){
  const num = slidesTimesList.length
  // const num = 30
  for (let i = 0; i<num; i+=1){
    const thumbnail = document.createElement("div")
    thumbnail.setAttribute("class", "future-slide-thumb")
    thumbnail.setAttribute("time", slidesTimesList[i])
    thumbnail.style.width = Math.min(5, (90/num - 1)) + "%"
    thumbnail.style.left = i * 100/(num) + 0.5 + "%"
    thumbnail.style.backgroundImage = "url(assets/slides/"+(i+1).toString()+".png)"
    // thumbnail.style.backgroundImage = "url(assets/slides/2.png)"
    slidesContainer.appendChild(thumbnail)
    slidesThumbsList.push(thumbnail)

    //add hover and click event listener to the thumbnails
    thumbnail.addEventListener("mouseover", enlargeThumb)
    thumbnail.addEventListener("mouseout", removeLarge)
    thumbnail.addEventListener("click", toggleBookmark)

    const bookmarkImg = document.createElement("img")
    bookmarkImg.setAttribute("class", "thumb-bkmark-img")
    bookmarkImg.setAttribute("src", "assets/bookmark2.png")
    bookmarkImg.setAttribute("isOn", "False")
    thumbnail.appendChild(bookmarkImg)

    //add event listener to thumbs for bookmarking
    thumbnail.addEventListener("click", toggleBookmark)
  }
}
addInitialThumbs()

let bigThumb = null
function enlargeThumb(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  let thumb = event.target
  bigThumb = thumb.cloneNode(false)
  videoContainer.appendChild(bigThumb) 
  // bigThumb.style.left = "80%"
  
  bigThumb.style.top = "50%"
  bigThumb.style.width = "25%"
  bigThumb.style.height = "35%"
  bigThumb.style.backgroundSize = "contain"
  if(parseInt(bigThumb.style.left, 10)>73){
    bigThumb.style.left = "73%"
  }
}

function removeLarge(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  videoContainer.removeChild(bigThumb)
}

let bookmarksList = []
function toggleBookmark(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  let thumbnail = event.target
  let bookmark = thumbnail.children[0]
  let bookmarkTime = parseInt(thumbnail.getAttribute("time"))
  //set bookmark
  if(bookmark.getAttribute("isOn") == "False" && bookmarkTime > syncVideo.currentTime){
    bookmark.style.display = "block"
    bookmark.setAttribute("isOn", "True")
    bookmarksList.push(parseInt(thumbnail.getAttribute("time")))
  }
  else{   //remove bookmark
    bookmark.style.display = "none"
    bookmark.setAttribute("isOn", "False")
    bookmarksList.splice(bookmarksList.indexOf(bookmarkTime), 1)
  }
  console.log(bookmarksList)
}


let slideInd = 0 //the slide that is being shown right now

function updateSlideThumbs(){
  let time
  if(isAsync) time = syncVideo.currentTime
  else time = video.currentTime

  if(time > slidesTimesList[slideInd]){
    let thumb = slidesThumbsList[slideInd]

    //check for bookmarks, if there it is bookmarked, play alert sound and remove from list
    let bookmark = thumb.children[0]
    let bookmarkTime = parseInt(thumb.getAttribute("time"))
    if(bookmark.getAttribute("isOn") == "True"){
      playSound(audioTrack)
      bookmark.style.display = "none"
      bookmark.setAttribute("isOn", "False")
      bookmarksList.splice(bookmarksList.indexOf(bookmarkTime), 1)
    }

    //update the current slide thumb width and position
    thumb.style.removeProperty("aspect-ratio") 
    thumb.style.left = slidesTimesList[slideInd]/video.duration * 100 + 0.6 + "%"
    thumb.style.width = (time - slidesTimesList[slideInd]) / video.duration * 100 + "%"
    thumb.style.height = "50%"
    thumb.style.top = "5%"
    thumb.style.borderRadius = "0px"
    thumb.style.borderWidth = "2.5px"
    
    //update the future slide thumbs space between them
    for (let i = 1; i < slidesTimesList.length - slideInd; i+=1){
      let futureThumb = slidesThumbsList[slideInd + i]
      let currentPercent = time/video.duration * 100
      futureThumb.style.left = currentPercent + i * (100 - currentPercent)/(slidesTimesList.length - slideInd) + "%"
    }

    //increment the slideInd
    if(time >= slidesTimesList[slideInd + 1]){
      slideInd += 1
    }

    //update the bookmark button
    if(bookmarksList.length!= 0){
      bookmarkBtn.style.opacity = "100%"
    }
    else{
      bookmarkBtn.style.opacity = "50%"
    }
  }
}

// play alert sounds
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

// clicking on liveWindow takes you to live
liveVideoContainer.addEventListener("click", jumpToLive)


// clicking on timerbutton once will set a timer for 1 minute from now, clicking on it twice for 2 minutes, and so on

timerBtn.addEventListener("click", setTimer)

let timerClickNum = 0
let timerTime
const timer = timerBtn.cloneNode(true)
timelineContainer.appendChild(timer)
timer.style.display = "none"

function setTimer(){
  timerClickNum += 1
  if (timerClickNum == 1){
    timerBtn.style.opacity = "100%"
    timerTime = video.currentTime + 60 * timerClickNum
    timer.style.display = "block"
    timer.style.left = timerTime /video.duration * 100 + "%"
    timer.style.bottom = "100%"
    timer.style.opacity = "100%"
  }
  else{
    timerTime += 60
    timer.style.left = timerTime /video.duration * 100 + "%"
  }
}

//delete timer by clicking on its icon on the timeline
timer.addEventListener("click", deleteTimer)

function deleteTimer(){
  timer.style.display = "none"
  timerTime = 0
  timerClickNum = 0
  timerBtn.style.opacity = "50%"
}

//function to update timers count down and remove it
let timeLeft
function updateTimer(){
  timeLeft = timerTime - video.currentTime
  let min = ~~(timeLeft / 60)
  let sec = ~~(timeLeft - min * 60)
  timer.children[1].textContent = min + ":" + sec
  if(timeLeft < 0 && timerClickNum > 0){
    playSound(audioTrack)
    deleteTimer()
  }
}

// activity button on and off
activityBtn.addEventListener("click", toggleCheckingActivity)

let isCheckingActivity = false
function toggleCheckingActivity(){
  if(isCheckingActivity == false){
    isCheckingActivity = true
    activityBtn.style.opacity = "100%"
  }
  else{
    isCheckingActivity = false
    activityBtn.style.opacity = "50%"
  }
}

//update flag button opacity on and off
function checkFlagButton(){
  for(let i = 0; i < sliderPosList.length; i++){
    if (sliderPosList != inf){
      return
    }
  }
  flagBtn.style.opacity = "50%"
}

//----- original video player
document.addEventListener("keydown", e => {
  const tagName = document.activeElement.tagName.toLowerCase()

  if (tagName === "input") return

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlay()
      break
    case "f":
      toggleFullScreenMode()
      break
    case "t":
      toggleTheaterMode()
      break
    case "i":
      toggleMiniPlayerMode()
      break
    case "m":
      toggleMute()
      break
    case "arrowleft":
    case "j":
      skipBack()
      break
    case "arrowright":
    case "l":
      skipForward()
      break
    case "c":
      toggleCaptions()
      break
    case "arrowup":
      increaseSpeed()
      break
    case "arrowdown":
      decreaseSpeed()
      break
  }
})

// Timeline
// timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
// timelineContainer.addEventListener("mousedown", toggleScrubbing)
// document.addEventListener("mouseup", e => {
//   if (isScrubbing) toggleScrubbing(e)
// })
// document.addEventListener("mousemove", e => {
//   if (isScrubbing) handleTimelineUpdate(e)
// })

timelineContainer.addEventListener("mousedown", toggleScrubbing)
let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  isScrubbing = (e.buttons & 1) === 1
  // videoContainer.classList.toggle("scrubbing", isScrubbing)
  if(percent < syncVideo.currentTime/video.duration){     // clicking on the timeline will start the review process
    for(let i = 0; i < sectionStarts.length; i++){
      console.log(sectionStarts[i], percent * 100)
      if((sectionStarts[i] - percent*100) < 1 &&(sectionStarts[i] - percent*100) > -1){
        startAV(sectionStarts[i]/100 * video.duration)
        return
      }
    }
    startAV(percent * video.duration)
  }
  // if (isScrubbing) {
  //   wasPaused = video.paused
  //   video.pause()
  // } else {
  //   video.currentTime = percent * video.duration
  //   if (!wasPaused) video.play()
  // }

  // handleTimelineUpdate(e)
}

function handleTimelineUpdate(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 10)
  )
  // const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
  // previewImg.src = previewImgSrc
  timelineContainer.style.setProperty("--preview-position", percent)

  if (isScrubbing) {
    e.preventDefault()
    // thumbnailImg.src = previewImgSrc
    timelineContainer.style.setProperty("--progress-position", percent)
  }
}


// Playback Speed
speedBtn.addEventListener("click", changePlaybackSpeed)

function changePlaybackSpeed() {
  let newPlaybackRate = video.playbackRate + 0.25
  if (newPlaybackRate > 2) newPlaybackRate = 0.25
  video.playbackRate = newPlaybackRate
  speedBtn.textContent = `${newPlaybackRate}x`
}

// Captions
const captions = video.textTracks[0]
captions.mode = "hidden"

captionsBtn.addEventListener("click", toggleCaptions)

function toggleCaptions() {
  const isHidden = captions.mode === "hidden"
  captions.mode = isHidden ? "showing" : "hidden"
  videoContainer.classList.toggle("captions", isHidden)
}

// Duration
video.addEventListener("loadeddata", () => {
  totalTimeElem.textContent = formatDuration(video.duration)
})


// the funcitons are now called at function update()
video.addEventListener("timeupdate", () => {
  currentTimeElem.textContent = formatDuration(video.currentTime)
  // const percent = video.currentTime / video.duration
  // timelineContainer.style.setProperty("--progress-position", percent)
  // timelineContainer.style.setProperty("--live-progress-position", syncVideo.currentTime/video.duration)
  // viewReminder()
  // updateMissedPercent()
  // updateAsyncView()
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})
function formatDuration(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}

function skip(duration) {
  video.currentTime += duration
}

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
  video.volume = e.target.value
  video.muted = e.target.value === 0
})

function toggleMute() {
  video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0
    volumeLevel = "muted"
  } else if (video.volume >= 0.5) {
    volumeLevel = "high"
  } else {
    volumeLevel = "low"
  }

  videoContainer.dataset.volumeLevel = volumeLevel
})

// View Modes
theaterBtn.addEventListener("click", toggleTheaterMode)
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

function toggleTheaterMode() {
  videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})

video.addEventListener("enterpictureinpicture", () => {
  videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture", () => {
  videoContainer.classList.remove("mini-player")
})

// Play/Pause
playPauseBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)

function togglePlay() {
  video.paused ? video.play() : video.pause()
  startTime.textContent = time_0
  syncVideo.play()
  syncVideo.muted = true
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")
})
