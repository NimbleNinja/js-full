// https://gromcode.com/courses/javascript-full/tasks/2653?video_id=1

// input:obj
// output:arr with obj edit sorted by age

// algo:
// 1)Глобальный Объект превращаем в массив массивов
// 2)Создаем новые массив с объектом в котором есть customer-id-number
// 3)Сортируем массив объектов по age по возрастанию
function getCustomersList(obj) {
  const arrOfCustomers = Object.entries(obj);
  return arrOfCustomers
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age);
}

const customers = {
  'customer-id-1': {
    name: 'Vlad',
    age: 54,
  },
  'customer-id-3': {
    name: 'Rider',
    age: 43,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 56,
  },
};
const customers2 = {};
console.log(getCustomersList(customers));
