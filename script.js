
var butt = document.getElementById("myButton");
if(butt){
    butt.addEventListener("click", function(){
        let url = getCurrentTab();
        console.log(url);
        
        //send backend a request
        let data = fetchAsync (url);
    
        //get info about percentage of peeps that like it
    
        //change values
        document.getElementById("percent").innerText = "30%";
        document.getElementById("percent").style.width = "50%";
    });
}else{
    console.log("it don't exist");
}


async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}