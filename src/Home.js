import { useState } from "react";
import "./homeStyle.css";
import RestoList from "./RestoList";

const Home = () => {
  const url =
    "https://map-places.p.rapidapi.com/queryautocomplete/json?input=pempek%20in%20palembang%20city&radius=50000&location=palembang%20city";

  const url2 =
    "https://map-places.p.rapidapi.com/queryautocomplete/json?input=tangerang%20banten%20pempek&radius=50000&location=tangerang%20banten";

  var [url3, setURL] = useState(
    "https://map-places.p.rapidapi.com/queryautocomplete/json?input=tangerang%20banten%20pempek&radius=50000&location=tangerang%20banten"
  );
  var [placeName, setPlaceName] = useState("");

  function changeHandler(event) {
    setPlaceName(event.target.value);
    setURL(
      "https://map-places.p.rapidapi.com/queryautocomplete/json?input=" +
        placeName.replace(" ", "%20") +
        "%20pempek&radius=50000&location=" +
        placeName.replace(" ", "%20")
    );
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aab01b3688mshe238e51c29bb8d2p18a410jsn2baeba0f5d9a",
      "X-RapidAPI-Host": "map-places.p.rapidapi.com",
    },
  };

  var [data, setData] = useState("");
  var [theData, setTheData] = useState([
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
  ]);

  var [data2, setData2] = useState("");
  var [theData2, setTheData2] = useState([
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
  ]);

  var [data3, setData3] = useState("");
  var [theData3, setTheData3] = useState([
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
    {
      thePlace: "",
      theAdress: "",
    },
  ]);

  function fetchHandler() {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTheData([
          {
            thePlace: data.predictions[0].structured_formatting.main_text,
            theAdress: data.predictions[0].structured_formatting.secondary_text,
          },
          {
            thePlace: data.predictions[1].structured_formatting.main_text,
            theAdress: data.predictions[1].structured_formatting.secondary_text,
          },
          {
            thePlace: data.predictions[2].structured_formatting.main_text,
            theAdress: data.predictions[2].structured_formatting.secondary_text,
          },
          {
            thePlace: data.predictions[3].structured_formatting.main_text,
            theAdress: data.predictions[3].structured_formatting.secondary_text,
          },
          {
            thePlace: data.predictions[4].structured_formatting.main_text,
            theAdress: data.predictions[4].structured_formatting.secondary_text,
          },
        ]);
      });
  }

  function fetchHandler2() {
    fetch(url2, options)
      .then((response) => response.json())
      .then((data2) => {
        setData2(data2);
        setTheData2([
          {
            thePlace: data2.predictions[0].structured_formatting.main_text,
            theAdress:
              data2.predictions[0].structured_formatting.secondary_text,
          },
          {
            thePlace: data2.predictions[1].structured_formatting.main_text,
            theAdress:
              data2.predictions[1].structured_formatting.secondary_text,
          },
          {
            thePlace: data2.predictions[2].structured_formatting.main_text,
            theAdress:
              data2.predictions[2].structured_formatting.secondary_text,
          },
          {
            thePlace: data2.predictions[3].structured_formatting.main_text,
            theAdress:
              data2.predictions[3].structured_formatting.secondary_text,
          },
          {
            thePlace: data2.predictions[4].structured_formatting.main_text,
            theAdress:
              data2.predictions[4].structured_formatting.secondary_text,
          },
        ]);
      });
  }

  function isDefined(daSTR) {
    if (typeof daSTR === "undefined") {
      return "";
    } else {
      return daSTR.structured_formatting;
    }
  }

  function submitHandler() {
    fetch(url3, options)
      .then((response) => response.json())
      .then((data3) => {
        setData3(data3);
        setTheData3([
          {
            thePlace: isDefined(data3.predictions[0]).main_text,
            theAdress: isDefined(data3.predictions[0]).secondary_text,
          },
          {
            thePlace: isDefined(data3.predictions[1]).main_text,
            theAdress: isDefined(data3.predictions[1]).secondary_text,
          },
          {
            thePlace: isDefined(data3.predictions[2]).main_text,
            theAdress: isDefined(data3.predictions[2]).secondary_text,
          },
          {
            thePlace: isDefined(data3.predictions[3]).main_text,
            theAdress: isDefined(data3.predictions[3]).secondary_text,
          },
          {
            thePlace: isDefined(data3.predictions[4]).main_text,
            theAdress: isDefined(data3.predictions[4]).secondary_text,
          },
        ]);
      });
  }

  return (
    <div>
      <div className="backgroundContainerEric">
        <img
          src={require("./IMG/Pempek/campuranPempek.jpg")}
          className="bgIMGEric"
        />
      </div>
      <div className="headFiller"></div>
      <div className="daWrap">
        <h1 className="underline">Pempek</h1>
        <div className="headSection">
          <div className="imgBox">
            <img
              src={require("./IMG/Pempek/pempek-palembang.jpg")}
              className="firstIMG"
            />
          </div>
          <div className="firstCaption">
            <p>
              Pempek (often pronounced as empek empek) is a food that originates
              from South Sumatra in Palembang, Indonesia. It is made by mincing
              fish and mixing it with flour and salt, which than are reshaped
              into a ball shape or many kind of pempek variant. People often eat
              it with cuko sauce which are black spicy sweet and sour sauce made
              out of vinegar, brown sugar, and flavour enhancer.
            </p>
          </div>
        </div>

        <hr />

        <div>
          <h2>The city where pempek originates from.</h2>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=115gr6NGakohr4z_ZUcGF0ptlbHiMODk&ehbc=2E312F&noprof=1"
            width="480"
            height="360"
            className="mapStuff"
          ></iframe>
        </div>

        <hr />

        <div className="variantSection">
          <h1>Variant of Pempek</h1>
          <div className="gridding">
            <a href="/Recipe#PempekAdaan">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="landscapeIMG"
                    src={require("./IMG/Pempek/adaan.jpg")}
                  />
                </div>
                <p>Pempek Adaan</p>
              </div>
            </a>
            <a href="/Recipe#PempekLenjer">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="landscapeIMG"
                    src={require("./IMG/Pempek/lenjer.jpg")}
                    alt=""
                  />
                </div>
                <p>Pempek Lenjer</p>
              </div>
            </a>
            <a href="/Recipe#PempekKeriting">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="landscapeIMG"
                    src={require("./IMG/Pempek/keriting.jpg")}
                    alt=""
                  />
                </div>
                <p>Pempek Keriting</p>
              </div>
            </a>
            <a href="/Recipe#PempekTelur">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="portraitIMG"
                    src={require("./IMG/Pempek/telur.jpg")}
                    alt=""
                  />
                </div>
                <p>Pempek Telur</p>
              </div>
            </a>
            <a href="/Recipe#PempekPistel">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="landscapeIMG"
                    src={require("./IMG/Pempek/pistel.jpg")}
                    alt=""
                  />
                </div>
                <p>Pempek Pistel</p>
              </div>
            </a>
            <a href="/Recipe#PempekPanggang">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="landscapeIMG"
                    src={require("./IMG/Pempek/panggang.jpg")}
                    alt=""
                  />
                </div>
                <p>Pempek Panggang</p>
              </div>
            </a>
            <a href="/Recipe#PempekKulit">
              <div className="gridItem">
                <div className="gridBox">
                  <img
                    className="landscapeIMG"
                    src={require("./IMG/Pempek/kulit.jpeg")}
                    alt=""
                  />
                </div>
                <p>Pempek Kulit</p>
              </div>
            </a>
          </div>
        </div>

        <hr />

        <h2>These are some place where you can buy pempek in Palembang</h2>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1juYVTNHDUeMJy_ehJ_bSv4nRE5TEPkM&ehbc=2E312F&noprof=1"
          width="480"
          height="360"
          className="mapStuff"
        ></iframe>

        <hr />

        <button className="listButton" onClick={fetchHandler}>
          List out Address of Pempek Place in Palembang City
        </button>
        <div className="theList">
          {theData.map((placesData, index) => (
            <RestoList
              key={index}
              place={placesData.thePlace}
              adress={placesData.theAdress}
            />
          ))}
        </div>
        <hr />
        <button className="listButton" onClick={fetchHandler2}>
          List out Address of Pempek Place in Tangerang City
        </button>
        <div className="theList">
          {theData2.map((placesData, index) => (
            <RestoList
              key={index}
              place={placesData.thePlace}
              adress={placesData.theAdress}
            />
          ))}
        </div>
        <hr />
        <input
          type="text"
          onChange={changeHandler}
          className="input4List"
          placeholder="Input the name of the city"
        />
        <button className="listButton" onClick={submitHandler}>
          List Out the Address of Your Inputted City
        </button>
        <div className="theList">
          {theData3.map((placesData, index) => (
            <RestoList
              key={index}
              place={placesData.thePlace}
              adress={placesData.theAdress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
