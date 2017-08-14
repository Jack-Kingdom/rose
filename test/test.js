let developmentConfig = {
  debug: true,
  mongodbUrl: 'mongodb://localhost:27017/RoseTest'
}

for (let ele in developmentConfig) {
  console.log(ele)
}
