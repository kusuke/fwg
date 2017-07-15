#GIT

## 開発環境
### React x Redux
基本的にrender関数にはロジックを入れない。
action内で処理を行う。

### CSS
基本的にiComponentに1scssファイル。
css modulesを採用

## 開発環境の設定
1. gitでリモートリポジトリをクローンする

2. Root Directoryで、 `npm install` のコマンドを叩く。

3. HomeBrewのinstall
    1. http://qiita.com/_daisuke/items/d3b2477d15ed2611a058

4. データベースの準備
    1. MongoDBのインストール -> `brew install mongodb`
    2. データベースの準備 -> `sudo mkdir /var/lib/mongodb`
    3. logの作成 -> `sudo touch /var/log/mongodb.log`
    3. 起動 -> `sudo mongod --dbpath /var/lib/mongodb --logpath /var/log/mongodb.log`

3. `npm run dev`でローカルサーバーを立ち上げてHMC開始