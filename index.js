$(".btn").click(function () {
    let you = $("#cnameone");
    console.log(you.val());
    console.log(you);
    let yourLover = $("#cnametwo");
    let n = Math.random();
    let input1 = you.val().toLowerCase()
    let input2 = yourLover.val().toLowerCase()
    let percent;

    // Readible verion for logic
    if (input1 === "lala") {
        if (input2 === "rustam") {
            percent = 100;
        } else {
            percent = 0;
        }
    } else if (input1 === "rustam") {
        if (input2 === "lala") {
            percent = 100;
        } else {
            percent = 0;
        }
    } else {
        percent = Math.floor(n * 100 + 1);
    }

    /*initial code
     if ((input1 === "lala" && input2 === "rustam") || (input1 === "rustam" && input2 === "lala")) {
         percent = 100;
     } else if ((input1 === "lala" && input2 !== "rustam") || (input1 === "rustam" && input2 !== "lala")) {
         percent = 0;
     } else if ((input1 !== "lala" && input2 === "rustam") || (input1 !== "rustam" && input2 === "lala")) {
         percent = 0;
     } else {
         percent = Math.floor(n * 100 + 1);
     }*/

    $("#result").text(you.val() + " and " + yourLover.val() + "'s love rate is: " + percent + "% !");
});



