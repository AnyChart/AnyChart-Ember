[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)

Ember plugin for AnyChart
=========================

An AnyChart component for Ember CLI. 
 
Provides an easy way to use [AnyChart JavaScript Charts](http://anychart.com) with [Ember Framework](http://emberjs.com/).  

## Download and install

###Install dependencies
Begin by downloading [NodeJS](https://nodejs.org/en/) if you don’t already have it installed.

To use **ember-anychart** plugin you should also have installed [Bower](https://bower.io/) and [Ember CLI](https://ember-cli.com/).

* `npm install -g bower`  
* `npm install -g ember-cli`

###Install plugin on computer
You can install **ember-anychart** plugin on your computer globally using **npm** or **yarn** package managers:  
* `npm install -g ember-anychart`  
* or `yarn global add ember-anychart`  

###Install plugin into project
To install **ember-anychart** plugin into your ember project navigate to project directory and first download package: 

* `npm install --save ember-anychart` 
* or `yarn add ember-anychart`


## Usage

Use the following custom element to a Handlebars template file:

```handlebars
// Create simple chart using attributes
{{ember-anychart type="pie" data=someData title="My simple chart"}}

// Create chart using chart instance
{{ember-anychart instance=model.chart}}

// Create some dashboard using stage instance
{{ember-anychart instance=model.stage}}

// Also you can set up id and class of charts's container
{{ember-anychart instance=model.chart id="chart-container" class="custom-styled-container"}}
```


###Component attributes
| Attribute | Type | Description | Required |
| :------------- |:-------------:| :----| :---- |
| **instance** | Object | Anychart's chart or stage instance. If you use this parameter, then *type* attribute is ignored. | **Required** (if not defined *type*) |
| **type** | String | Type of chart. Use this to create simple chart. This param is ignored when *instance* is defined. | **Required** (if not defined *instance*) |
| **afterDraw** | Function | After chart draw callback function. This param is ignored when 'instance' param is defined and it is a stage instance. | optional |
| All anychart's chart (or stage) instance setting | | You can use any other anychart's chart or stage instance setting as attribute, for example *title*, *label*, *legend* and so on. | optional |


##Examples

You can find example application in *ember-anychart/tests/dummy/* directory.

###How to run example application
Assume you have installed NodeJs, Ember and Bower. Otherwise read [Download and install](#download-and-install) section first.

```
git clone https://github.com/AnyChart/AnyChart-Ember
cd AnyChart-Ember
npm install
bower install
ember server
```
And then open browser at *http://localhost:4200*

###Examples files
| Example | Files | Description |
| :--- |:---| :----|
|**Simple chart**|*ember-anychart/tests/dummy/app/routes/simple.js*<br>*ember-anychart/tests/dummy/app/templates/simple.hbs*|Shows how to create simple Line Chart by creating chart instance and passing it to *instance* attribute of the component.|
|**Chart with custom settings**|*ember-anychart/tests/dummy/app/routes/chart-by-attributes.js*<br>*ember-anychart/tests/dummy/app/templates/chart-by-attributes.hbs*|Shows simple Pie Chart creation by setting *type*, *data* and *title* attributes of the component.<br>Also shows how you can use *afterDraw* callback.|
|**Simple dashboard**|*ember-anychart/tests/dummy/app/routes/stage.js*<br>*ember-anychart/tests/dummy/app/templates/stage.hbs*|Dashboard creation by passing stage instance to *instance* attribute.|
|**Chart with dynamic settings**|*ember-anychart/tests/dummy/app/routes/dynamic.js*<br>*ember-anychart/tests/dummy/app/controllers/dynamic.js*<br>*ember-anychart/tests/dummy/app/templates/dynamic.hbs*|Dynamic change of chart's palette setting with the help of ember controller action.|
|**Data streaming**|*ember-anychart/tests/dummy/app/routes/streaming.js*<br>*ember-anychart/tests/dummy/app/templates/stage.hbs*|Dynamic change of chart's data set data.|
|**Stock chart**|*ember-anychart/tests/dummy/app/routes/stock.js*<br>*ember-anychart/tests/dummy/app/templates/stock.hbs*<br>*ember-anychart/tests/dummy/public/stock-data.json*|Creation of simple Stock Chart. Also shows how you can load big set of data from a json file.|
|**Choropleth chart**|*ember-anychart/tests/dummy/app/routes/map.js*<br>*ember-anychart/tests/dummy/app/templates/map.hbs*<br>*ember-anychart/tests/dummy/public/united_states_of_america.topo.json*|Choropleth Chart creation with loading geo data from a file.|
|**Gantt chart** |*ember-anychart/tests/dummy/app/routes/gantt.js*<br>*ember-anychart/tests/dummy/app/templates/gantt.hbs*|Simple Gantt Chart creation.|


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
