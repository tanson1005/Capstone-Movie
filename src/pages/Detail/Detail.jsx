import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.css";
import { Tabs, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
const { TabPane } = Tabs;

export default function Detail(props) {
  const [show, setShow] = useState(false);

  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhim(id));
  }, [dispatch, props.match.params]);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff"
        blur={10}
        borderRadius={0}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-3">
            <div className="grid grid-cols-3 ml-6 ">
              <div className="relative film">
                <img
                  className=" rounded-2xl "
                  src={filmDetail.hinhAnh}
                  style={{ width: "100%", height: 400 }}
                  alt="123"
                />

                <div onClick={() => {}} className="gradient"></div>
                <button
                  onClick={() => setShow(true)}
                  className="play-btn-detail"
                >
                  <img src="/images/play-video.png" alt="play" />
                </button>
              </div>
              <div className="col-span-2 ml-5" style={{ marginTop: "10%" }}>
                <p className="text-3xl ">{filmDetail.tenPhim}</p>
                <p className="text-sm">
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-4 ml-18 mt-8">
            <div className={`c100 p${filmDetail.danhGia * 10} big `}>
              <span className="text-white">{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <div style={{ marginLeft: "10%", marginTop: "10%" }}>
                <Rate
                  allowHalf
                  value={filmDetail.danhGia / 2}
                  style={{ fontSize: 30 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 ml-72 w-2/3 container rounded-2xl bg-white px-5 py-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 200 }}>
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row items-center justify-center">
                            <img
                              alt=""
                              src={htr.logo}
                              className="rounded-full w-full"
                              style={{ width: 50 }}
                            />
                            <div className="text-center ml-2">
                              {htr.tenHeThongRap}
                            </div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="mt-5" key={index}>
                              <div className="flex flex-row">
                                <img
                                  alt=""
                                  style={{ width: 60, height: 60 }}
                                  src={cumRap.hinhAnh}
                                />
                                <div className="ml-2">
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: "bold",
                                      lineHeight: 1,
                                    }}
                                  >
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p
                                    className="text-gray-400"
                                    style={{ marginTop: 0 }}
                                  >
                                    {cumRap.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="thong-tin-lich-chieu">
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                        className="mua-ve mt-4"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Mô tả" key="2" style={{ minHeight: 200 }}>
              {filmDetail.moTa}
            </TabPane>
          </Tabs>
        </div>
        <CSSTransition
          in={show}
          unmountOnExit
          timeout={{ enter: 0, exit: 300 }}
        >
          <div className="modal" onClick={() => setShow(false)}>
            
            <iframe
              style={{ position: "relative" }}
              title="title4"
              allowfullscreen="true"
              width="996px"
              height="500px"
              src={filmDetail.trailer}
              frameborder="0"
            ></iframe>
          </div>
        </CSSTransition>
      </CustomCard>
    </div>
  );
}
