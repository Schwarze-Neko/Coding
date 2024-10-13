<script setup lang="ts">
import {ref} from 'vue'

const theVideo = ref<HTMLVideoElement|null>(null)
const playButton = ref<HTMLButtonElement|null>(null)
const muteButton = ref<HTMLButtonElement|null>(null)


const seekMax = ref<number>(0)
const seekValue = ref<number>(0)
const seekVolume = ref<number>(1)


function togglePlay():void{
  if(theVideo.value!.paused || theVideo.value!.ended){ // !. significa que se que de fijo hay un video element
    theVideo.value!.play()
  }else{
    theVideo.value!.pause()
  }

}

function togglePlayButtonLabel(): void {
  //if(playButton.value != null){
    playButton.value!.textContent = theVideo.value!.paused ? "Play" : "Pause"
  //}
}

function setupSeekbar(): void {
  seekMax.value = theVideo.value!.duration
}

function updateSeekbar():void {
  seekValue.value = theVideo.value!.currentTime
}

function seekVideo(): void {
  theVideo.value!.currentTime = seekValue.value
}

function requestFullscreen(): void {
  theVideo.value!.requestFullscreen()
}

function volumeUpdate(): void {
  theVideo.value!.volume = seekVolume.value
}

function toggleMute(): void {
  if(theVideo.value){
    theVideo.value.muted = !theVideo.value.muted
    muteLabel()
  }
}

function muteLabel(): void {
  if (muteButton.value && theVideo.value) {
    muteButton.value.textContent = theVideo.value.muted ? "Unmute" : "Mute";
  }
}  

</script>

<template>
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; overflow: hidden;">
    <video ref="theVideo"
      style="max-width: 100%;"
      @play="togglePlayButtonLabel"
      @pause="togglePlayButtonLabel"
      @durationchange="setupSeekbar"
      @timeupdate="updateSeekbar"
      @volumechange="volumeUpdate"
    >
      <source src="/bigBunny.mp4" type="video/mp4">
    </video>
    <div style="margin-top: 10px;">
      <button ref="playButton" @click="togglePlay">Play</button>
      <input type="range" min="0" :max="seekMax" v-model="seekValue" @change="seekVideo">
      <button @click="requestFullscreen">Fullscreen</button>
      <button ref="muteButton" @click="toggleMute">Mute</button>
      <input type="range" min="0" max="1" step="any" v-model="seekVolume" @change="volumeUpdate">
    </div>
  </div>
</template>



<style scoped>

</style>
