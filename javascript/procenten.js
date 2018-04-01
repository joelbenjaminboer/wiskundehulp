function antwoordcheck() {
  var totaal = 0
  var fouten = 0
  var vraag1 = document.getElementById("C1").checked
  var vraag3 = document.getElementById('C2').checked
  if(vraag1) {
    totaal += 25
    document.getElementById('vraag1container').classList.add("groen");
  }
  else {
    fouten += 1
    document.getElementById('vraag1container').classList.add("rood");
  }

  var vraag2 = document.getElementById('vraag2').value
  vraag2 = parseInt(vraag2)
  if (vraag2 === 47) {
    totaal += 25
    document.getElementById('vraag2container').classList.add("groen");
  } else {
    fouten += 1
    document.getElementById('vraag2container').classList.add("rood");
  }

  if(vraag3) {
    totaal += 25
    document.getElementById('vraag3container').classList.add("groen");
  }
  else {
    fouten += 1
    document.getElementById('vraag3container').classList.add("rood");
  }

  var vraag4 = document.getElementById("vraag4").value
  vraag4 = parseInt(vraag4)
  if (vraag4 === 30) {
    totaal += 25
    document.getElementById('vraag4container').classList.add("groen");
  } else {
    fouten += 1
    document.getElementById('vraag4container').classList.add("rood");
  }
  console.log(totaal)
  console.log(fouten)
  document.getElementById('score').innerHTML="goed: " + totaal
  document.getElementById('fouten').innerHTML="fouten: " + fouten
}
