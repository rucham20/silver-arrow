
// JavaScript Document
//Use for storyline branching
//Introduction

//The bread or sword variables allow us to alter the player's fate later on, depending on whether they chose bread or sword.
var bread = false;
var sword = false;
var health = 5;
var hunger = 5;

window.onload = onloadhandler;

//This function resets the number of hearts and bread slices there are at the beginning of the game. It automatically sets each to 5 (full health/hunger).
function onloadhandler() {
	document.getElementById("heart1").hidden = false;
	document.getElementById("heart2").hidden = false;
	document.getElementById("heart3").hidden = false;
	document.getElementById("heart4").hidden = false;
	document.getElementById("heart5").hidden = false;
	document.getElementById("bread1").hidden = false;
	document.getElementById("bread2").hidden = false;
	document.getElementById("bread3").hidden =false;
	document.getElementById("bread4").hidden = true;
	document.getElementById("bread5").hidden = true;
	document.getElementById("pocketknife").hidden = true;
	document.getElementById("sword1").hidden = true;
}

//This function controls the global variable for health. Throughout the game, we can set the health and the hearts will disappear.
function displayHearts() {
	document.getElementById("heart5").hidden = false;
	document.getElementById("heart4").hidden = false;
	document.getElementById("heart3").hidden = false;
	document.getElementById("heart2").hidden = false;
	document.getElementById("heart1").hidden = false;
	
	if( health === 4) {
		document.getElementById("heart5").hidden = true;
		
	}
	
	if( health === 3) {
		document.getElementById("heart5").hidden = true;
		document.getElementById("heart4").hidden = true;
		
	}
	
	if( health === 2) {
	
		document.getElementById("heart5").hidden = true;
		document.getElementById("heart4").hidden = true;
		document.getElementById("heart3").hidden = true;
		
		
		
	}
	
	if( health === 1) {
		document.getElementById("heart5").hidden = true;
		document.getElementById("heart4").hidden = true;
		document.getElementById("heart3").hidden = true;
		document.getElementById("heart2").hidden = true;
		
		
	}
	
	if( health === 0) {
		document.getElementById("heart5").hidden = true;
		document.getElementById("heart4").hidden = true;
		document.getElementById("heart3").hidden = true;
		document.getElementById("heart2").hidden = true;
		document.getElementById("heart1").hidden = true;
		
	}
}

//This function controls the global variable for hunger. Throughout the game, we can set the hunger and the slices of bread will disappear.
function displayBreads() {
	
	document.getElementById("bread5").hidden = false;
	document.getElementById("bread4").hidden = false;
	document.getElementById("bread3").hidden = false;
	document.getElementById("bread2").hidden = false;
	document.getElementById("bread1").hidden = false;
	
	
	if( hunger === 4) {
		document.getElementById("bread5").hidden = true;
		
	}
	
	if( hunger === 3) {
		document.getElementById("bread5").hidden = true;
		document.getElementById("bread4").hidden = true;
		
	}
	
	if( hunger === 2) {
		document.getElementById("bread5").hidden = true;
		document.getElementById("bread4").hidden = true;
		document.getElementById("bread3").hidden = true;
		
		
	}
	
	if( hunger === 1) {
		document.getElementById("bread5").hidden = true;
		document.getElementById("bread4").hidden = true;
		document.getElementById("bread3").hidden = true;
		document.getElementById("bread2").hidden = true;
		
		
	}
	
	if( hunger === 0) {
		document.getElementById("bread5").hidden = true;
		document.getElementById("bread4").hidden = true;
		document.getElementById("bread3").hidden = true;
		document.getElementById("bread2").hidden = true;
		document.getElementById("bread1").hidden = true;
	}
}

