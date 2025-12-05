importScripts("https://www.gstatic.com/firebasejs/12.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDJDGmaWfMkg9bQ9eQ9UFVZIrY7LUNnEsc",
  authDomain: "quicktoppers-d5aae.firebaseapp.com",
  projectId: "quicktoppers-d5aae",
  messagingSenderId: "238078517041",
  appId: "1:238078517041:web:7c10061ceed655d526da10"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});