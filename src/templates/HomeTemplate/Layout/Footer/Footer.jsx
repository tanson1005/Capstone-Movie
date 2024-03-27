import { AppleOutlined, FacebookOutlined } from "@ant-design/icons";
import _ from "lodash";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Ads from "../../../../components/Ads"

export default function Footer() {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  return (
    <Fragment>
      <Ads />
      <footer className="py-4 bg-coolGray-100 text-coolGray-900 bg-gray-800">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="mt-2">
              <NavLink to="/">
                <img
                  src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                  alt="cyberlearn.vn"
                />
              </NavLink>
            </div>

            <div className="flex">
              {arrHeThongRap.map((htr, index) => {
                return (
                  <div key={index}>
                    <img
                      alt=""
                      className="m-1"
                      src={htr.logo}
                      style={{ width: 60 }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="text-white pt-4">
              <div className="flex text-white">
                <div className="">
                  <AppleOutlined className="text-3xl" />
                </div>
                <div>
                  <FacebookOutlined className="ml-4 text-3xl" />
                </div>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
      </footer>
    </Fragment>
  );
}
