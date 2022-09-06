build:
	docker build . -t lukasxavier/ffsaz

run:
	docker run -dp 80:80 lukasxavier/ffsaz