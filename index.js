const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const Page = (page) => {
	return `<div>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
      </ul>
    </nav>
    <main>
      <h1>${page}</h1>
    </main>
  </div>`;
};

app.get('/', (req, res) => {
	res.end(Page('Home'));
});

app.get('/about', (req, res) => {
	res.end(Page('About'));
});

app.listen(PORT, () => {
	console.log('Server has been started...');
});
