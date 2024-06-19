console.log('Hier komt je server voor Sprint 12.')
import express from 'express'
import fetchJson from './helpers/fetch-json.js'
import JSConfetti from 'js-confetti'

/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
let propertyId = '301922918';

// Imports the Google Analytics Data API client library.
import {BetaAnalyticsDataClient} from '@google-analytics/data';

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 8000)
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
    dateRanges: [
      {
        startDate: '2024-03-31',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'country',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  response.render('dashboard', {data: apiResponse});
});

app.get('/google', async function(request, response) {
	let propertyId = '301922918';

	// Using a default constructor instructs the client to use the credentials
	// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
	const analyticsDataClient = new BetaAnalyticsDataClient();

	// Runs a simple report.
	const [res] = await analyticsDataClient.runReport({
		property: `properties/${propertyId}`,
		dateRanges: [
		{
			startDate: '2024-06-01',
			endDate: 'today',
		},
		],
		dimensions: [
		{
			name: 'country',
		},
		],
		metrics: [
		{
			name: 'activeUsers',
		},
		],
	});
	response.render('google', {
		rows: res.rows,
		googleAd: apiGoogleAd
	})
});

const [apiGoogleAd] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    // data active users per city 

    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'sessionGoogleAdsAdGroupId', },],

    metrics: [{   name: 'activeUsers', },],

  });

app.get('/linkedin', function(request, response) {

  response.render('linkedin', {
	session: apiSessions,
    continent : apiContinent,
    country : apiCountry
  });
});

const [apiContinent] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    
    // data active users per continent 
    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'continent', },],

    metrics: [{    name: 'activeUsers', },],

  });

  const [apiCountry] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data active users per country 
    dateRanges: [{ startDate: '2021-06-01',
                   endDate: 'today', },],

    dimensions: [{ name: 'country', },],

    metrics: [{    name: 'activeUsers', },],

  });

  const [apiSessions] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,

    // data active users firstsessions 
    dateRanges: [{ startDate: '2023-06-01',
                   endDate: 'today',
                   },],

    dimensions: [{ name: 'firstSessionDate', },],

    metrics: [{    name: 'activeUsers', },],

  });



app.get('/hotjar', function(request, response) {

  response.render('hotjar');
});

