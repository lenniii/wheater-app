import React from "react";
const HeaderBar: React.FC<IProps> = ({ handleChange, search, onSubmit }) => {
  return (
    <nav className="navbar navbar-light dark-primary-color align-items-center">
      <span className=" text-primary-color text-center">React-weather-app</span>
      <form className="form-inline text-center" onSubmit={e => onSubmit(e)}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search your city or CAP..."
          value={search}
          onChange={e => handleChange(e)}
        />
        <button type="submit" className="btn btn-primary default-primary-color">
          Search
        </button>
      </form>
    </nav>
  );
};

interface IProps {
  handleChange: Function;
  search: string;
  onSubmit: Function;
}
export default HeaderBar;
