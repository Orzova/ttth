/**
* @name serviceGoogleMessagesAddEventListener
* @summary Adds several EventListeners to the webview of the service
* @description Defines several EventListeners to the webview of the service and starts a periodic request to check for unread messages
*/
function serviceGoogleMessagesAddEventListener()
{
    console.log("serviceGoogleMessagesAddEventListener ::: Start");

    // get webview
    var webview = document.getElementById("GoogleMessagesWebview");


    // run it periodically
    //
    //  5.000 =  5 sec
    // 15.000 = 15 sec
    var intervalID = setInterval(function()
    {
        webview.send("request");
    }, 30000);


    // WebView Event: did-start-loading
    //
    webview.addEventListener("did-start-loading", function()
    {
        console.log("serviceGoogleMessagesAddEventListener ::: did-start-loading.");
        webview.send("request");
    });


    // WebView Event: dom-ready
    //
    webview.addEventListener("dom-ready", function()
    {
        console.log("serviceGoogleMessagesAddEventListener ::: DOM-Ready");
        webview.send("request");
    });



    // WebView Event: did-stop-loading
    //
    webview.addEventListener("did-stop-loading", function()
    {
        console.log("serviceGoogleMessagesAddEventListener ::: did-stop-loading");

        // Show devTools if you want
        //
        //webview.openDevTools();

        // Triggering search for unread messages
        webview.send("request");
    });


    // WebView Event:  ipc-message
    webview.addEventListener("ipc-message",function(event)
    {
        console.log("serviceGoogleMessagesAddEventListener ::: IPC message:");

        // update the badge
        updateServiceBadge("GoogleMessages", event.channel);
    });


    console.log("serviceGoogleMessagesAddEventListener ::: End");
}