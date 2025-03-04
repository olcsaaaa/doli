function loadXml(){
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "food_menu.xml", true)
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4&&xhr.status==200){
            const doc = this.responseXML;
            const breakfast_menu = doc.getElementsByTagName("breakfast_menu")[0];
            const food = breakfast_menu.getElementsByTagName("food");
            let foodNames = [];

            for (let i = 0; i < food.length; i++) {
                const item = food[i];
                let name = item.getElementsByTagName("name")[0].childNodes[0].nodeValue
                if(name.includes("Belgian")){
                    foodNames.push(name);
                }
            }
            foodNames= foodNames.sort()
        let cont = "";
        for (let i = 0; i < foodNames.length; i++) {
            const item = foodNames[i];
            cont += item
            if(i<foodNames.length-1){
                cont+=", "
            }
            
        }
        cont.trimEnd()
        document.getElementById("XmlContent").innerHTML = cont

        }
        }
    xhr.send();
}

function loadJson(){

    let countries =document.getElementById("contentFromJSON")
    countries.display = "none"
    let req = new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v3.1/all",true)
    req.onreadystatechange = function (){
        const obj =  JSON.parse(this.responseText);
        countries.innerHTML =
            "<ul>"
        obj.forEach((item)=>{
            if(item.continents.includes("Africa")){
            countries.innerHTML +=`<li>${item.translations.hun.official}</li>`
            }
        })
    }
    countries.innerHTML += "</ul>"
    countries.display = "block"
    req.send()
}