#!/bin/bash

git reset --hard
git pull origin master
chattr -i /www/wwwroot/vuequicki18n.golderbrother.top/dist/.user.ini
npm install && npm run docs:build
