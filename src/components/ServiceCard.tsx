import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

export function ServiceCard({ icon: Icon, title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <Icon className="w-12 h-12 text-indigo-600 mb-4" />
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}