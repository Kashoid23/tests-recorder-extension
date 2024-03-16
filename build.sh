rm -rf build
parcel build devtools.ts --dist-dir ./build --no-source-maps --no-cache
cp ./logo128.png build/
cp ./manifest.json build/
cp ./devtools.html build/
