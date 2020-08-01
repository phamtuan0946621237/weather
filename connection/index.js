// import  React ,{useEffect, useState} from 'react';

export const GET_CURRENT_WEATHER = (url, params) => {
    const parseUrl = obj => {
        let queryString = Object.keys(obj).map(item => (
          item + '=' + obj[item]
        )).join('&')
        return queryString;
      }
    const data = ''

      return new Promise((resolve, reject) => {
        fetch(`${url}?${parseUrl(params)}`)
            .then(response => response.json()).then(res=>{
              resolve(res)
            })
      })      
}
export const GET_FIVEDAY_WEATHER = (url, params) => {
  const parseUrl = obj => {
      let queryString = Object.keys(obj).map(item => (
        item + '=' + obj[item]
      )).join('&')
      return queryString;
    }
  const data = ''

    return new Promise((resolve, reject) => {
      fetch(`${url}?${parseUrl(params)}`)
          .then(response => response.json()).then(res=>{
            resolve(res)
          })
    })      
}