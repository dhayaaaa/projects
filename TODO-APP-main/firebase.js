    const firebaseConfig = {
        apiKey: "AIzaSyD2G07GxGF1HBZ4eFvx55NiQUfLehKtTVM",
        authDomain: "to-do-app-b991f.firebaseapp.com",
        projectId: "to-do-app-b991f",
        storageBucket: "to-do-app-b991f.appspot.com",
        messagingSenderId: "664135137554",
        appId: "1:664135137554:web:1b47d8d57ec89734a35bcb",
        measurementId: "G-RQBZP1Z1R7"
      };

        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        var db = firebase.firestore();