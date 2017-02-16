var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

//
// console.log ('Problem #1');
//
// for (var i=0; i<months.length; i++) {
//    for(var d=1; d<=months[i].days; d++) {
//     console.log (months[i].name + ' ' + d);
//    }
// }


console.log('Problem #2');

var hour = 24;
var minute = 60;
var second = 60;

    for (var h = 0; h < hour; h++) {
      for (var m = 0; m < minute; m++) {
        for (var s = 0; s < second; s++) {


      console.log ([h] + ":" + [m] + ":" + [s]);
  }
}
}
