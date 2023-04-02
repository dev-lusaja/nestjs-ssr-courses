IMAGE = devlusaja-nestjs-ssr-courses:latest
CONTAINER = nestjs_container

build:
	@docker build -t ${IMAGE} .

up:
	@docker run --rm --name ${CONTAINER} -p 3000:3000 -v ${PWD}/app:/code ${IMAGE} npm run dev

project:
	docker run --rm -it -v ${PWD}/app:/code ${IMAGE} npx create-next-app .
