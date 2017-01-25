[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)

Ember Plugin for AnyChart
=========================

AnyChart Component for Ember CLI provides an easy way to use [AnyChart JavaScript Charts](http://anychart.com) with [Ember Framework](http://emberjs.com/).  

## Download and install

###Install dependencies
First, you need to download and install [NodeJS](https://nodejs.org/en/) if you don’t have it installed already.

To use the **ember-anychart** plugin, you should also have [Bower](https://bower.io/) and [Ember CLI](https://ember-cli.com/) installed.

* `npm install -g bower`  
* `npm install -g ember-cli`

###Install plugin globally
You can install **ember-anychart** plugin using **npm** or **yarn** package managers:  
* `npm install -g ember-anychart`  
* `yarn global add ember-anychart`  

###Install plugin into a project
To install **ember-anychart** plugin into an ember project, navigate to project directory and install the package: 

* `npm install --save ember-anychart`
*  `ember install --save ember-anychart`
* `yarn add ember-anychart`

## Usage

Use the following custom element in a Handlebars template file:

```handlebars
// Create a simple chart using attributes
{{ember-anychart type="pie" data=someData title="My simple chart"}}

// Create a chart using chart instance
{{ember-anychart instance=model.chart}}

// Create a dashboard using a stage instance
{{ember-anychart instance=model.stage}}

// Also you can set id and class of a container where chart is placed
{{ember-anychart instance=model.chart id="chart-container" class="custom-styled-container"}}
```

###Component attributes
| Attribute | Type | Description | Required |
| :------------- |:-------------:| :----| :---- |
| **instance** | Object | A chart or a stage instance. If you use this parameter, then *type* attribute is ignored. | **Required** (if *type* is not defined) |
| **type** | String | Chart type. Use this to create a simple chart. This parameter is ignored when an *instance* is defined. | **Required** (if *instance* is not defined) |
| **afterDraw** | Function | Chart after draw callback function. This parameter is ignored when 'instance' param is defined and it is a stage instance. | optional |
| A chart or stage settings | | You can use any chart or stage settings as an attribute, like *data*, *title*, *label*, *legend* and so on. | optional |

##Examples

Please see a sample applications in the *ember-anychart/tests/dummy/* folder.

###How to run a sample application
You should have NodeJs, Ember, and Bower installed. See [Download and install](#download-and-install).

Clone and install:
```
git clone https://github.com/AnyChart/AnyChart-Ember
cd AnyChart-Ember
npm install
bower install
ember server
```

Then open browser at *http://localhost:4200*

###Sample files
| Example | Files | Description |
| :--- |:---| :----|
|**Simple chart**|*ember-anychart/tests/dummy/app/routes/simple.js*<br>*ember-anychart/tests/dummy/app/templates/simple.hbs*|Shows how to create a simple Line Chart by creating chart instance and passing it to *instance* attribute of the component.|
|**Chart with custom settings**|*ember-anychart/tests/dummy/app/routes/chart-by-attributes.js*<br>*ember-anychart/tests/dummy/app/templates/chart-by-attributes.hbs*|Shows a simple Pie Chart with *type*, *data* and *title* attributes.<br>Also shows how to use *afterDraw* callback.|
|**Simple dashboard**|*ember-anychart/tests/dummy/app/routes/stage.js*<br>*ember-anychart/tests/dummy/app/templates/stage.hbs*|Dashboard with stage instance set to *instance* attribute.|
|**Chart with dynamic settings**|*ember-anychart/tests/dummy/app/routes/dynamic.js*<br>*ember-anychart/tests/dummy/app/controllers/dynamic.js*<br>*ember-anychart/tests/dummy/app/templates/dynamic.hbs*|Dynamic change of chart palette setting with the help of ember controller action.|
|**Data streaming**|*ember-anychart/tests/dummy/app/routes/streaming.js*<br>*ember-anychart/tests/dummy/app/templates/stage.hbs*|Dynamic change of chart data.|
|**Stock chart**|*ember-anychart/tests/dummy/app/routes/stock.js*<br>*ember-anychart/tests/dummy/app/templates/stock.hbs*<br>*ember-anychart/tests/dummy/public/stock-data.json*|A simple Stock Chart. Shows how you can load a big data set from a JSON file.|
|**Choropleth chart**|*ember-anychart/tests/dummy/app/routes/map.js*<br>*ember-anychart/tests/dummy/app/templates/map.hbs*<br>*ember-anychart/tests/dummy/public/united_states_of_america.topo.json*|Colored Geographical Map with geo data loaded from a file.|
|**Gantt chart** |*ember-anychart/tests/dummy/app/routes/gantt.js*<br>*ember-anychart/tests/dummy/app/templates/gantt.hbs*|Simple Gantt Chart.|

## Contacts

* Web: [www.anychart.com](www.anychart.com)
* Email: [contact@anychart.com](mailto:contact@anychart.com)
* Twitter: [anychart](https://twitter.com/anychart)
* Facebook: [AnyCharts](https://www.facebook.com/AnyCharts)
* LinkedIn: [anychart](https://www.linkedin.com/company/anychart)

## Links

* [AnyChart Website](http://www.anychart.com)
* [Download AnyChart](http://www.anychart.com/download/)
* [AnyChart Licensing](http://www.anychart.com/buy/)
* [AnyChart Support](http://www.anychart.com/support/)
* [Report Issues](http://github.com/AnyChart/anychart/issues)
* [AnyChart Playground](http://playground.anychart.com)
* [AnyChart Documentation](http://docs.anychart.com)
* [AnyChart API Reference](http://api.anychart.com)
* [AnyChart Sample Solutions](http://www.anychart.com/solutions/)
* [AnyChart Integrations](http://www.anychart.com/integrations/)

## License

[© AnyChart.com - JavaScript charts](http://www.anychart.com). All rights reserved.
