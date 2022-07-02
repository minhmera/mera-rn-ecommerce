import { COUNT_TYPES } from '@/actions/counterAction';

const initState = {
  count: 0,
};

export const counterReducer = (state = initState, { payload, type }) => {
  console.log('counterReducer state ==>  ', state);
  console.log('counterReducer payload ==>  ', payload);
  console.log('counterReducer type ==>  ', type);
  switch (type) {
    case COUNT_TYPES.INCREASE:
      return { ...state, count: state.count + 1 };
    case COUNT_TYPES.DECREASE:
      return { ...state, count: state.count - 1 };
    case COUNT_TYPES.RESET:
      //return { ...state, count: 0 };
      return initState;
    default:
      return initState;
  }
};
