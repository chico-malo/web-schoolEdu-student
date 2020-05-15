/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2020-05-15
 */
import axios from 'axios';

export const Request = () => {
    axios.post('http://[::1]:3000/cats', {
        name: 'Fred',
        age: 13,
        lastName: 'Flintstone'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
