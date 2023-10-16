  
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("calBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//text only username
   
                function lettersOnly(input){
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
  
var playerArray = [];
localStorage.setItem("playerArray", JSON.stringify(playerArray));
 

var welcome = document.getElementById("welcome");

var login = document.getElementById("login"),
    loginForm = document.loginForm,
    input1 = document.getElementById("userName"),
    userWarning = document.getElementById("userWarning");
     

var loginBtn = document.getElementById("loginBtn");
     

var actualPlayer = null,
    playerString = localStorage.getItem("playerArray"),
    playerArray = JSON.parse(playerString);

var message = document.getElementById("message");
var results = document.getElementById("results"),
    quizContainer = document.getElementById("quizContainer");
     
 
var allQuestions =  [
 {
    "question":"What was God’s purpose in creating man?",
    "choices":["To be master of all creation","To help Him look after the garden","To name the things He created","To multiply and fill the earth"],
    "correctAnswer":0
  },
  {
    "question":"Isaac’s prayer to God for his barren wife showed that he",
    "choices":["truly loved her","sincerely loved his God","had faith in God","was tired of being childless"],
    "correctAnswer":2
  },
  {
    "question":"In God’s covenant with Israel, the central theme was",
    "choices":["Restoration","Circumcision","Obedience","Salvation"],
    "correctAnswer":2
  },
  {
    "question":"‘“Who am I that I should go to Pharaoh…”’ When Moses resisted God’s call with the statement above, it portrayed his",
    "choices":["stubbornness","incompetence","lack of strength","lack of eloquence"],
    "correctAnswer":1
  },
  {
    "question":"What was Samson’s major achievement as Israel’s leader?",
    "choices":["He suppressed the Philistines","He captured the city of Jericho","He saved the Israelites from the Amorites","He secured permanent independence for Israel."],
    "correctAnswer":0
  },
  {
    "question":"God guided the Israelites on their way from Egypt to the promised land by",
    "choices":["the work of two angels","dividing the Red Sea","a pillar of cloud and a pillar of fire","miracles that gave them direction on the way."],
    "correctAnswer":2
  },
  {
    "question":"“Deal gently for my sake with the young man Absalom.” David’s statement above exhibited his",
    "choices":["indulgent love for his son","willingness to forgive his competitors","desire to punish Absalom himself","high level of parental control"],
    "correctAnswer":0
  },
  {
    "question":"How did king Asa prove to be a godly king?",
    "choices":["He killed all the prophets of Baal at Mount Carmel","He saved Judah from the Philistine menace","He instituted spiritual reforms that removed all idols and prostitution in the land.","He made the worship of Yahweh mandatory for every Jew and sojouner"],
    "correctAnswer":2
  },
  {
    "question":"The Hebrew midwives who obeyed God rather than Pharaoh were blessed with",
    "choices":["favour from all the Israelites","long life in Canaan","resources","families"],
    "correctAnswer":3
  },
  {
    "question":"When Saul disobeyed God’s command, Samuel rebuked him by saying that",
    "choices":["the sword would never depart from his house","to obey was better than sacrifice","he should fear the LORD and obey the people’s voice","though he was little, yet he was the head."],
    "correctAnswer":1
  },
  {
    "question":"David’s behaviour after Prophet Nathan accused him of murder and adultery showed his",
    "choices":["justification","repentance","greed","righteousness"],
    "correctAnswer":1
  },
  {
    "question":"How did King Solomon demonstrate his wisdom in setting the dispute over the ownership of a baby by the two prostitutes?",
    "choices":["He interrogated them for seven days until the truth was discovered","He interrogated them for only three days and the truth was revealed.","He asked them to divide the child into two and the mother was known","He threatened to give the child to a neutral woman and the mother was known"],
    "correctAnswer":2
  },

   {
    "question":"The prophet who made known the imminent division of the kingdom of Israel during Solomon’s reign was",
    "choices":["Jehu","Ahijah","Elisha","Elijah"],
    "correctAnswer":1
  },
  {
    "question":"Naaman’s leprosy was transferred to Gehazi because Gehazi was",
    "choices":["ambitious","anxious","covetous","comtemptous"],
    "correctAnswer":2
  },
  {
    "question":"Obadiah who was in charge of Ahab’s household demonstrated reverence for the LORD by",
    "choices":["giving Elijah the bull for the sacrifice on Mount Carmel","rebuking Ahab and Jezebel for their evil deeds","hiding a hundred prophets of God from Jezebel’s wrath","helping Elijah to kill the prophets of Baal on Mount Carmel."],
    "correctAnswer":2
  },
  {
    "question":"Although Josiah removed the vessels of Baal and Asherah from the Temple, God did not turn from the fierceness of His wrath because",
    "choices":["the people did not remove them completely","Jehoahaz, Josiah’s had provoked Him","Manasseh had provoked Him","The people had opposed Josiah"],
    "correctAnswer":2
  },
  {
    "question":"What was Nehemiah’s initial reaction to the news about the ruins of Jerusalem?",
    "choices":["He tasked the people on what to contribute","He called volunteers to assist him","He fasted and prayed for forgiveness of sins","He asked for permission to travel home"],
    "correctAnswer":2
  },
  {
    "question":"After the dedication of the Temple, Ezra studied the law of the LORD in order to",
    "choices":["defend the Jews against the Babylonians","become the first judge in Jerusalem","enhance his prophetic status","teach His status and ordinances in Israel"],
    "correctAnswer":3
  },
   {
    "question":"Daniel became distinguished above all other presidents and satraps because",
    "choices":["an excellent spirit was in him","the spirit of Darius was in him","he was a good administrator","he was highly educated."],
    "correctAnswer":0
  },
  {
    "question":"How did the Ninevites react to Jonah’s message?",
    "choices":["They did not believe it","They believed it for a while","They repented of their sins","They ordered him out of their city"],
    "correctAnswer":2
  },
  {
    "question":"In Prophet Hosea’s analysis, harlotry is equivalent to Israel’s",
    "choices":["prostitution","idolatrous practices","religious practices","adultery"],
    "correctAnswer":1
  },
  {
    "question":"“…But let justice roll down like waters and righteousness like an overflowing stream.” Amos’ statement above suggests that the society was terribly",
    "choices":["vindictive","abusive","oppressive","destructive"],
    "correctAnswer":3
  },

   {
    "question":"Isaiah emphasized holiness above all things because God",
    "choices":["knew their hearts were right with him","was not interested in their sacrifices","who called them is holy","was searching their sinful hearts"],
    "correctAnswer":3
  },
  {
    "question":"God told Ezekiel that the house of Israel would not listen to him because they",
    "choices":["were a people of foreign speech","had forsaken His laws","were of a stubborn heart","had not truly repented"],
    "correctAnswer":2
  },
  {
    "question":"According to Isaiah, God sent him to",
    "choices":["Proclaim liberty to the captives","proclaim victory over Israel’s enemies","be a watchman over Israel","destroy and overthrow nations"],
    "correctAnswer":3
  },
  {
    "question":"Jesus was tempted by the devil so as to",
    "choices":["fulfill all righteousness","show His power over forces of nature","show that no one is above temptation","test the devil’s power"],
    "correctAnswer":2
  },
  {
    "question":"“’Depart from me, for I am a sinful man, O Lord.’” This statement was uttered by Peter at the",
    "choices":["last supper","garden of Gethsemane","call of the disciples","transfiguration"],
    "correctAnswer":2
  },
  {
    "question":"The impact of Jesus’ miracle of turning water into wine was that the",
    "choices":["servants were astonished","master of ceremony believed","disciples believed more in Him","people glorified God"],
    "correctAnswer":2
  },
   {
    "question":"After the healing of the demoniac in the country of the Gerasenes, the people begged Jesus to",
    "choices":["stay with them","visit them always","go away from them","heal their sick"],
    "correctAnswer":2
  },
  {
    "question":"Jesus told the parable of the lost sheep in order to illustrate that",
    "choices":["every believer ought to rejoice with those who rejoice","no person can hide from God","God’s love is unlimited","there is joy in heaven over sinner who repents."],
    "correctAnswer":3
  },
   {
    "question":"According to Jesus, the seventy disciples should rejoice because",
    "choices":["their names were written in heaven","their faith and zeal were increased","of the submission of evil spirits to them","of the fall of Satan from heaven like lightening"],
    "correctAnswer":0
  },
    {
    "question":"According to Mark, after the transfiguration, Jesus charged His disciples to",
    "choices":["be prepared for persecution","tell no one what they had seen","have no hands in His betrayal","go to the Gentiles immediately"],
    "correctAnswer":1
  },
   {
    "question":"According to Luke, the multitude that followed Jesus during the triumphal entry rejoiced and praised God with a loud voice because",
    "choices":["they realized that Jesus was a prophet","of the mighty works He had done","He was riding on a colt in humility","they believed He was their Messiah"],
    "correctAnswer":1
  },
   {
    "question":" “Truly, I say to you, today you will be with me in paradise.”’ Jesus made the statement above to one of the criminals because he",
    "choices":["respected Him","praised Him","rebuked his partner","was repentant."],
    "correctAnswer":3
  },
  {
    "question":"The message of the risen Christ to the women who came early to the tomb was to be relayed to the disciples and",
    "choices":["the Jews","the Sadducees","Thomas","Peter"],
    "correctAnswer":3
  },
  {
    "question":"According to the Gospel of John, Jesus is the true vine while the vinedresser is",
    "choices":["the Holy Spirit","His father","the gardener","His mother"],
    "correctAnswer":1
  },
  {
    "question":"“…Why has Satan filled your heart to lie to the Holy Spirit…”’ Peter rebuked Ananias in the statement above for his sin of",
    "choices":["greed","insincerity","covetousness","partiality"],
    "correctAnswer":1
  },
   {
    "question":"Paul informed the Galatians that the gospel he preached came through",
    "choices":["a revelation of Jesus Christ","his desire to lead them","inspiration from the angels","the faith of men"],
    "correctAnswer":0
  },
   {
    "question":"“You son of the devil, you enemy of all righteousness, full of all deceit and villainy…”’ The statement of Paul was addressed to",
    "choices":["Elymas, the magician","Paulus, the proconsul","Simon, the magician","Demetrius, the silversmith"],
    "correctAnswer":0
  },
  {
    "question":"‘ “…Unless you are circumcised according to the custom of Moses, you cannot be saved.”’ The statement above by the men from Judea lead to the",
    "choices":["murmurs of the Hellenists","convening of the Jerusalem Council","persecution that scattered the disciples","circumcision of the Gentiles"],
    "correctAnswer":1
  },
  {
    "question":"According to Galatians, the Law was added because of",
    "choices":["righteousness","transgressions","grace","persecution"],
    "correctAnswer":1
  },
  {
    "question":"According to Galatians, the death of Christ has eliminated all forms of",
    "choices":["suffering","difference","condemnation","poverty"],
    "correctAnswer":2
  },
  {
    "question":"Peter in his teaching on humility, admonishes Christians should re-affirm their love for those who",
    "choices":["safeguard their faith","seek things that are above","be gentle in spirit","avoid life’s anxiety"],
    "correctAnswer":3
  },
   {
    "question":"Paul in Corinthians advised that Christians should re-affirm their love for those who",
    "choices":["are kind to them","wrong them","humble themselves","are in authority."],
    "correctAnswer":1
  },
    {
    "question":"According to Corinthians, variety of gifts are inspired by",
    "choices":["fervent prayers","angels of God","constant fasting","the same Spirit"],
    "correctAnswer":3
  },
   {
    "question":"According to Paul in Corinthians, generosity produces",
    "choices":["righteousness","salvation","the grace of God","thanksgiving to God"],
    "correctAnswer":3
  },
  {
    "question":"Busy bodies and those living in idleness in the church at Thessalonica were admonished to",
    "choices":["pray for those in authority for peace","do their work in quietness and earn a living","appeal to those in authority to create jobs","endure persecution from their masters"],
    "correctAnswer":1
  },
   {
    "question":"Paul in Thessalonians told believers that the coming of the Lord would be accompanied by",
    "choices":["songs of praise","the sound of the trumpet","signs and wonders","wailing and mourning"],
    "correctAnswer":1
  },
  {
    "question":"James stated in his epistle that when believers met various trails, their faith produces",
    "choices":["weakness","strength","steadfastness","righteousness."],
    "correctAnswer":2
  },
  {
    "question":"Peter in his epistle enjoined servants to be submissive to their masters with all",
    "choices":["gentleness","seriousness","respect","humility"],
    "correctAnswer":2
  }


 
  
  ];

var quizLength = 0,
    choices = [] ,
    index = 0,
    formContainer = document.getElementById("formContainer"),
    form = document.form1,
    warning = document.getElementById("warning");

var quizButtons = document.getElementById("quizButtons"),
    prevButton = document.getElementById("prevButton"),
    nextButton = document.getElementById("nextButton"),
    scoreButton = document.getElementById("scoreButton");

var myScoreDisplay = document.getElementById("myScoreDisplay"),
    allScoreDisplay = document.getElementById("allScoreDisplay"),
    myScores = document.getElementById("myScores"),
    everyoneScores = document.getElementById("everyoneScores");
    // mineHidden = true,
    // allHidden = true;

 
 
 loginBtn.addEventListener("click", checkForm);

 
prevButton.addEventListener("click", previousQuestion);
nextButton.addEventListener("click", nextQuestion);
scoreButton.addEventListener("click", showScore);
localStorage.setItem("allQuestions",  JSON.stringify(allQuestions));
input1.value = "";
  
 

//checks if username and password are entered
function checkForm(e) {
  e.preventDefault();
   
  var userName = input1.value;
   

  
    if (userName === "") {
      userWarning.innerHTML = "Please enter your username";
      loginForm.userName.focus();
    }
     
  
  else {
     
        logIn(userName );
    
  }
}


function Player(username ) {
  this.userName = username;
  
  this.storedScores = [];
  this.total = 0;  
   
  this.finished = true;
  // answerAt attribute stores the index of the question that is displayed if the player logs out before finishing the quiz
  this.answerAt = 0;
  /* if player logs out before finishing quiz, answers player has already given are stored here.
  When player logs in again, she doesnt have to give those answers again  */
  this.storedAnswers = [];

}

 
 
 

function logIn(username ) {
  quizContainer.style.display = "block";
   
  results.innerHTML = "";
  player = new Player(username );
  playerArray.push(player);
  localStorage.setItem("playerArray", JSON.stringify(playerArray));
  
   
  var playerString = localStorage.getItem("playerArray");
  playerArray = JSON.parse(playerString);
  console.log(playerArray);
  // document.getElementById('login').style.display = "none";
  document.getElementById('welcome').style.display = "none";
  document.getElementById('smallcon').style.display = "none";
  for (var i = 0; i < playerArray.length; i++) {
    var player = playerArray[i];
    if (player.userName === username ) {
      console.log(player);
      actualPlayer = player;
      var storedAnswers = actualPlayer.storedAnswers;
      index = actualPlayer.answerAt;
       
          message.innerHTML = "Welcome to this Exam, " + actualPlayer.userName + "!";
           
           
      
      
    input1.value = "";
    //code to start the exam imeediately
index = actualPlayer.answerAt;
   
  if (actualPlayer.finished) {
    actualPlayer.storedAnswers.length = 0;  //empty the array
    actualPlayer.finished = false;
    index = 0;
  }

  var stringQuestions = localStorage.getItem("allQuestions");
  allQuestions = JSON.parse(stringQuestions);
  quizLength = allQuestions.length;

 
  showQuestion();
    document.getElementById("prevButton").style.display = 'none';
   
  document.getElementById("calBtn").style.display = 'block';
  document.getElementById("quizButtons").style.display = 'block';
  document.getElementById("submitBtn").style.display = 'block';
 

     

}
  }
  
   
}
//end of code to start the exam

function showQuestion() {
  showQuizButtons();
  if (index === quizLength) {
    return;
  }
  // display of question at given index:
  formContainer.classList.remove("hide");
  form.innerHTML = "";
  var quizItem = allQuestions[index];
  var q = document.createElement("h3");
  var text = document.createTextNode(quizItem.question);

  var storedAnswers = actualPlayer.storedAnswers;
  var storedAnswer = storedAnswers[index];
  q.appendChild(text);
  form.appendChild(q);

  // display of choices, belonging to the questions at given index:
  choices = allQuestions[index].choices;

  for (var i = 0; i < choices.length; i++) {
    var div = document.createElement("div");
    div.classList.add("radio");


    var input = document.createElement("input");
    input.setAttribute("id", i);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "question");




    if (i === quizItem.correctAnswer) {

      input.setAttribute("value", "1");   
    } else {           
        input.setAttribute("value", "0");
    }


    //if question has been answered already
    if (storedAnswer) {
      var id = storedAnswer.id;
      if (i == id) {
        // if question is already answered, id has a value
        input.setAttribute("checked", "checked");
         
      }
    }
    
    //if radiobutton is clicked, the chosen answer is stored in array storedAnswers
    input.addEventListener("click", storeAnswer);
     

    var label = document.createElement("label");
    label.setAttribute("class", "radio-label") 
    label.setAttribute("for", i);
    var choice = document.createTextNode(choices[i]);
    label.appendChild(choice);
    div.appendChild(input);
    div.appendChild(label);
    form.appendChild(div);

  }
}

 

function storeAnswer(e) {
    var element = e.target;
    var answer = {
      id: element.id,
      value: element.value

    };
    actualPlayer.storedAnswers[index] = answer;

   
}


function showQuizButtons() {
  if(index === 0) {
    //there is no previous question when first question is shown
    prevButton.classList.add("hide");
  }
  if (index > 0) {
    prevButton.classList.remove("hide");
  }
  if(index === quizLength) {
    //only if last question is shown user can see the score
    scoreButton.classList.remove("hide");
    nextButton.classList.add("hide");
    //prevButton still visible so user can go back and change answers
    var h2 = document.createElement("h2");
    h2.innerHTML = "sorry no more question. click the SUBMIT button ";
    form.appendChild(h2);
    document.getElementById('quizButtons').style.display = 'none';
    document.getElementById('score').style.display = 'block';

  }
  else {
    nextButton.classList.remove("hide");
    scoreButton.classList.add("hide");
  }
}

// http://jsfiddle.net/hvG7k/
function previousQuestion() {
  if(index === 1) {
    //there is no previous question when first question is shown
     document.getElementById("prevButton").style.display = 'none';
  }
  //shows previous question, with chosen answer checked
  index--;
  form.innerHTML = "";
  $("#form1").fadeOut(0, function() {
    var show = showQuestion();
    $(this).attr('innerHTML', 'show').fadeIn(300);
  });
  
}

function nextQuestion() {
   
  index++;
  warning.innerHTML = "";
  form.innerHTML = "";
  $("#form1").fadeOut(0, function() {
    var show = showQuestion();
    $(this).attr('innerHTML', 'show').fadeIn(300);
  });
  document.getElementById("prevButton").style.display = 'block';
  
}
       
      

function showScore() {
  var confirmation = confirm("ARE YOU SURE YOU WANT TO SUBMIT?");
    if (confirmation == true) {
  form.innerHTML = "";
   
  var totalScore = 0;
  var storedAnswers = actualPlayer.storedAnswers;
  actualPlayer.finished = true;

  var output = "";
  var questionResult = "NA";

  for (var i = 0; i < storedAnswers.length; i++) {
    var score = parseInt(storedAnswers[i].value);
     
   // output = output + '<p>Question ' + (i + 1) + ': ' + questionResult + '</p> ';
    totalScore += score;
     
  }

  var percentage = (totalScore / allQuestions.length) * 100;


   


//display score percentage area
  var resultCircle = document.getElementById('resultCircle');
 var correctAns = document.getElementById('correctAns');
 
var RColor = "";
 
    if(percentage == 100) {
        RColor = 'teal'
        
        correctAns.innerHTML =  totalScore;
    } else if(percentage >= 80) {
        RColor = 'green'
         
        correctAns.innerHTML = totalScore;
    }  
    else if(percentage >= 65) {
        RColor = 'blue'
       
        correctAns.innerHTML = totalScore;
    } else if(percentage >= 50) {
        RColor = 'orange'
      
        correctAns.innerHTML =  totalScore;
    } else{
        RColor = 'red'
         
        correctAns.innerHTML = totalScore;
    }


//svg animation circle
    var path = 
    '<svg viewbox="0 0 36 36" class="circular-chart '+ RColor +'"> \
    <path class="circle-bg" \
    d="M18 2.0845 \
    a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \
    /> \
    <path class="circle" \
    stroke-dasharray="'+ percentage +', 100" \
    d="M18 2.0845 \
    a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \
    /> \
    <text x="19" y="21" id="percentage">' + percentage +'%</text> \
    </svg>';
    resultCircle.innerHTML = path;
   //end of display score percentage
   var created = new Date();

document.getElementById('user').innerHTML= "Username: " + actualPlayer.userName + "<br>"+ "<br>" + "Subject: Mathematics"+"<br>"+ "<br>"+"Exam Date: "+  created.toLocaleString("en-US");
     results.innerHTML = output;
     actualPlayer.score = totalScore;
  actualPlayer.storedScores.push(totalScore);
  document.getElementById("prevButton").style.display = 'none'; 
  document.getElementById("nextButton").style.display = 'none';
  document.getElementById("quiz-time-left").style.display = 'none';
  document.getElementById('Time-Warning').style.display = 'none'; 
  document.getElementById("theResult").style.display = 'block';
  document.getElementById("quizContainer").style.display = 'none';
 
 

   

}
}
 
//javascript countdown timer start

 var total_seconds =120*1
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);
   
   
  function countdown(){
    document.getElementById("quiz-time-left").innerHTML
  ='Time Left:' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;;
  if (total_seconds<=30) {
    document.getElementById('quiz-time-left').style.color = "red";
    document.getElementById('Time-Warning').innerHTML = 'Oop! You have 30 seconds left'; 
    
     }
     if (total_seconds<=25){
      document.getElementById('Time-Warning').style.display = 'none';
     }

  //what will happen when the read zero
       if (total_seconds <=0){
        form.innerHTML = "";
   
  var totalScore = 0;
  var storedAnswers = actualPlayer.storedAnswers;
  actualPlayer.finished = true;

  var output = "";
  var questionResult = "NA";

  for (var i = 0; i < storedAnswers.length; i++) {
    var score = parseInt(storedAnswers[i].value);
     
     
    totalScore += score;
     
  }

  var percentage = (totalScore / allQuestions.length) * 100;


   


//display score percentage area
  var resultCircle = document.getElementById('resultCircle');
 var correctAns = document.getElementById('correctAns');
 
var RColor = "";
 
    if(percentage == 100) {
        RColor = 'teal'
        
        correctAns.innerHTML =  totalScore;
    } else if(percentage >= 80) {
        RColor = 'green'
         
        correctAns.innerHTML = totalScore;
    }  
    else if(percentage >= 65) {
        RColor = 'blue'
       
        correctAns.innerHTML = totalScore;
    } else if(percentage >= 50) {
        RColor = 'orange'
      
        correctAns.innerHTML =  totalScore;
    } else{
        RColor = 'red'
         
        correctAns.innerHTML = totalScore;
    }


//svg animation circle
    var path = 
    '<svg viewbox="0 0 36 36" class="circular-chart '+ RColor +'"> \
    <path class="circle-bg" \
    d="M18 2.0845 \
    a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \
    /> \
    <path class="circle" \
    stroke-dasharray="'+ percentage +', 100" \
    d="M18 2.0845 \
    a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \
    /> \
    <text x="19" y="21" id="percentage">' + percentage +'%</text> \
    </svg>';
    resultCircle.innerHTML = path;
   //end of display score percentage
   var created = new Date();

document.getElementById('user').innerHTML= "Username: " + actualPlayer.userName + "<br>"+ "<br>" + "Subject: C.R.K"+"<br>"+ "<br>"+"Exam Date: "+  created.toLocaleString("en-US");
     results.innerHTML = output;
     actualPlayer.score = totalScore;
  actualPlayer.storedScores.push(totalScore);
  document.getElementById("prevButton").style.display = 'none'; 
  document.getElementById("nextButton").style.display = 'none';
  document.getElementById("quiz-time-left").style.display = 'none';
  document.getElementById('Time-Warning').style.display = 'none'; 
   
  document.getElementById("quizContainer").style.display = 'none';
   
  document.getElementById("theResult").style.display = 'block';
 

   
     

        setTimeout(1);
   //display score after the time count zero


  }


 else{
    total_seconds = total_seconds-1;
    c_minutes = parseInt(total_seconds/60);
    c_seconds = parseInt(total_seconds%60);
    setTimeout("countdown()",1000);
  }
   
}
 
  //start timer button funtion

  function startTimer(){
     
     
    setTimeout("countdown()",1000);
    
  }
//javascript countdown timer stop
 
  

 
   