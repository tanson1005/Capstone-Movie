import { useLocation } from "react-router-dom";

export function Search() {
    const { search } = useLocation();
    // ✅ Luôn luôn lấy thông tin URL thông qua react-router-dom
    // ❌ Không được lấy thông qua đối tượng location của browser
    const queryString = new URLSearchParams(search); // ✅
    // const queryString = new URLSearchParams(location.search); // ❌ chuyển đổi trang sẽ không tracking được

    return (
        <>
            Search:
            {queryString.get("q")}
        </>
    );
}
