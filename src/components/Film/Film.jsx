import React from "react";
import { useNavigate } from "react-router-dom";

export default function Film(props) {
  const navigate = useNavigate();
  const { phim } = props;

  return (
    <div className="px-2 overflow-hidden film">
      <div className="relative">
        <img
          src={phim.hinhAnh}
          alt={phim.tenPhim}
          style={{
            height: "310px",
            width: "100%",
            borderRadius: "6px",
          }}
        />
        <div
          onClick={() => {
            navigate(`/detail/${phim.maPhim}`);
          }}
          className="gradient"
        ></div>
      </div>

      <h1 className="film-title py-3 text-base">
        <span className="text-white bg-yellow-400 px-1 py-0.5 mr-2 rounded-md">
          C18
        </span>
        {phim.tenPhim}
      </h1>

      <button
        className="py-1 btn-booking bg-yellow-500 font-bold text-white text-xl rounded-md"
        onClick={() => {
          navigate(`/detail/${phim.maPhim}`);
        }}
      >
        MUA VÉ
      </button>
    </div>
  );
}
