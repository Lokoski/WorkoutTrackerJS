const addWorkouts = document.querySelector(".add-workouts");
let workouts = [];
const days = document.querySelector("#days");


// Add workouts
function addWorkout(e){
    e.preventDefault();
    const text = this.querySelector("[name=exercise]").value;
    const reps = this.querySelector("[name=reps]").value;
    const weight = this.querySelector("[name=weight]").value;
    const sets = this.querySelector("[name=sets]").value;
    const workout = {
        text: text,
        reps: reps,
        weight: weight,
        sets: sets,
    }

    workouts.push(workout)
    listWorkouts(workouts)
    workouts = []
    this.reset()

}

function listWorkouts(workouts){
    var x = document.querySelector("#days").selectedIndex;
    let optionText = document.getElementsByTagName("option")[x].innerText;


    switch(optionText){
        case "Monday":
            let containerM = document.getElementById('mondayC')
            let divM = document.createElement('div')
            divM.innerHTML = workouts.map((workout) => (
                `<span class="innerContainer">
                             <h3>${workout.text}</h3>
                             <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                          </span>`
                          
            ))
            containerM.appendChild(divM)
            document.getElementById('btn').onclick = function() {
                divM.remove()
            }
                
            break;

        case "Tuesday":
            let containerT = document.getElementById('tuesdayC')
            let divT = document.createElement('div')
            divT.innerHTML = workouts.map((workout) => (
                `<span class="innerContainer">
                             <h3>${workout.text}</h3>
                             <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                          </span>`
                          
            ))
            containerT.appendChild(divT)
            document.getElementById('btn').onclick = function() {
                divT.remove()
            }
            break;

            case "Wednesday":
                let containerW = document.getElementById('wednesdayC')
                let divW = document.createElement('div')
                divW.innerHTML = workouts.map((workout) => (
                    `<span class="innerContainer">
                                 <h3>${workout.text}</h3>
                                 <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                              </span>`
                              
                ))
                containerW.appendChild(divW)
                document.getElementById('btn').onclick = function() {
                    divW.remove()
                }
            break;

            case "Thursday":
                let containerTh = document.getElementById('thursdayC')
                let divTh = document.createElement('div')
                divTh.innerHTML = workouts.map((workout) => (
                    `<span class="innerContainer">
                                 <h3>${workout.text}</h3>
                                 <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                              </span>`
                              
                ))
                containerTh.appendChild(divTh)
                document.getElementById('btn').onclick = function() {
                    divTh.remove()
                }
                break;

                case "Friday":
                    let containerF = document.getElementById('fridayC')
                    let divF = document.createElement('div')
                    divF.innerHTML = workouts.map((workout) => (
                        `<span class="innerContainer">
                                     <h3>${workout.text}</h3>
                                     <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                                  </span>`
                                  
                    ))
                    containerF.appendChild(divF)
                    document.getElementById('btn').onclick = function() {
                        divF.remove()
                    }
            break;

            case "Saturday":
                let containerS = document.getElementById('saturdayC')
                let divS = document.createElement('div')
                divS.innerHTML = workouts.map((workout) => (
                    `<span class="innerContainer">
                                 <h3>${workout.text}</h3>
                                 <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                              </span>`
                              
                ))
                containerS.appendChild(divS)
                document.getElementById('btn').onclick = function() {
                    divS.remove()
                }
            break;

            case "Sunday":
                let containerSun = document.getElementById('sundayC')
                let divSun = document.createElement('div')
                divSun.innerHTML = workouts.map((workout) => (
                    `<span class="innerContainer">
                                 <h3>${workout.text}</h3>
                                 <p>${workout.sets}/${workout.reps}/${workout.weight}lbs <button class="delete" id="btn">X</button></p>
                              </span>`
                              
                ))
                containerSun.appendChild(divSun)
                document.getElementById('btn').onclick = function() {
                    divSun.remove()
                }
            break;
            default:
                return;
        
    }
}

addWorkouts.addEventListener("submit", addWorkout);
listWorkouts(workouts)