<template>
  <div id="app">

    <audio id="one" src="../audio/one.mp3"></audio>
    <audio id="two" src="../audio/two.mp3"></audio>
    <audio id="three" src="../audio/three.mp3"></audio>
    <audio id="four" src="../audio/four.mp3"></audio>
    <audio id="five" src="../audio/five.mp3"></audio>
    <audio id="six" src="../audio/six.mp3"></audio>
    <audio id="seven" src="../audio/seven.mp3"></audio>
    <audio id="eight" src="../audio/eight.mp3"></audio>
    <audio id="nine" src="../audio/nine.mp3"></audio>
  <!--
    <audio id="plus" src="plus.mp3"></audio>
    -->
    <audio id="minus" src="../audio/minus.mp3"></audio>
    <audio id="multiply" src="../audio/multiply.mp3"></audio>
    <audio id="divide" src="../audio/divide.mp3"></audio>
    <audio id="equal" src="../audio/equal.mp3"></audio>
    <audio id="C" src="../audio/C.mp3"></audio>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CalculatorSet
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item disabled" href="/" aria-disabled="true">Calculator</a></li>
                <li><a class="dropdown-item" href="/engine">CalculatorEngine</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="calculator">
       <input v-model="enterFieldInput" class="form-control" id="enterfield" type="text"  placeholder="введите формулу" />
       <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(1, 'one')">1</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary"  @click="enterNumber(2, 'two')">2</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(3, 'three')">3</div>
       </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(4, 'four')">4</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(5, 'five')">5</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(6, 'six')">6</div>
       </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(7, 'seven')">7</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(8, 'eight')">8</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber(9, 'nine')">9</div>
      </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('+', 'plus')">+</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('-', 'minus')">-</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('*', 'multiply')">*</div>
      </div>  
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('/', 'divide')">/</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('=', 'equal')">=</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('C', 'C')">C</div>
      </div>  
    </div>

    <div class="soundOff" ref="soundImage" @click="onOffSound()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data:() => ({
    allowSound:true,
    enterFieldInput:''
  }),
  methods:{
    onOffSound(){
      this.$refs.soundImage.style.backgroundSize = "100% 100%";
      if(this.allowSound){
        this.$refs.soundImage.style.backgroundImage = "url('https://cdn3.iconfinder.com/data/icons/minimalisticons/28/sound-on-512.png')";
      } else if(!this.allowSound){
        this.$refs.soundImage.style.backgroundImage = "url('https://cdn2.iconfinder.com/data/icons/bitsies/128/Mute-256.png')";
      }
      this.allowSound = !this.allowSound
    },
    enterNumber(numb, idAudio){ 
      try {
        
        if(numb === 'C'){
          this.enterFieldInput = ''
        }else if(numb === '='){
          this.enterFieldInput = eval(this.enterFieldInput);
        } else {
            this.enterFieldInput += String(numb);
          }
          if(this.allowSound){
            this.playSound(idAudio);
          }
      } catch(e){
        this.enterFieldInput = 'Неправильно введено';
      }
    },
    async playSound(idAudio){
        let audioById = document.getElementById(idAudio)	  
        try {
          audioById.play();
        } catch(err) {
          alert('проблемы со звуком')
        }
      }
    }
  }

</script>
<style>
  .soundOff {
    border-radius:100%;
    width:150px;
    height:150px;
    background-size:100% 100%;
    background-image:url('../images/soundOff.png');
  }
  *{
    margin:0px;
    padding:0px;
    font-family:Courier New;
  }
  .calculator{
    justify-content:space-between;
    flex-direction:column;
    width:50%;
    height:100%;
    border:15px solid black;
    border-radius:25px;
  }
  .calculatorrow{
    justify-content:space-between;
    display:flex;
    flex-direction:row;
    padding:5px 0px;
  }
  .calculatorcolumn{
    width:33%;
    height:100%;
    display:block;
    background:white;
    
  }
</style>
