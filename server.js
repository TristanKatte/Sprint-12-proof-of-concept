console.log('Hier komt je server voor Sprint 12.')
import express from 'express'
import fetchJson from './helpers/fetch-json.js'

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

  // Route for the dashboard page
  app.get('/dashboard', async function (request, response) {
	const [apiSessions] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
  
	  // data active users firstsessions 
	  dateRanges: [{ startDate: '2023-06-01',
					 endDate: 'today',
					 },],
  
	  dimensions: [{ name: 'firstSessionDate', },],
  
	  metrics: [{    name: 'activeUsers', },],
  
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
  
	const [apiCity] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
	  // data active users per city 
  
	  dateRanges: [{ startDate: '2023-06-01',
					 endDate: 'today', },],
  
	  dimensions: [{ name: 'city', },],
  
	  metrics: [{   name: 'activeUsers', },],
  
	});
  
	const [apiGoogleAd] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
	  // data active users per city 
  
	  dateRanges: [{ startDate: '2023-06-01',
					 endDate: 'today', },],
  
	  dimensions: [{ name: 'sessionGoogleAdsAdGroupId', },],
  
	  metrics: [{   name: 'activeUsers', },],
  
	});
  
	const [apiBrowser] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
	  // data active users per city 
  
	  dateRanges: [{ startDate: '2023-06-01',
					 endDate: 'today', },],
  
	  dimensions: [{ name: 'browser', },],
  
	  metrics: [{   name: 'activeUsers', },],
  
	});
  
	response.render('dashboard', {
	  session: apiSessions,
	  continent : apiContinent,
	  country : apiCountry,
	  city : apiCity,
	  browser: apiBrowser,
	  googleAd: apiGoogleAd
	});
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
	})
});

app.get('/linkedin', async function (request, response) {
	const [apiAchievement] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
  
	  // data total users per hour 
	  dateRanges: [{ startDate: '2024-06-01',
					 endDate: 'today',
					},],
  
	  dimensions: [{ name: 'hour', },],
  
	  metrics: [{    name: 'totalUsers', },], 
  
	});
  
	const [apiUsers] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
  
	  // data total users per hour 
	  dateRanges: [{ startDate: '2024-06-01',
					 endDate: 'today',
					},],
  
	  dimensions: [{ name: 'hour', },],
  
	  metrics: [{    name: 'activeUsers', },], 
  
	});
  
	const [apiNewUser] = await analyticsDataClient.runReport({
	  property: `properties/${propertyId}`,
  
	  // data total users per hour 
	  dateRanges: [{ startDate: '2024-06-01',
					 endDate: 'today',
					},],
  
	  dimensions: [{ name: 'hour', },],
  
	  metrics: [{    name: 'newUsers', },], 
  
	});
  
	response.render('linkedin', {
	  achievement: apiAchievement,
	  users: apiUsers,
	  newuser: apiNewUser})
  });



// app.get('/hotjar', function(request, response) {

//   response.render('hotjar');
// });


  
