Hooks.on("preCreateChatMessage", (app, html, data) =>{
    console.log("in1");
    console.log(app);
    console.log("in1");
    console.log(html);
    console.log("in1");
    console.log(data);
})


//Look at trdischat on 11/24/19 for more info on what we want.
//Investigate monkey patching
Hooks.on('ready', () => {

});