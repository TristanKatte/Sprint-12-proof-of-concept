console.log('Hier komt je server voor Sprint 12.');
import express from 'express';
import fetchJson from './helpers/fetch-json.js';
import JSConfetti from 'js-confetti';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

let propertyId = '301922918';
const analyticsDataClient = new BetaAnalyticsDataClient();

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8000);

// get routes
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/dashboard', async function(request, response) {
  const [apiResponse] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '2024-03-31', endDate: 'today' }],
    dimensions: [{ name: 'country' }],
    metrics: [{ name: 'activeUsers' }],
  });
  response.render('dashboard', { data: apiResponse });
});

// Other routes...

app.get('/hotjar', function(request, response) {
  response.render('hotjar');
});

// Export the app for Vercel
export default app;
