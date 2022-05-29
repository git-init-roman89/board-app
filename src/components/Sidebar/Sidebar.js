import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <section className="mainpage-sidebar">
      <div className="sidebar-list-container">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <i class="fa-solid fa-table-columns"></i>
            <span className="sidebar-list-item-text">Дошки</span>
          </li>
          <li className="sidebar-list-item">
            <i class="fa-solid fa-border-top-left"></i>
            <span className="sidebar-list-item-text">Шаблони</span>
          </li>
          <li className="sidebar-list-item">
            <i class="fa-solid fa-chart-line"></i>
            <span className="sidebar-list-item-text">Домашня сторінка</span>
          </li>
        </ul>
        <span className="sidebar-list-subitem">
          <span>Робочі області</span>
          <i class="fa-solid fa-plus"></i>
        </span>
      </div>

      <div class="boardlist-container">
        <label htmlFor="checkbox" className="boardlist-label">
          <div>
            <span className="boardlist-label-logo">P</span>
            <span className="boardlist-label-text">Робоча область Trella</span>
          </div>
          <i class="fa-solid fa-angle-up"></i>
        </label>
        <input id="checkbox" type="checkbox" />
        <ul className="sidebar-boardlist">
          <li className="boardlist-item-active">
            <a className="sidebar-boardlist-link" href="#">
              <i class="fa-solid fa-table-columns boardlist-icon-active"></i>
              <span className="sidebar-boardlist-item-text boardlist-item-active">
                Дошки
              </span>
            </a>
          </li>
          <li className="sidebar-boardlist-item">
            <a className="sidebar-boardlist-link" href="#">
              <i class="fa-regular fa-heart"></i>
              <span className="sidebar-boardlist-item-text">Найважливіше</span>
            </a>
          </li>
          <li className="sidebar-boardlist-item">
            <a className="sidebar-boardlist-link" href="#">
              <i class="fa-solid fa-table-cells-large"></i>
              <span className="sidebar-boardlist-item-text">Види</span>
            </a>
          </li>
          <li className="sidebar-boardlist-item">
            <a className="sidebar-boardlist-link" href="#">
              <i class="fa-solid fa-user-group"></i>
              <span className="sidebar-boardlist-item-text">Учасники</span>
            </a>
          </li>
          <li className="sidebar-boardlist-item">
            <a className="sidebar-boardlist-link" href="#">
              <i class="fa-solid fa-gear"></i>
              <span className="sidebar-boardlist-item-text">Налаштування</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
