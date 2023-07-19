export default function Notice ({urlToImage,author,title,description}){
	return(
		<article className='bg-white p-6 m-3 rounded-lg'>
          {
            urlToImage !== null &&
              <img
                className='lg:h-60 xl:h-56 md:h-64 sm:h-74 xs:h-72 rounded w-full object-cover object-center mb-6' 
                src={urlToImage}
                />
          }
          
          <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-medium title-font'>
            {author}
          </h3>
          <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
            {title}
          </h2>
          <p className='text-gray-500 text-xs'>
          	{
          		description === null 
          		? 'Sin descipción'
          		: description
          	}
          </p>
        </article>
	);
}