import { useState, useRef } from 'react';
import './Skills.css';
import GalleryModal from './GalleryModal';
import { useSectionTitleAnimation, useCardsAnimation, useTimelineAnimation } from '../hooks/useGsap';

const cityImages = [
  '/304fa18d99c05647024aff24ad0f2f07.jpg',
  '/3c10fbbcb44de341f7c276d8bc80090f.jpg',
  '/40da98de812af13c5289997a6b19bdd7.jpg',
  '/43754af152339b8723782d3f59273123.jpg',
  '/5fd8db3829a40012cfa0335040b38e90.jpg',
  '/b4fe9198c016d830348a004c575727ca.jpg',
  '/bdae171a6accd772ee94227758951dc8.jpg',
  '/d9f47cd71348741ea88d1a139a308112.jpg',
  '/f0af1623b78cdb16f2505feb4f028995.jpg',
  '/ff041c96006696c0a05a98d85e10ad71.jpg',
];

const streetImages = [
  '/1581b52fa3b78bf999c668933cb3196e.jpg',
  '/20f1571561acb2515e51f16b9aaf56c0.jpg',
  '/34441998c36640fd7cc7f5745d31f3f4.jpg',
  '/363bc8af511b742f71762e3b9ac1bef4.jpg',
  '/3c735770aa47b0f3d447b5593fd9b693.jpg',
  '/4687a6300c32a0debd240b055b239f8c.jpg',
  '/4f6cd2a8781677df66b0f231f3affef3.jpg',
  '/70ffa7a4cb65e8eb2542cc4ef1cc7350.jpg',
  '/a5b618f36a140c466aa850d866f34e26.jpg',
  '/efa6685c19356b02cf95351c6c6f85f9.jpg',
];

const creativeImages = [
  '/11d3b0bf705dcc97c5c6d5667f209c0b.jpg',
  '/31f5bbfbd1bf1ad3503a7e26c8638649.jpg',
  '/33916a9d5024976a0edaad5c7217e6b7.jpg',
  '/36febd7b9bfdd4285dd58e3bfdc090fb.jpg',
  '/3acd73da463eee213fe963ed1562bb3d.jpg',
  '/630b8bcf7db046f8d59215b4960f5625.jpg',
  '/6f79465ac85bfbf34e62f668d7fcc71b.jpg',
  '/7c0d17c6b8516fbc0b23c6beeb7f8b3d.jpg',
  '/b1d40af9650e61bca73b1f37cc302dff.jpg',
  '/e8433e3d11388b003166ffba4faed761.jpg',
];

const natureImages = [
  '/0983ede0f5f780c258998625235470a4.jpg',
  '/440c9fe4575fdcc541c67ee99d7064f2.jpg',
  '/7b1195b0dd8798f060cee43f682e8109.jpg',
  '/9b863aa4e3f7f218b7bd70585572feec.jpg',
  '/9cc34416277b2b6c755ef9b4e784fe90.jpg',
  '/ac17348553efd823c755e710e484c1a8.jpg',
  '/cb05ee176113c0b99772ac22f85629ef.jpg',
  '/d7c26c336688211712d8c98eaa800328.jpg',
  '/dd41559b880d190a2eecaf151b5c6e45.jpg',
  '/f4abb490f39b1119744dd22af87ae9f4.jpg',
];

const colorImages = [
  '/0b90344ec6544fe413108adaadb8bf55.jpg',
  '/0c0c51ee5459ed9f3ba56f789e0d8913.jpg',
  '/1d7732d77620cfb7291d714fde5c6a7e.jpg',
  '/2b8d9594e9293a703ebf94023abe4e7f.jpg',
  '/3e989f8fbdbe95da726d9b78f9f87512.jpg',
  '/49874b170ebde07587bc03f00ed270b2.jpg',
  '/7cd566d20da1e5691c4c47b44675cbda.jpg',
  '/df41d84100be378a5595618df1f0952c.jpg',
  '/e11502356df0adc309721ae4ea888af8.jpg',
  '/e867b762034e47ecf76a167eef9630bf.jpg',
];

