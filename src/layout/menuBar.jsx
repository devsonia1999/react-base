import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// 이미지 전체 import
const images = import.meta.glob('@/assets/images/*.png', { eager: true });

const menuItems = [
  { to: '/book', label: 'Book', alt: '한줄평', icon: 'menu-book2' },
  { to: '/chat', label: '독서모임', alt: '책방', icon: 'menu-chat' },
  { to: '/', label: '홈', alt: '홈', icon: 'menu-home' },
  { to: '/bookmark', label: '북마크', alt: '북마크', icon: 'menu-check' },
  { to: '/login', label: '마이페이지', alt: '마이페이지', icon: 'menu-user' },
];

// 이미지 경로를 동적으로 가져오기
const getIconPath = (iconName, isActive) => {
  const filename = `/src/assets/images/${iconName}${isActive ? '-on' : ''}.png`;
  const imageModule = images[filename];
  if (!imageModule) {
    console.error(`이미지를 찾을 수 없습니다: ${filename}`);
    return '';
  }
  return imageModule.default;
};

function MenuBar() {
  const location = useLocation();

  return (
    <div className="menuBar">
      <ul>
        {menuItems.map(({ to, label, alt, icon }) => {
          const isActive = location.pathname === to;
          const imageSrc = getIconPath(icon, isActive);

          return (
            <li key={to} className={isActive?'on':''}>
              <Link to={to}>
                <img src={imageSrc} alt={alt} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuBar;