import Image from "next/image";

export default function Sport() {
  return (
    <div>
      {/* Recent transfer */}
      <div>
        <h1 className=" ml-12 font-serif">
          <u>Recent Transfers:</u>
        </h1>
      </div>
      {/* sczency */}
      <div className="flex items-center">
        
        
        <Image
          className="h-60 ml-7"
          src="/images/szny.webp"
          alt=""
          width={500}
          height={500}
        />



        <p className="ml-10 mr-5 text-xl">
          <strong className="text-2xl">
            {" "}
            SZCZESNY to Barcelona <br />
          </strong>{" "}
          The polish goalkeeper came back from retirement to play one more
          Season with BARCELONA. He played for Juventus and retire there but he
          came back because The Germen Keeper TER STEGAN has been injured!
        </p>
      </div>
      <div>
        {/* Mbappe */}
        <div className="flex items-center">
          
          
          <Image
            className="h-60 ml-7 mt-7"
            src="/images/mbappe.jpeg"
            alt="mbappe"
            width={500}
            height={500}
          />


          <p className="ml-10 mr-5 text-xl">
            <strong className="text-2xl">
              KYLIAN MBAPPE to Real Madrid <br />
            </strong>
            The French Striker Kylian Mbappe has choose Real Madrid as a free
            Agent. he will be wearing Jersey no.9. He has ultimate Pace and is
            very a successfull STRIKER of this generation.
          </p>
        </div>
      </div>

      <div>
        {/* Chiesa */}
        <div className="flex items-center">

            
        <Image
            className="h-60 ml-7 mt-7"
            src="/images/chiesa.webp"
            alt="Chiesa"
            width={500}
            height={500}
          />


          <p className="ml-10 mr-5 text-xl">
            <strong className="text-2xl">
              FEDERICO CHIESA to Liverpool <br />
            </strong>
            The Italian Winger decided to take Challenges and left Juventus and
            have Joined LIVERPOOL. He is good Player and now will dominate
            PREMIER LEAGUE{" "}
          </p>
        </div>
        <hr />
      </div>
      {/* // }================================= REtire============================== */}

      <div>
        <h1 className=" ml-12 font-serif mt-10">
          {" "}
          <u>Recent Retirements:</u>
        </h1>
      </div>
      <div>
        {/* Chiesa */}
        <div className="flex items-center">
          
                
        <Image
            className="h-60 ml-7 mt-7"
            src="/images/griezman.jpg"
            alt="griezman"
            width={500}
            height={500}
          />


          <p className="ml-10 mr-5 text-xl">
            <strong className="text-2xl">
              Antoine GriezmannFrench footballer
              <br />
            </strong>
            Antoine Griezmann is a French professional footballer who plays as a
            forward or attacking-midfielder for La Liga club Atlético Madrid.
            Considered one of the best players in the world, he is known for his
            versatility, match intelligence, attacking output, and off-ball
            attributes.{" "}
          </p>
        </div>
      </div>
      {/* //////// */}
      <div>
        {/* kroos */}
        <div className="flex items-center">

                
        <Image
            className="h-60 ml-7 mt-7"
            src="/images/kroos.jpeg"
            alt="griezman"
            width={500}
            height={500}
          />


          <p className="ml-10 mr-5 text-xl">
            <strong className="text-2xl">
              TONI KROOS German footballer <br />
            </strong>
            Toni Kroos is a German former professional footballer. Widely
            regarded as one of the greatest midfielders of all time, he was
            known for his vision, passing, crossing, and set-piece ability.
            Kroos played mainly as a central midfielder, but he also
            occasionally played as a defensive midfielder.{" "}
          </p>
        </div>
      </div>
      {/* ////////////////////// */}

      <div>
        {/* pepe */}
        <div className="flex items-center">
          
          
          <Image
            className="h-60 ml-7 mt-7"
            src="/images/pepe.jpg"
            alt="pepe"
            width={500}
            height={500}
            
          />


          <p className="ml-10 mr-5 text-xl">
            <strong className="text-2xl">
              PEPE Portuguese Player <br />
            </strong>
            Portugal legend Pepe has retired from football, the 41-year-old
            former Real Madrid defender said on Thursday. Pepe’s last game came
            at Euro 2024, where Portugal were defeated by France on penalties in
            the quarterfinals, and he became the oldest player to appear at a
            European Championship finals tournament.
          </p>
        </div>
        <br />
        <br />
        <br />{" "}
      </div>
    </div>
  );
}
