export default () => {
  let showList = false;
  let data = {
    key: -1,
    name: "یک مورد را انتخاب کنید",
  };
  let list = [
    {
      key: 1,
      name: "کامارو",
    },
    {
      key: 2,
      name: "پاترول",
    },
  ];

  const handleClick = () => {
    showList = true;
  };
  const selectItem = (item) => {
    showList = false;
    data = item;
  };

  return (
    <>
      <div className="drop-down">
        <div
          className={`input size text color ${showList && "active"}`}
          onClick={() => handleClick()}
        >
          {data.name}
        </div>
        {showList && (
          <div className="list size color">
            <div className="item size text" onClick={() => selectItem(list[0])}>
              {list[0].name}
            </div>
            <div className="item size text" onClick={() => selectItem(list[1])}>
              {list[1].name}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
