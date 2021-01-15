import admin from 'firebase-admin'
import * as dotenv from 'dotenv'

dotenv.config()

export default () => {
  const cert = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  }

  return admin.initializeApp({
    credential: admin.credential.cert(cert)
  })
}
