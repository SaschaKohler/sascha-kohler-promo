import React from 'react';

interface FeatureBoxProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description, icon, color }) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        <div 
          className="text-3xl mr-3 flex items-center justify-center h-12 w-12 rounded-full"
          style={{ 
            backgroundColor: `${color}20`,
          }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold" style={{ color: color }}>
          {title}
        </h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureBox;
