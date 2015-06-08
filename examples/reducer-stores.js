import Alt from 'alt'

const alt = new Alt()

const axns = alt.generateActions('go')
const store = alt.createStore({
  displayName: '@',
  reduce: function (state, {action, data}) {
    console.log(state, action, data);
    return data
  }
})

axns.go({some: 'data'})
console.log(alt)
console.log(store.getState())

/*
args to reduce
state, actionObj

{ '0': {},
  '1':
   { action: Symbol(alt/global.go),
     data: undefined,
     details:
      { namespace: 'global',
        name: 'go',
        id: 'global.go',
        symbol: Symbol(alt/global.go) } } }
*/
