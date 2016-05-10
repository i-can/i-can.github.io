//sw.js
console.log('Started', self);

self.addEventListener('install', function (event) {
    self.skipWaiting();
    console.log('Installed', event);
});

self.addEventListener('activate', function (event) {
    console.log('Activated', event);
});
self.addEventListener('push', function (event) {
    console.log('Received a push message', event);

    var title = 'Notification';
    var body = 'There is newly updated content available on the site. Click to see more.';
    var icon = 'https://raw.githubusercontent.com/deanhume/typography/gh-pages/icons/typography.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
      self.registration.showNotification(title, {
          body: body,
          icon: icon,
          tag: tag
      })
     );
  //console.log('push received');

  ////Set some no cache headers for retrieving the notification details
  //var httpHeaders = new Headers();
  //httpHeaders.append('pragma', 'no-cache');
  //httpHeaders.append('cache-control', 'no-cache');
  //httpHeaders.append('connection', 'keep-alive');
  //  httpHeaders.append('content-type','text/event-stream')
  //var fetchInit = {
  //  method: 'GET',
  //  headers: httpHeaders
  //};

  ////We wait for data fetch and notification promises
  //event.waitUntil(
  //  fetch("http://localhost:56062/css/latest.json", fetchInit).then(function (res) {
  //    return res.json().then(function(notificationData) {
  //      // Show notification
  //      console.log(notificationData);
  //      console.log('setting up notification');
  //      self.addEventListener('notificationclick', function(e) {
  //        //Close the notificaiton
  //        e.notification.close();

  //        //Focus or open webpage
  //        e.waitUntil(
  //            clients.matchAll({  
  //              type: "window"  
  //            })
  //            .then(function(clientList) {  
  //              for (var i = 0; i < clientList.length; i++) {  
  //                var client = clientList[i];  
  //                if (client.url == notificationData.name && 'focus' in client)  
  //                  return client.focus();  
  //              }  
  //              if (clients.openWindow) {
  //                return clients.openWindow(notificationData.name);  
  //              }
  //            })
  //          );
  //      });

  //      if(Notification.permission=='granted') {
  //        return self.registration.showNotification(notificationData.name, {
  //          body: notificationData.name,
  //          icon: 'mf_logo.png'
  //        });

  //      }
  //      else {
  //        Notification.requestPermission(function(permission) {
  //          if(permission=='granted') {
  //            return self.registration.showNotification(notificationData.name, {
  //              body: notificationData.name,
  //              icon: 'mf_logo.png'
  //            });
  //          }
  //        });
  //      }

  //    })
  //  })

  //);
});


