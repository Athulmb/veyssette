import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal Component
 * Smoothly triggers entrance animations when element scrolls into view.
 *
 * @param {'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in'} animation
 * @param {number} delay Delay in milliseconds
 * @param {number} duration Duration in milliseconds
 * @param {number} threshold Trigger threshold (0.0 - 1.0)
 * @param {string} className Additional CSS classes
 */
const Reveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 850,
  threshold = 0.15,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const animationClass = {
    'fade-up': 'reveal-fade-up',
    'fade-down': 'reveal-fade-down',
    'fade-left': 'reveal-fade-left',
    'fade-right': 'reveal-fade-right',
    'zoom-in': 'reveal-zoom-in',
  }[animation] || 'reveal-fade-up';

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={elementRef}
      className={`reveal-init ${animationClass} ${
        isVisible ? 'reveal-active' : ''
      } ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
