
function App() {
  return (
    <>
    
    <main className="max-w-2xl mx-auto flex gap-16 px-4">
        <div className="py-8 flex flex-col justify-center">
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
            className="grid gap-2">
            <input
              className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
              type="url" placeholder="https://..."/>
            <button
              className="bg-gradient-to-br from-violet-400 from-30% to-sky-300 font-bold text-white px-4 py-2 rounded-full uppercase"
              type="submit">
              Create&nbsp;video
            </button>
          </form>
        </div>
        <div className="py-4">
          <div className="text-gray-500 bg-white w-[240px] h-[380px] relative">
            video here
          </div>
        </div>
      </main>
      
      
    </>
  )
}

export default App
