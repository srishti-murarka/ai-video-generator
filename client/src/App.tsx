import { FormEvent, useState } from "react";
import axios from "axios";

import img1 from "./assets/home.webp";
import img2 from "./assets/home.jpeg";
import img3 from "./assets/home2.webp";
import img4 from "./assets/home3.jpg";
function App() {
  const [url,setUrl] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [userMessage, setUserMessage] = useState('');
  async function handleSubmit (ev: FormEvent){
    ev.preventDefault();
    setLoadingMessage('Generating assets...');
    setUserMessage('This might take a few minutes..');
    const assetsResponse = await axios.get(
      'http://localhost:8080/summarize?url='+encodeURIComponent(url)
    );
    const id = await assetsResponse.data;
    setLoadingMessage('Preparing your video...');
    setUserMessage('Hold on, art takes time..');
    const videoResponse = await axios.get('http://localhost:8080/create-video?id='+id);
    setLoadingMessage('');
    window.location.href = 'http://localhost:8080/'+videoResponse.data;
  }
  return (
    <>
    {loadingMessage && (
      <div className="fixed inset-0 bg-black/90 flex justify-center items-center">
        <p className="text-5xl text-center">{loadingMessage} <br/>
        <span className="text-xl"> {userMessage}</span></p>
      </div>
    )}
    <header className="w-full flex justify-between items-center bg-gradient-to-br from-sky-400 from-5% to-violet-400  sm:px-8 px-4 py-2">
      <h1 className="font-inter font-extrabold text-white text-[28px]">
        Artifyr
      </h1>
    </header>
    <body className="h-screen">
    <main className="max-w-5xl h-full mx-auto flex items-center justify-center gap-16 px-4 ">
            <div className="py-8 flex flex-col">
              <h1 className="text-4xl font-bold uppercase mb-4">
                <span className="text-5xl">
                  URL to Video
                </span>
                <br />
                <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">
                  with power of AI
                </span>
              </h1>
              <form
                onSubmit={handleSubmit}
                className="grid gap-2">
                <input
                  className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
                  value={url}
                  onChange={ev => setUrl(ev.target.value)}
                  type="url" placeholder="https://..."/>
                <button
                  className="bg-gradient-to-br from-violet-400 from-30% to-sky-300 font-bold text-white px-4 py-2 rounded-full uppercase"
                  type="submit">
                  Create&nbsp;video
                </button>
              </form>
            </div>

          <div className="py-4 relative w-[480px] h-[380px] overflow-hidden carousel-wrapper">
            <div className="carousel-container flex flex-col transition-transform duration-300 ease-in-out">
              <img src={img1} alt="Image 1" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img2} alt="Image 2" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img3} alt="Image 3" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img4} alt="Image 4" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img1} alt="Image 1" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img2} alt="Image 2" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img3} alt="Image 3" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
              <img src={img4} alt="Image 4" className="py-2 w-full h-[380px] rounded-2xl object-cover" />
            </div>
          </div>
        </main>
    </body>
    
    
    </>
  )
}

export default App
