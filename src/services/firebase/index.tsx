import * as firebase from 'firebase'
import firebaseConfig from '../../../google-services.json'

firebase.initializeApp(firebaseConfig)

export const teste = (args: any) =>
  firebase.database().ref('teste').set(args)
