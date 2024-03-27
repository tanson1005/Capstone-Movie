import React from "react";
import "../Ads/Ads.scss";
import SliderAds from "../SliderAds/SliderAds";
import listAdventiseImages from "../../Data/advertiseData";

const customSlick = {
  speed: 500,
  dots: false,
  arrows: false,
};
function Ads() {
  return (
    <section className="ads" id="ungdung" style={{ width: "100%" }}>
      <div className="grid grid-cols-10 gap-4 text-white">
        <div className="col-span-4 col-start-3 text-left ">
          <p className="text-2xl font-bold" style={{ lineHeight: "1rem" }}>
            Ứng dụng tiện lợi dành cho
          </p>
          <p className="text-2xl font-bold">người yêu điện ảnh</p>
          <br />
          <p className="text-lg font-normal	">
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm <br />
            rạp và đổi quà hấp dẫn.
          </p>
          <button
            className="btnDownload"
            style={{
              color: "#fff",
              border: "1px solid #fb4226",
              borderRadius: "4px",
              background: "#fb4226",
              padding: "10px 20px",
              fontWeight: "700px",
            }}
          >
            App miễn phí - Tải về ngay!
          </button>
          <br />
          <p className="text-base	mt-2">
            TS có hai phiên bản <a href="#!">iOS</a> &amp;
            <a href="#!"> Android</a>
          </p>
        </div>
        <div className="col-span-2">
          {
            <SliderAds customSlick={customSlick}>
              {listAdventiseImages.map((img, index) => (
                <div key={index}>
                  <img className="img-fluid" src={img} alt="app-tix" />
                </div>
              ))}
            </SliderAds>
          }
        </div>
      </div>
    </section>
  );
}
export default Ads;
