import React, { useState } from 'react';
import { Contact } from '../types/Contact';
import { X } from 'lucide-react';

interface NewContactMemoModalProps {
  contact: Contact;
  onSave: (contactId: number, metLocation: string, memo: string) => void;
  onSkip: () => void;
}

export const NewContactMemoModal: React.FC<NewContactMemoModalProps> = ({
  contact,
  onSave,
  onSkip,
}) => {
  const [metLocation, setMetLocation] = useState(contact.metLocation || '');
  const [memo, setMemo] = useState(contact.firstImpressionMemo || '');

  const handleSave = () => {
    onSave(contact.id, metLocation, memo);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h3 className="font-bold text-gray-900">{contact.name}</h3>
            <p className="text-xs text-gray-500">{contact.company}</p>
          </div>
          <button
            onClick={onSkip}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4">
          {/* 出会った場所 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📍 出会った場所
            </label>
            <input
              type="text"
              value={metLocation}
              onChange={(e) => setMetLocation(e.target.value)}
              placeholder="例: Tech Conference 2025、〇〇会議"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <p className="text-xs text-gray-500 mt-1">
              イベント名や会議名を記録
            </p>
          </div>

          {/* メモ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              💭 第一印象・メモ
            </label>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="例: AI技術に詳しそう。次回は製品について詳しく聞いてみたい"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-1">
              第一印象や話した内容を自由に記録
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex gap-2 p-4 border-t border-gray-200">
          <button
            onClick={onSkip}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            スキップ
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};
