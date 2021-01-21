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
                <li><a class="dropdown-item" href="/">Calculator</a></li>
                <li><a class="dropdown-item disabled" href="/engine" aria-disabled="true">CalculatorEngine</a></li>
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
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('sin', 'equal')">sin</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('cos', 'equal')">cos</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('tan', 'C')">tan</div>
      </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('sinh', 'equal')">sinh</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('cosh', 'equal')">cosh</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('tanh', 'equal')">tanh</div>
      </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('PI', 'equal')">π</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('exp', 'equal')">exp</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('sqrt', 'equal')">√</div>
      </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('module', 'equal')">%</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('.', 'equal')">.</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('sqr', 'equal')">X²</div>
      </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('0', 'equal')">0</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('cube', 'equal')">X³</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('^', 'equal')">X²</div>
      </div>
      <div class="calculatorrow">
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('log', 'equal')">log</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('ln', 'equal')">ln</div>
        <div class="calculatorcolumn btn btn-lg btn-outline-primary" @click="enterNumber('factorial', 'equal')">n!</div>
      </div>
      
    </div>

    <div class="soundOff" ref="soundImage" @click="onOffSound()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnginerCalculator',
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
        } else if(numb === '=' && this.enterFieldInput.includes("^")){
          
          let [fstNmb, SndNmb] = this.enterFieldInput.split('^')
          console.log(fstNmb, SndNmb)
          fstNmb = Number(fstNmb)
          SndNmb = Number(SndNmb)
          let srcNmb = fstNmb
          let pwr = SndNmb - 1
          for(let cntr = 0; cntr < srcNmb; cntr++){
            fstNmb *= srcNmb
          }
          this.enterFieldInput = fstNmb
        } else if(numb === '='){
          this.enterFieldInput = eval(this.enterFieldInput);
        } else if(numb === 'sin'){
          this.enterFieldInput = Math.sin(this.enterFieldInput);
        } else if(numb === 'cos'){
          this.enterFieldInput = Math.cos(this.enterFieldInput);
        } else if(numb === 'tan'){
          this.enterFieldInput = Math.tan(this.enterFieldInput);
        } else if(numb === 'sinh'){
          this.enterFieldInput = Math.sinh(this.enterFieldInput);
        } else if(numb === 'cosh'){
          this.enterFieldInput = Math.cosh(this.enterFieldInput);
        } else if(numb === 'tanh'){
          this.enterFieldInput = Math.tanh(this.enterFieldInput);
        } else if(numb === 'sqrt'){
          this.enterFieldInput = Math.sqrt(this.enterFieldInput);
        } else if(numb === 'exp'){
          this.enterFieldInput = Math.exp(this.enterFieldInput);
        } else if(numb === 'PI'){
          this.enterFieldInput = Math.PI  ;
        } else if(numb === 'sqr'){
          this.enterFieldInput *= this.enterFieldInput;
        } else if(numb === 'cube'){
          this.enterFieldInput = Math.pow(this.enterFieldInput, 3);
        } else if(numb === 'ln'){
          this.enterFieldInput = Math.log10(this.enterFieldInput);
        } else if(numb === 'factorial'){
          var factorial = function factorialis (m) {
          var n = parseInt(m);
          return (n < 0 || m != n) ? NaN : (n == 0 ? 1 : n * factorialis(n - 1));
          }
          this.enterFieldInput = factorial(this.enterFieldInput)
        } else if(numb === 'log'){
          this.enterFieldInput = Math.log(this.enterFieldInput);
        } else {
            this.enterFieldInput += String(numb);
          }
          if(this.allowSound){
            this.playSound(idAudio);
          }
      } catch(e){
        console.log(e)
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
