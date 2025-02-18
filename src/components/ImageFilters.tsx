import React from 'react';
import { Sliders } from 'lucide-react';
import { ImageFilters } from '../types';

interface Props {
  filters: ImageFilters;
  onChange: (filters: ImageFilters) => void;
}

export function ImageFiltersComponent({ filters, onChange }: Props) {
  const handleChange = (key: keyof ImageFilters, value: number) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Sliders className="h-5 w-5 text-blue-500" />
        <h3 className="font-medium text-gray-900 dark:text-white">Image Enhancement</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Brightness ({filters.brightness}%)
          </label>
          <input
            type="range"
            min="50"
            max="150"
            value={filters.brightness}
            onChange={(e) => handleChange('brightness', Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Contrast ({filters.contrast}%)
          </label>
          <input
            type="range"
            min="50"
            max="150"
            value={filters.contrast}
            onChange={(e) => handleChange('contrast', Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Saturation ({filters.saturation}%)
          </label>
          <input
            type="range"
            min="50"
            max="150"
            value={filters.saturation}
            onChange={(e) => handleChange('saturation', Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}