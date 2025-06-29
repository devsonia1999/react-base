import axios from 'axios';
import React, { useEffect } from 'react';

function LoginCallback() {
  useEffect(() => {
    const fetchAccessToken = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get('code');
      const returnedState = query.get('state');
      const savedState = sessionStorage.getItem('naver_oauth_state');

      if (returnedState !== savedState) {
        console.log('저장된 상태:', savedState);
        console.log('반환된 상태:', returnedState);
        return;
      }

      try {
        const res = await axios.get('https://nid.naver.com/oauth2.0/token', {
          params: {
            grant_type: 'authorization_code',
            client_id: import.meta.env.VITE_NAVER_CLIENT_ID,
            client_secret: import.meta.env.VITE_NAVER_CLIENT_SECRET,
            code,
            state: returnedState,
          },
        });

        const { access_token } = res.data;
        console.log('✅ Access Token:', access_token);

        // 다음 단계: 사용자 정보 요청
        const userInfo = await axios.get('https://openapi.naver.com/v1/nid/me', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const user = userInfo.data.response;
        console.log('👤 사용자 정보:', user);

        // 예: 세션 저장
        sessionStorage.setItem('user', JSON.stringify(user));
        alert(`${user.name}님 환영합니다!`);
        // 예: 메인 페이지로 이동
        window.location.href = '/';

      } catch (err) {
        console.error('❌ 네이버 로그인 오류:', err);
        alert('로그인 실패');
      }
    };

    fetchAccessToken();
  }, []);

  return <div>네이버 로그인 처리 중...</div>;
}

export default LoginCallback;