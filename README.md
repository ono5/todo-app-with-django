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

## デプロイ手順
AmzaonのEC2を使用する。

### EC2インストール
EC2を起動後、以下のコマンドにて環境の構築を行う。

```
# yumのアップデート
sudo yum update -y

# gitのインストール
sudo yum install git -y
git version
>> git version 2.14.5

# dockerおよびdocker-composeのインストール
sudo yum install -y docker
docker -v
Docker version 19.03.6-ce, build 369ce74
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose -v
docker-compose version 1.26.0, build d4451659
```

### EC2セキュリティグループ
EC2のインバウンドルールにTCPを許可する設定を追加する

### アプリケーション準備

```
git clone https://github.com/ono5/todo-app-with-django.git
cd todo-app-with-django
# Makefile
make build
make release
```

### ログイン画面
1. 以下にアクセス

```
http://EC2のアドレス/
```

2. 「Register User」を押下し、Userを作成する。

3. ログイン画面に戻り、ログインする。

4. Todoアプリを使用する。


## API 仕様

### Todo APIの概要
Todo API は、認証されたユーザーによる予定の検索、登録、更新、削除機能を有する。
Todoに対しての操作は、「操作を行なったユーザー自身のみ」可能とする。

### アクセストークンの取得
Todo APIを利用するには、アクセストークンを取得し、認証する必要がある。
```bash
例)
Token 36d6bed5d6ab96ca26caf5976503e7a7ccf517a2
```

アクセストークンは、Todo APIのログイン画面からログインすることで取得できる。

### API一覧
|No.|API名|メソッド|エンドポイント|用途|
|:----|:----|:----|:----|:----|
|1|ユーザー登録API|POST|/api/users/|ユーザーの新規作成を行う|
|2|ユーザー情報取得API|GET|/api/users/<user_id>|指定したユーザー情報の取得を行う|
|3|ログイン済みユーザー情報取得API|GET|/api/account/|ログインしているユーザー自身の情報の取得、更新を行う|
|4|アクセストークン取得API|POST|/api/auth/|アクセストークンを取得する|
|5|TODO一覧取得API|GET|/api/todos/|Todo一覧を表示する|
|6|TODO作成API|POST|/api/todos/|Todoを作成する|
|7|TODO更新API|PUT|/api/todos/<todo_id>|指定したTodo一を更新する|
|8|TODO削除API|DELETE|/api/todos/<todo_id>|指定したTodoを削除する|


```
# リクエストの例
## Header
{
    'Content-Type': 'application/json',
    'Authorization': 'Token 36d6bed5d6ab96ca26caf5976503e7a7ccf517a2'
}
## body
{
    'author': 1,
    'title': 'todo',
    'content': 'todo content'
}
```
