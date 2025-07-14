import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// Firebase Authentication을 위한 클래스 정의
class AuthLogic {
  constructor() {
    this.auth = getAuth()
    this.googleProvider = new GoogleAuthProvider()
  }
  getUserAuth = () => {
    return this.auth
  }
  getGoogleAuthProvider = () => {
    return this.googleProvider
  }
  signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(this.auth, this.googleProvider)
      console.log('Google 로그인 성공:', result)
      return result
    } catch (error) {
      console.error('Google 로그인 실패:', error)
      throw error
    }
  }
}
export default AuthLogic