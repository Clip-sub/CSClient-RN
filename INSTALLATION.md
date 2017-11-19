Working...

```
    if (maximumDate) {
        picker.maximumDate = maximumDate;
    }

    [picker showActionSheetPicker];

    if (picker.pickerView) {
        UIDatePicker *datePicker = (UIDatePicker *)picker.pickerView;
        NSLocale *locale = [[NSLocale alloc] initWithLocaleIdentifier:@"FR"];
        [datePicker setLocale:locale];
        [datePicker addTarget:self action:@selector(eventForDatePicker:) forControlEvents:UIControlEventValueChanged];
    }
```