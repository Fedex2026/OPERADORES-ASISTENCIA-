/* ========================= */
/* ROAD ASSIST OPERADORES */
/* ========================= */

console.log(
"ROAD ASSIST OPERADOR"
);

/* ========================= */
/* DISPONIBLE / NO DISPONIBLE */
/* ========================= */

const operatorStatus =
document.getElementById(
"operatorStatus"
);

const toggleStatus =
document.getElementById(
"toggleStatus"
);

if(toggleStatus){

let active = true;

toggleStatus.addEventListener(
"click",
()=>{

active = !active;

if(active){

operatorStatus.innerHTML =
"🟢 Disponible";

operatorStatus.className =
"status available";

}else{

operatorStatus.innerHTML =
"🔴 No Disponible";

operatorStatus.className =
"status offline";

}

});

}

/* ========================= */
/* SERVICIO */
/* ========================= */

const estado =
document.getElementById(
"estado"
);

if(estado){

document
.getElementById("acceptBtn")
?.addEventListener(
"click",
()=>{

estado.innerHTML =
"ACEPTADO";

alert(
"Servicio aceptado"
);

});

document
.getElementById("rejectBtn")
?.addEventListener(
"click",
()=>{

estado.innerHTML =
"RECHAZADO";

alert(
"Servicio rechazado"
);

});

document
.getElementById("routeBtn")
?.addEventListener(
"click",
()=>{

estado.innerHTML =
"EN CAMINO";

});

document
.getElementById("arriveBtn")
?.addEventListener(
"click",
()=>{

estado.innerHTML =
"ARRIBO";

});

document
.getElementById("finishBtn")
?.addEventListener(
"click",
()=>{

estado.innerHTML =
"FINALIZADO";

alert(
"Servicio finalizado"
);

});

}

/* ========================= */
/* NAVEGACIÓN */
/* ========================= */

function goDashboard(){

window.location.href =
"dashboard.html";

}

function goServicio(){

window.location.href =
"servicio.html";

}

function goHistorial(){

window.location.href =
"historial.html";

}

function goPerfil(){

window.location.href =
"perfil.html";

}

/* ========================= */
/* LOGIN */
/* ========================= */

const loginBtn =
document.getElementById(
"loginBtn"
);

if(loginBtn){

loginBtn.addEventListener(
"click",
()=>{

window.location.href =
"dashboard.html";

});

}
