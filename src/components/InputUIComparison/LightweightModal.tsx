import React, { useState } from 'react';
import { Contact } from '../../types/Contact';
import { X } from 'lucide-react';

interface LightweightModalProps {
  contacts: Contact[];
  device: 'iphone' | 'desktop';
}

export const LightweightModal: React.FC<LightweightModalProps> = ({
  contacts,
  device,
}) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [memo, setMemo] = useState('');
  const [savedContacts, setSavedContacts] = useState<number[]>([]);

  const handleSave = () => {
    if (selectedContact) {
      setSavedContacts([...savedContacts, selectedContact.id]);
      setMemo('');
      setSelectedContact(null);
    }
  };

  const handleSkip = () => {
    setMemo('');
    setSelectedContact(null);
  };

  return (
    <div className="relative h-full bg-gray-50">
      {/* Screen Identifier */}
      <div className="bg-purple-50 border-b border-purple-200 px-3 py-1 flex items-center justify-center">
        <span className="text-[10px] font-mono font-semibold text-purple-900">
          MOCK-MODAL-{device.toUpperCase()}
        </span>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <h2 className="text-lg font-bold text-gray-900">新着コンタクト</h2>
        <p className="text-xs text-gray-500 mt-1">
          タップしてメモを追加できます
        </p>
      </div>

      {/* Contact List */}
      <div className="p-4 space-y-3 overflow-y-auto">
        {contacts.map((contact) => {
          const isSaved = savedContacts.includes(contact.id);
          return (
            <div
              key={contact.id}
              onClick={() => !isSaved && setSelectedContact(contact)}
              className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm ${
                isSaved
                  ? 'opacity-50'
                  : 'cursor-pointer hover:border-gray-300 transition-colors'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                  {contact.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{contact.name}</h3>
                    {!isSaved && contact.status === 'new' && (
                      <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-medium rounded-full">
                        新着
                      </span>
                    )}
                    {isSaved && (
                      <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-medium rounded-full">
                        ✓ 保存済
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{contact.title}</p>
                  <p className="text-xs text-gray-500">{contact.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedContact && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h3 className="font-bold text-gray-900">
                  {selectedContact.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedContact.company}
                </p>
              </div>
              <button
                onClick={handleSkip}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💭 メモを追加
                </label>
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="例: Tech Conferenceで出会った。AI技術に詳しそう"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                  rows={4}
                />
                <p className="text-xs text-gray-500 mt-1">
                  出会った場所や第一印象を自由に記録できます
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-2 p-4 border-t border-gray-200">
              <button
                onClick={handleSkip}
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
      )}
    </div>
  );
};
