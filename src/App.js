import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/d73a85cb6715d63da296be1c1f1879a2/5f50e9d0/video/tos/useast2a/tos-useast2a-pve-0068/5e8f4dada8664b288b76f7e5b56c772a/?a=1233&br=6740&bt=3370&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090307040301019018513735005783&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anE8d3I6bWhwdzMzOzczM0ApZzk4ODk0aDs3NzQ7OGhmNGcxZDRnby9eazRfLS0xMTZzc18uYzRjMGM2MTRhMGItLWA6Yw%3D%3D&vl=&vr="
          channel="DogGang"
          description="vwowww"
          song="we dont talk anymore"
          likes={153}
          messages={98}
          shares={37}
        />
        <Video
          url="https://v16m.tiktokcdn.com/ee19872b8848659e3620513786de50ea/5f50e8e5/video/tos/useast2a/tos-useast2a-ve-0068c001/f4871d1db0624d66a6de4fef8f79d9db/?a=1233&br=1778&bt=889&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090307001001018907107050003358&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajxwaDozanA7dTMzZDczM0ApNjVlO2dpNmQ4Nzs4aTQ4ZGdpYXFoNjVhX2NfLS1jMTZzc2AvNTAuYF40MWNhM141NV86Yw%3D%3D&vl=&vr="
          channel="shoegang"
          description="get the hella juna"
          song="we dont talk anymore"
          likes={123}
          messages={65}
          shares={76}
        />
        <Video
          url="https://v77.tiktokcdn.com/52e6e348be78dc933454ee2f33bb748e/5f50e9da/video/tos/useast2a/tos-useast2a-ve-0068c004/17b18878c1234274b74d920767b74835/?a=1233&br=1908&bt=954&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009030704160101901851472100070B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2hpZHY1c3BpdjMzZjczM0ApZGY1M2Q6N2Q1NzU4NTRpN2dfMWEuMGRxcW1fLS0xMTZzcy9jMi1iLWNiLmBjMi9fNTM6Yw%3D%3D&vl=&vr="
          channel="podgang"
          description="get the hella juna"
          song="we dont talk anymore"
          likes={545}
          messages={198}
          shares={11}
        />
      </div>
    </div>
  );
}

export default App;
