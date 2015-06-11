import Alt from 'alt'

const alt = new Alt()


//does generateActions bind the symbol?




/*
 Create a global action called 'go', using a function
*/
const goAction = alt.createAction('go', () => {console.log('Go!')})

goAction()
console.log(goAction)
console.log(alt.getActions('global'))
console.log('ACTIONS', alt.actions)


//addActions doesn't return anything

//erases previous action
alt.addActions('global', 'go' )
console.log('ACTIONS', alt.actions)


const addAxnsArr = alt.addActions('global', ['go'] )
console.log('ACTIONS', alt.actions)

/*
 Create a namespaced action from a POJO
 Goes into Unknown namespace
*/
const slowAction = alt.createActions({
  slow: () => {console.log('Slow')}
})

slowAction.slow()
console.log(slowAction)

/*
 Add more actions to Unknown namespace. The second `yo` action gets renamed
 to `yo1`
*/
const yoAction = alt.createActions({
  yo: () => {console.log('Yo!')}
})
const youAction = alt.createActions({
  yo: () => {console.log('You!')}
})

youAction.yo()
console.log(yoAction)
alt.actions.Unknown.yo()
alt.actions.Unknown.yo1()

/*
 Create actions using POJO with displayName
*/
const realYoAction = alt.createActions({
  displayName: 'RealYo',
  yo: () => {console.log('For real yo')}
})
realYoAction.yo()
console.log(realYoAction)
console.log('getActions ===', alt.getActions('RealYo'))

const faker = alt.createActions({
  displayName: 'RealYo',
  yo: () => {console.log('faker')}
})
faker.yo()
console.log(faker)
console.log(alt.actions)
console.log('getActions ===', alt.getActions('RealYo'))
/*
 Create namespaced actions using a class
*/
