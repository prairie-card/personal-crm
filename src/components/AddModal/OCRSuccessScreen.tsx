import React from "react";
import { CheckCircle2 } from "lucide-react";

interface OCRSuccessScreenProps {
  contactCount: number;
  onGoHome: () => void;
}

export const OCRSuccessScreen: React.FC<OCRSuccessScreenProps> = ({
  contactCount,
  onGoHome,
}) => {
  return (
    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center">
      {/* Screen Identifier */}
      <div className="absolute top-0 left-0 right-0 bg-purple-50 border-b border-purple-200 px-3 py-1 flex items-center justify-center shrink-0 z-[9998]">
        <span className="text-xs font-mono font-semibold text-purple-900">
          MOB-ADD-SUCCESS
        </span>
      </div>

      <div className="flex flex-col items-center max-w-sm px-6">
        {/* 成功アイコン */}
        <div className="mb-6">
          <CheckCircle2 className="w-20 h-20 text-green-500" strokeWidth={1.5} />
        </div>

        {/* メインメッセージ */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          完了しました！
        </h2>

        <p className="text-lg text-gray-700 text-center mb-6">
          {contactCount}件のコンタクトが作成されました
        </p>

        {/* AI検索完了の強調 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 w-full">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🤖</span>
            <div>
              <p className="text-sm font-semibold text-blue-900 mb-1">
                AI検索で詳細情報を取得しました
              </p>
              <p className="text-xs text-blue-700">
                Web上の情報から追加のプロフィールを自動取得
              </p>
            </div>
          </div>
        </div>

        {/* 感謝メッセージ */}
        <p className="text-sm text-gray-600 text-center mb-8">
          お待ちいただき、ありがとうございました
        </p>

        {/* HOMEへボタン */}
        <button
          onClick={onGoHome}
          className="w-full bg-gray-900 text-white rounded-xl py-4 px-6 font-semibold hover:bg-gray-800 transition-colors"
        >
          HOMEへ
        </button>
      </div>
    </div>
  );
};
