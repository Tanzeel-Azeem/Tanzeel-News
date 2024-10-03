export default function Contact() {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl  font-sans">
          <u>
            Contact-Us <br />
            <br />
          </u>
        </h1>

        <div className="flex items-center">
          <img
            className="  h-80"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBE3SbW1v0eNfsfQ_qPtjysvARCl1IZgYPg&s"
            alt=""
          />{" "}
          <div className="ml-32 text-xl font-sans ">
            <p>
              Our FaceBook page link :
              <a
                className="text-black hover:text-yellow-600 duration-500"
                href="https://www.facebook.com/story.php?story_fbid=122101203194514402&substory_index=401785366277678&id=61565432076923&mibextid=qi2Omg&rdid=rKFagGYd7egL9gki"
                target="_blank"
              >
                {" "}
                Click Here
              </a>
            </p>
            <p>
              {" "}
              Our Instagram page link :{" "}
              <a
                className="text-black hover:text-yellow-600 duration-500"
                href="https://www.instagram.com/tanjoo.69/"
                target="_blank"
              >
                {" "}
                Click Here
              </a>
            </p>
            <p>
              {" "}
              Our LinkedIn page link :{" "}
              <a
                className="text-black hover:text-yellow-600 duration-500"
                href="https://www.linkedin.com/in/tanzeel-azeem-463049303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                {" "}
                Click Here
               </a>
            </p>
            <p>
              {" "}
              Our Youtube page link:{" "}
              <a
                className="text-black hover:text-yellow-600 duration-500"
                href="https://www.youtube.com/@beingtanzeel283"
                target="_blank"
              >
                {" "}
                Click Here
              </a>
            </p>
            <p>Our Email : Tanzeel-news.03@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
