"use strict";

let activities = [
    {
        name: ""
    },

    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },

    {
        category: "Adventures",
        id: "A102",
        name: "Rock Climbing",
        description: "Exhilerating 3000 foot cliff face for any type of climber whether amateur, experienced, or spectator.",
        location: "145 FM 103",
        price: 165.00
    },

    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy  no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },

    {
        category: "Animal Watching",
        id: "AC101",
        name: "Bird Watching",
        description: "Enjoy 2 hours of scenery and looking above to see the various kinds of birds fly above.",
        location: "1991 Paint Drive",
        price: 40.00
    },

    {
        category: "Animal Watching",
        id: "AC102",
        name: "Bear Watching",
        description: "Enjoy 2 hours of watching the bears and get up close to about 100 ft of them.",
        location: "1991 Paint Drive",
        price: 40.00
    },

    {
        category: "Camping",
        id: "M101",
        name: "Spend the Night",
        description: "Pack your bags and enjoy spending the night at Yosemite hearing all the natural life animals sing",
        location: "101 Airfield Drive",
        price: 150.00
    },

    {
        category: "Camping",
        id: "M102",
        name: "Hiking Trails",
        description: "Enjoy touringthe many hiking trails Yosemite have to offer.",
        location: "1056 Lost Knives Court",
        price: 25.00
    },


    {
        category: "Other",
        id: "OTH101",
        name: "Yosemite Tour",
        description: "Follow our rangers give a spectacular tour of Yosemite",
        price: 25.00
    },

    {
        category: "Other",
        id: "OTH102",
        name: "Yosemite and Glacier Point Tour",
        description: "Get acquainted with the landmarks and highlights of Yosemite during this 9 hour day tour!",
        location: "Call (555) 555-5555",
        price: 100.00
    }

];

window.onload = function () {

    document.getElementById("list").style.display = "none";
    let category = document.getElementById("category");
    category.onchange = activity;
    let list = document.getElementById("list");
    list.onchange = displayActivity;
    document.getElementById("form").style.display = "none";
    let btn = document.getElementById("purchaseBtn");
    btn.onclick = purchaseBtn;
    let reset = document.getElementById("reset");
    reset.onclick = resetBtn;

}

function activity() {

    document.getElementById("list").style.display = "none";
    let category = document.getElementById("category");
    let list = document.getElementById("list");
    let para = document.getElementById("para");

    let index = category.selectedIndex;
    let length = activities.length
    list.length = 0


    if (index == 1) {

        let options = document.createElement("option");
        options.text = "Select an adventure";
        list.appendChild(options);

        for (let i = 0; i < length; i++) {

            if (activities[i].category == "Adventures") {

                let options = document.createElement("option");

                options.text = activities[i].name;
                options.id = activities[i].id;
                options.name = activities[i].location;
                options.price = activities[i].price;
                options.description = activities[i].description;

                list.appendChild(options);
            }

        }
        list.style.display = "block"


    } else if (index == 2) {

        let options = document.createElement("option");
        options.text = "Select to do Animal Watching";
        list.appendChild(options);

        for (let i = 0; i < length; i++) {


            if (activities[i].category == "Animal Watching") {


                let options = document.createElement("option");

                options.text = activities[i].name;
                options.id = activities[i].id;
                options.name = activities[i].location;
                options.price = activities[i].price;
                options.description = activities[i].description;

                list.appendChild(options);

            }

        }

        list.style.display = "block";


    } else if (index == 3) {

        let options = document.createElement("option");
        options.text = "Select to go Camping";
        list.appendChild(options);

        for (let i = 0; i < length; i++) {

            if (activities[i].category == "Camping") {

                let options = document.createElement("option");

                options.text = activities[i].name;
                options.id = activities[i].id;
                options.name = activities[i].location;
                options.price = activities[i].price;
                options.description = activities[i].description;

                list.appendChild(options);

            }

        }

        list.style.display = "block";


    } else if (index == 4) {

        let options = document.createElement("option");
        options.text = "Select Other";
        list.appendChild(options);

        for (let i = 0; i < length; i++) {

            if (activities[i].category == "Other") {

                let options = document.createElement("option");

                options.text = activities[i].name;
                options.id = activities[i].id;
                options.name = activities[i].location;
                options.price = activities[i].price;
                options.description = activities[i].description;

                list.appendChild(options);
            }
        }

        list.style.display = "block";

    } else {

        para.innerHTML = "";
    }
}

//dispaly activity description
function displayActivity() {
    document.getElementById("form").style.display = "none";
    document.getElementById("para").style.display = "none";
    let category = document.getElementById("category");
    let para = document.getElementById("para");
    let list = document.getElementById("list");
    let form = document.getElementById("form")

    let k = 0;

    if (category.selectedIndex == 2) {
        k = 3;
    } else if (category.selectedIndex == 3) {
        k = 5
    } else if (category.selectedIndex == 4) {
        k = 8
    } 

    for (let i = k; i < list.length + k; i++) {

        if (list.value == activities[i].name && list[i - k].price > 0) {

            para.innerHTML = "You selected : " + list[i - k].text + "<br />" + "ID : " + list[i - k].id + "<br />" + "Description : " + list[i - k].description + "<br />" + "Location : " + list[i - k].name + "<br />" + "Price : " + " $ " + list[i - k].price;

            para.style.display = "block"

            form.style.display = "block";

        } else if (list.value == activities[i].name && list[i - k].price == 0) {
            para.innerHTML = "You selected : " + list[i - k].text + "<br />" + "ID : " + list[i - k].id + "<br />" + "Description : " + list[i - k].description + "<br />" + "Location : " + list[i - k].name + "<br />" + "Price : " + " $ " + list[i - k].price;

            para.style.display = "block"

            form.style.display = "none";

        } else if (list.value == "") {
            para.innerHTML = ""


        }
    }

    return false;

}

//purchase button
function purchaseBtn() {
    let msg = document.getElementById("message");
    msg.innerHTML = "Your credit card has been charged $(amount) for (number-of- tickets) to (adventure-name). A confirmation email has been sent to (email).";


    msg.display.style = "block"


}

//reset button
function resetBtn() {
    let msg = document.getElementById("message");
    msg.innerHTML = ""
    msg.display.style = "block"

}



