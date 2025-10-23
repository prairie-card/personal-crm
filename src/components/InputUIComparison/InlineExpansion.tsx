import React, { useState } from 'react';
import { Contact } from '../../types/Contact';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface InlineExpansionProps {
  contacts: Contact[];
  device: 'iphone' | 'desktop';
}

export const InlineExpansion: React.FC<InlineExpansionProps> = ({
  contacts,
  device,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [memo, setMemo] = useState('');
  const [savedContacts, setSavedContacts] = useState<number[]>([]);

  const handleToggle = (contactId: number) => {
    if (expandedId === contactId) {
      setExpandedId(null);
      setMemo('');
    } else {
      setExpandedId(contactId);
      setMemo('');
    }
  };

  const handleSave = (contactId: number) => {
    setSavedContacts([...savedContacts, contactId]);
    setExpandedId(null);
    setMemo('');
  };

  const handleSkip = () => {
    setExpandedId(null);
    setMemo('');
  };

  return (
    <div className="relative h-full bg-gray-50">
      {/* Screen Identifier */}
      <div className="bg-purple-50 border-b border-purple-200 px-3 py-1 flex items-center justify-center">
        <span className="text-[10px] font-mono font-semibold text-purple-900">
          MOCK-INLINE-{device.toUpperCase()}
        </span>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <h2 className="text-lg font-bold text-gray-900">新着コンタクト</h2>
        <p className="text-xs text-gray-500 mt-1">
          タップして展開、メモを追加できます
        </p>
      </div>

      {/* Contact List */}
      <div className="p-4 space-y-3 overflow-y-auto">
        {contacts.map((contact) => {
          const isExpanded = expandedId === contact.id;
          const isSaved = savedContacts.includes(contact.id);

          return (
            <div
              key={contact.id}
              className={`bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all ${
                isExpanded ? 'ring-2 ring-gray-900' : ''
              } ${isSaved ? 'opacity-50' : ''}`}
            >
              {/* Card Header */}
              <div
                onClick={() => !isSaved && handleToggle(contact.id)}
                className={`p-4 ${
                  isSaved ? '' : 'cursor-pointer hover:bg-gray-50'
                } transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                    {contact.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">
                        {contact.name}
                      </h3>
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
                  {!isSaved && (
                    <div className="text-gray-400">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="border-t border-gray-200 bg-gray-50 p-4 animate-in slide-in-from-top duration-200">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        💭 メモを追加
                      </label>
                      <textarea
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                        placeholder="例: Tech Conferenceで出会った。AI技術に詳しそう"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none bg-white"
                        rows={3}
                        autoFocus
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        出会った場所や第一印象を記録
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleSkip}
                        className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        スキップ
                      </button>
                      <button
                        onClick={() => handleSave(contact.id)}
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
        })}
      </div>
    </div>
  );
};
