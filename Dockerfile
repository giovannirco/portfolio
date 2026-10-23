# syntax=docker/dockerfile:1
FROM node:24.22.1-alpine@sha256:06d7adf3e0ef61a13f1d28682726366f97a15aa1888c934d3ecec86c33918b53 AS build
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
