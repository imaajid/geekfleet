import firebase from 'firebase'
import 'firebase/firestore'
const config = {
	apiKey: 'AIzaSyB0Bmbu1We620lDqDVUIJ3SY1oILMA8DrA',
	authDomain: 'greekfleet-2cc5d.firebaseapp.com',
	databaseURL: 'https://greekfleet-2cc5d-default-rtdb.firebaseio.com/',
	projectId: 'greekfleet-2cc5d',
	storageBucket: 'greekfleet-2cc5d.appspot.com',
	messagingSenderId: '182391601280',
	appId: "1:182391601280:web:9ef4ece4a11cb5bb2f0e65",
	measurementId: "G-VQJ9KS9D0K"
} 
const firebaseapp = firebase.initializeApp(config)


export default firebaseapp.firestore()


