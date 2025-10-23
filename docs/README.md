# Personal CRM - ドキュメント構成

このディレクトリには、Personal CRMプロジェクトの全てのドキュメントが含まれています。

## 📁 ディレクトリ構成

```
docs/
├── specs/              # プロダクト仕様書
├── overview/           # プロジェクト概要
├── planning/           # プランニングドキュメント
├── personas/           # ユーザーペルソナ
├── benchmark/          # 競合分析
├── github/             # GitHub工程管理
├── release-notes/      # リリースノート
└── old/                # 旧ドキュメント（非推奨）
```

---

## 📋 重要なドキュメント

### プロダクト仕様書（specs/）

#### V1仕様書 - 最優先で参照

- **[v1-product-spec.md](./specs/v1/v1-product-spec.md)** ⭐ 非技術者向け
  - 技術的詳細を排除したプロダクト仕様書
  - 実装の優先順位（Phase 1.1/1.2/1.3）
  - ディスカッション項目（未決定事項）
  - **用途**: チーム共有、機能の優先順位決定、議論

- **[current-spec.md](./specs/v1/current-spec.md)** ⭐ エンジニア向け
  - 技術的詳細を含む完全な仕様書
  - データ構造、実装方法、UIの変更履歴
  - **用途**: 実装時の詳細仕様参照

- **[iphone_view_rule.md](./specs/v1/iphone_view_rule.md)** ⭐ 開発制約
  - iPhone View開発の制約事項
  - モーダル幅・高さの制限
  - スクリーンID管理ルール
  - **用途**: 開発時の必須ルール確認

#### 過去の開発履歴（archive/）

- `archive/1008/` - 2024年10月8日の仕様
- `archive/1009/` - 2024年10月9日の仕様
- `archive/1010/` - 2024年10月10日の仕様
- `archive/1015/` - 2024年10月15日の仕様
- `archive/1016/` - 2024年10月16日の仕様
- `archive/1021/` - 2024年10月21日の仕様

---

### プロジェクト概要（overview/）

- **[プロジェクトの全体像.md](./overview/プロジェクトの全体像.md)**
  - プロジェクトのミッション、コンセプト
  - ターゲットユーザー、開発フェーズ

---

### プランニング（planning/）

- **[Plan-Phase-Vercel-Amplify-Migration.md](./planning/Plan-Phase-Vercel-Amplify-Migration.md)**
  - Vercel/Amplifyへの移行計画
- **[todos.md](./planning/todos.md)**
  - 開発TODO一覧

---

### ユーザーペルソナ（personas/）

ターゲットユーザーのペルソナドキュメント

- `01_startup_founder.md` - スタートアップ創業者
- `04_freelance_designer.md` - フリーランスデザイナー
- `06_vp_sales.md` - 営業責任者
- `07_community_leader.md` - コミュニティリーダー
- など

---

### 競合分析（benchmark/）

- **[benchmarks.md](./benchmark/benchmarks.md)** - 競合サービス分析
- **[claude_persona_evaluation.md](./benchmark/claude_persona_evaluation.md)** - Claudeペルソナ評価
- **[ClayとHappenstanceのリーンキャンバス分析.md](./benchmark/ClayとHappenstanceのリーンキャンバス分析.md)**

---

### GitHub工程管理（github/）

GitHub IssueベースのPDCA工程管理ドキュメント

- **[Issue-Management-Workflow.md](./github/Issue-Management-Workflow.md)** - ワークフロー概要
- **[Plan-Phase-Template.md](./github/Plan-Phase-Template.md)** - Planフェーズテンプレート
- **[Manual-Issue-Creation.md](./github/Manual-Issue-Creation.md)** - Issue手動作成手順
- **[GitHub-Issue工程管理.md](./github/GitHub-Issue工程管理.md)** - 工程管理詳細
- **[README.md](./github/README.md)** - GitHub工程管理の概要

---

### リリースノート（release-notes/）

- **[1015-release-summary.md](./release-notes/1015-release-summary.md)** - 10月15日リリースサマリー

---

## 🔄 ドキュメント更新ルール

### 機能の変更・追加時

機能の変更や追加があった場合は、**必ず以下の2つのドキュメントを更新**してください。

1. **v1-product-spec.md**（非技術者向け）
   - 自然言語で記述
   - 技術用語を避ける
   - Phase 1.1/1.2/1.3の構成を維持

2. **current-spec.md**（エンジニア向け）
   - 技術的詳細を含めて正確に記述
   - 変更日時とともに変更履歴を記録
   - UIの変更点セクションを追加

詳細は `.cursor/rules/000_general.mdc` の「8. ドキュメント管理」セクションを参照してください。

---

## 📌 よくある質問

### Q: 新しい仕様を追加する場合、どこに置けば良いですか？

**A:** 仕様の種類によって異なります。

- **V1の機能追加・変更**: `v1-product-spec.md` と `current-spec.md` を更新
- **日付ベースの詳細仕様**: `specs/v1/archive/MMDD/` に配置（参照用）
- **V2以降の新機能**: `specs/v2/` に新規作成（将来）

### Q: 過去の日付フォルダ（archive/）は削除しても良いですか？

**A:** いいえ、削除しないでください。過去の仕様変更履歴として保存しています。

### Q: 技術的な詳細を含む仕様書と、非技術者向けの仕様書、どちらを優先すべきですか？

**A:** **両方とも重要**です。

- **非技術者との議論**: `v1-product-spec.md` を使用
- **実装時**: `current-spec.md` を参照
- **どちらも最新に保つ**: 両方を必ず更新

---

## 📚 関連ドキュメント

プロジェクトルートの以下のドキュメントも参照してください。

- **[CLAUDE.md](../CLAUDE.md)** - Claude Code向けプロジェクトガイド
- **[.cursor/rules/](../.cursor/rules/)** - Cursor AI開発ルール
- **[README.md](../README.md)** - プロジェクトREADME

---

最終更新: 2025-10-21
