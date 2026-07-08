import { useRef } from 'react';
import './Contact.css';
import { useSectionTitleAnimation, useCardsAnimation } from '../hooks/useGsap';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const methodsRef = useRef<HTMLDivElement>(null);

  useSectionTitleAnimation(sectionRef);
  useCardsAnimation(methodsRef, '.contact-method');

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-content">
          <span className="contact-tag">开始合作</span>
          <h2 className="contact-title">
            有拍摄想要<span className="accent">一起合作？</span>
          </h2>
          <p className="contact-desc">
            无论是商业摄影、个人写真还是创意拍摄项目，<br />
            我都期待与您探讨合作的可能性。
          </p>

          <div className="contact-methods" ref={methodsRef}>
            <a href="mailto:2562473075@qq.com" className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7L10 12L17 7M3 7V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7M3 7L10 3L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="method-info">
                <span className="method-label">发送邮件</span>
                <span className="method-value">2562473075@qq.com</span>
              </div>
            </a>

            <a href="tel:15287351367" className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H7.28L8.34 6.18L6.5 7.4C7.57 9.67 9.33 11.43 11.6 12.5L12.82 10.66L16 11.72V14C16 15.1046 15.1046 16 14 16C7.37 16 3 11.63 3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="method-info">
                <span className="method-label">电话联系</span>
                <span className="method-value">152 8735 1367</span>
              </div>
            </a>

            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="method-info">
                <span className="method-label">工作时间</span>
                <span className="method-value">周一至周五 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <span className="social-label">关注我</span>
            <div className="social-links">
              <a href="https://v.douyin.com/KjZ7Esg9loc/8@3.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="抖音">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2V14C10 16.2091 8.20914 18 6 18C3.79086 18 2 16.2091 2 14C2 11.7909 3.79086 10 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 2C10 2 10 6 14 6C14 6 14 10 18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="https://xhslink.com/m/4iHgHYbP8ml" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="小红书">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <span className="footer-text">
              © 2024 马竟杰. All rights reserved.
            </span>
            <span className="footer-text">
              用镜头记录世界的美好
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
