# Advantages and Disadvantages of Template Driven Forms
In the simple template-driven example above we cannot really see it, but keeping the template as the source of all the form validation rules is something that can become pretty hard to read and maintain very quickly.

As we add more and more validator tags to a field or when we start adding complex cross-field validations the readability and maintainability of the form decreases.

It might become harder to hand over the form to a web designer for example, as the template gets more complex and full of business validation rules.

The upside of this way of handling forms is its initial simplicity, and it's probably enough to build small to medium-sized forms.

It's also very similar to what was done in AngularJs with ng-model, so this programming model will be familiar to a lot of developers already.

On the downside, the form validation logic cannot be easilly unit tested and the templates can become complex rather quickly.
