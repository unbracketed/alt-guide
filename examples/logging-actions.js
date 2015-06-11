import Alt from 'alt'
import ActionListeners from 'alt/utils/ActionListeners'

const alt = new Alt()
const listener = new ActionListeners(alt)

const axns = alt.generateActions('go', 'stop')
const id = listener.addActionListener(axns.GO, (data, actionType) => {
  console.log('ACTION:', actionType.id, 'DATA:', data)
})

axns.go()
alt.actions.global.go({year: 1985})


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
