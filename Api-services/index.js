const server = require("./src/server");
const env = require("./src/config/enviroments")


server.listen(env.PORT, () => {
    console.log(`Server AUTH listening on port ${env.PORT}`);
});
