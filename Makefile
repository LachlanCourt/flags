build-docker:
	docker build -t flags:latest .
build:
	make build-docker
prune: 
	docker container prune -f
start-app:
	docker run -p 4000:80 --name flags flags:latest
run:
	make prune && make start-app
