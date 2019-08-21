const initialState = {
  loading: false,
  isfetch: false,
  num: 0,
  list: [{
    text: '111',
    complete: true,
    id: 0,
  }, {
    text: '222',
    complete: false,
    id: 1,
  }]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      return Object.assign({}, state, {
        num: ++state.num,
        list: [ ...state.list, {
          text: action.text,
          complete: false,
          id: state.num,
        } ]
      });
    }
    case 'RED': {
      return Object.assign({}, state, {
        list: state.list.filter(item => {
          if (item.id !== action.id) {
            return item;
          }
          return false;
        })
      });
    }
    case 'COMPLETE': {
      return Object.assign({}, state, {
        list: state.list.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              complete: !(item.complete)
            };
          }
          return item;
        })
      });
    }
    case 'LOADING': {
      return Object.assign({}, state, {
        loading: true,
        isfetch: true,
      });
    }
    case 'GETLIST': {
      return Object.assign({}, state, {
        list: action.list,
        loading: false,
        num: action.list.length
      });
    }
    default:
      return state;
  }
}