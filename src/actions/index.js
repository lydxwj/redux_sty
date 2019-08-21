
export const add = text => ({
  type: 'ADD',
  text
});

export const red = id => ({
  type: 'RED',
  id
});

export const filter = filter => ({
  type: 'FILTER',
  filter
});

export const complete = id => ({
  type: 'COMPLETE',
  id
});
const list = [{
  text: '333',
  complete: true,
  id: 0,
}, {
  text: '444',
  complete: false,
  id: 1,
}];
export function get() {
  return dispatch => {
    dispatch({
      type: 'LOADING'
    });
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(list);
      }, 3000);
    }).then(arr => {
      dispatch({
        type: 'GETLIST',
        list: arr
      });
    });
  }
};

export function getP() {
  return dispatch =>  new Promise((res, rej) => {
    dispatch({
      type: 'LOADING'
    });
    setTimeout(() => {
      res(list);
    }, 3000);
  }).then(arr => {
    dispatch({
      type: 'GETLIST',
      list: arr
    });
  });
};
