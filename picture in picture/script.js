const start = document.querySelector(".start")
const video = document.querySelector(".video");


async function getMedia(){
  try{
    const media = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = media
    video.onloadedmetadata = () => {
      video.play()
    }
  }catch(error){
    console.log("error", error)
  }
}

start.addEventListener('click', async () =>{
  start.disabled = true
  await video.requestPictureInPicture()
  start.disable = false
})
getMedia()