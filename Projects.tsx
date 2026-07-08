import { useState, useRef } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { useSectionTitleAnimation, useCardsAnimation } from '../hooks/useGsap';

interface Work {
  image: string;
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  image: string;
  works: Work[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '首届中国手机摄影大展',
    category: '全国大展 · 年度摄影师',
    description: '2025首届中国手机摄影大展荣获"年度摄影师"称号，展现手机摄影的卓越实力与艺术表达。',
    tags: ['中国手机摄影', '年度摄影师', '全国大展'],
    year: '2025',
    color: '#2997ff',
    image: '/2c1d6b6c9455dc6c50475f1fe185d5a1.jpg',
    works: [
      {
        image: '/2c1d6b6c9455dc6c50475f1fe185d5a1.jpg',
        title: '赛博朋克',
        description: '在长焦镜头的压缩下，外滩的宏伟建筑铺满取景框，压迫感十足，仿佛抵达了未来世界。',
      },
    ],
  },
  {
    id: 2,
    title: '云南省摄影艺术展',
    category: '省级展览 · 入展作者',
    description: '2025年云南省第十届摄影艺术展入展作者，作品在省级摄影展览中获得认可。',
    tags: ['省级展览', '入展', '摄影艺术'],
    year: '2025',
    color: '#34c759',
    image: '/2c1d6b6c9455dc6c50475f1fe185d5a1.jpg',
    works: [
      {
        image: '/2c1d6b6c9455dc6c50475f1fe185d5a1.jpg',
        title: '赛博朋克',
        description: '在长焦镜头的压缩下，外滩的宏伟建筑铺满取景框，压迫感十足，仿佛抵达了未来世界。',
      },
    ],
  },
  {
    id: 3,
    title: '北京国际摄影周',
    category: '国际展览 · 入展作者',
    description: '2025年北京国际摄影周"云影像"大众手机摄影组入展作者，在国际摄影盛事中亮相。',
    tags: ['国际展览', '北京摄影周', '云影像'],
    year: '2025',
    color: '#ff9500',
    image: '/1cdb7ed2a185e28ee591a70ad3d795e1.jpg',
    works: [
      {
        image: '/1cdb7ed2a185e28ee591a70ad3d795e1.jpg',
        title: '钢铁森林',
        description: '长焦镜头下的深圳，高楼层峦叠嶂，压迫感十足，仿佛一座钢铁森林。',
      },
      {
        image: '/f291e326fa61f612b3e8c727599ad8ee.jpg',
        title: '陶砖红韵筑童话',
        description: '宛如大地凝固的呼吸，这组红砖建筑以巨大的瓶状阵列静谧矗立。斑驳的砖墙纹理与柔和的云影交织，在苍翠林海的环抱下，折射出历经时光打磨的沉稳力量。镜头以温暖的色调捕捉细节，宏大尺度中尽显人文底色与自然之美的和谐共鸣。',
      },
    ],
  },
  {
    id: 4,
    title: 'OPPO影像大赛',
    category: '品牌赛事 · 入围',
    description: '入围2025年OPPO影像大赛，与全球手机摄影爱好者同台竞技，展现创意影像实力。',
    tags: ['OPPO', '影像大赛', '入围'],
    year: '2025',
    color: '#af52de',
    image: '/b43481c9825ac4f9a95acc7040162dd3.jpg',
    works: [
      {
        image: '/b43481c9825ac4f9a95acc7040162dd3.jpg',
        title: '稻香里的守望',
        description: '画面中，一位老人正专注地弯腰拾捡新收割的稻谷。金黄的稻粒在阳光下铺展开来，如同大地的织锦，映衬出岁月沉淀的温暖色调。老人粗糙的双手和深刻的神情，诉说着与土地相伴一生的故事。这不仅是一幅关于劳动的画面，更是一首关于坚守与传承的诗，展现了人与自然之间最质朴、最深情的联系。',
      },
      {
        image: '/71f3bb9061eaf091ee4148aa80e0cd34.jpg',
        title: '无边',
        description: '一位泳者缓缓步入海中，雾霭遮蔽了远方，唯有水面映出他清晰的背影。静与动之间，展现出孤独中的勇气与追寻。',
      },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useSectionTitleAnimation(sectionRef);
  useCardsAnimation(gridRef, '.project-card');

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">获奖照片</span>
          <h2 className="section-title">
            探索我的<span className="accent">摄影展览</span>
          </h2>
          <p className="section-desc">
            以下是我近年来的部分获奖作品与摄影展览，用手机镜头记录世界的美好瞬间。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index === 0 ? 'featured' : ''}`}
              style={{ '--accent': project.color } as React.CSSProperties}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4 32L16 20L24 28L32 18L44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>项目封面图</span>
                  </div>
                )}
                <div className="project-overlay">
                  <span className="project-view">
                    查看详情
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
