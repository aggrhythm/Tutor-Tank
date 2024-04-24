import './App.css'
import Header from './header'

function App() {
  let tileLen = 56
  let rows = 10
  let tiles = []
  for (let j = 0; j < rows; j++) {
    let row = []
    for (let i = 0; i < window.innerWidth / tileLen + 1; i++) {
      row.push(<div key={i} className='bg-white' style={{ width: `${tileLen}px`, height: `${tileLen}px`, margin: "1px" }}></div>)
    }
    tiles.push(row)
  }

  return (
    <div className='h-full w-full'>
      <Header />
      <div className=' bg-gray-200 w-full h-5/6 absolute left-0 top-0' />
      <div className=' bg-gradient-to-b  from-transparent  to-white w-full h-full absolute top-0 left-0 mt-24' />
      <div className='absolute top-0 left-0 mt-20 w-full'>
        {tiles.map((row, i) => {
          return (<div key={i} className='flex'>
            {row}
          </div>)
        })}
      </div>
      <div className='mt-52 text-black z-40  absolute top-0 left-0  w-full text-xl'>

        <div>
          <div className='flex justify-center items-end text-5xl'>
            <div className='mb-2 mr-4 text-6xl'>
              The
            </div>
            <div>
              <span className='text-9xl  text-[--blue]'>A</span>
              <span className='text-9xl text-[--green]'>D</span>
              <span className='text-9xl text-[--yellow]'>A</span>
              <span className='text-9xl text-[--red]'>M</span>
            </div>
          </div>
          <div className='text-6xl translate-x-52'>
            Model
          </div>
        </div>
        <div className='flex ml-40 mt-20'>
          <div className='w-3/5 rounded-xl border-black border-2  text-black bg-[#f2f2f2] p-16 py-10'>
            <div className='text-[--green] text-5xl font-bold mb-8'>About Adam</div>
            <div className='text-left '>The aim of adam is to bring the personalised experience often found only in offline learning to online platforms. To enhance student's experience and gear them up with better tools at their disposal. </div>
            <ul className='text-left px-10 my-4'>
              <li className='my-2'> - Providing strong analysis for user based on tests given by them.</li>
              <li className='my-2'> - Generate exam questions suitable to the user’s need.</li>
              <li className='my-2'> - Analyse weak points of user and provide the personalised study plan for the users.</li>
            </ul>
          </div>
          <div className='text-left m-10 text-3xl my-2'>
            <div className='mt-5'><span className='text-7xl'>A</span>cademic</div>
            <div className='mt-5'><span className='text-7xl'>D</span>evelopment &</div>
            <div className='mt-5'><span className='text-7xl'>A</span>dvancement</div>
            <div className='mt-5'><span className='text-7xl'>M</span>odel</div>
          </div>
        </div>
        <div className='p-16 mt-10 '>
          <div className='text-6xl text-[--blue] font-bold text-left'>The Model</div>
          <div className='flex pl-20'>
            <div className='flex items-center'>
              <img src='/model.png' width={1000} ></img>
            </div>
            <div className='mx-20 text-left'>
              <div className='text-[--green] text-6xl mb-4'>The Classifier</div>
              <div className='px-7 flex flex-col gap-5'>
                <div>Adam Model uses reinforcement learning, taking user's profile as input and output a category corresponding to a topic.</div>
                <div>This topic then can be used to generate question during a test or to plan a course or resource for the user.</div>
                <div>The reinforcement model utilizes a reward based system, the model is incentivized to choose a category to maximize the overall normalised average of user's score over all the topics regardless of whether user gives a correct or incorrect answer (chosen by 80/20 ratio).</div>
                <div>The model is also incentivized to keep a diverse range of topics, to avoid some topics being neglected by the model after achieving a certain level of accuracy.</div>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-10 relative'>
          <div className='py-7 px-16 text-6xl text-[--blue] font-bold text-left'>Use Case</div>
          <div className='absolute top-25 left-0 opacity-70 -z-40'>
            <img src='/ui.png' />
          </div>
          <div className='w-1/2 text-black glass z-40 px-20 py-16 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3/4'>
            <div className='flex justify-center items-center mb-7'>
              <img src='/tutor.png' width={55}></img>
              <div className='text-5xl '>
                Tutor Tank
              </div>
            </div>
            <div>An upcoming platform leveraging the Adam Model to recommend exam question on basis of user's performance and connect with a tutor who is most appropriate for the student. </div>
          </div>

        </div>





      </div>
    </div>
  )
}

export default App
