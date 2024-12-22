var count = 0;

// Function to load and replace a container with an external HTML file
async function loadExternalHTML(containerId, filePath) {
    const container = document.getElementById(containerId);

        
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error("Failed to load content.");
        }
        
        const content = await response.text();
        if(container) {
           container.innerHTML = content;
          
        }
     
}


function loginDisplay(){
  
    if(count == 0 && sessionStorage.getItem('login')) {

        loadExternalHTML("leftContainer","./HTML/"+sessionStorage.getItem('userType')+"/sideBar.html");


      
        count++;
    }

}
  
function route(fileName) {
 
    loadExternalHTML("contentWindow",fileName);
   
    
    
}


// Load all containers with external files
function initializeSPA() {
    
    loadExternalHTML("leftContainer", "./HTML/common/sideBar.html");
    loadExternalHTML("navigation", "./HTML/common/navBar.html");
    loadExternalHTML("contentWindow", "./HTML/common/home.html"); // Default page
  
    

    
 }



// Initialize the SPA on page load
document.addEventListener("DOMContentLoaded", initializeSPA,setInterval(loginDisplay,100));

