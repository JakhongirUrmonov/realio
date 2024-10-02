FROM node:lts
EXPOSE 3000
WORKDIR /app
COPY --chmod=777 package* gsap-bonus.tgz ./
RUN npm ci
ARG NEXT_PUBLIC_REST_API_URL
ENV NEXT_PUBLIC_REST_API_URL=$NEXT_PUBLIC_REST_API_URL
COPY --chmod=777 . .
RUN npm run build
RUN chown -R 1000:1000 /app
USER 1000
CMD [ "npm", "run", "start" ]