//The story variable determines where the text will appear. In this case, that is the "story" div.
//The "btn" variables define the buttons in the game. For the majority of the storyline, only "btn1" and "btn2" are used. "btn3" and "btn4" are used for the end-defining choice.
function displayStory(choice) {
	var story = "";
	var btn1 = "";
	var btn2 = "";
	var btn3 = "";
	var btn4 = "";
	switch(choice) {
		
		
//The case "beginning" is used at the end of the game, when the player fails and must return to the start. (or when the GAME OVER alert comes up.)
//Bread or Sword - This choice is arguably one of the most important in the game. It starts you off and affects your fate early in the game.
	case "beginning":
	case "bread/sword":
				story = "You wake up in a dark, dreary cave. You have no memory of your previous life, and the only thing in your mind is the echo of water dripping from the ceiling. You grab a backpack that sits in front of you on the cave floor. You have a pocket knife, some rope, dried fruit that won't last long, a water bottle half-full, and a jagged rock. You see two things in the cave: A sword and a package of bread. Which do you take? Only one will fit in your backpack.";
 				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('bread')");
				btn1.innerHTML = ("Continue your journey...");
				break;
	
	
	//This is the very first goal of the game. It informs the player what their current task is.
	
	alert("GOAL 001: Escape_cave");

	//This is the very first checkpoint of the game. Its purpose is to return the player back to a certain point in the game when they die. This keeps them entertained, and they will not return to the beginning every time they die.
	case "Checkpoint1":
	//Whether the player chooses bread or sword, they will progress to the same choices. However, whether they chose to keep the bread or the sword will affect their fate later on.
	case "bread":
	case "sword":
				health = 5;
				displayHearts();
				story = "You notice a long hallway leading out of the cave. When you reach the end of the hallway, you are met with two doors. One is bright green and earthy, surrounded by vines. A cool breeze wafts from the crack beneath it. The other is black as coal, and is strangled with dried, withering tree branches. Intense heat flames from it. Which door will you choose?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('door1')");
				btn1.innerHTML = "Door 1";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('door2')");
				btn2.innerHTML = "Door 2";
				if(bread === true) {
					document.getElementById("bread3").hidden = false;
					document.getElementById("bread4").hidden = false;
					document.getElementById("bread5").hidden = false;
					
				} else {
					document.getElementById("sword1").hidden = false;
					
				}
				//image = "";
				break;
		
		
//door 1 - the first door, and whether the user chose bread or sword will affect which choices come up and how the NPCs (non-player characters) react to them.
//The if statement determines which choices the player is given. Certain choices WILL lead to death.
	case "door1":
			if (bread) {
				story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or make friends with him?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('makeFriends')");
				btn1.innerHTML = "Make friends";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('standUpToSupervisor')");
				btn2.innerHTML = "Stand up to the supervisor";
				//image = "";
			}
			if(sword) {
				story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. You chose the SWORD. The people are alarmed by the glinting blade hidden under your shirt. You assure them that you will do nothing but protect them. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or keep your head down and continue working?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('keepHeadDown')");
				btn1.innerHTML = "Keep Head Down";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('standUp')");
				btn2.innerHTML = "Stand up to the supervisor";
				//image = "";
			}
			break;
			
//(bread) stand up/make friends - This is a minor choice, meaning it will either lead to death or the continue button.
		
	case "makeFriends":
				story = "You crack a funny joke at the supervisor. He looks at you blankly for a moment, but then his dark bearded face stretches into a smile. He pats your back and tells you that he will help you, sending you to a building in the distance. You find a knife on the ground and carefully pick it up.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('continue')");
				btn1.innerHTML = "Continue...";
				alert("ACHIEVEMENT 001: Clever move. Keep making friends like this and you'll escape soon enough.");
				document.getElementById("pocketknife").hidden = false;
				break;
				//ACHIEVEMENT: BUILDING
	
//This is the first "death oppurtunity" in the game. It is also the reason why we placed checkpoints throughout the code. If the player chooses to stand up to the supervisor, they will die and be given the option to return to the last checkpoint.

	case "standUpToSupervisor":
				story = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. For a brief moment, you glare at each other. Suddenly, all you can see is the glint of his sword in the sunlight and then....darkness. sorry, you're DEAD!";
				health = 0;
				displayHearts();
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				break;
		//RETURN TO CHECKPOINT//
		

//(sword) standUp/keep head down - another minor choice. 
			
			case "keepHeadDown":
				story = "Though you stay well hidden among the group of laborers, you notice the supervisor is eyeing you strangely. You realize that he sees the sword hidden in your belt. You look back at him, hoping he will do nothing. Suddenly, he nocks an arrow in the bow on his back. Before you can react, he has released the bowstring. Sorry, you're DEAD!";
				health = 0;
				displayHearts();
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				break;
			//RETURN TO CHECKPOINT
		
	case "standUp":
				story = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. The supervisor flings his knife at you in anger. Quickly thinking, you dart to the side and catch it. You run to a building in the distance, and foolishly promise to come back for the other workers.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('continue')");
				btn1.innerHTML = "Continue...";
				alert("ACHIEVEMENT 001: Your reflexes will save you. But don't make promises you can't keep!");
				document.getElementById("pocketknife").hidden = false;
				break;
		
		
		
