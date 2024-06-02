import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <div className="gnb">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">상품 목록</Link>
        </li>
        <li>
          <Link to="/cart">카트</Link>
        </li>
      </ul>
    </div>
  );
};
export default Gnb;
