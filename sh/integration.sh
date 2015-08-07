npm run pre-integration
npm start &
sleep 2
./node_modules/.bin/protractor ./config/protractorConfig.js
npm run pos-integration
npm stop