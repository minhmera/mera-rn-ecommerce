import { TYPES } from '@/actions/UserActions';
// Branch test 1 đây nha  -- clone test 2 từ đây
export const COUNT_TYPES = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  RESET: 'RESET',
};
const increaseCount = (count) => ({
  type: COUNT_TYPES.INCREASE,
  payload: { count },
});

const decreaseCount = (count) => ({
  type: COUNT_TYPES.DECREASE,
  payload: { count },
});

const resetCount = () => ({
  type: COUNT_TYPES.RESET,
  payload: null,
});

export const increaseCountAction = (count) => (dispatch) => {
  console.log('increaseCountAction =>   ', count);
  dispatch(increaseCount(count));
};

export const decreaseCountAction = (count) => (dispatch) => {
  dispatch(decreaseCount(count));
};

export const resetCountAction = (count) => (dispatch) => {
  console.log('resetCountAction =>   ', count);
  dispatch(resetCount());
};
