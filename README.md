# mofron-comp-textarea
TextArea component for [mofron](https://github.com/simpart/mofron).

# Sample
```javascript
require('mofron');
let TxtArea  = require('mofron-comp-textarea');

let txtarea = new TxtArea({
                // this is option
                param     : 'TextArea',  // set default text value
                width     : 300,     // set input width 300px
                height    : 40,        // set input height 40px
                maxLength : 100,  // set limit input char length
                visible   : true
            });

txtarea.text('set input text');   // set input text
txtarea.text();  // get input text value
```
