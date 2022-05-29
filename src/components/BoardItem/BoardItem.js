import "./BoardItem.scss"

const BoardItem = (props) => {

    const boardTitle = props.title
    return (
        <>
        <div className="mainboard-boards-card">
            <span className="board-card-title">{boardTitle}</span>
            <span className="board-card-icon"><i class="fa-regular fa-star"></i></span>
        </div>
        </>
    );
}

export default BoardItem;