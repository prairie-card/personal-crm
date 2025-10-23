import React, { useState } from 'react';
import { Contact } from '../types/Contact';
import { LightweightModal } from './InputUIComparison/LightweightModal';
import { InlineExpansion } from './InputUIComparison/InlineExpansion';
import { BottomSheet } from './InputUIComparison/BottomSheet';
import { StepForm } from './InputUIComparison/StepForm';

type UIType = 'modal' | 'inline' | 'bottomsheet' | 'step';
type DeviceType = 'iphone' | 'desktop';

// サンプルコンタクトデータ
const sampleContacts: Contact[] = [
  {
    id: 1001,
    name: '山田太郎',
    company: 'ABC株式会社',
    title: 'エンジニア',
    source: '名刺スキャン',
    metAt: '2025-10-23 - 名刺読み取り',
    avatar: '👨‍💼',
    priority: 'medium',
    createdDate: new Date(),
    tags: ['未開封'],
    status: 'new',
  },
  {
    id: 1002,
    name: '佐藤花子',
    company: 'XYZ Corporation',
    title: 'マーケター',
    source: 'LinkedIn',
    metAt: '2025-10-23 - LinkedIn',
    avatar: '👩‍💼',
    priority: 'medium',
    createdDate: new Date(),
    tags: [],
    status: 'new',
  },
  {
    id: 1003,
    name: '鈴木次郎',
    company: 'Tech Startup Inc.',
    title: 'CEO',
    source: '名刺スキャン',
    metAt: '2025-10-23 - 名刺読み取り',
    avatar: '🚀',
    priority: 'high',
    createdDate: new Date(),
    tags: ['未開封'],
    status: 'new',
  },
];

export const InputUIComparison: React.FC = () => {
  const [selectedUI, setSelectedUI] = useState<UIType>('modal');
  const [device, setDevice] = useState<DeviceType>('iphone');
  const [contacts] = useState<Contact[]>(sampleContacts);

  const deviceWidth = device === 'iphone' ? 'max-w-[390px]' : 'max-w-4xl';

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            入力UI比較デモ
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            新着コンタクトに「出会った場所」や「メモ」を記録するUIを比較します
          </p>

          {/* デバイス選択 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              デバイス
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setDevice('iphone')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  device === 'iphone'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📱 iPhone
              </button>
              <button
                onClick={() => setDevice('desktop')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  device === 'desktop'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                💻 Desktop
              </button>
            </div>
          </div>

          {/* UI選択 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              入力UI
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <button
                onClick={() => setSelectedUI('modal')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedUI === 'modal'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                案A: 軽量モーダル
              </button>
              <button
                onClick={() => setSelectedUI('inline')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedUI === 'inline'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                案B: インライン展開
              </button>
              <button
                onClick={() => setSelectedUI('bottomsheet')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedUI === 'bottomsheet'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                案C: ボトムシート
              </button>
              <button
                onClick={() => setSelectedUI('step')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedUI === 'step'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                案D: ステップ形式
              </button>
            </div>
          </div>
        </div>

        {/* デモエリア */}
        <div className="flex justify-center">
          <div className={`${deviceWidth} w-full`}>
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                device === 'iphone' ? 'aspect-[9/19.5]' : 'min-h-[600px]'
              }`}
            >
              {/* 各UIコンポーネント */}
              {selectedUI === 'modal' && (
                <LightweightModal contacts={contacts} device={device} />
              )}
              {selectedUI === 'inline' && (
                <InlineExpansion contacts={contacts} device={device} />
              )}
              {selectedUI === 'bottomsheet' && (
                <BottomSheet contacts={contacts} device={device} />
              )}
              {selectedUI === 'step' && (
                <StepForm contacts={contacts} device={device} />
              )}
            </div>
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            {selectedUI === 'modal' && '案A: 軽量モーダル'}
            {selectedUI === 'inline' && '案B: インライン展開'}
            {selectedUI === 'bottomsheet' && '案C: ボトムシート'}
            {selectedUI === 'step' && '案D: ステップ形式'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            {selectedUI === 'modal' && (
              <>
                <p>
                  • 画面中央に小さなモーダルが表示されます
                </p>
                <p>• 背景は半透明で、元の画面が見えます</p>
                <p>• シンプルで軽量な印象</p>
              </>
            )}
            {selectedUI === 'inline' && (
              <>
                <p>• カードをタップすると、その場で入力欄が展開</p>
                <p>• アコーディオン形式で他のカードは下にスライド</p>
                <p>• コンテキストを保持しやすい</p>
              </>
            )}
            {selectedUI === 'bottomsheet' && (
              <>
                <p>• 画面下からスライドアップ</p>
                <p>• 背景のカードは見えたまま</p>
                <p>• スワイプダウンで閉じられる（モバイル）</p>
              </>
            )}
            {selectedUI === 'step' && (
              <>
                <p>• 全画面で1枚ずつ処理</p>
                <p>• 左右スワイプで次へ/戻る</p>
                <p>• プログレスバーで進捗が分かる</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
