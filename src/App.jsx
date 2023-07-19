import { useState, useEffect } from 'react';
import {allCountrys, apiKey} from './Constanst';
import Badge from './components/Badge';
import Notice from './components/Notice';

export default function App() {
  const [notices, setNotice] = useState([]);
  const [country, setCountry] = useState('ve');

  const url = 'https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=eabfc79a266949ed8a7f11b2f3248677';

  useEffect(()=> {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        //setNotice(data.articles)
        //console.log(data);
    })
  }, [country]);

  const handleClickCountry = e => setCountry(e.target.innerText);

  return (
    <>
      <div className='grid bg-gray-300'>
        <h2 className='font-extrabold text-3xl py-3'>Cambiar Pais</h2>
        <p>Pais Actual: <span className='font-bold text-emerald-500'>{country}</span></p>

        <section className='container'>
          {
            allCountrys.map((key,index) =>
              <Badge
                key={index}
                text={key}
                UpdateCountry={handleClickCountry}
                />
            )
          }
        </section>
      </div>


      <main className='grid grid-cols-1 md:grid-cols-2 grid-gap-4 p-4 bg-gray-300'>
        {
          notices.map(key =>
            <Notice
              urlToImage={key.urlToImage}
              author={key.uthor}
              title={key.title}
              description={key.description}
              />
          )
        }
      </main>
      <p className='bg-gray-300 py-5 text-center mx-auto font-2xl text-gray-600'>No hay más Noticias</p>
    </>
  )
}
