import '@/assets/styles/login.scss';
import { getNaverLoginUrl } from '@/auth/naverLogin.js';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  // 네이버 로그인 페이지로 리다이렉트
  const naverUrl = () => {
    const url = getNaverLoginUrl();
    window.location.href = url;
  }

  return (
    <div className='contents'>
      <h2 className='introTit'>
        <span>북메이트</span>에서<br/>
        인상깊은 책을 소개해주세요.<br/>
        환영합니다.
      </h2>
      <input type='text' placeholder='아이디를 입력하세요' />
      <input type='password' placeholder='비밀번호를 입력하세요' />
      <button className='btn'>로그인</button>
      <ul className='findLink'>
        <li>아직 회원이 아니신가요? <Link>회원가입</Link></li>
        <li>아이디가 기억나지 않으세요? <Link>아이디 찾기</Link></li>
        <li>비밀번호를 잊어버리셨나요? <Link>비밀번호 찾기</Link></li>
      </ul>
      <ul className='snsLogin'>
        <li><button className='' onClick={naverUrl}>네이버 로그인</button></li>
        <li>카카오 로그인</li>
        <li>구글 로그인</li>
        <li>애플 로그인</li>
      </ul>
    </div>
  );
}

export default Login;