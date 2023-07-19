export default function Badge({text, UpdateCountry}) {
	return (
		<aside
			onClick={UpdateCountry}
			className='inline-block rounded-full text-white bg-blue-500 hover:bg-gray-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md-px-2 md:px-4 py-1 opacity-90 hover:opacity-100'>
				{text}
	    </aside>
	);
}