module.exports = async ({
  express,
  app,
  router,
  db,
  cookieParser,
  path,
  PORT,
  HOST,
}) => {
  await db.authenticate();

  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/", router);

  app.listen(PORT, () => console.info(`listening on http://${HOST}:${PORT}`));
};