//Door 2	- the second door, and whether the user chose bread or sword will affect which choices come up and how the NPCs (non-player characters) react to them.
	case "door2":

//door 2 (bread)
	if( bread ) {
				story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. You try to feed the bread to the wolves but your are in vain. The wolves lunge and pin you to the ground. The last thing you hear before the darkness consumes you is their howls. Sorry, you're DEAD!";
				health = 0;
				displayHearts();
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				}

//door 2 (sword)
	else if (sword) {
				story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('runForDoor/climbTree')");
				btn1.innerHTML = "Face the wolves";		
				}
				break;
			
	case "runForDoor/climbTree":
				story = "Since you chose the SWORD, you are able to fend off the wolves. However, there are too many of them. You desperately sprint off into the trees and see two options. You can either run for a rusty door covered in ivy, or climb a tree. You grab a rusty knife off the forest floor for additional protection.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('climbTree')");
				btn1.innerHTML = "Climb the tree";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('runForDoor')");
				btn2.innerHTML = "Run for the door";
				document.getElementById("pocketknife").hidden = true;
				break;
			
	case "climbTree": 
				story = "You attempt to scramble up the tree, and feel the wolves' hot breath on your heels. You grab at a branch, but it breaks in your hand. You fall to the ground and are winded as your back crashes into the leaves. The wolves growl and pounce at you. Sorry, you're DEAD!";
				health = 0;
				displayHearts();
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				break;
			
	case "runForDoor":
				story = "You sprint towards the door as fast as your feet can go and manage to lever the door open with your sword. You quickly close the door behind you and barely escape the razor sharp teeth of the wild-eyed wolves. You are now in a dark, empty-halled building.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('continue')");
				btn1.innerHTML = "Continue...";
				alert("ACHIEVEMENT 001: You're fast... but are you smart enough to make it out alive?");
				break;
				
alert("ACHIEVEMENT 002: So close, yet so far! You made it to the building!");

//All of the choices branch back to the building to make coding easier. Now, the player's destination is whatever lies beyond the building.
//The next defining choice determines who the player's companion will be. This choice will greatly affect the next storyline and the user's fate.
alert("GOAL 002: Escape_building");		
case "Checkpoint2":
	case "continue":
				hunger = 5;
				displayBreads();
				story = "As you sneak through the building, wondering if it is inhabited, you hear a chorus of thousands of footsteps. You begin to run, and come to a supply room with an opened door. You go inside and there is an exit on either side of you. A figure runs in from each side. One is a violet-eyed girl with a long sheet of dark hair. The other is a confident-looking, brown-haired youth. Both yell for you to come with them if you want to live. Who will be your companion? Choose wisely.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Alec')");
				btn1.innerHTML = "The brown haired warrior";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('Violet')");
				btn2.innerHTML = "The violet eyed girl";
				break;


alert("GOAL 003: Cooperate_to_Escape");
//The next checkpoint. Its purpose is to return the player back to the beginning of the Alec branch, so that they do not have to make the companion choice again.	
case "Checkpoint3":		
	case "Alec":
				health = 5;
				displayHearts();
				story="You run towards the brown haired boy, happy to be heading away from the increasingly loud footsteps. He introduces himself as Alec, and drags you to a door that you never would have noticed if you were on your own. it was a wise decision to choose him. As you slide through the door, you realize that the footsteps have become quieter. Alec stumbles over a pipe. As you help him up, you hear a large crash nearby. Do you choose to run after Alec, or do you you knock him out and leave him behind for whatever caused the sound?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('runTogether')");
				btn1.innerHTML = "Run after Alec";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('knockHimOut')");
				btn2.innerHTML = "Knock Alec out";
				break;
			
	case "knockHimOut":
				story="You slyly grab a broken piece of pipe from the ground and forcefully strike Alec in a swift blow to the head. He crumples to the ground and you make a dash for the closest out of the three doors in the room. As you turn to see if you are being followed, you trip backwards and realize you are falling through the air. Suddenly you hit something hot and the burning liquid you land in sears your skin before engulfing you. Sorry, you're DEAD!";
				health = 0;
				displayHearts();
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint3')");
				btn1.innerHTML = "Try again from the last checkpoint";
				break;
			
	case "runTogether":
				story="You follow Alec through a maze of doorways and thank him when he grabs your arm to stop you from falling into a vat of boiling oil. You run for what seems like hours, and finally slow to a walk. It seems as though there is no way to escape the building. You hear a low, raspy voice say 'The Silver Arrow is near. Once it is found, we will at last have a purpose.' It is a man wearing a black hood speaking to another short man with scars covering his bald head. He appears to have a weapon. Do you stay to fight him, or do you hide?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('fightHood')");
				btn1.innerHTML = "Fight";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('hideFromHood')");
				btn2.innerHTML = "Hide";
				break;
			
	case "fightHood":
				story="You and Alec circle around the figure. Suddenly, you feel an invisible force pressing on your neck. In a few minutes, your vision fades to black. Sorry, you're DEAD!";
				health = 0;
				displayHearts();
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint3')");
				btn1.innerHTML = "Try again from the last checkpoint";
				break;

