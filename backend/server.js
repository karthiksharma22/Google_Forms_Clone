const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bahugun0042:Abc_123@clustertest.ilcjbdc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected.");
  });
