# syntax=docker/dockerfile:1
FROM node:24.22.3-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5 AS build
WORKDIR /src
COPY src ./src
COPY scripts/build.mjs ./scripts/build.mjs
RUN node scripts/build.mjs

FROM nginxinc/nginx-unprivileged:1.30.6-alpine@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY deploy/headers.conf /etc/nginx/snippets/headers.conf
COPY --from=build /src/dist /usr/share/nginx/html
USER 101
EXPOSE 8080
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
