# Google Analytics MCP Server - Claude 使用例

このドキュメントでは、Google Analytics MCPサーバーをClaudeと一緒に使用する方法の例を示します。

## 前提条件

1. MCPサーバーが正しく設定され、実行されていること
2. Claude DesktopまたはClaudeウェブアプリでMCPサーバーが設定されていること

## 基本的なレポートの取得

以下のようにClaudeに指示することで、Google Analyticsのレポートを取得できます：

```
先週のウェブサイトトラフィックに関するレポートを取得してください。アクティブユーザー数、セッション数、ページビュー数を日付別に表示してください。
```

Claudeは以下のようにレスポンスします：

```
Google Analyticsからデータを取得します。

get_report ツールを使用して、過去7日間のトラフィックデータを取得します：
- アクティブユーザー数
- セッション数
- ページビュー数
を日付別に表示します。

結果：
[Google Analyticsからのレポートデータがここに表示されます]

このデータから、以下のことがわかります：
[データの分析と洞察]
```

## リアルタイムデータの取得

リアルタイムデータを取得するには：

```
現在のウェブサイトのアクティブユーザー数を教えてください。デバイスカテゴリ別に分類してください。
```

Claudeは以下のようにレスポンスします：

```
Google Analyticsからリアルタイムデータを取得します。

get_realtime_data ツールを使用して、現在のアクティブユーザー数をデバイスカテゴリ別に取得します。

結果：
[リアルタイムデータがここに表示されます]

現在、合計X人のユーザーがウェブサイトを閲覧しています：
- デスクトップ: X人
- モバイル: X人
- タブレット: X人
```

## メタデータの取得

利用可能なメトリクスとディメンションを確認するには：

```
Google Analyticsで利用可能なメトリクスとディメンションのリストを教えてください。
```

Claudeは以下のようにレスポンスします：

```
Google Analyticsのメタデータを取得します。

ga4://property/[プロパティID]/metadata リソースにアクセスして、利用可能なメトリクスとディメンションを確認します。

利用可能なメトリクス：
- activeUsers: アクティブユーザー数
- sessions: セッション数
- screenPageViews: ページビュー数
- conversions: コンバージョン数
- totalRevenue: 総収益

利用可能なディメンション：
- date: 日付
- deviceCategory: デバイスカテゴリ
- country: 国
- browser: ブラウザ
- source: ソース
- medium: メディア
```

## 複雑なレポートの例

より複雑なレポートを取得するには：

```
先月のコンバージョン数と総収益を国別、デバイスカテゴリ別に分析してください。上位5カ国のみ表示してください。
```

Claudeは以下のようにレスポンスします：

```
Google Analyticsから複雑なレポートを取得します。

get_report ツールを使用して、以下のデータを取得します：
- 期間: 先月
- メトリクス: コンバージョン数、総収益
- ディメンション: 国、デバイスカテゴリ
- 制限: 上位5カ国

結果：
[レポートデータがここに表示されます]

分析：
[データの分析と洞察]