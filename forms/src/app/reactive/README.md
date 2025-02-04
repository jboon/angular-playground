# Advantages of Reactive Forms vs Template Driven Forms
You are probably wondering what we gained here. On the surface there is already a big gain: the template of the component is a lot cleaner, and focuses only on presentation logic.

Having a lot of directives in the template for defining business validation rules can easily become messy for larger forms, so its much cleaner to define that logic on the component class instead.

All the business validation rules for each of the form fields has been moved to the component class, where they can be unit tested a lot more easily.

Moving the form model definition to the component makes it very easy to define the form dynamically if necessary, based for example on backend data, so its easier to implement more advanced use cases.

Also, with reactive forms, its a lot easier to create a custom validator: we just have to define a function and plug into our configuration.

While with template driven forms, we have to write also a custom directive which is a bit more complicated then simply writing a function, in order to get the exact same functionality.

So as we can see, the reactive forms module allows to define the form model programmatically instead of declaratively via the view, and they do provide some advantages when compared to template driven forms.
