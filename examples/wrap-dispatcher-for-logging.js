import Alt from 'alt'

const alt = new Alt()

var oldDispatch = alt.dispatcher.dispatch;
alt.dispatcher.dispatch = function () {
  console.log('DISPATCH', arguments);
  oldDispatch.apply(alt.dispatcher, arguments);
};

alt.generateActions('one').one()
alt.generateActions('one', 'two').two({with: 'some data'})

/*

DISPATCH { '0':
   { action: Symbol(alt/global.one),
     data: undefined,
     details:
      { namespace: 'global',
        name: 'one',
        id: 'global.one',
        symbol: Symbol(alt/global.one) } } }
DISPATCH { '0':
   { action: Symbol(alt/global.two),
     data: { with: 'some data' },
     details:
      { namespace: 'global',
        name: 'two',
        id: 'global.two',
        symbol: Symbol(alt/global.two) } } }
*/
