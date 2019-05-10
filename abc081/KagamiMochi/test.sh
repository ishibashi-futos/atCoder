#!/bin/bash

tsc

echo ==========================================
echo $(cat ./test/test01.txt)
time cat ./test/test01.txt | node ./dist/app.js
echo ==========================================
echo $(cat ./test/test02.txt)
time cat ./test/test02.txt | node ./dist/app.js
echo ==========================================
echo $(cat ./test/test03.txt)
time cat ./test/test03.txt | node ./dist/app.js
