import React from 'react';
import { BookOpen } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { EducationalContent } from '../../types';

interface EducationCardProps {
  lesson: EducationalContent;
  className?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  lesson,
  className = '',
}) => {
  // Helper to determine the badge variant based on difficulty
  const getDifficultyBadge = (difficulty: EducationalContent['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return <Badge variant="success">Beginner</Badge>;
      case 'intermediate':
        return <Badge variant="warning">Intermediate</Badge>;
      case 'advanced':
        return <Badge variant="error">Advanced</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className={`${className}`} interactive>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={lesson.image} 
          alt={lesson.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent"></div>
        <div className="absolute bottom-2 left-3">
          {getDifficultyBadge(lesson.difficulty)}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{lesson.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{lesson.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-400 text-xs">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>{lesson.duration}</span>
          </div>
          
          {lesson.completed ? (
            <Badge variant="success" size="sm">Completed</Badge>
          ) : lesson.progress ? (
            <div className="relative w-16 h-1.5 bg-dark-300 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-bitcoin-500 rounded-full" 
                style={{ width: `${lesson.progress}%` }}
              ></div>
            </div>
          ) : (
            <Button variant="outline" size="sm">
              Start
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;