# Road to the Record
## NodeCG 環境で試したい人
```
$ docker compose build --build-arg LAYOUTS_NAME=rttr-gen2 nodecg
$ docker compose up nodecg
```
上記コマンド実行後、 `http://localhost:9090/` で確認可能

## Graphics を試したい人（開発者向け）
Docker がインストール済み且つ Docker Compose が使えることを前提としています
```
$ docker compose build site
$ docker compose up -d site
```
上記コマンド実行後、 `http://localhost:5173/graphics/a/` で確認可能