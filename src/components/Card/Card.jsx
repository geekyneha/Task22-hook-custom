import React from 'react';
import style from './Card.module.css';
import useFetch from '../../hooks/useFetch';

const Card = () => {
  const [info, err] = useFetch('https://jsonplaceholder.typicode.com/photos');
  console.log(info);

  if (err) {
    return <div>{err}</div>;
  }
  return (
    <>
      {info.length === 0 ? (
        <div className={style.loading}>Loading....</div>
      ) : (
        info.map((item, index) => {
          const { url, title } = item;
          return (
            <div
              className={style.card}
              key={index}
            >
              <div className={style.img}>
                <img
                  src={url}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>{title}</div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
