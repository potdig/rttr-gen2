# Road to the Record
## Graphics
### ためす
Docker がインストール済み且つ Docker Compose が使えることを前提としています
```
$ docker compose build
$ docker compose up -d
```
上記コマンド実行後、 `http://localhost:5173/graphics/a/` で確認可能

### ビルドする
```
# dist 配下にビルド
$ npm run build

# 指定パス配下にビルド
$ OUT_DIR=~/nodecg/bundles/rttr-layouts npm run build