import '@/assets/styles/login.scss';
import { getKakaoLoginUrl } from '@/auth/KakaoLogin.js';
import { getNaverLoginUrl } from '@/auth/naverLogin.js';
import { AuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  // 네이버 로그인 페이지로 리다이렉트
  const naverLogin = () => {
    console.log('naverLogin called')
    const url = getNaverLoginUrl()
    window.location.href = url
  }

  // 카카오 로그인
  const kakaoLogin = () => {
    console.log('kakaoLogin called')
    const url = getKakaoLoginUrl()
    window.location.href = url
  }

  // 구글 로그인
  const authLogic = useContext(AuthContext)
  const googleLogin = () => {
    console.log('googleLogin called')
    authLogic.signInWithGoogle()
  }


  return (
    <div className='contents'>
      <h2 className='introTit'>
        <span>북메이트</span>에서<br/>
        인상깊게 읽은 책을 소개해주세요.<br/>
        환영합니다.
      </h2>
      <input type='text' placeholder='아이디를 입력하세요' />
      <input type='password' placeholder='비밀번호를 입력하세요' />
      <button className='btn'>로그인</button>
      <ul className='findLink'>
        <li><Link>회원가입</Link></li>
        <li><Link>아이디 찾기</Link></li>
        <li><Link>비밀번호 찾기</Link></li>
      </ul>
      <div className='line'><span>소셜계정으로 로그인</span></div>
      <ul className='snsLogin'>
        <li><button className='' onClick={naverLogin}><img src='src/assets/images/naverBtn.png'/></button></li>
        <li><button className='' onClick={kakaoLogin}><img src='src/assets/images/kakaoBtn.png'/></button></li>
        <li><button className='' onClick={googleLogin}><img src='src/assets/images/googleBtn.png'/></button></li>
      </ul>
    </div>
  )
}

export default Login;