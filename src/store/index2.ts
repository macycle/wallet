import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  ...recordStore,   //浅拷贝
  ...tagStore,
};

console.log(store);

export default store;