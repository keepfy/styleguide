all:
	git subtree split --prefix public -b gh-pages && \
	git push -f origin gh-pages:gh-pages && \
	git branch -D gh-pages

