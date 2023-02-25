
const Favorites = (props) => {
    return (
        <div
        id="default_Favorites"
        className={"m-3 bg-white rounded-2xl w-1/4 "} // (props.filterView ? "w-1/4" : "w-1/2")}
      >
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold">Favorites</h1>
        </div>
      </div>
    )
}

export default Favorites;