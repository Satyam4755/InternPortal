const express = require('express');
const path = require('path');
const app = express();
const PORT = 3407;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));



// Dummy data
const intern = {
  name: "Satyam Raj",
  referralCode: "satyam2025",
  totalDonations: 12000,
  rewards: ["T-Shirt", "Certificate", "LinkedIn Shoutout"]
};

const leaderboard = [
  { name: "Satyam Raj", donations: 12000 },
  { name: "Aman Kumar", donations: 9500 },
  { name: "Priya Singh", donations: 8800 }
];

// Routes
app.get('/', (req, res) => {
  res.redirect('/index');
});

app.get('/index', (req, res) => {
  res.render('index'); // ✅ Removed the callback here
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', { intern });
});

app.get('/leaderBoard', (req, res) => {
  res.render('leaderBoard', { leaderboard });
});


app.use((req, res) => {
    res.status(404).render('error', {
        title: "Error - Page Not Found",
        isLogedIn: req.isLogedIn
    });
});
// ✅ Proper app.listen() is already here
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

