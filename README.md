# finalCapstone

# DIGITAL FITNESS JOURNAL

This project is a digital journal which stores a workout schedule, a tracker for the workouts and a weight loss tracker, a blog section to journal and a 'saved for later' section.

It allows the user to have a visual on their progress.

## Table of Contents
 [DIGITAL FITNESS JOURNAL](#digital-fitness-journal)
  * [Installation](#installation)
  * [Usage](#usage)

## Installation
Requires git to be installed in your local machine.

change directory to the desired working directory

```
git clone https://github.com/angl-l/finalCapstone
```

## Usage

```javascript
// change like button to 'liked' once clicked
let likeButtons = document.querySelectorAll('.like');
function updateLike (){
    likeButtons.forEach(function (btn){
        btn.addEventListener("click",function(){
            btn.innerHTML = "LIKED";
            btn.className = "liked";
        });

    });

}

// trigger click event once enter is pressed in input box
let input = document.querySelectorAll('#commentBox');
for(i = 0; i < input.length; i++){
    input[i].addEventListener('keyup', (e) =>{
        if(e.keyCode == 13){
             document.getElementById('post').click();
        }
    })

}
```

```HTML
<--create a radio form for user interaction -->
 <section class="radioForm">
    <h2>WHAT TYPE OF WORKOUT IS YOUR FAVOURITE TODAY?</h2>
    <form>
        <input type="radio" id="liss" name="fav_workout" value="LISS">
        <label for="liss">LISS</label><br>
        <input type="radio" id="hiit" name="fav_workout" value="HIIT">
        <label for="hiit">HIIT</label><br>
        <input type="radio" id="weights" name="fav_workout" value="Weights">
        <label for="weights">Weights</label>
    </form> 
    </section>
```
