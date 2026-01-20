<template>
  <Authorization v-if="false"/>
  <div class="main-container">
    <div class="panel not-selected">
        <div class="panel-minimal">
          <div style="width: 100%; height: 30%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
            <div style="width: 90%; height: 50%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; padding-top: 20px; gap: 50px">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill="white"/>
                  <path d="M6.08267 15.25C5.5521 14.2858 5.25 13.1778 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 13.1778 18.4479 14.2858 17.9173 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H6.08267Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z" fill="white"/>
                </svg>
                <svg fill="white" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 49 49" xml:space="preserve">
                  <g>
                    <g>
                      <path d="M29.311,0.327c-0.41-0.137-0.86,0.007-1.117,0.356l-17,23c-0.261,0.353-0.261,0.835,0,1.188l17,23
                        c0.192,0.26,0.493,0.406,0.804,0.406c0.104,0,0.21-0.016,0.313-0.05c0.41-0.135,0.687-0.518,0.687-0.95v-46
                        C29.998,0.845,29.721,0.462,29.311,0.327z M27.998,44.242L13.242,24.277L27.998,4.312V44.242z"/>
                      <path d="M37.002,0h-4c-0.552,0-1,0.448-1,1v47c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V1C38.002,0.448,37.554,0,37.002,0z
                        M36.002,47h-2V2h2V47z"/>
                    </g>
                  </g>
                </svg>
            </div>
          </div>
          <div style="width: 100%; height: 60%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; gap: 20px;">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#D6E1E1" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M12 4V20" stroke="#D6E1E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div style="width: 100%; height: 10%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="avatar" style="display: flex; justify-content: center; align-items: center; font-weight: bold;">
              <p style="color: #89A7A6">JA</p>
            </div>
          </div>
        </div>
      <div class="column">
        <div class="column-header">
          <div style="width: 50%; height: 100%; display: flex; justify-content: flex-start; align-items: center;">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill="white"/>
              <path d="M6.08267 15.25C5.5521 14.2858 5.25 13.1778 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 13.1778 18.4479 14.2858 17.9173 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H6.08267Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z" fill="white"/>
            </svg>
          </div>
          <div style="width: 50%; height: 100%; display: flex; justify-content: flex-end; align-items: center;">
            <svg fill="white" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 49 49" xml:space="preserve" class="button">
            <g>
              <g>
                <path d="M29.311,0.327c-0.41-0.137-0.86,0.007-1.117,0.356l-17,23c-0.261,0.353-0.261,0.835,0,1.188l17,23
                  c0.192,0.26,0.493,0.406,0.804,0.406c0.104,0,0.21-0.016,0.313-0.05c0.41-0.135,0.687-0.518,0.687-0.95v-46
                  C29.998,0.845,29.721,0.462,29.311,0.327z M27.998,44.242L13.242,24.277L27.998,4.312V44.242z"/>
                <path d="M37.002,0h-4c-0.552,0-1,0.448-1,1v47c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V1C38.002,0.448,37.554,0,37.002,0z
                  M36.002,47h-2V2h2V47z"/>
              </g>
            </g>
            </svg>
          </div>
        </div>
        <div class="column-main">
            <div style="width: 85%; height: 30%; margin: 0">
                <div style="width: 100%; height: 10%;">
                    <p style="font-size: 17px; color: #89A7A6; font-family: 'Archivo', sans-serif;">Create</p>
                </div>
                <div style="width: 100%; height: 100%; margin-top: 10px;">
                  <div style="width: 100%; height: 40px; display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;" class="button">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#D6E1E1" xmlns="http://www.w3.org/2000/svg" style="margin-left: 10px;">
                      <path d="M4 12H20M12 4V20" stroke="#D6E1E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p style="color: white; font-family: 'Archivo', sans-serif; font-weight: 400px;">New Chat</p>
                  </div>
                </div>
            </div>
            <div style="width: 85%; height: 30%; margin: 0">
                <div style="width: 100%; height: 10%;">
                    <p style="font-size: 20px; color: #89A7A6; font-family: 'Archivo', sans-serif;">Treads</p>
                </div>
                <div style="width: 100%; height: 100%; margin-top: 10px;">
                  <div style="width: 100%; height: 40px; display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px; padding-left: 10px;" class="button">
                    <p style="color: white; font-family: 'Archivo', sans-serif; margin-left: 10px;">How to fix...</p>
                  </div>
                </div>
            </div>
        </div>
        <div class="column-footer">
          <div class="profile-avatar">
            <div class="avatar" style="display: flex; justify-content: center; align-items: center; font-weight: bold;">
              <p style="color: #89A7A6">JA</p>
            </div>
          </div>
          <div class="profile-info">
              <div class="profile-info-texts">
                <div class="profile-info-texts-bio">
                    <p style="color: #D6E1E1; font-size: 100%;">Joshua Adams</p>
                </div>
                <div class="profile-info-texts-plan">
                    <p style="color: #89A7A6; font-size: 100%;">Free plan</p>
                </div>
              </div>
              <div class="profile-info-arrow">
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="button">
                  <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#D6E1E1"/>
                </svg>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="canvas">
      <div class="chat">
        <div style="width: 100%; height: 8%; border-bottom: solid; border-color: #354445; display: flex; flex-direction: row; justify-content: flex-end; align-items: center;">
          <div v-if="false" class="notification"> 
            <div style="width: 80%; height: 50%; margin-top: 2px; display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
            </div>
          </div>
        </div>
        <div style="width: 100%; height: 92%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div ref="messages" class="messages" style="overflow-y: scroll;">
              <div style="width: 100%; height: fit-content; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; margin-top: 10px;">
                <div style="max-width: 60%; height: fit-content; border-radius: 2vh; background-color: rgba(35, 46, 46, 0.05); padding-top: 5px; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;  display: inline; flex-direction: row; justify-content: flex-start; align-items: flex-start;">
                  <p style="font-size: 100%; font-family: 'Archivo', sans-serif;">Jingga, Hello!</p>
                </div>
              </div>
              <div style="width: 100%; height: fit-content; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; margin-top: 10px;">
                <div style="max-width: 100%; height: fit-content; border-radius: 2vh; padding-top: 5px; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;  display: inline; flex-direction: row; justify-content: flex-start; align-items: flex-start;">
                  <p style="font-size: 100%; font-family: 'Archivo', sans-serif;">Hello, Joshua!</p>
                  <p style="font-size: 100%; font-family: 'Archivo', sans-serif;">How can I help you?</p>
                  <p style="font-size: 100%; font-family: 'Archivo', sans-serif;">Quantum physics is the fundamental theory describing the nature of matter and energy at the atomic and subatomic level, where the familiar rules of classical physics break down. It reveals a bizarre reality where particles can exist in multiple places at once (superposition), become instantaneously linked regardless of distance (entanglement), and act as both waves and particles simultaneously, dictating how everything from light bulbs to lasers, and even our own bodies, ultimately function.</p>
                </div>
              </div>
          </div>
          <div class="message-input">
            <div style="width: 98%; height: 80%; border-radius: 1vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: white; margin-top: 1vh">
                <div style="width: 100%; height: 60%; padding-left: 30px;" class="not-selected">
                  <p style="font-size: 17px; font-family: 'Archivo', sans-serif; color: rgba(35, 46, 46, 0.5)">Processing...</p>
                </div>
                <div style="width: 100%; height: 40%; display: flex; flex-direction: column; justify-content: center; align-items: flex-end;">
                  <div style="width: 6vh; height: 6vh; border-radius: 10px; background-color: #FF7132; margin-right: 10px; display: flex; justify-content: center; align-items: center; opacity: 0.7">
                    <div v-if="true" class="circle">

                    </div>
                    <div v-if="false">
                      <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="#000000"/>
                      </svg>
                    </div>
                  </div>
                </div>
            </div>
            <div class="text-max">
              <p style="font-size: 100%; font-family: 'Archivo', sans-serif; color: #89A7A6">This is a beta version of LLM chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification
{
  width: 20%;
  height: 7vh;
  border-radius: 10px;
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
  background-color: #354445;
  margin-right: 10px;
}
.main-container
{
  width: 100%;
  height: 100vh;
  background-color: #354445;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10;
}
.canvas
{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat
{
  width: 99%;
  height: 98%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.panel
{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.not-selected
{
  -webkit-user-select: none; /* Chrome/Safari */ 
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  -o-user-select: none;
  user-select: none;
}
.column
{
  width: 95%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.column-header
{
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
}
.column-main
{
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.button:hover
{
  background-color: rgba(246, 249, 249, 0.1);
}
.column-footer
{
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.profile-avatar
{
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel-minimal
{
  width: 90%; 
  height: 98%; 
  display: flex; 
  display: none;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
}
.avatar
{
  width: 7vh;
  height: 7vh;
  border-radius: 5vh;
  background-color: #EDF0F1;
}
.profile-info
{
  width: 70%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.profile-info-texts
{
  width: 80%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-info-arrow
{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-info-texts-bio
{
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.profile-info-texts-plan
{
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.messages
{
  width: 65%; 
  height: 75%;
}

.message-input
{
  width: 65%; 
  height: 25%; 
  border-top-left-radius: 1vh; 
  border-top-right-radius: 1vh; 
  background-color: #354445; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
}

.circle
{
  width: 25px;
  height: 25px;
  transform: translate(-40%, -50%);
  animation: effect 1s linear infinite;
  border-radius: 50%;
  border: 3px solid #460804;
  border-top-color: transparent;
}

.text-max
{
  width: 100%; 
  height: 20%; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
}

@keyframes effect {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }

        }

@media (max-width: 1080px) {
  .messages
  {
    width: 100%; 
  }
  
  .message-input
  {
    border-top-left-radius: 0; 
    border-top-right-radius: 0; 
  }
  .text-max{
    display: none;
  }
  .panel{
    width: 10vh;
  }
  .column{
    display: none;
  }
  .panel-minimal
  {
    display: initial;
  }
  .profile-info{
    visibility: hidden;
  }
  .column-main
  {
    visibility: hidden;
  }
  .profile-avatar
  { 
    width: 100%;
    height: 100%;
    background-color: red;
  }
}
</style>

<script>
  import Authorization from './components/Authorization.vue';

  export default{
    components:
    {
      Authorization
    },
    data()
    {
      
    },
    mounted()
    {
      var alice_messages = [];
      var bob_messages = [];
      alice_messages.push("Hello!", "I'm fine! What about you?", "Glad to hear it","Hello!", "I'm fine! What about you?", "Glad to hear it","Hello!", "I'm fine! What about you?", "Glad to hear it");
      bob_messages.push("Hello! How are you?", "Excellent. Just buy a journey ticket to travel Berlin.", "Thanks","Hello!", "I'm fine! What about you?", "Glad to hear it","Hello!", "I'm fine! What about you?", "Glad to hear it","Hello!", "I'm fine! What about you?", "Glad to hear it");
      if(alice_messages.length != 0 && this.$refs.messages)
      {
        for(let i = 0; i < alice_messages.length; i++)
        {
          this.$refs.messages.innerHTML += `<div style="width: 100%; height: fit-content; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; margin-top: 10px;">` +
          '<div style="max-width: 60%; height: fit-content; border-radius: 2vh; background-color: rgba(35, 46, 46, 0.05); padding-top: 5px; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;  display: inline; flex-direction: row; justify-content: flex-start; align-items: flex-start;">' + "<p>" + alice_messages[i] + "</p>" + "</div>" +
          "</div>";
        }        
        for(let i = 0; i < bob_messages.length; i++)
        {
          this.$refs.messages.innerHTML += `<div style="width: 100%; height: fit-content; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; margin-top: 10px;">` +
          '<div style="max-width: 100%; height: fit-content; border-radius: 2vh; padding-top: 5px; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;  display: inline; flex-direction: row; justify-content: flex-start; align-items: flex-start;">' + "<p>" + bob_messages[i] + "</p>" + "</div>" +
          "</div>";
        }
      }
    },
    methods:
    {

    }
  }
</script>