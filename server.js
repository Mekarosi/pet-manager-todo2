const express = require('express');
const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json({ extended: false }));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
