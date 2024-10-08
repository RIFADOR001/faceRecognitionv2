import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm2 = ({ onInputChange, onButtonSubmit2 }) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<p className='f3'>
				{'(The server or API may take a moment to respond)'}
			</p>
			<div className='center'>
				<div className='center pa4 br3 shadow-5 form'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick={onButtonSubmit2}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}
//onClick={() => setTimeout(() => onButtonSubmit2, 1000)}
export default ImageLinkForm2;