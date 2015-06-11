import Alt from 'alt'

const alt = new Alt()

const store = alt.createStore({displayName: 'TheStore'})

/* setState isn't available as a public method */
console.log('GET STATE', store.getState())
console.log('SET STATE property', store.setState)
console.log('STORE', store)
console.log('getState via alt.stores', alt.stores.TheStore.getState())
console.log('setState via alt.stores', alt.stores.TheStore.setState)
console.log('ALT', alt)


//TODO addStore
