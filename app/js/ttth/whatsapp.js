function register()
{
    console.log("register ::: Start");
    console.log("register ::: Trying to fix WhatsApp-Web connectivity issues");

    const {remote} = require("electron"); //Imports the remote module to use session inside webview
    const { session } = require("electron");
    var ses = remote.session.defaultSession; //Gets the default session
    //ses.clearCache();
    ses.flushStorageData();
    ses.clearStorageData({ //Clears the specified storages in the session
        storages: ["appcache", "serviceworkers", "cachestorage", "websql", "indexdb"],
    });

    window.navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations)
        {
            registration.unregister(); //Unregisters all the service workers
        }
    });

    // via: https://github.com/meetfranz/franz/issues/1185

    console.log("register ::: End");
}



// via: https://github.com/ramboxapp/community-edition/issues/1446
function checkUnread()
{
    console.log("checkUnread ::: Start");

    // test
    //
    let el = document.querySelector('#whatsappWebview');
    console.log(el)
    let matches = el.querySelectorAll(".CxUIE, .unread");
    console.log(matches)



    // default
	const elements = document.querySelectorAll(".CxUIE, .unread");
    console.log(elements);
	let count = 0;

    console.log("checkUnread ::: Progress 1");

	for (let i = 0; i < elements.length; i++)
    {
        console.log("checkUnread ::: Progress 2");
		if (elements[i].querySelectorAll('*[data-icon="muted"]').length === 0)
        {
            console.log("checkUnread ::: Progress 3");
			count += 1;
            console.log("checkUnread ::: Found unread message");
		}
        console.log("checkUnread ::: Progress 4");
	}

	//updateBadge(count)


    // run code in loop
    //setTimeout("checkUnread()", 10000);


    console.log("checkUnread ::: End");
}


// via: https://github.com/ramboxapp/community-edition/issues/1446
function updateBadge(count)
{
	if (count && count >= 1)
    {
		//rambox.setUnreadCount(count);
	}
    else
    {
		//rambox.clearUnreadCount();
	}
}