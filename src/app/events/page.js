import Image from 'next/image'


export default function Home() {
  return (
    <>
      {/* <div>
      <div className="display">
        <div className="title">
          <div className="packman">
            <img src="https://t.ly/nhRsC" alt="" />
          </div>
          <div className="code-rit">
            <h1>CODE_RIT</h1>
          </div>
        </div>
      </div>

      <div className="upcoming-event">
        <div className="upcoming">UPCOMING EVENTS</div>
      <Card/>
      
      </div>

      <div className="past-event">
        <div className="past">PAST EVENTS</div>
        <Card/>
      </div>
    </div> */}
      {/* <h1 className='text-black mt-[100px] '>Events</h1> */}
      <div className='mt-[100px] w-full bg-red-100'>
        <div className="flex justify-center items-center m-[20px]">
              <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-5 h-full flex flex-col items-center">
                      {/* <Image src='./Logo.png'
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '200px', height: '200px' }}
                      className="rounded-full"/> */}
                      <h1 className="text-3xl text-white p-4 "></h1>
                      <p className="h-[30%] text-yellow-600"></p>
                      {/* <a href= className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg></a> */}
                  </div>
              </div>
          </div>
          <div className="flex justify-center items-center m-[20px]">
              <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-5 h-full flex flex-col items-center">
                      {/* <Image src='./Logo.png'
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '200px', height: '200px' }}
                      className="rounded-full"/> */}
                      <h1 className="text-3xl text-white p-4 "></h1>
                      <p className="h-[30%] text-yellow-600"></p>
                      {/* <a href= className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg></a> */}
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
