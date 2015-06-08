import Alt from 'alt'
import ActionListeners from 'alt/utils/ActionListeners'

const alt = new Alt()

/*
  symbols don't seem to be available through alt.actions.global
*/
const axns = alt.generateActions('one', 'two')
const listener = new ActionListeners(alt)


const id = listener.addActionListener(axns.ONE, (name, details) => { console.log(name, details) })
axns.one({data: 'data'})
alt.actions.global.one({global: 'more'})


const uAxns = alt.createActions({
  one: () => {console.log('unknown one'); return 'hi'}
})
listener.addActionListener(uAxns.ONE, (name, details) => { console.log(name, details) })
alt.actions.Unknown.one({unknown: 'cotton candy'})
uAxns.one({unknown: 'cotton undies'})


class SomeActions {
  one() {
    this.dispatch()
  }
}
const cAxns = alt.createActions(SomeActions)
listener.addActionListener(cAxns.ONE, (n, d) => {console.log(n, d)})
cAxns.one({classy: 'action'})



class OtherActions {
  constructor() {
    this.generateActions('one')
  }
}
const oAxns = alt.createActions(OtherActions)
listener.addActionListener(oAxns.ONE, (n, d) => {console.log(n, d)})
oAxns.one({classy: 'other'})

console.log(alt.actions)
