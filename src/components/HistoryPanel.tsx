import React from 'react';
import { Clock, Download, Trash2 } from 'lucide-react';
import { AnalysisResult } from '../types';
import { DR_LEVELS } from '../constants';

interface Props {
  history: AnalysisResult[];
  onSelect: (result: AnalysisResult) => void;
  onDelete: (id: string) => void;
  onExport: (result: AnalysisResult) => void;
}

export function HistoryPanel({ history, onSelect, onDelete, onExport }: Props) {
  if (history.length === 0) {
    return (
      <div className="text-center py-8 px-4">
        <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4 animate-pulse" />
        <p className="text-gray-500">No analysis history yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {history.map((result) => (
        <div
          key={result.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
        >
          <div className="flex gap-4">
            <img
              src={result.imageUrl}
              alt="Retinal scan"
              className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onSelect(result)}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {DR_LEVELS[result.level as keyof typeof DR_LEVELS]}
                </h4>
                <span className="text-sm text-gray-500">
                  {new Date(result.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {result.description}
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => onExport(result)}
                  className="p-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  title="Export to PDF"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onDelete(result.id)}
                  className="p-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  title="Delete from history"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}