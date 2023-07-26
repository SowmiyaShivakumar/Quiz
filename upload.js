const admin = require('firebase-admin');
const sa = require('./serviceAccount.json');

admin.initializeApp({
    credential:admin.credential.cert(sa)
});

const d = admin.firestore();
const db = require('./quiz_questions.json');

async function uploadData(){
    for(const doc of db){
        await d.collection('questions').add(doc);
    }
}

uploadData();