let button = document.querySelector("#btn-submit");
// let l=document.querySelector("#location");
// let address=l.value;
let baseUrl = "https://nominatim.openstreetmap.org/search?";
button.addEventListener("click", async () => {
    let l = document.querySelector("#location");
    let address = l.value;
    let b=document.querySelector("body").children;
    let ele = document.querySelector(".inputfields");
    address = address.toLowerCase();
    address = encodeURIComponent(address);
    let response = await fetch(`${baseUrl}q=${address}&format=json`);
    console.log(response);
    if (response.ok) {
        let res = await response.json();
        console.log(res);
        if (res.length >=1) {
            if(b.length<=3 && b[b.length-1]!=`<h1>Latitude:${res[0].lat} Longitude:${res[0].lon} </h1>`){
            ele.insertAdjacentHTML("afterend", `<h1>Latitude:${res[0].lat} Longitude:${res[0].lon} </h1>`);
            }
        }
        else {
            if(b.length<=3 && b[b.length-1] != `<h1>ENTER ADDRESS MORE ACURATELY!!!!</h1>`)
            {
            ele.insertAdjacentHTML("afterend", `<h1>ENTER ADDRESS MORE ACURATELY!!!!</h1>`);
            }
        }
        
    }
    else
    {
        if(b.length<=3 && b[b.length-1] != `<h1>FETCHING ERROR!!!!</h1>`)
        {
        ele.insertAdjacentHTML("afterend", `<h1>FETCHING ERROR!!!!</h1>`);
        }
    }
});
