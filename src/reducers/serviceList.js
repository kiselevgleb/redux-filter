import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE_FIELD } from '../actions/actionTypes'
const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];
let filterMas
let coin = 0;
export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price, idNote } = action.payload;
      console.log(idNote)
      let newState = state.filter(service => service.id !== idNote);
      state = newState
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    case FILTER_SERVICE_FIELD:
      const { nameNote } = action.payload;
      if (coin === 0) {
        filterMas = state;
      }
      if (nameNote.length == 0) {
        coin++;
        return filterMas;
      } else {
        coin++;
        return filterMas.filter(service => service.name.toUpperCase().includes(nameNote.toUpperCase()));
      }
    default:
      return state;
  }
}
