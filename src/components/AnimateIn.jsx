import { useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimations';

export default function AnimateIn({ children, direction = 'up', delay = 0, className = '' }) {
  const [ref, visible] = useAnimateOnScroll();

  const directionStyle = {
    up: { transform: visible ? 'translateY(0)' : 'translateY(30px)' },
    left: { transform: visible ? 'translateX(0)' : 'translateX(40px)' },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        ...directionStyle[direction],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
