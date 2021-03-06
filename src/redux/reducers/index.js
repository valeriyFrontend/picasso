const initialState = {
  fullPrice: 0,
  name: 'Valeriy',
  products: [],
  items: [],
  slides: [],
  client: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload[0],
      }
    case 'GET_SLIDES':
      return {
        ...state,
        slides: action.payload[0]
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        fullPrice: state.fullPrice + action.payload[0],
        items: [...state.items, action.payload[1]]
      }
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        fullPrice: state.fullPrice - action.payload[1].fullPrice,
        items: state.items.filter(item => item.id !== action.payload[1].id)
      }
    case 'CHANGE_FULL_PRICE':
      return {
        ...state,
        fullPrice: state.fullPrice + action.payload[0]
      }
    case 'SET_CLIENT':
      return {
        ...state,
        client: action.payload[0]
      }
    default:
      return state
  }
}

export default reducer