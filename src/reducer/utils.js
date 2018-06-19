const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

export function openMenuClick() {
  return {
    type: OPEN_MENU,
  };
}

export function closeMenuClick() {
  return {
    type: CLOSE_MENU,
  };
}

const initialState = {
  drawer: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MENU: {
      return Object.assign({}, state, {
        drawer: true,
      });
    }

    case CLOSE_MENU: {
      return Object.assign({}, state, {
        drawer: false,
      });
    }

    default:
      return state;
  }
}
