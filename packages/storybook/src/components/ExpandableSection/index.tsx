import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import React, { ReactNode, useState } from 'react';
import './index.css';

export interface ExpandableSectionProps {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, description, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`todo-expandable-section ${isExpanded ? 'todo-expandable-section--expanded' : ''}`}>
      <div className="todo-expandable-section__header" onClick={togglePanel}>
        <button className="todo-expandable-section__button">
          {isExpanded ? <IconChevronUp /> : <IconChevronDown />}
        </button>
        <div>
          <h2 className="todo-expandable-section__title">{title}</h2>
          {description && <div className="todo-expandable-section__description">{description}</div>}
        </div>
      </div>
      {isExpanded && <div className="todo-expandable-section__content">{children}</div>}
    </div>
  );
};

export default ExpandableSection;
