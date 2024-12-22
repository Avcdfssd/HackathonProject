function displayContents(val){
    
     
    const login = sessionStorage.getItem('login');
    const userType = sessionStorage.getItem('userType');
    const username = sessionStorage.getItem('username');

   
    $.ajax({

         url:'PHP/contentInfo.php',
        method:'POST',
        data : {
          value : val,
          login:login,
          userType:userType,
          username: username
        },
    
        success:response=>{
          
            if(!login)
            {

            
            switch(val) {
                case 0 : {
                    openDialog(response);
                    break;
                }

                case 3:{
                const parts=response.split('+');
                const part1=parts[0].split('-');
                const part2=parts[1].split('-');
                console.log('Part 1:',part1);
                console.log('Part 2:',part2);
                

                for(let i = 1; i < part1.length; i++) {
                      addDiseaseCase(part1[i],part2[i]);
                }

                break;
                }
            }
           
        }

        
       if(login) {
             
        if(userType == "users"){
            switch(val) {

            case 0: {
                openDialog(response);

                break;
            }

            case 1: {
               

                break;
            }
                 
            case 2: {
                
                if(response) {
                   console.log(response);
                    const parts = response.split('=');
                    const ids = parts[0].split('+');
                    const names = parts[1].split('+');
                    
                    const infos = parts[2].split('+');
                    const dates = parts[3].split('+');
                    const times = parts[4].split('+');

                  
    
                    for (let i = 1; i < ids.length; i++) {

                      
                        const row = document.createElement('tr');

                        const idCell = document.createElement('td');
                        idCell.innerText = ids[i];
                        row.appendChild(idCell);

                        const nameCell = document.createElement('td');
                        nameCell.innerText = names[i];
                        row.appendChild(nameCell);

                        const statusCell = document.createElement('td');
                        statusCell.innerText = infos[i];
                        row.appendChild(statusCell);

                        const dateCell = document.createElement('td');
                        dateCell.innerText = dates[i];
                        row.appendChild(dateCell);

                        const timeCell = document.createElement('td');
                        timeCell.innerText = times[i];
                        row.appendChild(timeCell);

                        document.getElementById('reportStatusTable').appendChild(row);
                        if (infos[i] != 'pending') {
                            const actionCell = document.createElement('td');
                            const actionButton = document.createElement('div');
                            actionButton.innerText = 'SHOW';
                            actionButton.style.color = 'white';
                            actionButton.style.backgroundColor = 'blue';
                            actionButton.style.padding = '5px 10px';
                            actionButton.style.borderRadius = '5px';
                            actionButton.style.cursor = 'pointer';
                            
                            actionButton.onclick = () => {
                                document.getElementById('reportSection').style.display = 'block';
                                document.getElementById('reportContent').innerText = '';
                            const closeButton = document.createElement('button');
                            closeButton.innerText = 'X';
                            closeButton.style.position = 'absolute';
                            closeButton.style.top = '10px';
                            closeButton.style.right= '10px';
                            closeButton.style.backgroundColor = 'red';
                            closeButton.style.color = 'white';
                            closeButton.style.border = 'none';
                            closeButton.style.padding = '5px 10px';
                            closeButton.style.cursor = 'pointer';
                            closeButton.style.borderRadius = '5px';
                            closeButton.onclick = () => {
                                document.getElementById('reportSection').style.display = 'none';
                            };
                            document.getElementById('reportSection').appendChild(closeButton);
                            };
                            actionCell.style.border = 'none'; // Remove the border from the td
                            actionCell.appendChild(actionButton);
                            row.appendChild(actionCell);
                        }
                    }
                    

            
                }

                break;
            }
                 
            case 3: {
               

                break;
            }
                 
            case 4: {
               

                break;
            }
                 
            case 5: {
               

                break;
            }
                 
            case 6: {
               

                break;
            }
                 
            case 7: {
                if(response) {
                const parts=response.split('+');
                const part1=parts[0].split('-');
                const part2=parts[1].split('-');
              

                for(let i = 1; i < part1.length; i++) {
                      addDiseaseCase(part1[i],part2[i]);
                }
                }
               

                break;
            }
                 
            case 8: {
               

                break;
            }
                 
            case 9: {
               

                break;
            }
            case 10: {
               

                break;
            }
            case 11: {
               

                break;
            }
                 
        }
       }

       if(userType == "doctor") {
        switch(val) {

            case 0: {
                openDialog(response);

                break;
            }

            case 1: {
               
                if(response) {
                    console.log(response);
                     const parts = response.split('=');
                     const ids = parts[0].split('+');
                     const names = parts[1].split('+');
                     
                     const infos = parts[2].split('+');
                     const dates = parts[3].split('+');
                     const times = parts[4].split('+');
 
                   
     
                     for (let i = 1; i < ids.length; i++) {
 
                       
                         const row = document.createElement('tr');
 
                         const idCell = document.createElement('td');
                         idCell.innerText = ids[i];
                         row.appendChild(idCell);
 
                         const nameCell = document.createElement('td');
                         nameCell.innerText = names[i];
                         row.appendChild(nameCell);
 
                         const statusCell = document.createElement('td');
                         statusCell.innerText = infos[i];
                         row.appendChild(statusCell);
 
                         const dateCell = document.createElement('td');
                         dateCell.innerText = dates[i];
                         row.appendChild(dateCell);
 
                         const timeCell = document.createElement('td');
                         timeCell.innerText = times[i];
                         row.appendChild(timeCell);
 
                         document.getElementById('reportStatusTable').appendChild(row);
                         if (infos[i] != 'pending') {
                             const actionCell = document.createElement('td');
                             const actionButton = document.createElement('div');
                             actionButton.innerText = 'SHOW';
                             actionButton.style.color = 'white';
                             actionButton.style.backgroundColor = 'blue';
                             actionButton.style.padding = '5px 10px';
                             actionButton.style.borderRadius = '5px';
                             actionButton.style.cursor = 'pointer';
                             
                             actionButton.onclick = () => {
                                 document.getElementById('reportSection').style.display = 'block';
                                 document.getElementById('inputContent').innerText = '';
                             const closeButton = document.createElement('button');
                             closeButton.innerText = 'X';
                             closeButton.style.position = 'absolute';
                             closeButton.style.top = '10px';
                             closeButton.style.right= '10px';
                             closeButton.style.backgroundColor = 'red';
                             closeButton.style.color = 'white';
                             closeButton.style.border = 'none';
                             closeButton.style.padding = '5px 10px';
                             closeButton.style.cursor = 'pointer';
                             closeButton.style.borderRadius = '5px';
                             closeButton.onclick = () => {
                                 document.getElementById('reportSection').style.display = 'none';
                             };
                             document.getElementById('reportSection').appendChild(closeButton);
                             };
                             actionCell.style.border = 'none'; // Remove the border from the td
                             actionCell.appendChild(actionButton);
                             row.appendChild(actionCell);
                         }
                     }
                     
 
             
                 }

                break;
            }
       }
    
       }
    }
}  
});
}




