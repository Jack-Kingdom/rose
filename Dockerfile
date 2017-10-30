MAINTAINER Jack email@qiaohong.org

FROM node:alpine

# cp code and install packages
ADD ./config /root/rose/config
ADD ./src /root/rose/src
ADD ./package.json /root/rose/package.json
RUN cd /root/rose && npm install

# expose port and volume
EXPOSE 23570
VOLUME ["./config"]

# run application
ENV NODE_ENV production
WORKDIR /root/rose
CMD node src/index.js