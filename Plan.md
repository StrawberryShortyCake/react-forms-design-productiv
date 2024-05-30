Item Child: get info about the item, return html
Props - unique ID - title - description - numeric priority - showNewItemForm as a f(x) - deleteItem as a f(x)
Functionalities - edit button (onClick -> call showEditItem from parent) - delete

NewItemForm Child: get info about the item, return html
Props - unique ID - title - description - numeric priority - submitForm as f(x)
State - item input state
Functionalities - edit complete (reverse last line)

ItemList
Props -
State - Items - an array of items (called when child clicks submit form)
Functionalities - Ternary for Item vs. NewItemForm - Send child a functio for handle submit - Send child a function for handle edit - Send child a function for handle delete

App
Props
State
Presentation - left hand side with List component - right hand side with a To-Do component
