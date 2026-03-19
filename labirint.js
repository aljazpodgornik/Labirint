
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
ctx.scale(2,2);
let solutionAnimating = false;
let solutionIndex = 0;
let solutionSegmentProgress = 0;
const SOLUTION_SPEED = 2.2;
const WALL_COLOR = "#2e6fb6";
const WALL_RGB = { r: 46, g: 111, b: 182 };


function labirint(){
ctx.beginPath();
    ctx.lineCap="square";
    ctx.lineWidth=2;
    ctx.moveTo(2,2);
    ctx.lineTo(114,2);

    ctx.moveTo(130,2);
    ctx.lineTo(242,2);

    ctx.moveTo(34,18);
    ctx.lineTo(82,18);

    ctx.moveTo(162,18);
    ctx.lineTo(178,18);

    ctx.moveTo(210,18);
    ctx.lineTo(226,18);

    ctx.moveTo(18,34);
    ctx.lineTo(66,34);

    ctx.moveTo(82,34);
    ctx.lineTo(98,34);

    ctx.moveTo(114,34);
    ctx.lineTo(130,34);

    ctx.moveTo(146,34);
    ctx.lineTo(194,34);

    ctx.moveTo(210,34);
    ctx.lineTo(226,34);

    ctx.moveTo(18,50);
    ctx.lineTo(66,50);

    ctx.moveTo(98,50);
    ctx.lineTo(146,50);

    ctx.moveTo(162,50);
    ctx.lineTo(210,50);

    ctx.moveTo(34,66);
    ctx.lineTo(50,66);

    ctx.moveTo(82,66);
    ctx.lineTo(98,66);

    ctx.moveTo(162,66);
    ctx.lineTo(178,66);

    ctx.moveTo(210,66);
    ctx.lineTo(226,66);

    ctx.moveTo(18,82);
    ctx.lineTo(34,82);

    ctx.moveTo(98,82);
    ctx.lineTo(114,82);

    ctx.moveTo(146,82);
    ctx.lineTo(162,82);

    ctx.moveTo(178,82);
    ctx.lineTo(194,82);

    ctx.moveTo(226,82);
    ctx.lineTo(242,82);

    ctx.moveTo(66,98);
    ctx.lineTo(146,98);

    ctx.moveTo(162,98);
    ctx.lineTo(178,98);

    ctx.moveTo(194,98);
    ctx.lineTo(242,98);

    ctx.moveTo(2,114);
    ctx.lineTo(34,114);

    ctx.moveTo(82,114);
    ctx.lineTo(98,114);

    ctx.moveTo(146,114);
    ctx.lineTo(178,114);

    ctx.moveTo(210,114);
    ctx.lineTo(226,114);

    ctx.moveTo(18,130);
    ctx.lineTo(50,130);

    ctx.moveTo(130,130);
    ctx.lineTo(162,130);

    ctx.moveTo(178,130);
    ctx.lineTo(210,130);

    ctx.moveTo(2,146);
    ctx.lineTo(18,146);

    ctx.moveTo(66,146);
    ctx.lineTo(114,146);

    ctx.moveTo(146,146);
    ctx.lineTo(178,146);

    ctx.moveTo(210,146);
    ctx.lineTo(226,146);

    ctx.moveTo(2,162);
    ctx.lineTo(18,162);

    ctx.moveTo(50,162);
    ctx.lineTo(82,162);

    ctx.moveTo(130,162);
    ctx.lineTo(226,162);

    ctx.moveTo(34,178);
    ctx.lineTo(50,178);

    ctx.moveTo(66,178);
    ctx.lineTo(82,178);

    ctx.moveTo(114,178);
    ctx.lineTo(130,178);

    ctx.moveTo(194,178);
    ctx.lineTo(210,178);

    ctx.moveTo(50,194);
    ctx.lineTo(66,194);

    ctx.moveTo(82,194);
    ctx.lineTo(146,194);

    ctx.moveTo(210,194);
    ctx.lineTo(226,194);

    ctx.moveTo(18,210);
    ctx.lineTo(50,210);

    ctx.moveTo(66,210);
    ctx.lineTo(82,210);

    ctx.moveTo(162,210);
    ctx.lineTo(226,210);

    ctx.moveTo(2,226);
    ctx.lineTo(18,226);

    ctx.moveTo(82,226);
    ctx.lineTo(130,226);

    ctx.moveTo(146,226);
    ctx.lineTo(194,226);

    ctx.moveTo(226,226);
    ctx.lineTo(242,226);

    ctx.moveTo(2,242);
    ctx.lineTo(114,242);

    ctx.moveTo(130,242);
    ctx.lineTo(242,242);

    ctx.moveTo(2,2);
    ctx.lineTo(2,242);

    ctx.moveTo(18,18);
    ctx.lineTo(18,34);

    ctx.moveTo(18,50);
    ctx.lineTo(18,98);

    ctx.moveTo(18,178);
    ctx.lineTo(18,210);

    ctx.moveTo(34,82);
    ctx.lineTo(34,114);

    ctx.moveTo(34,130);
    ctx.lineTo(34,146);

    ctx.moveTo(34,162);
    ctx.lineTo(34,194);

    ctx.moveTo(34,210);
    ctx.lineTo(34,226);

    ctx.moveTo(50,66);
    ctx.lineTo(50,162);

    ctx.moveTo(50,178);
    ctx.lineTo(50,226);

    ctx.moveTo(66,34);
    ctx.lineTo(66,146);

    ctx.moveTo(66,162);
    ctx.lineTo(66,178);

    ctx.moveTo(66,194);
    ctx.lineTo(66,242);

    ctx.moveTo(82,18);
    ctx.lineTo(82,66);

    ctx.moveTo(82,82);
    ctx.lineTo(82,98);

    ctx.moveTo(82,114);
    ctx.lineTo(82,130);

    ctx.moveTo(82,178);
    ctx.lineTo(82,194);

    ctx.moveTo(98,2);
    ctx.lineTo(98,34);

    ctx.moveTo(98,114);
    ctx.lineTo(98,178);

    ctx.moveTo(98,194);
    ctx.lineTo(98,226);

    ctx.moveTo(114,2);
    ctx.lineTo(114,18);

    ctx.moveTo(114,50);
    ctx.lineTo(114,82);

    ctx.moveTo(114,98);
    ctx.lineTo(114,130);

    ctx.moveTo(114,146);
    ctx.lineTo(114,162);

    ctx.moveTo(114,178);
    ctx.lineTo(114,210);

    ctx.moveTo(130,18);
    ctx.lineTo(130,50);

    ctx.moveTo(130,66);
    ctx.lineTo(130,98);

    ctx.moveTo(130,114);
    ctx.lineTo(130,178);

    ctx.moveTo(130,210);
    ctx.lineTo(130,242);

    ctx.moveTo(146,2);
    ctx.lineTo(146,18);

    ctx.moveTo(146,50);
    ctx.lineTo(146,82);

    ctx.moveTo(146,98);
    ctx.lineTo(146,114);

    ctx.moveTo(146,178);
    ctx.lineTo(146,226);

    ctx.moveTo(162,18);
    ctx.lineTo(162,34);

    ctx.moveTo(162,50);
    ctx.lineTo(162,66);

    ctx.moveTo(162,82);
    ctx.lineTo(162,98);

    ctx.moveTo(162,130);
    ctx.lineTo(162,146);

    ctx.moveTo(162,162);
    ctx.lineTo(162,194);

    ctx.moveTo(178,66);
    ctx.lineTo(178,82);

    ctx.moveTo(178,98);
    ctx.lineTo(178,130);

    ctx.moveTo(178,178);
    ctx.lineTo(178,210);

    ctx.moveTo(194,2);
    ctx.lineTo(194,34);

    ctx.moveTo(194,50);
    ctx.lineTo(194,66);

    ctx.moveTo(194,82);
    ctx.lineTo(194,114);

    ctx.moveTo(194,130);
    ctx.lineTo(194,146);

    ctx.moveTo(194,178);
    ctx.lineTo(194,210);

    ctx.moveTo(210,18);
    ctx.lineTo(210,34);

    ctx.moveTo(210,66);
    ctx.lineTo(210,98);

    ctx.moveTo(210,146);
    ctx.lineTo(210,162);

    ctx.moveTo(210,226);
    ctx.lineTo(210,242);

    ctx.moveTo(226,34);
    ctx.lineTo(226,66);

    ctx.moveTo(226,114);
    ctx.lineTo(226,146);

    ctx.moveTo(226,162);
    ctx.lineTo(226,210);

    ctx.moveTo(242,2);
    ctx.lineTo(242,242);
    ctx.fill();
    ctx.strokeStyle=WALL_COLOR;
    ctx.stroke();
}

