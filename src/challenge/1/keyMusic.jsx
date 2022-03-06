import React, { useEffect } from "react";
import A from "./Assets/clap.wav";
import S from "./Assets/closedhat.wav";
import D from "./Assets/crash.wav";
import F from "./Assets/kick.wav";
import G from "./Assets/openhat.wav";
import H from "./Assets/ride.wav";
import J from "./Assets/rimshot.wav";
import K from "./Assets/snare.wav";
import L from "./Assets/tom.wav";

function playsound() {
  window.addEventListener("keydown", (event) => {
    const audio = document.querySelector(
      `audio[data-key="${event.key.toLocaleUpperCase()}"]`
    );
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0; // rewind to start;
    audio.play();
  });

  // window.addEventListener("select", (event) => {
  //   console.log(event);
  //   const audio = document.querySelector(
  //     `audio[data-key="${event.key.toLocaleUpperCase()}"]`
  //   );
  //   const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  //   if (!audio) return;
  //   key.classList.add("playing");
  //   audio.currentTime = 0; // rewind to start;
  //   audio.play();
  // });
}

const KeysMusic = () => {
  useEffect(() => {
    playsound();

    const keys = document.querySelectorAll(`div[data-key]`);
    keys.forEach((k) => {
      k.addEventListener("transitionend", (e) => {
        if (e.propertyName !== "transform") return; //skip it if it's not a trasnform;
        k.classList.remove("playing");
      });
    });
  });

  return (
    <div>
      <input placeholder="Text"></input>
      <div className="keys">
        <div data-key="65" className="key">
          <kdb>A</kdb>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kdb>S</kdb>
          <span className="sound">closedhat</span>
        </div>
        <div data-key="68" className="key">
          <kdb>D</kdb>
          <span className="sound">crash</span>
        </div>
        <div data-key="70" className="key">
          <kdb>F</kdb>
          <span className="sound">kick</span>
        </div>
        <div data-key="71" className="key">
          <kdb>G</kdb>
          <span className="sound">openhat</span>
        </div>
        <div data-key="72" className="key">
          <kdb>H</kdb>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kdb>J</kdb>
          <span className="sound">rimshot</span>
        </div>
        <div data-key="75" className="key">
          <kdb>K</kdb>
          <span className="sound">snare</span>
        </div>
        <div data-key="76" className="key">
          <kdb>L</kdb>
          <span className="sound">tom</span>
        </div>
      </div>
      <audio data-key="A" src={A}></audio>
      <audio data-key="S" src={S}></audio>
      <audio data-key="D" src={D}></audio>
      <audio data-key="F" src={F}></audio>
      <audio data-key="G" src={G}></audio>
      <audio data-key="H" src={H}></audio>
      <audio data-key="J" src={J}></audio>
      <audio data-key="K" src={K}></audio>
      <audio data-key="L" src={L}></audio>
    </div>
  );
};

export default KeysMusic;
