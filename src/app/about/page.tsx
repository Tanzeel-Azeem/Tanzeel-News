export default function About() {
  return (
    <div>
      <h1 className="text-center text-5xl text-black hover:text-orange-600 duration-1000">
        <u>About Us</u>
      </h1>
      <div>
        <p className="text-2xl ml-9 mr-9">
          <strong className="text-3xl">Welcome to Tanzeel Newz!</strong> Where
          providing the best as acucurate as possible News is our first
          priority. We are dedicated to providing our customers with recent and
          accurate news .
          <br />
          Our mission is to deliever the latest news to our Customers !!!
        </p>
      </div>

      <div>
        <p className="text-2xl ml-9 mr-9">
          {" "}
          <h1 className="text-3xl ml-9 mr-9 text-slate-800">
            <u>What’s New </u>
          </h1>
          Enhanced Coverage: Our dedicated team of journalists is working
          diligently to provide you with in-depth articles and analysis.
        </p>
      </div>
      <div>
        <p className="text-2xl ml-9 mr-9">
          <h1 className="text-3xl ml-9 mr-9 text-slate-800">
            {" "}
            <u>New Features:</u>
          </h1>
          Check out our new features, including podcast. We aim to make it
          easier for you to access the information you care about most.
        </p>
        <br />
        <br />
        <br />{" "}
      </div>
    </div>
  );
}
