# Reactive vs Template Driven: can they be mixed?
Reactive and Template-Driven under the hood are implemented in the same way: there is a FormGroup for the whole form, and one FormControl instance per each individual control.

The difference is that, with Reactive Forms we are defining the form model programmatically in an explicit way in our component class, and we then link the form model to the template using directives such as
formGroup or formControlName.

This is as opposed to template driven forms, where the same form model made of a FormGroup and FormControl instances is built behind the scenes for us by a series of directives applied to the template, like ngForm and ngModel.

If by some reason we would need to, we could mix and match the two ways of building forms.

But in general, it's better to choose one of the two ways of doing forms, and using it consistently throughout the application.

# Reactive Forms or Template Driven Forms: which one to choose, and why?
Reactive Forms scale better for larger and more complex forms, and support better more advanced use cases.

Reactive Forms also promote a clearer separation between business logic and presentation logic, which leads to clearer, easier to read and more maintainable HTML templates.

With Reactive Forms, its much easier to implement custom validation rules, like for example a password strength validator or a multi-field validation rule.

For doing that, we just need to write a function, while in template driven forms we will have to implement an additional validation directive to call the function and make the bridge to the template.

In priciple, everything can be done using both form types, but there are a lot of use cases both common and advanced that are just simpler to implement using reactive forms.

# Which form type to choose?
Are you migrating an AngularJs application into Angular? That is the ideal scenario for using Template Driven Forms, as the ngModel supports bidirectional data binding, just like the AngularJs ng-model directive.

But other than that, Reactive Forms are a much better choice. They are more powerful, easier to use and encourage a better separation between view and business logic.

For these reasons, Reactive Forms tend to work better than Template Driven forms, and they are the better default choice for new applications.

As mentioned before, we want to avoid situations where we are using both form types together, as it can get rather confusing.

But it's still possible to use both forms together if by some reason we really need to.
