import React, { useState } from 'react';
import { Contact } from '../../types/Contact';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepFormProps {
  contacts: Contact[];
  device: 'iphone' | 'desktop';
}

export const StepForm: React.FC<StepFormProps> = ({ contacts, device }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [memos, setMemos] = useState<{ [key: number]: string }>({});
  const [savedContacts, setSavedContacts] = useState<number[]>([]);

  const currentContact = contacts[currentIndex];
  const totalCount = contacts.length;
  const isSaved = savedContacts.includes(currentContact.id);

  const handleSave = () => {
    setSavedContacts([...savedContacts, currentContact.id]);
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMemoChange = (value: string) => {
    setMemos({
      ...memos,
      [currentContact.id]: value,
    });
  };

  const currentMemo = memos[currentContact.id] || '';

  return (
    <div className="relative h-full bg-gray-50 flex flex-col">
      {/* Screen Identifier */}
      <div className="bg-purple-50 border-b border-purple-200 px-3 py-1 flex items-center justify-center">
        <span className="text-[10px] font-mono font-semibold text-purple-900">
          MOCK-STEP-{device.toUpperCase()}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gray-900">新着コンタクト</h2>
          <span className="text-sm font-medium text-gray-600">
            {currentIndex + 1} / {totalCount}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gray-900 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / totalCount) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Contact Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
              {currentContact.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {currentContact.name}
                </h3>
                {isSaved && (
                  <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-medium rounded-full">
                    ✓ 保存済
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{currentContact.title}</p>
              <p className="text-sm text-gray-500">{currentContact.company}</p>
            </div>
          </div>

          {/* Source Info */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">{currentContact.metAt}</p>
          </div>
        </div>

        {/* Memo Input */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            💭 メモを追加
          </label>
          <textarea
            value={currentMemo}
            onChange={(e) => handleMemoChange(e.target.value)}
            placeholder="例: Tech Conferenceで出会った。AI技術に詳しそう"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            rows={5}
            disabled={isSaved}
          />
          <p className="text-xs text-gray-500 mt-2">
            出会った場所や第一印象を自由に記録
          </p>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-white border-t border-gray-200 p-4">
        {/* Navigation Arrows */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            前へ
          </button>
          <span className="text-xs text-gray-500">
            左右ボタンで移動できます
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex === totalCount - 1}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentIndex === totalCount - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            次へ
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleSkip}
            disabled={isSaved}
            className={`flex-1 px-4 py-3 border border-gray-300 text-sm font-medium rounded-lg transition-colors ${
              isSaved
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            スキップ
          </button>
          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              isSaved
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {currentIndex === totalCount - 1 ? '保存して完了' : '保存して次へ'}
          </button>
        </div>
      </div>
    </div>
  );
};
