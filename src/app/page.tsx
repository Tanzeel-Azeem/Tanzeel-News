import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        {/* joe Biden */}
        <u className="text-5xl ml-20 text-red-700">News</u>
        <br />
        <br />
      </div>
      <div className="flex items-center p-3 bg-black text-white">


       <Image 
       className="p-2"
       src="/images/joebiden.jpeg" 
       alt="joe biden"
        width={600}
         height={350}/>



        <p className="text-xl ml-9">
          <b className="text-2xl ml-9">
            Joe Biden speech:- <br />
          </b>
          <p>
            “America’s day” is the way Biden put it, but a large portion of the
            country is smarting at his victory.
            <br />
          </p>{" "}
          <div>
            <p className="text-center ">
              {" "}
              Click{" "}
              <a
                className="text-slate-300 hover:text-red-500 duration-700  "
                href="https://www.youtube.com/watch?v=ELuFUGD3o6Q"
                target="_blank"
              >
                {" "}
                Here
              </a>{" "}
              to Watch
            </p>
          </div>
        </p>
      </div>
      <div>
        {/* GAZA */}
        <div>


          <Image
            className=" mt-7 p-2 ml-96 bg-slate-900"
            src="/images/gaza.webp"
            alt="gaza update"
            width={750}
            height={500}
          />



          <p className="text-center text-2xl">
            Israeli air and ground attacks kill at least 51 people across Gaza |
            Isreal kills dozen in Gaza
          </p>

          <hr />
        </div>
      </div>
      <div>
        {/* INFLATION */}
        <div className="ml-6 flex items-center">
          
          
          
          <Image
            className="p-11 w-6/12 "
            src="/images/inflation.png"
            alt="inflation"
            width={700}
            height={300}
          />




          <p className="text-xl font-serif mr-3">
            The Inflation rate is rising day by day in Pakistan.The citizens are
            very Disturbed. Many small and medium-sized businesses are finding
            it difficult to survive as the cost of materials and transportation
            increases.
            <br />
            <div>
              <strong>
                {" "}
                Click{" "}
                <a
                  className="text-gray-700 hover:text-red-500 duration-500"
                  href="https://www.brecorder.com/news/40296115#:~:text=The%20impact%20of%20inflation%20is,further%20exacerbating%20the%20unemployment%20crisis."
                  target="_blank"
                >
                  Here
                </a>
                -to learn more!
              </strong>
            </div>
          </p>
        </div>
        <hr />
      </div>

      <div>
        {/* THE BOYS */}
        <div className="flex items-center">
          
          
          <Image
            className="mt-12 h-96 ml-11 bg-blue-950 p-2"
            src="/images/boys.avif"
            alt="the boys"
            width={800}
            height={450}
          />



          <div className="ml-6 mr-3">
            <p className="mt-4 text-xl">
              <strong className="text-3xl">
                The Boys season 5 has been Confirmed <br />
              </strong>{" "}
              The boys s5 has been Confirmed. It will be released in 2026 in mid
              july. The Boys fans are very excited for the last season and can not
              wait to see it. The show will be broadcast on Amazon Prime.
            </p>
          </div>
        </div>
        <br /> <br />
        <br />{" "}
      </div>
    </div>
  );
}
