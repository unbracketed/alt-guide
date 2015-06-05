Singleton vs. Instance

--------

Actions

What is an action?

Actions, Action creators

Actions can be thought of the as the application's interal API. Changes in state begin with Actions, so the set of Actions for an application can be thought of as an index of the state transitioning operations for an application. It is natural to associate generating an action from a user interaction (like a button click handler). In practice, other types of actions might be generated and dispatched which may or may not be directly associated with user interaction. For example, a websocket receiving data will generate an action to update the store. 


Declaring Actions

Alt tries to be flexible with how you declare the various pieces of the Flux cycle. Action, Store are semantic notions; the important part is the contract between how these pieces work with the dispatcher.

When you create actions, they are registered with the Alt instance and available on the `actions` property.
#--
with pojo
with class
using generate

alt.actions
action
try creating multiple Unknown
#---




returning vs dispatch
With Alt v0.17.0, action creators can simply return rather than calling dispatch.


defer()
are actions thread safe?

--------------
Stores
 store model

 reduce

 ------

Logging, Debugging

----

Isomorphic
