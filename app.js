const admin = require('firebase-admin');
const serviceAccount = require('./keyFirebase.js');
admin.initializeAPP({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
let test = {
    quote: 'hello',
    author: 'lcn'
}
db.collection('sampleData').doc('inspiration').set(test);
// const getQuote = ()=>{

// }
