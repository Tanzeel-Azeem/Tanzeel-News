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
        <img
          className="max-h-80 mt-5  ml-16 "
          src="https://media.cnn.com/api/v1/images/stellar/prod/2024-07-02t164407z-2057416642-rc24n8ae34iu-rtrmadp-3-usa-biden.JPG?c=16x9&q=h_833,w_1480,c_fill "
          alt=""
        />
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
          <img
            className=" mt-7 p-2 ml-96 bg-slate-900"
            src="https://www.aljazeera.com/wp-content/uploads/2024/10/AP24276311769757-1727860382.jpg?fit=770%2C514&quality=80"
            alt=""
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
          <img
            className="p-11 w-6/12 "
            src="https://lh7-us.googleusercontent.com/2wDYREmKpm0_tfJ3jrLfCeP2sDoMXoHVN4hYtUyp0wO_EoCG3XPYSqltAh-0wS2oqQHQ-XHVzXGUqvf5TOgsBiKxhv5_fGxShDzlIBtH1lp0bBpDxAjpeAK4EIQRaKjCiQXC4ZHmdV4Eql5JIZkDMFk"
            alt=""
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
          <img
            className="mt-12 h-96 ml-11 bg-blue-950 p-2"
            src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/06/the-boys-dawn-of-the-seven.jpg"
            alt=""
          />
          <div className="ml-6 mr-3">
            <p className="mt-4 text-xl">
              <strong className="text-3xl">
                The Boys season 5 has been Confirmed <br />
              </strong>{" "}
              The boys s5 has been Confirmed. It will be released in 2026 in mid
              july. The Boys fans are very excited for the last season and can't
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
