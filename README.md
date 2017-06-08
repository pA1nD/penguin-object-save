# penguin save-button

On the object page, use this component instead of the normal save button.

This makes it possible to access data from an object on another website. E.g. useful to show a list with all blog items.

Example usage
```javascript
a.cms-btn.btn-save(data-component='SaveButton' data-props={
  field: "nameOfAGlobalField",
  keys: ["image", "name", "content", "url", "type", "startdate", "enddate"]
})
```

Donot forget to adjust your package.json:
```json
{
  "penguin": {
    "globals": [
      "nameOfAGlobalField"
    ]
  }
}
```
