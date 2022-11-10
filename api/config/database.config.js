
module.exports = async () => {
  try {
    const conn = await require('mongoose').connect(process.env.MONGO_URI)
    conn &&
      console.log(`Connected to mongodb database: ${conn.connection.host};`)
  } catch (err) {
    console.error(err)
  }
}
