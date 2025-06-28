export function accessTokenInterceptor(method) {
  const token = localStorage.getItem('accessToken');
  if (token) {
    method.config.headers = {
      ...method.config.headers,
      'Authorization': `Bearer ${token}`,
    };
  }
  
  console.log('Отправляем запрос:', method.url);
}