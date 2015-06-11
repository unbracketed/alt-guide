# Actions



Actions can be thought of the as the application's interal API. Within the flux paradigm, it might be more accurate to say that changes in application state begin with actions.* So the set of actions within a flux application provide an index of the different ways its state is expected to change.



## Actions and Action Creators

A possible source of confusion when learning about or discussing flux comes from the distinction between the terms "action" and "action creator". The action is the piece of data that is given to the dispatcher to pass along to Stores. Usually we use a function or helper method to create the action payload and so we can call these functions "action creators". The term "action" tends to be used interchangeably to refer to either one. For example you may encounter discussion of doing other stuff within "actions" such as logging or asynchronous operations. In technical terms this means doing additional work within the "action creator" before dispatching the "action"

It is natural to associate generating an action from a user interaction (like a button click handler). In practice, other types of actions might be generated and dispatched which may or may not be directly associated with user interaction. For example, a websocket receiving data will generate an action to update the store.


## Declaring and Creating Actions

There are several ways of declaring actions within Alt, giving you the choice between terse syntax for simple needs or the leverage to use objects, classes, or modules for customizing functionality.

### generateActions

A utility function which generates action creators based on the names you provide. This is a good option for prototyping, or for when you don't need any additional handling in your action creators and can just pass the action payload through to the dispatcher. These generic action creators can also work well with reduce-style Stores.

```
const actions = alt.generateActions('go', 'stop')
```

Now `actions` will be an object with two instance methods: `go()` and `stop()`.



### createAction

### createActions

### addActions

## Accessing and Calling Action Creators

## Logging and Debugging

Alt provides a utility for registering to listen to actions:

```
import Alt from 'alt'
import ActionListeners from 'alt/utils/ActionListeners'

const alt = new Alt()
const listener = new ActionListeners(alt)

const axns = alt.generateActions('go', 'stop')
const id = listener.addActionListener(axns.GO, (data, actionType) => {
  console.log('ACTION:', actionType.id, 'DATA:', data)
})
```

Now calls to `axns.go()` will be logged to the console.

```
axns.go()
axns.go({year: 1985})
```
*outputs*
```
ACTION: global.go DATA: undefined
ACTION: global.go DATA: { year: 1985 }
```
