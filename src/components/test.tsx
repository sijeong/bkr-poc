import React from 'react';

export const Test = () => {

    let user = 'user';
    let password = '3c64cd25-6c49-4815-a055-747791f35600'
    let credential = new Buffer(user + ":" + password).toString('base64');
    let url = "http://localhost:8080/api/v1/employees"
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + credential)
    // headers.append();

    fetch(url, {
        method: 'GET',
        headers: headers
    }).then(res => res.json())
        .then(data => console.log(data))
    return (
        <div></div>
    )

}