import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

app.get("/", (req,res ) => {
  res.send("server is ready");
});


const jokes = [
  { id: 1, title: 'Why did the scarecrow win an award?', content: 'Because he was outstanding in his field!' },
  { id: 2, title: 'Why don’t skeletons fight each other?', content: 'They don’t have the guts.' },
  { id: 3, title: 'What do you call fake spaghetti?', content: 'An impasta!' },
  { id: 4, title: 'What do you call cheese that isn’t yours?', content: 'Nacho cheese.' },
  { id: 5, title: 'Why can’t your nose be 12 inches long?', content: 'Because then it would be a foot!' }
];

app.get("/api/jokes", (req, res) => {
  console.log("API /api/jokes accessed");
  res.json(jokes);
});




const port = process.env.PORT || 5000; // Change to 5000


app.listen(port, () => {
  console.log(`serverat http://localhost:${port}`);
});
