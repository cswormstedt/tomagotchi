// Name Property
// Age Property
// Hunger Value Property
// Happiness Property
// Sleeping Property (boolean)
// Eat Method
// Morph Method
// Go To Sleep Method

//age him as he moves

var tomagotchi = {
  name: "Dale",
  age: 0,
  hunger: 10, // 1 to 10 scale 10 being hungriest
  happiness: 0, //0 to 10 scale 0 being the least happy
  isSleeping: false,
  currentForm: "Baby",
  life: true,
  eat: function(){
    this.hunger -= 2;
    this.happiness += 1;
    hungerMeter.innerHTML = "Hunger Meter: " + tomagotchi.hunger;
    happy.innerHTML = "Happiness: " +tomagotchi.happiness;
    if(this.hunger <= 0){
      this.gainAge();
    //   console.log(this.age)
    if(this.age >= 5){
      this.hunger = 10;
    }
  }
},

  gainHappiness: function(){
    this.happiness += 0.5;
    happy.innerHTML = "Happiness: " +tomagotchi.happiness;
  },

  checkMorph: function(){
    if(this.age === 0){
      this.currentForm = "Baby";
    }else if(this.age <= 5){
      this.currentForm = "Kiddo";
    }
  },
  gainAge: function(){
    this.age += 5;
    this.checkDeathByAging();
    this.checkMorph();
  },
  checkDeathByAging: function(){
    if(this.age > 10){
      this.die();
    }
  },
  die: function(){
    this.life = false;
    alert("RIP " + this.name + " is Dead");
  }
}

//step 1 create varible to grab element//
//step 2 add the event to said element 
var feed        = document.getElementById('feedBtn');
var hungerMeter = document.getElementsByTagName('h2')[0];
var happy       = document.getElementById('happy')
var body        = document.getElementsByTagName('body')[0];
var sleep       = document.getElementById('sleepBtn');
var counter     = 1;
// var hide        = document.getElementsByClass


feed.addEventListener('click', function(e){
  console.log('clikced on feed buttom')
  tomagotchi.eat();
})

// function updateFrame(){
 
 var i = 1;
 
 setInterval(function(){

  var firstDiv = document.getElementById(i);
      if(i % 4 === 0){
        i =1;
    } else{
      i += 1;
    } 
    var secondDiv = document.getElementById(i);
      firstDiv.classList.add("hidden");
      secondDiv.classList.remove("hidden");

  }, 4000)


sleepBtn.addEventListener('click', function(e){
  
  counter++

  if(counter % 2 === 0){
    tomagotchi.isSleeping = true;
  } else{
    tomagotchi.isSleeping = false;
  }
  console.log(tomagotchi.isSleeping);

  if(tomagotchi.isSleeping === true){
    tomagotchi.gainHappiness();
  }

  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor ="#000000"

 if (tomagotchi.isSleeping === false) {
  body.style.backgroundColor = "";
    }
    else {
      body.style.backgroundColor ="#000000";

}
})




// })


//we wanted it to eat every second setInterval(tomagotchi.eat(){}, 1000)





