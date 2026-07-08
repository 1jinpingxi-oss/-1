import { useEffect, useRef } from 'react';
import './Hero.css';
import { useOpeningAnimation } from '../hooks/useGsap';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 开场动画
  useOpeningAnimation();

  useEffect(() => {
    // Auto-play video on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
      });
    }
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Video Background */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      {/* Animated gradient mesh */}
      <div className="hero-gradient-mesh">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>手机摄影师 · 视觉创作者</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">用镜头捕捉</span>
          <span className="title-line accent">光影与瞬间的美</span>
        </h1>

        <p className="hero-subtitle">
          我是马竟杰，一名热爱用手机记录世界的摄影师。<br />
          擅长捕捉城市风光、人文街拍与创意影像，用光影讲述每一个动人故事。
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>查看作品</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            联系我
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">年摄影经验</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">获奖/入围</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">入选展览</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span className="scroll-text">向下滚动</span>
      </div>
    </section>
  );
};

export default Hero;
