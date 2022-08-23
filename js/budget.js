const data = [
    {
        id: 1,
        name: "Lionel Messi",
        image: "./images/player-1.png",
    },
    {
        id: 2,
        name: "Neymar Jr",
        image: "./images/player-2.png",
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        image: "./images/player-3.png",
    },
    {
        id: 4,
        name: "Vítor Machado",
        image: "./images/player-4.png",
    },
    {
        id: 5,
        name: "Sergio Ramos",
        image: "./images/player-5.png",
    },
    {
        id: 6,
        name: "Renato Sanches",
        image: "./images/player-6.png",
    }
]

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerFiled = document.getElementById('per-player-filed');
    const newPerPlayerAmountString = perPlayerFiled.value;
    const perPlayerAmount = parseFloat(newPerPlayerAmountString);
    perPlayerFiled.value = '';

    // ------------calculate player expenses---------------

    const playerExpensesTotalElement = document.getElementById('player-expenses-total');
    const previousPlayerExpensesTotalString = playerExpensesTotalElement.innerText;
    const previousPlayerExpensesTotal = parseFloat(previousPlayerExpensesTotalString);

    const newPreviousPlayerExpenses = perPlayerAmount * 5;
    playerExpensesTotalElement.innerText = newPreviousPlayerExpenses;
})
// ------------------calculate Total----------
function getInputFiledValueById(inputFiledId) {
    const inputFiled = document.getElementById(inputFiledId);
    const previousInputFiledValueString = inputFiled.value;
    const previousInputFiledValue = parseInt(previousInputFiledValueString);

    return previousInputFiledValue;
}

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpensesTotalElement = document.getElementById('player-expenses-total');
    const managerField = document.getElementById("manager-field");
    const coachField = document.getElementById("coach-field");
    const playerExpenses = document.getElementById("player-expenses-total");

    const newManagerAmount = getInputFiledValueById('manager-field');
    const newCoachAmount = getInputFiledValueById('coach-field');
    console.log(newManagerAmount, newCoachAmount);
    const managerAndCoach = newManagerAmount + newCoachAmount;
    const total = parseInt(playerExpensesTotalElement.innerText) + managerAndCoach;
    console.log(total);
    const lastTotal = document.getElementById('total');
    lastTotal.innerText = total;
    managerField.value = '';
    coachField.value = '';
    playerExpenses.innerText = 0;
})

function getPlayer() {

    const playerContainer = document.getElementById("player-container");
    

    console.log(data);
    data.forEach(function (player) {

        const div = document.createElement("div")
    div.classList.add('players', 'border-inherit');

        div.innerHTML = `<div class="player">
            <div class="player-banner ">
                <img class="w-full" src=${player.image} alt="">
            </div>
            <div class="player-info p-6 text-center">
                <h2  class="text-white text-2xl my-3 ">${player.name}</h2>
                <button id="btn-select" class="icon-one text-white bg-blue-500 w-full py-2">Select</button>
            </div>
        </div>`
    })
    playerContainer.appendChild(div)


}

getPlayer()

document.getElementById('btn-select').addEventListener('click', function () {

})