const skills = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="16" r="2" fill="currentColor"/>
      </svg>
    ),
    title: '城市风光摄影',
    description: '擅长捕捉城市天际线、建筑美学与霓虹夜景，用手机镜头展现现代都市的独特魅力。',
    tools: ['城市夜景', '建筑', '天际线'],
    hasGallery: true,
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 28C8 23.5817 11.5817 20 16 20C20.4183 20 24 23.5817 24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '人文街拍',
    description: '记录城市街头的平凡瞬间，用镜头讲述普通人的生活故事，捕捉真实的人文情感。',
    tools: ['街拍', '人文纪实', '黑白'],
    hasGallery: true,
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 14L16 10L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18L16 22L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '创意光影',
    description: '探索光影与构图的无限可能，运用手机摄影的独特视角创造富有艺术感的视觉作品。',
    tools: ['光影', '极简', '抽象'],
    hasGallery: true,
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '自然风光',
    description: '用手机镜头记录大自然的壮美与细腻，从日出到星空，展现自然的无穷魅力。',
    tools: ['日出日落', '星空', '风光'],
    hasGallery: true,
  },
  {
    id: 5,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M7.5 24.5L10.3 21.7M21.7 10.3L24.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '色彩美学',
    description: '善于运用色彩讲述故事，通过手机摄影展现色彩的韵律与情感表达。',
    tools: ['色彩', '情感', '氛围'],
    hasGallery: true,
  },
  {
    id: 6,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 12H26M12 6V12M20 6V12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '后期调色',
    description: '精通手机摄影后期处理，运用Lightroom、Snapseed等工具进行精细调色与画面优化。',
    tools: ['Lightroom', 'Snapseed', 'VSCO'],
  },
];

type GalleryType = 'city' | 'street' | 'creative' | 'nature' | 'color' | null;

const Skills = () => {
  const [activeGallery, setActiveGallery] = useState<GalleryType>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useSectionTitleAnimation(sectionRef);
  useCardsAnimation(gridRef, '.skill-card');
  useTimelineAnimation(timelineRef);

  const getGalleryData = () => {
    switch (activeGallery) {
      case 'city':
        return { title: '城市风光摄影', images: cityImages };
      case 'street':
        return { title: '人文街拍', images: streetImages };
      case 'creative':
        return { title: '创意光影', images: creativeImages };
      case 'nature':
        return { title: '自然风光', images: natureImages };
      case 'color':
        return { title: '色彩美学', images: colorImages };
      default:
        return null;
    }
  };

  const galleryData = getGalleryData();

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">核心优势</span>
          <h2 className="section-title">
            摄影风格<span className="accent">与专长领域</span>
          </h2>
          <p className="section-desc">
            擅长摄影，具备出色的构图感、光影把控能力，精通手机端专业模式拍摄与创意构图。
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" ref={gridRef}>
          {skills.map((skill) => (
            <div key={skill.id} className={`skill-card ${skill.hasGallery ? 'has-gallery' : ''}`}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.description}</p>
              <div className="skill-tools">
                {skill.tools.map((tool) => (
                  <span key={tool} className="skill-tool">
                    {tool}
                  </span>
                ))}
              </div>
              {skill.hasGallery && (
                <button
                  className="skill-gallery-btn"
                  onClick={() => {
                    const galleryMap: Record<number, GalleryType> = {
                      1: 'city',
                      2: 'street',
                      3: 'creative',
                      4: 'nature',
                      5: 'color',
                    };
                    setActiveGallery(galleryMap[skill.id] || null);
                  }}
                >
                  <span>查看作品</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="experience-section" ref={timelineRef}>
          <h3 className="experience-title">获奖与展览</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-company">首届中国手机摄影大展</span>
                  <span className="timeline-period">2025</span>
                </div>
                <span className="timeline-role">年度摄影师</span>
                <p className="timeline-desc">
                  2025首届中国手机摄影大展荣获"年度摄影师"称号，展现手机摄影的卓越实力与艺术表达。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-company">云南省第十届摄影艺术展</span>
                  <span className="timeline-period">2025</span>
                </div>
                <span className="timeline-role">入展作者</span>
                <p className="timeline-desc">
                  2025年云南省第十届摄影艺术展入展作者，作品在省级摄影展览中获得认可。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-company">北京国际摄影周</span>
                  <span className="timeline-period">2025</span>
                </div>
                <span className="timeline-role">入展作者</span>
                <p className="timeline-desc">
                  2025年北京国际摄影周"云影像"大众手机摄影组入展作者，在国际摄影盛事中亮相。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-company">OPPO影像大赛</span>
                  <span className="timeline-period">2025</span>
                </div>
                <span className="timeline-role">入围</span>
                <p className="timeline-desc">
                  入围2025年OPPO影像大赛，与全球手机摄影爱好者同台竞技，展现创意影像实力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryData && (
        <GalleryModal
          title={galleryData.title}
          images={galleryData.images}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
};

export default Skills;
