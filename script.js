
var butt = document.getElementById("myButton");
if(butt){
    butt.addEventListener("click", function(){
        let data = getInfo();
    
        //get info about percentage of peeps that like it
    
        //change values
        updateValues(data)
    });
}else{
    console.log("it don't exist");
}


async function getInfo() {
     let queryOptions = { active: true, lastFocusedWindow: true };
     // `tab` will either be a `tabs.Tab` instance or `undefined`.
     let [tab] = await chrome.tabs.query(queryOptions);
     var data = fetchAsync(tab.url);
     return data;
}
    

async function fetchAsync (url) {
    const settings = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url
    };
    console.log(settings.url)
    let response = await fetch(`http://127.0.0.1:8000/courses/`, settings);
    let data = await response.json();
    return data;
}

async function updateValues (data) {
    document.getElementById("prosText").innerText = "50%";
    document.getElementById("lovers").style.width = "50%";

    document.getElementById("consText").innerText = "50%";
    document.getElementById("neutrals").style.width = "50%";
}