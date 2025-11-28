## Introduction

I will be using JavaScript and some sample data to create a sales dashboard for a company that consists of a line chart, a pie chart, and a table display.  You will also be using 3rd party libraries for styling and charting libraries to format your web application and render a chart.  You will also be using JavaScript to set events to filter data.


## Background and References

Recall that in JavaScript, an object can be defined literally:

```
let person = {
    name: "roscoe", 
    age: 21,
};
```

In this case, the person object has properties that can be accessed as person.name and person.age.

Also, recall that in JavaScript, an array can be defined literally:

```
let charList = ["a", "b", "c"];
```

In this case, the charList array elements can be accessed individually as ```charList[0]```, ```charList[1]```, etc.

Combining the two concepts, we can define a literal array of objects:

```
let people = [
  { name: "roscoe", age: 21},
  { name: "rhonda", age: 22},
];
```

We can access the first person's name as ```people[0].name```, etc.


## Project Description

For this assignment, you will create a web application that shows a sales dashboard using charts and a table.  The application will also include a user interface to allow the user to filter the data displayed in the charts and the table.

### Part 1: Displaying the Data

The data for the charts and table is given in a pre-defined JavaScript arrays of objects.  Each array object has entries that contain keyed data to be displayed in the charts and the table.

For example:

```javascript
const monthlySales = [
    { month: 'January', revenue: 145000, units: 1250, target: 150000 },
    { month: 'February', revenue: 132000, units: 1100, target: 140000 },
    { month: 'March', revenue: 168000, units: 1420, target: 160000 },
    { month: 'April', revenue: 156000, units: 1310, target: 155000 },
    { month: 'May', revenue: 189000, units: 1580, target: 175000 },
    { month: 'June', revenue: 201000, units: 1690, target: 190000 },
    { month: 'July', revenue: 178000, units: 1490, target: 180000 },
    { month: 'August', revenue: 164000, units: 1370, target: 170000 },
    { month: 'September', revenue: 195000, units: 1640, target: 185000 },
    { month: 'October', revenue: 223000, units: 1870, target: 210000 },
    { month: 'November', revenue: 267000, units: 2240, target: 250000 },
    { month: 'December', revenue: 312000, units: 2620, target: 290000 }
];

const productCategories = [
    {
        category: 'Electronics',
        revenue: 782000,
        units: 3200,
        margin: 0.28,
        growthRate: 15.2
    },
    {
        category: 'Furniture',
        revenue: 524000,
        units: 1800,
        margin: 0.35,
        growthRate: 8.7
    },
    // etc...
};

const topSalespeople = [
    {
        name: 'Sarah Chen',
        region: 'West',
        revenue: 287000,
        deals: 145,
        avgDealSize: 1979,
        performance: 128 // percentage of target
    },
    {
        name: 'Marcus Johnson',
        region: 'Northeast',
        revenue: 265000,
        deals: 132,
        avgDealSize: 2008,
        performance: 122
    },
    // etc.
};
```

