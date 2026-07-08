import { useState } from 'react';
import './ProjectModal.css';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWork = project.works[currentIndex];
  const hasMultipleWorks = project.works.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.works.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === project.works.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="modal-image-wrapper">
          <img src={currentWork.image} alt={currentWork.title} className="modal-image" />

          {hasMultipleWorks && (
            <>
              <button className="modal-nav modal-nav-prev" onClick={goToPrevious}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="modal-nav modal-nav-next" onClick={goToNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="modal-dots">
                {project.works.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-info">
          <div className="modal-meta">
            <span className="modal-category" style={{ color: project.color }}>
              {project.category}
            </span>
            <span className="modal-year">{project.year}</span>
          </div>

          <h2 className="modal-title">
            《{currentWork.title}》
          </h2>

          <p className="modal-description">
            {currentWork.description}
          </p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="modal-award">
            <div className="award-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>{project.title}</span>
          </div>

          {hasMultipleWorks && (
            <div className="modal-counter">
              {currentIndex + 1} / {project.works.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
