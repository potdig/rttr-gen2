# Road to the Record

## とりあえず試したい

1. `cfg` フォルダに下記のフォーマットで `rttr-gen2.json` を作成

   ```
   {
     "googleWebAppUrl": "GASアプリのURL",
     "googleSpreadsheetId": "スプレッドシートのID"
   }
   ```

2. Docker Compose でビルドして起動

   ```
   $ docker compose build --build-arg LAYOUTS_NAME=rttr-gen2
   $ docker compose up
   ```

3. `http://localhost:9090/` で確認（適宜下記アセットを追加して確認してください）
   - 素材
     - `background.png`
     - `rttr-logo.png`
     - `rb-logo.png`
     - `catch.png`
     - `logo_A1.png`

## Architecture

- NodeCG
- TypeScript
- Vite
- Svelte
