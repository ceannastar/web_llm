<template>
  <div class="main-container">
    <h1 class="greetings">A simple LLM model from scratch</h1>
    <!--<div class="messages">
      <div class="Alice">

      </div>
      <div class="Bob">

      </div>
      <div class="Alice">

      </div>
      <div class="Bob">

      </div>
    </div>-->
    <div class="input-container">
      <textarea placeholder="type here">
      </textarea>
      <div class="enter-button">
      </div>
    </div>
    <h4 class="credits">Developed by Ceannastar</h4>
  </div>
</template>

<style scoped>
.main-container
{
  position: absolute;
  display: flex;
  width: 99%;
  height: 95%;
  align-items: center;
  justify-content: center;
}

.messages
{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 60%;
  height: 60%;
  border-style: solid;
  border-width: 2px;
  top: 50px;
  clear: both;
  margin: 0 auto;
}

.input-container
{
  position: absolute;
  display: flex;
  border-radius: 10px;
  width: 60%;
  height: 10%;
  background: #F2F3F4;
  align-items: center;
  justify-content: center;
  bottom: 200px;
  box-shadow: 0px 0px 10px gray;
}

textarea
{
  position: absolute;
  resize: none;
  border: none;
  outline: none;
  width: 85%;
  height: 50%;
  left: 15px;
  font-size: 20px;
  background: #F2F3F4;
  overflow: hidden;
}

textarea::placeholder
{
  font-weight: bold;
  opacity: 0.5;
  color: Black;
}

.enter-button
{
  position: absolute;
  display: flex;
  height: 60%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  right: 30px;
  background: blue;
  align-items: center;
  justify-content: center;
}

.credits
{
  position: absolute;
  bottom: 0px;
  font: 14px;
  color: gray;
}

.greetings
{
  position: absolute;
  top: 150px;
  color: black;
}

.Alice
{
  position: absolute;
  width: 500px;
  height: 100px;
  align-self: flex-end;
  background: red;
}

.Bob
{
  position: absolute;
  width: 500px;
  height: 100px;
  align-self: flex-start;
  top: 100px;
  background: blue;
}

@media(max-width: 1024px) {
.main-container
{
  position: absolute;
  width: 100%;
}
.input-container
{
  width: 90%;
  height: 10%;
  bottom: 30px;
}
.scroll-container, .greetings, .credits
{
  visibility: hidden;
}
.enter-button{
  height: 60%;
  aspect-ratio: 1/1;
}
}
</style>

<script>
  export default{
    data()
    {

    },
    mounted()
    {
      
    },
    methods:
    {

    }
  }
</script>