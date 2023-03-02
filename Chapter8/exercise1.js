let interval = setInterval(randomSentenceGenerator, 1 * 1000);

let i = 0;
function randomSentenceGenerator() {
  // This structure if for stopping the task after -n- repetitions:
  let n = 10;
  i++;
  if (i >= n) {
    clearInterval(interval);
  }

  // In this we create the random sentence:
  let p1 = [
    "The",
    "A",
    "My",
    "Your",
    "Our",
    "Their",
    "The most powerful",
    "The ugly",
    "A terrible",
    "My happy and big",
  ];
  let p2 = [
    " dog",
    " cat",
    " horse",
    " lion",
    " mouse",
    " manatee",
    " hawk",
    " eagle",
    " dove",
    " puppy",
  ];
  let p3 = [
    " likes the sun.",
    " plays with the spiders.",
    " works at IntekGlobal.",
    " travels a lot.",
    " have a drinking problem",
    " plays basketball with his friends",
    " is trying to take over the world",
    " fights for world peace",
    " have a beautiful voice",
    " is the fastest in the universe",
  ];

  // This closure is to create random integers numbers between 0 and 4:
  let intRand = function () {
    return Math.floor(Math.random() * 10);
  };

  // Structure used to print the random sentence:
  console.log(p1[intRand()] + p2[intRand()] + p3[intRand()]);

  // Despite the fact that the exercise asks for display
  // the random sentence in the console, I display the sentence
  // on the HTML as well just for practice:
  let sentence = document.getElementById("sentence");
  sentence.textContent = "";
  let newNode = document.createElement("p");
  newNode.textContent = p1[intRand()] + p2[intRand()] + p3[intRand()];
  sentence.appendChild(newNode);
}

