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
app.set('port', process.env.PORT || 6090)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
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

app.get('/linkedin', function(request, response) {
	response.render('linkedin');
});

app.get('/google', async function(request, response) {
	const [apiResponse] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
	  dateRanges: [{ startDate: '2024-03-31', endDate: 'today' }],
	  dimensions: [{ name: 'country' }],
	  metrics: [{ name: 'activeUsers' }],
	});
	
	// Structure the data with rows property
	const googleAd = {
	  rows: apiResponse.rows || []
	};
	
	response.render('google', { googleAd });
  });