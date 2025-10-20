FROM node:20.19.5-alpine AS base 

COPY . ./code
WORKDIR /code

# Build application
RUN yarn install
RUN yarn build


FROM nginx:stable-alpine

COPY --from=base ./code/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