//A new checkpoint makes sure that you won't be pulled all the way back to the beginning of the Alec storyline.

case "Checkpoint4":	
	health = 5;
	displayHearts();	
	hunger = 3;
	displayBreads();
	case "hideFromHood":
				story = "You dive behind a thick pipe, and Alec follows quickly. The figure begins to whisper excitedly about someting and you feel compelled to stay hidden and listen in on the conversation. You learn about a mysterious phenomenon called the Silver Arrow and when the figures retreaat into the darkness, you question Alec about this discovery.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('threatenAlec')");
				btn1.innerHTML = "Threaten Alec";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('convinceAlec')");
				btn2.innerHTML = "Convince Alec";
				break;

	case "threatenAlec":
				story = "You grab a knife from your belt and raise it threateningly. You demand that he explain about the silver arrow, but he sighs and relents.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
				btn1.innerHTML = "Acquire Information";
			// ACHIEVEMENT KNOWLEDGE ACQUIRED
				break;	
			
	case "convinceAlec":
				story  = "You compel Alec to tell you about the Silver Arrow by bringing out your persuasive skills. You say, 'I deserve to know what's going on.' He stares at you for a while and then gives in.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
				btn1.innerHTML = "Acquire Information";
				break;
			
			
	case "Violet":
				story = "The brown-haired boy flees from the room as the sound of footsteps gets louder. The girl cocks her head at you and says, 'Nice choice. I'm Violet.' She motions for you to follow her and goes into a room off to the side. As you hear low, raspy voices, Violet pushes you to the ground, knocking the wind out of you. She flattens you against the cool floor. Do you stay still and trust her or fight back in fear that you chose the wrong companion? ";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('stayStill')");
				btn1.innerHTML = "Stay still";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('fightBack')");
				btn2.innerHTML = "Fight Back";
				break;
			
	case "fightBack":
			story = "You struggle, kicking and screaming. You pull yourself away and run out into the hallway. There, a squadron of soldiers awaits you. Sorry, you're DEAD.";
			health = 0;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint2')");
			btn1.innerHTML = "Try again from the last checkpoint";
			break;
			
case "stayStill":
			story = "You keep yourself still and try not to breathe. Violet is deadly silent, her eyes squeezed tightly shut. Once the thunderous footsteps and voices fade, Violet sighs. 'Thanks for trusting me. You would've died otherwise.'";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('setUpCamp')");
			btn1.innerHTML = "Set up camp";
			break;
	
			
case "setUpCamp":
			hunger = 3;
			displayBreads();
			story = "You and Violet follow a maze of hallways before stopping at a small corner isolated from the rest of the building. She opens her backpack and shares some of her supplies with you. Suddenly, you hear the sound of footsteps drawing near. Violet wraps her hand against your mouth to muffle your surprise. The footsteps stop closeby and the voices seem to be whispering about a mysterious object called the silver arrow. 'It is almost time. The silver arrow is near and once we have aqquired it, we will have a purpose at last.' The footsteps recede and you look at Violet questioningly. She sighs, looks at the ground. ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
			btn1.innerHTML = "Acquire Information";
			break;
	
			
case "Checkpoint5":
			health = 5;
			displayHearts();
			story = "'It's time I told you what I know'. What do you want to know first?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('howDidIGetHere')");
			btn1.innerHTML = "How did I get here?";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('whatIsTheSilverArrow')");
			btn2.innerHTML = "What is the Silver Arrow?";
			break; 
			
