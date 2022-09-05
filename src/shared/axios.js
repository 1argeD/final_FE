import axios from 'axios';

const base = {
  server_http: 'http://43.200.1.214',
  server_https: process.env.REACT_APP_HTTPS_URI,
};

const api = axios.create({
  baseURL: base.server_http,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
    withCredentials: true,
  },
});

api.interceptors.request.use(function (config) {
  const auth = localStorage.getItem('access-token');
  const auth2 = localStorage.getItem('refresh-token');
  config.headers.common['Authorization'] = auth;
  config.headers.common['RefreshToken'] = auth2;

  return config;
});

export const apis = {
  // market : CRUD
  create_market_post: (form, files) => {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('nickname', form.nickname);
    formData.append('petCategory', form.petCategory);
    formData.append('itemCategory', form.itemCategory);
    formData.append('location', form.location);
    formData.append('purchasePrice', form.purchasePrice);
    formData.append('sellingPrice', form.sellingPrice);
    for (let i = 0; i < files.length; i++) {
      formData.append('multipartFileList', files[i]);
    }

    return api.post('/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  // pageNum, pageLimit
  get_market_posts: () => api.get(`/items?page=0&size=10`),
  get_market_post: (id) => api.get(`/items/detail/${id}`),
  edit_market_post: (id, form, files) => {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('nickname', form.nickname);
    formData.append('petCategory', form.petCategory);
    formData.append('itemCategory', form.itemCategory);
    formData.append('location', form.location);
    formData.append('purchasePrice', form.purchasePrice);
    formData.append('sellingPrice', form.sellingPrice);
    for (let i = 0; i < files.length; i++) {
      formData.append('multipartFileList', files[i]);
    }

    api.put(`/items/detail/${id}`, formData);
  },
  delete_market_post: (id) => api.delete(`/items/detail/${id}`),

  // like, unlike
  like_post: (id) => api.post(`/items/detail/zzim/${id}`),
  unlike_post: (id) => api.delete(`/items/detail/zzim/${id}`),
};
