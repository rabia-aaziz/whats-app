function initializer(){
    const contactsListEl = document.querySelector("#contacts-list");
    for (let i = 0 ; i < contacts.length ; i++){
        let icon;
        if(contacts[i].lastMsgStatus == "seen")
        {
            icon = "check-double";
        }
        
        else if(contacts[i].lastMsgStatus == "sent")
        {
            icon = "check";
        }
        else{
            icon = "clock";
        }      
        contactsListEl.innerHTML +=`
        <section class="person-items" onclick="showDetail(${i})">
        <div class="person-img" style="background-image: url(${contacts[i].imgURL}) !important"></div>
        <div class="after-person-img">
                <div class="person-content">
                        <h4 class="name">${contacts[i].name}</h4>
                       <div class="msg-container">
                            <i class="fas fa-${icon}"></i>
                            <p class="msg">jgfdsfdsfkjdshgfjldsh</p>
                       </div>
                        </div>
                    <p class="time">yesterday</p>
        </div>
        
</section>
        `

    }
}
    function showDetail(userInformation) {
               
    const showcontent = document.querySelector(".right-div");
    document.querySelector(".right-div").style["background-image"] =` url(images/whats-app-background.png)`;
    


    showcontent.innerHTML = `
    
    <div id="person-img" style="background-image: url(${contacts[userInformation].imgURL}) !important">
    </div>
    <p id="person-name">
                         <span>${contacts[userInformation].name}</span>
    </p>
    <p id="person-numb">
            <span>
                    <i class="fas fa-phone"></i> ${contacts[userInformation].number}</span>
    </p>
    <p id="show-email" class="card-text">
            <span>
                    <i class="far fa-envelope"></i> ${contacts[userInformation].email}</span>
    </p>
    <p id="person-status">
            <span>${contacts[userInformation].message}</span>
    </p>
        `
        
    }

    
    // function showDetail(userInformation) {
    
    //     document.querySelector(".right-div").style = `display: flex !important`;
    //     document.querySelector("#person-img").style["background-image"] = `url(images/${contacts[userInformation].imgURL})`;
    //     document.querySelector("#person-name").innerHTML = contacts[userInformation].name;
    //     document.querySelector("#person-numb").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[userInformation].number}`;
    //     document.querySelector("#show-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[userInformation].email}`;
    //     document.querySelector("#person-status").innerHTML = contacts[userInformation]["message"];

    // }