case "howDidIGetHere":
			story = "'Your companion starts to explain. 'So this is basically a realm created by the leaders of a prominent buisness empire. It's pretty much a compilation of virtual reality and the perception of people in the real world. You probably came here after a queer business seminar like all of the other people in this world. Moral of the story: Don't drink the Kool-Aid. As for the Silver Arrow, It's more of a phenomenon than a tangible object. It's rumored to be some kind of EMP that fries the technology imprisoning your brain. We need it to get out of here. We should rest so we have a better chance of finding it.' ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('rest')");
			btn1.innerHTML = "Rest and prepare for the journey to come";
			break; 
			
case "whatIsTheSilverArrow":
			story = "'It's more of a phenomenon than a tangible object. Its rumored to be some kind of EMP that fries the technology imprisoning your brain. We need it to get out of here. We should rest so we have a better chance of finding it. And as for how you got here, this is basically a realm created by the leaders of a promindent buisness empire. It's pretty mcuh a compilation of virtual reality and the perception of people in the real world. You probably came here after a queer business seminar like all of the other people in this world. Moral of the story: Don't drink the Kool-Aid.' ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('rest')");
			btn1.innerHTML = "Rest and prepare for the journey to come";
			break; 

alert("GOAL: Find_Silver_Arrow")
case "rest":
			displayHearts();
			story = "You and you're companion rest in your secluded corner, discussing your game plan for the next day. You feel confident about the plan, but forget about that as the darkness of sleep envelops you.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('continueAgain')");
			btn1.innerHTML = "Continue";
			break; 

case "Checkpoint6":		
case "continueAgain":
			health = 5;
			displayHearts();
			story = "You wake up to the sound of your companion rifling through your supplies for the day. You start to pack as well, and decide that you will be heading out in a few moments. As you leave the building you are faced with a broken wooden fence and a white picket fence. Which will you choose?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('brokenFence')");
			btn1.innerHTML = "Broken Fence";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('whitePicketFence')");
			btn2.innerHTML = "White Picket Fence";
			break;
			
case "brokenFence":
			story = "You hop the fence lithely and with ease. Your companion is loaded with heavy bags and impales their leg on a splintered plank of wood. You stare at the wound in horror. Suddenly you see a strange glow at the edge of a cliff nearby. You grab your companion around the shoulders and make your way to the cliff.";
			health = 4;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('keepSearching')");
			btn1.innerHTML = "Go to edge of the cliff";
			
			break;
	
case "whitePicketFence":
			story = "You unlatch the gate of the fence and continue on your way. You head towards the dark forest ahead and arrive at a clearing. On your right, a startlingly blue baby bird hops down a dirt path. On your left, a trail of lush plant life leads off into the trees. Which way do you go?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('babyBird')");
			btn1.innerHTML = "Right, after the baby bird";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('plantLife')");
			btn2.innerHTML = "Left, towards the plants";
			break;
			
case "babyBird":
			story = "You follow the baby bird into a more humid part of the forest, where brightly colored birds flock in the trees. A very large red bird locks its beady eyes on you. Suddenly, a whirlwind of birds attacks you. There is nothing you and your companion can do as you are overrun. You're DEAD. Try again from the last checkpoint. ";
			health = 0;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint6')");
			btn1.innerHTML = "Return to last CHECKPOINT";
			break;

case"plantLife":
story = "You follow the trail of abundant plant life. It leads you to a cheerfully bubbling spring of water. You and your companion sit down to replenish your supplies. Do you continue to sit and rest or keep looking for the cliff on which the Silver Arrow is rumored to be located? ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('sitRest')");
			btn1.innerHTML = "Sit and rest";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('keepSearching')");
			btn2.innerHTML = "Keep searching";
			break;
			
case "sitRest":
			hunger = 5;
			displayBreads();
			story = "You and your companion blissfully relax at the edge of the pond into which the spring empties. Suddenly, you hear growls from the leafy foliage. A pack of furry creatures leaps out of the trees. There is no time to see what they are. Do you run away from them, or stay and fight?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('runFromFuzzies')");
			btn1.innerHTML = "Run from the creatures";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('fightFuzzies')");
			btn2.innerHTML = "Fight the creatures";
			break;
			
case "runFromFuzzies":
			story = "You and your companion attempt to run from the furry creatures, but one of them drops out of a tree, right on to you. Sorry, you're DEAD. Try again from the last CHECKPOINT.";
			health = 0;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint6')");
			btn1.innerHTML = "Return to last CHECKPOINT";
			break;
			
