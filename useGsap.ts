import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 首屏开场动画
export const useOpeningAnimation = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        defaults: {
          ease: 'power4.out',
          duration: 1.2,
        },
      });

      // Logo 先出现
      tl.current.from('.navbar-logo', {
        y: -30,
        opacity: 0,
        duration: 0.8,
      });

      // Hero badge 揭开效果
      tl.current.from('.hero-badge', {
        y: 20,
        opacity: 0,
        clipPath: 'inset(100% 0 0 0)',
        duration: 1,
      }, '-=0.4');

      // 标题第一行 - 从下往上位移 + 压缩归位
      tl.current.from('.title-line:first-child', {
        y: 100,
        opacity: 0,
        scaleY: 1.5,
        transformOrigin: 'bottom',
        duration: 1.4,
        ease: 'power3.out',
      }, '-=0.6');

      // 标题第二行 - 遮罩揭开效果
      tl.current.from('.title-line.accent', {
        y: 80,
        opacity: 0,
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease: 'power4.out',
      }, '-=0.8');

      // 副标题
      tl.current.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 1,
      }, '-=0.6');

      // 按钮组
      tl.current.from('.hero-actions', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5');

      // 统计数据 stagger
      tl.current.from('.stat-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      }, '-=0.4');

      // 分隔线
      tl.current.from('.stat-divider', {
        scaleY: 0,
        stagger: 0.1,
        duration: 0.6,
      }, '-=0.6');

      // 滚动指示器
      tl.current.from('.hero-scroll', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.3');

      // 导航链接
      tl.current.from('.nav-link', {
        y: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      }, '-=0.8');

      // CTA按钮
      tl.current.from('.navbar-cta', {
        y: -20,
        opacity: 0,
        duration: 0.5,
      }, '-=0.4');
    });

    return () => ctx.revert();
  }, []);

  return tl;
};

// 模块标题动画
export const useSectionTitleAnimation = (sectionRef: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current!;

      // 英文标签
      gsap.fromTo(section.querySelectorAll('.section-tag'),
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // 大标题 - 从下方大幅进场
      gsap.fromTo(section.querySelectorAll('.section-title'),
        { y: 80, opacity: 0, scaleY: 1.3 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1.2,
          ease: 'power4.out',
        }
      );

      // 描述文字
      gsap.fromTo(section.querySelectorAll('.section-desc'),
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
};

// 卡片 stagger 动画
export const useCardsAnimation = (containerRef: React.RefObject<HTMLElement | null>, cardSelector: string) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current!.querySelectorAll(cardSelector),
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, cardSelector]);
};

// 图片 reveal 动画
export const useImageReveal = (imageRef: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current!,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'power4.out',
        }
      );
    }, imageRef);

    return () => ctx.revert();
  }, [imageRef]);
};

// 时间线动画
export const useTimelineAnimation = (timelineRef: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // 标题
      gsap.fromTo(timelineRef.current!.querySelectorAll('.experience-title'),
        { x: -60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // 时间线项目
      gsap.fromTo(timelineRef.current!.querySelectorAll('.timeline-item'),
        { x: -40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, [timelineRef]);
};

// 视差滚动效果
export const useParallax = (elementRef: React.RefObject<HTMLElement | null>, speed: number = 0.3) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current!, {
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: () => window.innerHeight * speed,
        ease: 'none',
      });
    }, elementRef);

    return () => ctx.revert();
  }, [elementRef, speed]);
};
