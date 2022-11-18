const characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let firstPasswordEl = document.getElementById("first")
let secondPasswordEl = document.getElementById("second")

let first_generation_Array = []
let second_generation_Array = []

function getRandom(){ 
   for(let i=0;i< 21;i+=1) { 
      let random = Math.floor(Math.random() * characters.length) // 0 - 30
      let random_bis = Math.floor(Math.random() * characters.length) // 0 - 30
      first_generation_Array[i] = characters [random]
      second_generation_Array[i] = characters [random_bis]

      firstPasswordEl.textContent += first_generation_Array[i]
      secondPasswordEl.textContent += second_generation_Array[i]
   }
}
function generatePasswords() {
   if(firstPasswordEl.textContent === "" && secondPasswordEl.textContent === ""){ 
         getRandom()
   } else { 
         firstPasswordEl.textContent = ""
         secondPasswordEl.textContent = ""
         getRandom()
   }
}