// Function to open the dialogBox
function openDialog(message) {
    document.getElementById('dialogContent').innerText = message;
    document.getElementById('dialogBox').style.display = 'block';
    document.getElementById('dialogBoxOverlay').style.display = 'block';
}

// Function to close the dialogBox
function closeDialog() {
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById('dialogBoxOverlay').style.display = 'none';
}






// Function to handle navigation and update the active class
function handleNavigation(event) {
    // Remove the active class from all nav-links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked nav-link
    event.target.classList.add('active');
}

// Add event listeners to all nav-links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavigation);
});







function checkUserLogin() {
    const userLogin = document.getElementById('userlogin');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const profileImage = document.getElementById('profile');

    // Simulate a check for user login status
    const isLoggedIn =sessionStorage.getItem('login'); // Replace with actual login check

    if (isLoggedIn) {
        userLogin.style.display = 'none';
        usernameDisplay.style.display = 'inline';
        profileImage.style.display = 'inline';
        usernameDisplay.innerText = sessionStorage.getItem('username');

        



    } else {
        userLogin.style.display = 'inline';
        usernameDisplay.style.display = 'none';
        profileImage.style.display = 'none';
    }
}











// Call the function to check user login status on page load
document.addEventListener('DOMContentLoaded', checkUserLogin);
// Function to periodically check user login status
function periodicLoginCheck() {
    setInterval(checkUserLogin, 1); // Check every 5 seconds
}

// Call the function to start periodic login checks on page load
document.addEventListener('DOMContentLoaded', periodicLoginCheck);


function addDiseaseCase(name, count) {
    const registeredCases = document.getElementById('cases');

    const diseaseDiv = document.createElement('div');
    diseaseDiv.className = 'disease';

    const diseaseNameDiv = document.createElement('div');
    diseaseNameDiv.className = 'diseaseName';
    diseaseNameDiv.innerText = name;

    const diseaseCountDiv = document.createElement('div');
    diseaseCountDiv.className = 'diseaseCount';
    diseaseCountDiv.innerText = count;

    diseaseDiv.appendChild(diseaseNameDiv);
    diseaseDiv.appendChild(diseaseCountDiv);

    registeredCases.appendChild(diseaseDiv);
}





function symptomsUpload(){

    login = sessionStorage.getItem('login');
    userType = sessionStorage.getItem('userType');
    username = sessionStorage.getItem('username');

        const patientName = document.getElementById('patientName').value;
        const patientAge = document.getElementById('patientAge').value;
        const symptom1 = document.getElementById('symptom1').value;
        const symptom2 = document.getElementById('symptom2').value;
        const symptom3 = document.getElementById('symptom3').value;
        
        $.ajax({
             
            url:'PHP/contentInfo.php',
        method:'POST',
        data : {
          value : 1,
          login:login,
          userType:userType,
          username:username,
          patientName : patientName,
          patientAge : patientAge,
          symptom1 : symptom1,
          symptom2 : symptom2,
          symptom3 : symptom3
        },


        success:(response) => {
           alert(response);
        }
        })
    

       
    

}