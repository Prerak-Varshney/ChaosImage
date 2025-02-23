'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import AnimatedInput from '@/components/AnimatedInput';
const Home = () => {
  const [prompt, setPrompt] = React.useState<string>('');
  const [imageWidth, setImageWidth] = React.useState<string>('');
  const [imageHeight, setImageHeight] = React.useState<string>('');
  const [imageCount, setImageCount] = React.useState<string>('');
  // const [images, setImages] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className={`w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start items-center`}>
        <div className={'w-full min-h-40 flex flex-col items-center justify-center gap-4'}>
          <h1 className={'text-2xl sm:text-4xl font-bold'}>
            Welcome to ChaosImage
          </h1>
          <h1 className={'text-md sm:text-xl'}>
            A place to generate images from text for<span className='font-bold'> free!!!</span>
          </h1>
        </div>

        <div className='w-full min-h-40 flex flex-col items-center justify-center'>
          <div className='w-full min-h-20 flex flex-col md:flex-row items-center justify-center gap-4'>
            <AnimatedInput 
              inputText={'Width'}
              value={imageWidth}
              setValue={setImageWidth}
            />
            <AnimatedInput 
              inputText={'Height'}
              value={imageHeight}
              setValue={setImageHeight}
            />
            <AnimatedInput 
              inputText={'Count'}
              value={imageCount}
              setValue={setImageCount}
            />
          </div>
          
          <div className='w-full h-20 flex items-center justify-center'>
            <input 
              className={'w-1/2 md:w-[26rem] h-12 border rounded-l-lg outline-none px-4'}
              placeholder={isLoading ? 'Generating...' : 'Enter prompt to generate image'}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              className={`w-16 md:w-24 h-12 bg-blue-500 hover:bg-blue-600 rounded-r-lg text-white transition-all duration-300 font-semibold text-xs md:text-base`}
              onClick={handleGenerateImage}
            >
              Generate
            </button>
          </div>
        </div>

        <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
          {/* {images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} className={`w-full h-40 object-cover rounded-lg`} />
          ))} */}

          <div className={`w-${imageWidth} h-${imageHeight} bg-gray-300 rounded-lg`}>
            Image 1
          </div>
        </div>

      </div>
    </div>
  );
}
export default Home;