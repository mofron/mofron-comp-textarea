# mofrom-comp-textarea
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

textarea component for mofron


# Install
```
npm install mofron mofrom-comp-textarea
```

# Sample
```html
<require>
    <tag load="mofron-comp-textarea">TextArea</tag>
</require>

<script run=init>
let chg_evt = (p1,p2,p3) => { console.log(p2); }
</script>

<TextArea change-event=@chg_evt></TextArea>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | string | textarea contents |
| | | | undefined: call as getter |
| | font | string | primary font name |
| | | | undefined: call as getter |
| | | string | secondary font name |
| | value | string | the same as 'text' |
| | maxlength | number | maximal length |
| | | | undefined: call as getter |
| | mainColor | mixed (color) | string: border color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | undefined: call as getter |
| | | key-value | style option |
| | clear | ||
| | focus | boolean | true: focus input |
| | | | false: defocus input |
| | | | undefined: call as getter |
| | height | string (size) | input height |
| | | | undefined: call as getter |
| | | key-value | style option |
| | width | string (size) | input width |
| | | | undefined: call as getter |
| | | key-value | style option |
| | fontSize | string(size) | textarea font-size |
| | | | undefined: call as getter |

