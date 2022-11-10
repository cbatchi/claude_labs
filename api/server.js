const [express, morgan, cors, apiRoutes, dbConnection] = [
  "express",
  "morgan",
  "cors",
  "./config/apiRoutes.config",
  "./config/database.config",
].map((fn) => require(fn))

// Middlewares
const [app, { PORT }, { HOST }] = [
  express(),
  process.env || 5000,
  process.env || "localhost",
]

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// Database connection
dbConnection()
// Routes
Object.keys(apiRoutes).map((key) => app.use(key, require(apiRoutes[key])))

app.listen(PORT, HOST, (err) => {
  if (err) throw err
  console.log("Server is successfully running")
})