var x = 120;
var y = 0;
var starx = 120;
var stary = 0;
var size = 5; 
var speed = 2;
var igralecVid = false; 
var totalTime = 180; 
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var autoBtn = document.getElementById("autoBtn");
var timerInterval;
let alertLock = false;

function showToast(icon, title){
    if(!window.Swal || alertLock) return;
    alertLock = true;

    Swal.fire({
        toast: true,
        position: "top",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1300,
        timerProgressBar: true,
        didClose: () => {
            alertLock = false;
        }
    });
}

function showWinAlert(){
    if(!window.Swal) return;
    Swal.fire({
        icon: "success",
        title: "Bravo!",
        text: "Uspešno si rešil labirint.",
        confirmButtonText: "Nova igra"
    });
}

function resetPlayer(){
    x = starx;
    y = stary;
}

function isGoalReached(){
    return y + size >= 241 && x >= 114 && x <= 130;
}

function isWithinBounds(nx, ny){
    return nx >= 0 && ny >= 0 && nx + size <= 242 && ny + size <= 242;
}

function refreshTimerDisplay(){
    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;
    timerEl.textContent =
        (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}

function setSolutionMode(active){
    startBtn.disabled = active;
}

function jeStena(nx, ny){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            let d = ctx.getImageData((nx+i)*2, (ny+j)*2, 1, 1).data;
            if(
                Math.abs(d[0] - WALL_RGB.r) <= 10 &&
                Math.abs(d[1] - WALL_RGB.g) <= 10 &&
                Math.abs(d[2] - WALL_RGB.b) <= 10
            ){
                return true; 
            }
        }
    }
    return false; 
}

