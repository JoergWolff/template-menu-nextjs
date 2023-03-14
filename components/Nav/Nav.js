import { useState } from "react";

export default function Nav({ navelements }) {
  const [toggle, setToggle] = useState(false);

  function toggleBurger() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav>
        <div className="noburger">
          {navelements.map((element) => (
            <li key={element.id}>
              <a className="nav-button" href={element.link}>
                {element.name}
              </a>
            </li>
          ))}
        </div>
        <div className="burger">
          <input type="checkbox" id="hamburg" onClick={toggleBurger} />
          <label htmlFor="hamburg" className="hamburg">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </label>

          {toggle ? (
            <div className="noburger-layer">
              {navelements.map((element) => (
                <li key={element.id}>
                  <a className="nav-button" href={element.link}>
                    {element.name}
                  </a>
                </li>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
