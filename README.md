# todo-app-with-django

## 技術要素
* 基盤: Dokcer


|NAME|TECH|
|:----|:----|
|app|Django container|
|frontend|React container|
|postgres|Postgres container|
|nginx|Nginx container|
|redis|Redis container|

## API 仕様

|No.|メソッド|エンドポイント|用途|
|:----|:----|:----|:----|
|1|POST|/api/users/|ユーザーの新規作成|
|2|GET|/api/account/|ユーザー情報書き換え(要ログイン)|
|3|POST|/api/auth/|アクセストークンを取得する|
|4|GET|/api/todos/|Todo一覧を表示(要アクセストークン)|


## Token 仕様
先頭にTokenを付与する

```bash
Token 36d6bed5d6ab96ca26caf5976503e7a7ccf517a2
```