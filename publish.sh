  
ng build --prod;
cp ./404.html ./dist/animating-resume/404.html;
git add dist --force;
git commit -m "demo: build demo";
git subtree push --prefix dist/animating-resume origin gh-pages;