document.addEventListener("keydown", function(e){
    if(!igralecVid || solutionAnimating) return;
    let nx = x, ny = y;
    let isMoveKey = false;

    if(e.key === "w" || e.key === "W" || e.key === "ArrowUp"){
        ny -= speed;
        isMoveKey = true;
    }
    if(e.key === "s" || e.key === "S" || e.key === "ArrowDown"){
        ny += speed;
        isMoveKey = true;
    }
    if(e.key === "a" || e.key === "A" || e.key === "ArrowLeft"){
        nx -= speed;
        isMoveKey = true;
    }
    if(e.key === "d" || e.key === "D" || e.key === "ArrowRight"){
        nx += speed;
        isMoveKey = true;
    }

    if(isMoveKey) e.preventDefault();
    if(!isMoveKey) return;
    if(!isWithinBounds(nx, ny)) return;

    if(!jeStena(nx, ny)){
        x = nx;
        y = ny;
        if(isGoalReached()){
            igralecVid = false;
            if(timerInterval) clearInterval(timerInterval);
            showWinAlert();
            resetPlayer();
            totalTime = 180;
            refreshTimerDisplay();
        }
    }
    else{
        resetPlayer();
        totalTime = 180;
        showToast("warning", "Zadel si steno!");
        refreshTimerDisplay();
    }
});
function drawIt(){
    ctx.clearRect(0,0,500,500);
    labirint();

    if(igralecVid){
        ctx.fillStyle="black";
        ctx.fillRect(x, y, size, size);
    }

    drawSolutionStep(); 
}
autoBtn.addEventListener("click", () => {
    if(solutionAnimating) return;
    igralecVid = false;
    if(timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
    }
    setSolutionMode(true);
    solutionIndex = 0;
    solutionSegmentProgress = 0;
    solutionAnimating = true;
});


function updateTimer(){
    if(totalTime > 0){
        totalTime--;
    } else {
        resetPlayer();
        totalTime = 180;
        showToast("error", "Čas je potekel!");
    }
    refreshTimerDisplay();
}

setInterval(drawIt, 25);
startBtn.addEventListener("click", function(){
    if(solutionAnimating){
        showToast("info", "Počakaj, da se rešitev izriše.");
        return;
    }
    igralecVid = true;
    totalTime = 180;
    resetPlayer();
    refreshTimerDisplay();
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    showToast("info", "Igra se je začela!");
});


const solutionPoints =
"122,2 122,10 138,10 138,42 154,42 154,74 170,74 170,90 186,90 186,122 218,122 218,138 202,138 202,154 186,154 186,138 170,138 170,122 138,122 138,106 122,106 122,170 106,170 106,186 90,186 90,154 58,154 58,58 26,58 26,74 42,74 42,122 10,122 10,138 26,138 26,154 42,154 42,170 58,170 58,186 74,186 74,202 90,202 90,218 74,218 74,234 122,234 122,242";

const path = solutionPoints
    .split(" ")
    .map(p => p.split(",").map(Number));

const pathSegments = path.slice(0, -1).map((point, i) => {
    const next = path[i + 1];
    const dx = next[0] - point[0];
    const dy = next[1] - point[1];
    return {
        dx: dx,
        dy: dy,
        length: Math.hypot(dx, dy)
    };
});


function drawSolutionStep(){
    if(!solutionAnimating) return;

    ctx.beginPath();
    ctx.strokeStyle = "#5f8cff";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(let i = 0; i <= solutionIndex && i < path.length; i++){
        const [sx, sy] = path[i];
        if(i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
    }

    if(solutionIndex < pathSegments.length){
        const [sx, sy] = path[solutionIndex];
        const segment = pathSegments[solutionIndex];
        const ratio = segment.length === 0 ? 1 : Math.min(solutionSegmentProgress / segment.length, 1);
        const px = sx + segment.dx * ratio;
        const py = sy + segment.dy * ratio;
        ctx.lineTo(px, py);
    }

    ctx.stroke();

    solutionSegmentProgress += SOLUTION_SPEED;

    while(solutionIndex < pathSegments.length && solutionSegmentProgress >= pathSegments[solutionIndex].length){
        solutionSegmentProgress -= pathSegments[solutionIndex].length;
        solutionIndex++;
    }

    if(solutionIndex >= pathSegments.length){
        solutionAnimating = false;
        setSolutionMode(false);
    }
}