case "fightFuzzies":		
			story = "You and your companion draw your weapons, attempting to fight off the beasts. However, your companion is severely injured, while you have a large gash on your forehead. You grab onto a vine and snatch your partner with your other hand.";
			hunger = 3;
			displayBreads();
			health = 2;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('keepSearching')");
			btn1.innerHTML = "Continue to the cliff";
			break;

case "Checkpoint7":			
case "keepSearching":
			story = "You arrive at the cliff, where the Silver Arrow hovers over the ravine below. Your companion's health has deteriorated immensely. You are on your own.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('continue3')");
			btn1.innerHTML = "Continue";
			break;

//This is where the other two buttons come in. Only one choice will leave the player alive. The other three will either send up a GAME OVER alert or start the player back at the beginning.		
case "continue3":
			story = "You tell your companion to wait on the ground. You scan your surroundings, searching for something to swing yourself high enough to reach the Silver Arrow. You find a tree branch extending over the edge, steady enough to lasso a rope around and hold your weight. It takes a few tries to loop your rope around it, but you manage to make it into a sturdy fork in the tree trunk. You realize that your companion is groaning in pain and has rolled over to the edge of the cliff. Do you attempt to lean over and grab the Silver Arrow, lasso it, help your friend and come back for the Silver Arrow, or run away and search for another way out? You consider that running away may be the smartest decision, but are not entirely sure. What will you decide?  ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('grabArrow')");
			btn1.innerHTML = "Grab the Arrow";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('lassoArrow')");
			btn2.innerHTML = "Lasso the Arrow";
			btn3 = document.createElement("BUTTON");
			btn3.setAttribute("onClick", "displayStory('helpFriend')");
			btn3.innerHTML = "Help your friend";
			btn4 = document.createElement("BUTTON");
			btn4.setAttribute("onClick", "displayStory('runAway')");
			btn4.innerHTML = "Look for other escape options";
			break;
			

//This choice sends up the GAME OVER alert.
		case "grabArrow":
			story = "You lean over to grab the Silver Arrow, but a burning sensation rips through your body. You now realize that it is a plasma shield. You are DEAD. GAME OVER! Try again from the beginning when you are ready. ";
			health = 0;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('gameOver')");
			btn1.innerHTML = "GAME OVER";
			break;
			

//This choice sends up the GAME OVER alert.	
		case "lassoArrow":
			story = "You attempt to lasso the arrow with your rope. You are genuinely surprised when the arrow is neatly surrounded by your rope. You pull it up and reach out to touch the Silver Arrow. Suddenly, your head is filled with a blinding pain. Sorry, the EMP fried your brain. GAME OVER! Try again from the beginning when you are ready. ";
			health = 0;
			displayHearts();
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('gameOver')");
			btn1.innerHTML = "GAME OVER";
			break;
			
			
//This choice leads to the player winning the game.
		case "helpFriend":
			story = "You shake your head at the Silver Arrow and drop back down to the ground next to your companion. As soon as you reach out to touch their arm, a swirl surrounds you and you return to an appartment in New York City. All your memories are returned and you are glad to be back where you belong. Congratulations! YOU WIN!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('youWin')");
			btn1.innerHTML = "YOU WIN";
			break;
			

//This choice starts the character back at the beginning of the game.
	case "runAway":
			health = 5;
			displayHearts();
			hunger = 5;
			displayBreads();
			story = "You drop down to the ground and run past your injured companion. You head straight for the trees, but a swirl of darkness surrounds you. When you open your eyes, your worst nightmare has come true. You are back in the cave where you started.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('beginning')");
			btn1.innerHTML = "Return to the cave";
			break;
			
//This case sends out a GAME OVER alert.
	case "gameOver":
		alert("Sorry, you chose wrong. You will have to be wiser next time.");
		break;
	
	
//This case sends out a YOU WIN alert.	
	case"youWin":
		alert("Fantastic job! You won! You were honest, brave, and compassionate. You will make a great warrior someday.");
		break;
			
	} // end switch
	
	// change content on page
	document.getElementById("story").innerHTML = story;
    var buttons = document.getElementById("buttons");
    while (buttons.firstChild) {
      buttons.removeChild(buttons.firstChild);
    }
	document.getElementById("buttons").appendChild(btn1);
    document.getElementById("buttons").appendChild(btn2);
	document.getElementById("buttons").appendChild(btn3);
	document.getElementById("buttons").appendChild(btn4);
}

		