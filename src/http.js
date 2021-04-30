import axios from 'axios';

let axiosMethod = function (method, url, params, vm) {
    url = 'development' === process.env.NODE_ENV ? `/api${url}` : `${url}`;
    let axiosParams = {
        method: method,
        url: vm.$baseURL + url
    };
    if ('get' === method) {
        axiosParams.params = params;
    } else if ('post' === method) {
        axiosParams.data = params;
    }
    return new Promise((resolve, reject) => {
        axios(axiosParams).then((response) => {
            if (500 === response.data.code) {
                // 后端报错
                console.error(response.data.result ? response.data.result : response.data.msg);
                reject(response.data);
            } else if (-99 === response.data.code) {
                window.location.href = '/jschool-portal/index'
            } else {
                // 正常
                resolve(response.data)
            }
        }).catch((error) => {
            reject(error)
        });
    })
};

export default {
    get(url, params, vm) {
        return axiosMethod('get', url, params, vm);
    },

    post(url, params, vm) {
        return axiosMethod('post', url, params, vm);
    },

    delete(url, params, vm) {
        return axiosMethod('delete', url, params, vm);
    },

    put(url, params, vm) {
        return axiosMethod('put', url, params, vm);
    }
};