# Setting up the environment. (環境構築)

## step1 Check Node.js (Node.js の確認)

node -v

ターミナルからプロジェクトのルートディレクトリに移動後、以下を実行します。

## step2 Install the "Sass" package using npm (npm で「Sass」パッケージをインストールする)

package.json ファイルの生成。
npm init -y
「Sass」パッケージをインストールする。
npm install --save-dev sass

## step3 Install Gulp (gulp のインストール)

Sass から css 変換の定義のため、以下を実行します。
npm install gulp gulp-cli --save-dev
npm install sass gulp-sass --save-dev

gulpfile.js の作成

自動コンパイルの監視
npx gulp
