import React, { useState } from "react";
import { Modal } from "./common/Modal";
import { GeneralTab } from "./notifications/GeneralTab";
import { AISearchTab } from "./notifications/AISearchTab";
import { Notification } from "../types/Notification";
import { Contact } from "../types/Contact";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications?: Notification[];
  contacts?: Contact[];
}

type TabType = "general" | "ai-search";

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  notifications = [],
  contacts = [],
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("general");

  // AI検索タブを表示するかどうか（将来的に有効化するためのフラグ）
  const showAISearchTab = false;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="通知" bodyClassName="p-0">
      <div className="flex flex-col h-full">
        {/* Screen Identifier */}
        <div className="bg-purple-50 border-b border-purple-200 px-2 py-1 flex items-center justify-center relative z-[9998]">
          <span className="text-[10px] font-mono font-semibold text-purple-900">
            MOB-NOTIF-GEN
          </span>
        </div>

        {/* Tab Navigation - AI検索タブがある場合のみ表示 */}
        {showAISearchTab && (
          <div className="flex border-b border-gray-200 px-6 py-3">
            <button
              onClick={() => setActiveTab("general")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === "general"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              role="tab"
              aria-selected={activeTab === "general"}
            >
              お知らせ
            </button>
            <button
              onClick={() => setActiveTab("ai-search")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === "ai-search"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              role="tab"
              aria-selected={activeTab === "ai-search"}
            >
              AI検索
            </button>
          </div>
        )}

        {/* Tab Content */}
        <div role="tabpanel" className="flex-1 overflow-y-auto px-6 py-4">
          {activeTab === "general" ? (
            <GeneralTab notifications={notifications} />
          ) : (
            <AISearchTab notifications={notifications} contacts={contacts} />
          )}
        </div>
      </div>
    </Modal>
  );
};
