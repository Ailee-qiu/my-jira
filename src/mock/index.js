import Mock from 'mockjs';
// import monitor from './monitor.json'
Mock.mock('/api/user','get',{
	id: '@id',
  name: '@name',
  age: '@integer(18, 60)',
})
// Mock.mock("./api/monitor",{code:200,data:monitor})
export default Mock;
