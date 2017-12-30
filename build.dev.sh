# Clean up previous distributions 
#rm -rf dist
#rm -rf build

# Variable pointing to NGC
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$NGC -p src/tsconfig-build.json
$ROLLUP -c

rsync -a --exclude=*.js build/ dist

cp src/package.json dist/package.json


cd dist
npm pack

cd  ../../testproject/
npm install ../ng-vida/dist/ng-vida-0.0.1.tgz