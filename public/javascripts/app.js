/*
File name: app.js
Author’s Name: Apple Coleene Duquinal
StudentID:  301000645
Web App Name: COMP229-M2021-MidTerm-301000645
*/

console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}