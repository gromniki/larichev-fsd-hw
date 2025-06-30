import { createAlova, Method } from 'alova';
import adapterFetch from 'alova/fetch';
import { accessTokenInterceptor } from './interceptors';

export const alovaInstance = createAlova({
  baseURL: 'https://jsonplaceholder.typicode.com',
  //statesHook: {},
  requestAdapter: adapterFetch(),
  beforeRequest(method: Method) {
    accessTokenInterceptor(method); // подключаем interceptor
  },
  // Можно также добавить afterResponse, onError

  // Обработка ответов - упрощенный синтаксис
  // responded: response => response.json(),


});



// export const alovaInstanceExample = createAlova({

//   baseURL: 'https://jsonplaceholder.typicode.com',
  
//   requestAdapter: adapterFetch(),
  
//   timeout: 10000,

//   responded: response => response.json(),

//   responseError(error, method) {
//     console.error('Ошибка запроса:', error.message);
    
//     // Обработка различных статусов ошибок
//     if (error.response?.status === 401) {
//       // Пользователь не авторизован
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }
    
//     throw error;
//   }

//   responded: {
//     onSuccess: async (response, method) => {
//       console.log('Получен ответ:', response.status);
//       return response.json();
//     },
    
//     onError: (error, method) => {
//       console.error('Ошибка запроса:', error.message);
      
//       // Обработка различных статусов ошибок
//       if (error.response?.status === 401) {
//         // Пользователь не авторизован
//         localStorage.removeItem('authToken');
//         window.location.href = '/login';
//       }
      
//       throw error;
//     }
//   }

// });