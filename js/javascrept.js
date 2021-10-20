const videop = document.querySelector('.videoP')
const video = videop.querySelector('.video')
const playB = videop.querySelector('.playB')
const volume = videop.querySelector('.volume')
const currentTimeelement = videop.querySelector('.current')
const durationTimeElement = videop.querySelector('.duration')
const progress = videop.querySelector('.progress')
const progressVideo = videop.querySelector('.progress-video')
const mute = videop.querySelector('.mute')
const full = videop.querySelector('.full')


// play and pause 
playB.addEventListener('click', (e) => {
    if(video.paused){
      video.play()
      e.target.textContent = '❚❚'
    } else {
      video.pause()
      e.target.textContent = '►'
    }
})


// volume
volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value
})

// current time and duration
const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)
    currentTimeelement.innerHTML = `/ ${currentMinutes}:${currentSeconds < 10 ? '0'+ currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}: ${durationSeconds}`    
}
video.addEventListener('timeupdate', currentTime)

// progress 
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100
    progressVideo.style.width = `${percent}%`
})

// progress click
progress.addEventListener('click', (g) => {
    const pTime = (g.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = pTime
})

// mute
mute.addEventListener('click', () => {
    video.muted = !video.muted;
    mute.classList.toggle('muted')
})

// fullScreen
full.addEventListener('click',()=> {
    video.requestFullscreen();
})