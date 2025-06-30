import { getNaverLoginUrl } from '@/auth/naverLogin.js';
import React from 'react';


function Login() {

  // 네이버 로그인 페이지로 리다이렉트
  const loginUrl = () => {
    const url = getNaverLoginUrl();
    window.location.href = url;
  }

  return (
    <div className='contents'>
      <div>
        <input type='text'/>
        <input type='password'/>
        <button className='btn'>로그인</button>
        <button className='btn'>회원가입</button>
        <button className='btn' onClick={loginUrl}>네이버로 로그인</button>
      </div>
    </div>
  );
}

export default Login;