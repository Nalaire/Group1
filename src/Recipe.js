import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import "./recipeStyle.css";

export default function Recipe() {
  const opts = {
    height: "320",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const [videoId, setId] = useState("");
  var playerPosition = useRef();
  var adaanPosition = useRef();
  var lenjerPosition = useRef();
  var kulitPosition = useRef();
  var telurPosition = useRef();
  var kapalSelamPosition = useRef();

  function showPlayer() {
    document.getElementById("moviePlayer").style.display = "inline";
  }

  function moveToAdaan() {
    window.scrollTo({
      top: adaanPosition.current.offsetTop - 100,
      behavior: "smooth",
    });
  }
  function moveToLenjer() {
    window.scrollTo({
      top: lenjerPosition.current.offsetTop - 100,
      behavior: "smooth",
    });
  }
  function moveToKulit() {
    window.scrollTo({
      top: kulitPosition.current.offsetTop - 100,
      behavior: "smooth",
    });
  }
  function moveToTelur() {
    window.scrollTo({
      top: telurPosition.current.offsetTop - 100,
      behavior: "smooth",
    });
  }
  function moveToKapalSelam() {
    window.scrollTo({
      top: kapalSelamPosition.current.offsetTop - 100,
      behavior: "smooth",
    });
  }

  function playAdaan() {
    setId("P1v2Tbza8_A");
    showPlayer();
  }
  function playLenjer() {
    setId("Ao4nw-hrgqE");
  }
  function playKulit() {
    setId("LbiNxlXIbaA");
  }
  function playTelur() {
    setId("oFTehTikmAA");
  }
  function playKapalSelam() {
    setId("IDNjglrGRYU");
  }
  return (
    <div>
      <div className="backgroundContainerEric">
        <img
          src={require("./IMG/Pempek/campuranPempek.jpg")}
          className="bgIMGEric"
          alt="background"
        />
      </div>
      <div className="headFiller"></div>
      <div className="daWrap">
        <h1 className="underline">Recipe</h1>
        <br />
        <div
          id="moviePlayer"
          style={{ display: "none" }}
          className="video-player"
          ref={playerPosition}
        >
          <YouTube videoId={videoId} opts={opts} />
        </div>
        <div className="recipe">
          <div className="recipeContent">
            <div className="columnFlex">
              <br />
              <h1>List:</h1>
              <ol className="columnFlex">
                <button onClick={moveToAdaan} className="pempekList">
                  <h4>
                    <li>Pempek Adaan.</li>
                  </h4>
                </button>
                <button onClick={moveToLenjer} className="pempekList">
                  <h4>
                    <li>Pempek Lenjer.</li>
                  </h4>
                </button>
                <button onClick={moveToKulit} className="pempekList">
                  <h4>
                    <li>Pempek Kulit.</li>
                  </h4>
                </button>
                <button onClick={moveToTelur} className="pempekList">
                  <h4>
                    <li>Pempek Telur.</li>
                  </h4>
                </button>
                <button onClick={moveToKapalSelam} className="pempekList">
                  <h4>
                    <li>Pempek Kapal Selam.</li>
                  </h4>
                </button>
              </ol>
              <br />
              <a id="PempekAdaan" />
              <br />
            </div>
          </div>

          <div className="recipeContent">
            <div className="recipeTitle">
              <h1 className="underline" ref={adaanPosition}>
                1. Pempek Adaan (+Cuko Sauce).
              </h1>
              <h5>Credit: Devina Hermawan</h5>
              <button onClick={playAdaan} className="recipeButton">
                Play the Video
              </button>
            </div>
            <br />
            <p className="bahan">Pempek ingredient:</p>
            <p>
              <ul>
                <li>1 kg of ground mackerel fish</li>
                <li>500 gr of shaved ice</li>
                <li>4 tbsp of salt</li>
                <li>5 tbsp of sugar</li>
                <li>4 tbsp of mushroom broth / food flavoring</li>
                <li>6 clove of garlic, blended</li>
                <li>2 eggs white</li>
                <li>800 gr of sago</li>
                <li>100 gr of chopped red onion</li>
                <li>4 spring onion, sliced</li>
                <li>50 ml of cooking oil</li>
                <li>150 ml of santan</li>
              </ul>
              <br />
            </p>
            <p className="bahan">
              Cuko sauce ingredient: <br />
            </p>
            <p>
              <ul>
                <li>500 gr of shell brown sugar</li>
                <li>60 gr of green cayenne pepper</li>
                <li>12 clove of garlic</li>
                <li>2 tbsp of dried ebi, soak in warm water</li>
                <li>2 tbsp of vinegar</li>
                <li>30 gr of asem jawa, soak in warm water</li>
                <li>2 tsp of salt</li>
                <li>2 tbsp of sugar</li>
                <li>750 ml of air</li>
              </ul>
              <br />
            </p>
            <p className="bahan">Steps: </p>
            <p>
              <ol>
                <li>
                  for the cuko, cook the water with sugar and asem jawa, cook
                  till boil.
                </li>
                <li>
                  Blend the ebi, green cayenne pepper, garlic and a little bit
                  of water till smooth.
                </li>
                <li>
                  filter the cuko then add the blended ingredient into the cuko.
                  Add salt, sugar, and vinegar, then cook till boiling.
                </li>
                <li>
                  Spread the hot cooking oil on the spring onion, then mix well.
                </li>
                <li>
                  for the batter, add ground mackerel fish, salt, mushroom
                  broth, and sugar to the mixer. Mix until the batter become
                  sticky.
                </li>
                <li>
                  add the shaved ice to the mixer, mix well then add garlic, egg
                  white and sago, mix well.
                </li>
                <li>
                  add chopped red onion, spring onion and santan, mix well.
                </li>
                <li>
                  shape the batter round with a scoop of ice cream that are
                  coated with cooking oil then frie the batter in medium heat
                  till the batter turned brownish, then drain the batter of oil.
                </li>
                <li>
                  for a crispier texture, chop the cooked pempek then frie it
                  again till crispy, then drain it of oil.
                </li>
              </ol>
            </p>
          </div>

          <a id="PempekLenjer" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={lenjerPosition}>
              <h1>2. Pempek Lenjer.</h1>
              <h5>Credit: susi kitchen</h5>
              <button onClick={playLenjer} className="recipeButton">
                Play the Video
              </button>
            </div>
            <br />
            <p className="bahan">Pempek ingredient: </p>
            <p>
              <ul>
                <li>1 kg of ground mackerel fish</li>
                <li>400 ml of water</li>
                <li>2 eggs</li>
                <li>2 tbsp of salt</li>
                <li>1/2 tbsp of sugar</li>
                <li>mushroom broth / food flavoring (as much as preference)</li>
                <li>750 gr of sago flour</li>
              </ul>
              <br />
            </p>
            <p className="bahan">Steps:</p>
            <p>
              <ol>
                <li>
                  add the ground mackerel fish, water, salt, sugar, and food
                  flavoring to the basin.
                </li>
                <li>
                  crack the egg and mixed the egg then add it to the basin.
                </li>
                <li>mix them till they are evenly.</li>
                <li>
                  when the batter start to thicken, add some more of the sago
                  flour and mix the batter well.
                </li>
                <li>
                  after the flour start to mix with the batter, add some more
                  sago flour and repeat till the batter are not too sticky
                  anymore.
                </li>
                <li>sprinkle some sago floar on a surface.</li>
                <li>take just enough of the batter then roll it.</li>
                <li>boil the water in medium heat.</li>
                <li>then boil the batter.</li>
                <li>after 10 minute, flip the batter.</li>
                <li>
                  let the batter cook for another 10 minute or until when the
                  batter start growing in size.
                </li>
                <li>lift the dough then drain it.</li>
              </ol>
            </p>
          </div>

          <a id="PempekKulit" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={kulitPosition}>
              <h1>3. Pempek Kulit.</h1>
              <h5>Credit: Ulfa Khairunnisa Santoso</h5>
              <button onClick={playKulit} className="recipeButton">
                Play the Video
              </button>
            </div>
            <br />
            <p className="bahan">Pempek ingredient:</p>

            <p>
              <ul>
                <li>1 kg of ground mackerel fish's skin</li>
                <li>35 gr of fine salt</li>
                <li>20 gr of food flavoring</li>
                <li>5 gr of baking soda</li>
                <li>15 gr of pepper</li>
                <li>200 gr of santan kara</li>
                <li>4 eggs</li>
                <li>100 gr of chopped red onion</li>
                <li>100 gr of chopped spring onion</li>
                <li>100 gr of wheat flour</li>
                <li>700 gr of tapioka flour</li>
                <li>cooking oil</li>
              </ul>
              <br />
            </p>
            <p className="bahan">Steps:</p>

            <p>
              <ol>
                <li>
                  mix the salt, food flavoring, baking soda, and pepper into the
                  santan then mix until dissolved.
                </li>
                <li>
                  pour the santan and ground mackerel fish's skin into a basin
                  then mix well.
                </li>
                <li>
                  crack the egg open and add it into the batter then stir until
                  the batter is evenly mix.
                </li>
                <li>
                  add the red onion and spring onion to the batter then stir
                  until the batter is evenly mixed.
                </li>
                <li>
                  add the wheat flour to the batter then stir until evenly mixed
                </li>
                <li>
                  add 600 gr of tapioka flour to the batter then stir until
                  evenly mix. while stirring, make sure to stir and mix from the
                  edge first slowly while also doing a spinning motion so the
                  batter doesn't get hardened.
                </li>
                <li>heat up the cooking oil in medium heat.</li>
                <li>
                  sprinkle some tapioka flour to your hand then take a fist of
                  the batter.
                </li>
                <li>
                  sprinkle some more of the tapioka flour to the batter on hand
                  then shape it to a flat-round shape.
                </li>
                <li>fry it till it became golden brown</li>
                <li>lift the pempek then drain it from the oil.</li>
              </ol>
            </p>
          </div>

          <a id="PempekTelur" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={telurPosition}>
              <h1>4. Pempek Telur.</h1>
              <h5>Credit: ria zi</h5>
              <button onClick={playTelur} className="recipeButton">
                Play the Video
              </button>
            </div>
            <br />
            <p className="bahan">Pempek ingredient:</p>
            <p>
              <ul>
                <li>500 gr of ground fish(can be mackerel or cork fish)</li>
                <li>400 gr of tapioka flour</li>
                <li>400 ml of water</li>
                <li>2 & 1/2 tsp of salt</li>
                <li>1 tsp of sugar</li>
                <li>1 tsp of food flavoring</li>
                <li>cooking oil</li>
              </ul>
              <br />
              Filling ingredient: <br />
              <ul>
                <li>4 eggs</li>
                <li>1/4 tsp salt</li>
              </ul>
              <br />
            </p>
            <p className="bahan">Steps:</p>
            <p>
              <ol>
                <li>
                  for the filling, crack open the eggs and mix them well with
                  the salt.
                </li>
                <li>put the filling into a ketchup bottle.</li>
                <li>
                  for the pempek, add water, ground fish, salt, sugar, and food
                  flavoring then mix evenly until the batter become soft and
                  thick.
                </li>
                <li>add tapioka flour little by little while also mixing.</li>
                <li>repeat until the batter become flabby.</li>
                <li>
                  prepare a cooking pot with water and cooking oil. the cooking
                  oil is to make sure the pempek doesn't stick so don't put too
                  much.
                </li>
                <li>
                  sprinkle some of the flour on to your hand, then take a fist
                  of the batter.
                </li>
                <li>
                  shape the batter into a ball then press the middle of the
                  batter with the thumb and shape it further into a mini cup.
                </li>
                <li>
                  add the filling into the hole on the batte, then pinch the
                  edge to seal it tightly.
                </li>
                <li>and lastly, boil the pempek in the pot.</li>
                <li>
                  lift and drain the pempek when they start floating and
                  flexxing.
                </li>
              </ol>
            </p>
          </div>

          <a id="PempekKapalSelam" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={kapalSelamPosition}>
              <h1>5. Pempek Kapal Selam.</h1>
              <h5>Credit: Yongki Gunawan</h5>
              <button onClick={playKapalSelam} className="recipeButton">
                Play the Video
              </button>
            </div>
            <br />
            <p className="bahan">Pempek ingredient:</p>
            <p>
              <ul>
                <li>1,2 kg of ground mackerel fish</li>
                <li>30 gr of sugar</li>
                <li>15 gr of MonoSodiumGlutamate(MSG in short)</li>
                <li>24 gr of salt</li>
                <li>600 gr of water</li>
                <li>1,2 kg of tapioka flour</li>
                <li>1 duck egg</li>
                <li>2 sheet of salam leaves</li>
              </ul>
              <br />
              Cuko sauce ingredient:
              <br />
              <ul>
                <li>100 gr of asem jawa</li>
                <li>1,2 kg of mineral water</li>
                <li>50 gr of tauco kuning (the salty one)</li>
                <li>50 gr of garlic</li>
                <li>100 gr of green cayenne pepper</li>
                <li>35 gr of salt</li>
                <li>250 gr of palm sugar</li>
                <li>350 gr of sweet soy sauce</li>
                <li>2 gr of vinegar</li>
                <li>2 sheet of salam leaves</li>
              </ul>
              <br />
            </p>
            <p className="bahan">Steps:</p>
            <p>
              <ol>
                <li>
                  for the pempek, add the ground mackerel, sugar, and MSG into
                  the mixer then turn the mixer power to low.
                </li>
                <li>
                  after the batter become soft, add water litlle by litte.
                </li>
                <li>
                  when the batter become soft, move the batter to another basin
                  as you will need to start mixing it by hand.
                </li>
                <li>add salt then mix evenly.</li>
                <li>add tapioka flour little by little while also mix them.</li>
                <li>
                  after the batter is evenly mixed and can be lifted then let
                  the batter rest for 15-20 minute.
                </li>
                <li>
                  for the filling, crack open the duck egg and get the yolk.
                </li>
                <li>
                  take 150 gr of the batte and shape it into a ball then press
                  the middle of the batter till it became a pocket where the egg
                  yolk can be put into.
                </li>
                <li>
                  put the egg yolk into the pocket of the batter then pinch the
                  edge to seal it tightly.
                </li>
                <li>take a fist of another batter, then roll it.</li>
                <li>
                  boil the water with 2 sheet of salam leaves, when it boils
                  start putting the pempek in.
                </li>
                <li>
                  while waiting for the pempek to cook, now is to prepare the
                  cuko sauce. add 500 gr of water and asem jawa into a clean
                  bowl.
                </li>
                <li>
                  press the asem jawa with your finger then filter the water.
                </li>
                <li>
                  add water from the bowl, tauco kuning, garlic, salt, palm
                  sugar, and green cayenne pepper into the blender then blend
                  them until the ingredients are evenly mixed.
                </li>
                <li>
                  add sweet soy suce and 700 gr of water to the blender then mix
                  them.
                </li>
                <li>
                  boil the mixture with 2 sheet of salam leave and add the
                  vinegar, stop when the sauce start boiling.
                </li>
                <li>
                  back to the pempek, drain the pempek then fry the pempek in
                  cooking oil for a little while.
                </li>
                <li>
                  the pempek is ready to be served on a plate with the sauce,
                  noodle, and chopped cucumber.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
