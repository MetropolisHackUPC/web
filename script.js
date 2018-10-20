var database = firebase.database();

function BuscaPregons() {
    /*var pregoRef = database.collection("prego");
    console.log(pregoRef.titol);
    console.log(pregoRef.descripcio)*/
    
    var ref = database.ref("prego/");
    ref.on("value", function(snapshot) {
    var arr = snapshot.val();
    var arr2 = Object.keys(arr);

    for (let i = 0; i < arr2.length; i++) {
      var key = arr2[i];

      ref = database.ref("prego/" + key);
      ref.on("value", function(snapshot) {
        nom = snapshot.val().titol;
        des = snapshot.val().descripcio;
        CreaPrego(nom,des);
      })
        }
    });

}

function BuscaIncidents() {
    /*var pregoRef = database.collection("prego");
    console.log(pregoRef.titol);
    console.log(pregoRef.descripcio)*/
    
    var ref = database.ref("incident/");
    ref.on("value", function(snapshot) {
    var arr = snapshot.val();
    var arr2 = Object.keys(arr);

    for (let i = 0; i < arr2.length; i++) {
      var key = arr2[i];

      ref = database.ref("incident/" + key);
      ref.on("value", function(snapshot) {
        nom = snapshot.val().titol;
        des = snapshot.val().descripcio;
        img = snapshot.val().imatge;
        grau = snapshot.val().grau;
        CreaIncidents(nom,des, img, grau);
      })
    }
    });
}

function CreaNouPrego() {
  nom = document.getElementById("TitolNou").value;
  des = document.getElementById("DescripcioNou").value;
  if (nom != "" && des != "") {
    AfegirFirebasePrego(nom, des);
    document.getElementById('linea').innerHTML = "";
    BuscaPregons();
  }

}

function AfegirFirebasePrego(nom, des) {
  database.ref('prego/'+nom).set({
    titol: nom,
    descripcio: des
  });
}

function CreaPrego(nom, des) {
  document.getElementById('linea').innerHTML += "";
  document.getElementById('linea').innerHTML +=
  `<div class="card mb-4 shadow-sm">
  <div class="card-header">
    <h4 class="my-0 font-weight-normal">${nom}</h4>
  </div>
  <div class="card-body">
      <li>${des}</li>
      <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>    </div>`;
}

function CreaIncident(nom, des, img, grau) {
    document.getElementById('linea').innerHTML += "";
    document.getElementById('linea').innerHTML +=
    `<div class="card mb-4 shadow-sm">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">${nom}</h4>
    </div>
    <div class="card-body">
        <li>${des}</li>
        <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>    </div>`;
  }