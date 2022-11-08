yarn build:example

cd example/public

git init
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"

git push -f git@github.com:programmer-plus-cn/programmer-plus-cn.github.io.git

cd ../../
rm -rf example/public

