[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)

AnyChart-Ember plugin
=========================

An AnyChart component for Ember CLI

## Resources:
// TODO: ...


## Installation

* `npm install --save ember-anychart`
* `ember g ember-anychart`

## Usage

Use the following custom element to a Handlebars template file:

```handlebars
{{ember-anychart instance=[chart|stage]}}
```

###Properties
|    Property   |    Required  | Type | Description  |
| :------------- |:-------------:| :----:| :---- |
| instance | required | Object | Anychart's chart or stage instance |

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

###Examples explanation

####Simple chart example
'app/routes/simple.js'  
```
export default Ember.Route.extend({
  model() {
    // first we create chart instance, setting it up
    let dataSet = anychart.data.set([...]);
    let seriesData_1 = dataSet.mapAs({x: [0], value: [1]});
    let chart = anychart.line();
    let series_1 = chart.line(seriesData_1);
    chart.title().padding([0, 0, 5, 0]);
    ... // and so on
    
    // return our chart instance as route's model
    return chart;
  }
...
```
'app/templates/simple.hbs'
```
<!-- Just pass our chart instance to ember-anychart component-->
{{ember-anychart instance=model}}
```
####Using stage example
'app/routes/stage.js'  
```
export default Ember.Route.extend({
  model() {
    // Here we create stage
    let stage = anychart.graphics.create();
    
    // Create first chart and set it up
    let chart1 = anychart.column();    
    chart1.animation(true);
    ...
    
    // set stage as container the first chart
    chart1.container(stage);

    // initiate chart1 drawing
    chart1.width(800);
    chart1.height(300);
    chart1.draw();

    // Create second chart and set it up
    let chart2 = anychart.pie([...]);
    chart2.radius('43%');
    ...

    // set stage as container the second chart
    chart2.container(stage);
    
    // initiate chart2 drawing
    chart2.width(800);
    chart2.height(300);
    chart2.top(300);
    chart2.draw();

    // return our stage instance as route's model
    return stage;
  }
...
```
'app/templates/stage.hbs'
```
<!-- Just pass our stage instance to ember-anychart component-->
<!-- Also we can set custom id and classes for chart containing div -->
{{ember-anychart instance=model id="custom-styled-container" class="class2"}}
```
####Dynamic chart settings
####Dynamic data



## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/ruby-sinatra-mysql-template/blob/master/LICENSE).
