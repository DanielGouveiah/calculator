const Template = (props) => {
  return (
    <div className="calculator">
      <div className="display">
        <span className="feed">{props.feed}</span>
        <span>{props.num}</span>
      </div>
      <div>
        <button onClick={() => props.handleDelete()} className="del">
          AC
        </button>
        <button onClick={() => props.changeOp()} className="symbol">
          +/-
        </button>
        <button onClick={() => props.porcentage()} className="symbol">
          %
        </button>
        <button onClick={() => props.division()} className="symbol">
          /
        </button>
        <button onClick={(e) => props.handleClick(e)} value={7}>
          7
        </button>
        <button onClick={(e) => props.handleClick(e)} value={8}>
          8
        </button>
        <button onClick={(e) => props.handleClick(e)} value={9}>
          9
        </button>
        <button onClick={() => props.times()} className="symbol">
          *
        </button>
        <button onClick={(e) => props.handleClick(e)} value={4}>
          4
        </button>
        <button onClick={(e) => props.handleClick(e)} value={5}>
          5
        </button>
        <button onClick={(e) => props.handleClick(e)} value={6}>
          6
        </button>
        <button onClick={() => props.sub()} className="symbol">
          -
        </button>
        <button onClick={(e) => props.handleClick(e)} value={1}>
          1
        </button>
        <button onClick={(e) => props.handleClick(e)} value={2}>
          2
        </button>
        <button onClick={(e) => props.handleClick(e)} value={3}>
          3
        </button>
        <button onClick={props.plus} className="symbol">
          +
        </button>
        <button onClick={(e) => props.handleClick(e)} className="zero" value={0}>
          0
        </button>
        <button onClick={(e) => props.handleClick(e)} value={"."}>
          .
        </button>
        <button onClick={() => props.result()} className="symbol">
          =
        </button>
      </div>
    </div>
  );
};

export default Template;
