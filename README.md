# toggl_slack_genkai_bot
院試受かりてえ〜〜
## スクリプトのプロパティ
### TOGGL_TOKEN
Togglのプロフィール画面から取得。
### SLACK_ACCESS_TOKEN_SHIKOKU
適切な権限を付与されたSlack Appのアクセストークン。
### MAIL
Togglのアカウントで使っているメールアドレス。

## プログラム内"***"って書いてるパラメータ
### channel_id
投稿したいSlackのチャンネル名。
### bot_name
botに表示させたい名前
## 使い方
スクリプトのプロパティを設定した後、夜にmain()が実行されるようにプロジェクトのトリガーを設定する。
