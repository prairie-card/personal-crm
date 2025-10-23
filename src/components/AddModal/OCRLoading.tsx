import React, { useEffect, useState } from "react";
import { Loading } from "../common/Loading";

interface OCRLoadingProps {
  onComplete: () => void;
  cardCount?: number; // 処理する名刺の枚数
}

export const OCRLoading: React.FC<OCRLoadingProps> = ({
  onComplete,
  cardCount = 1,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentCard, setCurrentCard] = useState(1);

  useEffect(() => {
    // プログレスバーのアニメーション（7.5秒に延長）
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.67; // 7.5秒で100%になるように調整
      });
    }, 50);

    // 複数枚の場合、カード番号を更新
    if (cardCount > 1) {
      const cardInterval = setInterval(() => {
        setCurrentCard((prev) => {
          if (prev >= cardCount) {
            clearInterval(cardInterval);
            return cardCount;
          }
          return prev + 1;
        });
      }, 7500 / cardCount); // 均等に分割（7.5秒）
    }

    // 7.5秒後に完了
    const timer = setTimeout(() => {
      onComplete();
    }, 7500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete, cardCount]);

  return (
    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center">
      {/* Screen Identifier */}
      <div className="absolute top-0 left-0 right-0 bg-purple-50 border-b border-purple-200 px-3 py-1 flex items-center justify-center shrink-0 z-[9998]">
        <span className="text-xs font-mono font-semibold text-purple-900">
          MOB-ADD-OCR
        </span>
      </div>

      <Loading
        size="lg"
        message={
          cardCount > 1
            ? `${cardCount}枚の名刺を読み取り中...`
            : "名刺を読み取り中..."
        }
      />

      {/* カウンター表示（複数枚の場合） */}
      {cardCount > 1 && (
        <div className="mt-4">
          <p className="text-center text-lg font-semibold text-gray-700">
            {currentCard} / {cardCount}
          </p>
        </div>
      )}

      {/* プログレスバー */}
      <div className="w-64 mt-8">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">{progress}%</p>
      </div>

      {/* ヒントテキスト */}
      <div className="mt-8 text-center max-w-xs">
        <p className="text-sm text-gray-600">名刺から情報を抽出しています...</p>
        <p className="text-xs text-gray-500 mt-2">
          名前、会社名、役職などを自動で認識します
        </p>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700">
            🤖 AI検索で人物情報を深掘り中...
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Web上の情報から詳細なプロフィールを取得しています
          </p>
        </div>
      </div>
    </div>
  );
};
