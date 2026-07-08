import { useRef } from 'react';
import './About.css';
import { useSectionTitleAnimation, useCardsAnimation } from '../hooks/useGsap';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useSectionTitleAnimation(sectionRef);
  useCardsAnimation(statsRef, '.stat-card');

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">关于我</span>
          <h2 className="section-title">
            用镜头记录<span className="accent">世界的美好</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left - Image */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src="/avatar.jpg" alt="马竟杰" className="avatar-img" />
            </div>
            <div className="image-decoration"></div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <div className="about-intro">
              <p className="intro-text">
                我是一名热爱用手机记录世界的摄影师，专注于城市风光、人文街拍与创意影像。从最初的随手记录到如今的获奖展览，手机摄影已经成为我表达视角与情感的重要方式。
              </p>
              <p className="intro-text">
                我善于运用手机摄影的独特视角，捕捉城市街头的光影变化、自然风光的壮美细腻，以及日常生活中被忽视的细节之美。通过构图与色彩的精心把控，将平凡的瞬间转化为令人惊叹的视觉作品。
              </p>
            </div>

            {/* Contact Info */}
            <div className="about-contact">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 7L10 12L17 7M3 7V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V7M3 7L10 3L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">邮箱</span>
                  <a href="mailto:2562473075@qq.com" className="contact-value">
                    2562473075@qq.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H7.28L8.34 6.18L6.5 7.4C7.57 9.67 9.33 11.43 11.6 12.5L12.82 10.66L16 11.72V14C16 15.1046 15.1046 16 14 16C7.37 16 3 11.63 3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">电话</span>
                  <a href="tel:15287351367" className="contact-value">
                    15287351367
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 18C10 18 16 13 16 8C16 4.68629 13.3137 2 10 2C6.68629 2 4 4.68629 4 8C4 13 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">所在地</span>
                  <span className="contact-value">江苏南通</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="about-stats" ref={statsRef}>
              <div className="stat-card">
                <span className="stat-card-number">4+</span>
                <span className="stat-card-label">年摄影经验</span>
              </div>
              <div className="stat-card">
                <span className="stat-card-number">4</span>
                <span className="stat-card-label">获奖/入围</span>
              </div>
              <div className="stat-card">
                <span className="stat-card-number">3</span>
                <span className="stat-card-label">入选展览</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
