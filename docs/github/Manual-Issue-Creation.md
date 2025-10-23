# 手動でのGitHub Issue作成手順

## 1. GitHubリポジトリにアクセス
[prairie-card/personal-crm Issues](https://github.com/prairie-card/personal-crm/issues) にアクセス

## 2. 新しいIssueを作成
"New issue" ボタンをクリック

## 3. Issue内容を入力

### タイトル
```
[Plan] VercelからAmplifyへの移行対応
```

### 本文
```markdown
# [Plan] VercelからAmplifyへの移行対応

## 📋 機能概要
VercelからAmplifyへのデプロイ先変更に伴う、Vercel関連コードの調査と適切な対応

## 🎯 目標・目的
- Vercel関連の設定ファイルやコードが残っていないか調査
- 不要なVercel関連コードの削除
- Amplify移行後のクリーンな状態の確保
- デプロイ設定の最適化

## 📝 要件定義

### 機能要件
- [ ] Vercel関連ファイルの完全な調査
- [ ] 不要なVercel関連コードの特定
- [ ] 削除対象ファイルのリストアップ
- [ ] Amplify移行後の設定確認

### 非機能要件
- [ ] パフォーマンス: 既存のビルドプロセスに影響なし
- [ ] ユーザビリティ: デプロイプロセスの簡素化
- [ ] セキュリティ: 不要な設定ファイルの削除

## 🎨 調査結果

### 現在の状況
- **Vercel関連ファイル**: 発見されず
- **設定ファイル**: vercel.json、.vercelディレクトリなし
- **package.json**: Vercel関連の依存関係なし
- **ビルド設定**: Vite標準設定のみ

### 調査済み項目
- [x] vercel.json ファイル
- [x] .vercel ディレクトリ
- [x] package.json のVercel依存関係
- [x] ビルドスクリプトのVercel関連設定
- [x] 環境変数のVercel関連設定

## 🧪 テストケース定義

### 正常系テスト
- [ ] ビルドプロセスの正常動作確認
- [ ] 開発サーバーの正常起動確認
- [ ] プレビュー機能の正常動作確認

### 異常系テスト
- [ ] 削除後のビルドエラー確認
- [ ] 依存関係の整合性確認

### 境界値テスト
- [ ] 大量ファイル削除時の影響確認

## 📊 受け入れ基準
- Vercel関連の設定ファイルが完全に削除されている
- ビルドプロセスが正常に動作する
- 開発環境が正常に起動する
- Amplifyデプロイが正常に動作する

## 🔗 関連Issue
- なし（新規対応）

## 📚 参考資料
- [Vercel Documentation](https://vercel.com/docs)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Vite Build Tool](https://vitejs.dev/)

---

## ✅ Plan Phase 完了チェックリスト
- [x] 機能概要が明確に定義されている
- [x] 目標・目的が具体的に記述されている
- [x] 要件定義が完了している
- [x] 調査結果が記録されている
- [x] テストケースが定義されている
- [x] 受け入れ基準が明確になっている
- [x] 関連Issueが特定されている

## 🚀 次のステップ
Plan Phase完了後、`[Do]` ラベルを付けて実装フェーズに移行してください。
```

## 4. ラベルを設定
- `plan-phase`
- `enhancement`

## 5. Issueを作成
"Submit new issue" ボタンをクリック

## 6. 完了確認
Issueが正常に作成されたことを確認

---

## Plan Phaseの結論

### 調査結果
- ✅ **Vercel関連コード**: 存在しない
- ✅ **Amplify移行**: 既に完了
- ✅ **追加作業**: 不要

### 対応方針
1. **手動でIssue作成**: 上記の手順に従って作成
2. **MCP問題の解決**: 将来的にGitHub MCPの設定を改善
3. **次のステップ**: 他の機能開発に移行

### 知見・ノウハウ
- **MCP設定の課題**: 再起動後もツールが利用できない場合がある
- **代替手段の重要性**: 手動でのIssue作成方法を準備
- **効率的な工程管理**: 技術的問題を回避し、作業を継続
