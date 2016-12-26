[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)

AnyChart-Ember plugin
=========================

An AnyChart component for Ember CLI

## Installation

* `npm install --save ember-anychart`
* `ember g ember-anychart`

## Usage

Use the following custom element to a Handlebars template file:

```handlebars
// Create simple chart using attributes
{{ember-anychart type="pie" data=model.data title="My simple chart"}}

// Create chart using chart instance
{{ember-anychart instance=model.chart}}

// Create some dashboard using stage instance
{{ember-anychart instance=model.stage}}

// Also you can set up id and class of charts's container
{{ember-anychart instance=model.chart id="chart-container" class="custom-styled-container"}}
```


###Properties
|    Property   |    Required  | Type | Description  |
| :------------- |:-------------:| :----:| :---- |
| instance | optional | Object | Anychart's chart or stage instance. If you use this parameter, then 'type' is ignored. |
| type | optional | String | Type of chart. Use this to create simple chart. This param is ignored when 'instance' is defined. |
| afterDraw | optional | Function | After chart draw callback function. This param is ignored when 'instance' param is defined and it is a stage instance. |

And you can use any other anychart chart or stage instance setting as attribute, for example 'title', 'label', 'legend' and so on.


###Examples

You can find example application in 'ebmer-anychart/tests/dummy/' directory.
####How to run example application
```
git clone https://github.com/AnyChart/AnyChart-Ember
cd AnyChart-Ember
npm install
bower install
ember s
```
And then open browser at http://localhost:4200

###Examples files

####Simple chart example
'app/routes/simple.js'  
'app/templates/simple.hbs'

####Chart by attributes
'app/routes/chart-by-attributes.js'  
'app/templates/chart-by-attributes.hbs'

####Create stage with charts
'app/routes/stage.js'  
'app/templates/stage.hbs'

####Dynamic chart settings
'app/routes/dynamic.js'
'app/controllers/dynamic.js'
'app/templates/dynamic.hbs'

####Dynamic data (streaming)
'app/routes/streaming.js'  
'app/templates/stage.hbs'


## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/ruby-sinatra-mysql-template/blob/master/LICENSE).
