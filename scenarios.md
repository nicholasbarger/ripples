Example scenarios to find solutions for:

*. Prototype various business processes.

1. Persist data to a form.
  Needs the form template.
  Needs the users input to the form.
  Needs a place to store the data.
  Needs a way to associate the user who entered the data.
  Needs validation of the form.  (this should be a separate ripple).
  
2. Validation rules for a data model.
  Needs to receive the input model for validating.
  Needs to have the rules to apply against the model.
  Needs to have a way to accept the model or deny the model with a collection of errors.
  
3. Creation of a form template to serve up and then attach ripples to form events.
  The events would have to be:
    click()
    moveAwayFromField()
    selectItem()
    changeValue()
    loadFromParameter()